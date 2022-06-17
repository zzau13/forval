import chalk from 'chalk';
import { resolve } from 'upath';
import { RefComponentSuffix } from '../core/getters/ref';
import {
  ConfigExternal,
  GlobalOptions,
  Mutator,
  NormalizedMutator,
  NormalizedOperationOptions,
  NormalizedOptions,
  OperationOptions,
  OptionsExport,
  OutputClient,
  OutputMode,
  SwaggerParserOptions,
} from '../types';
import { githubResolver } from './github';
import { isBoolean, isFunction, isObject, isString } from './is';
import { mergeDeep } from './mergeDeep';
import { getFilesHeader } from './messages/inline';
import { createLogger } from './messages/logs';
import { loadPackageJson } from './packageJson';
import { loadTsconfig } from './tsconfig';
import { isUrl } from './url';

/**
 * Type helper to make it easier to use orval.config.ts
 * accepts a direct {@link ConfigExternal} object.
 */
export function defineConfig(options: ConfigExternal): ConfigExternal {
  return options;
}

export const normalizeOptions = async (
  optionsExport: OptionsExport,
  workspace = process.cwd(),
  globalOptions: GlobalOptions = {},
) => {
  const options = await (isFunction(optionsExport)
    ? optionsExport()
    : optionsExport);

  if (!options.input) {
    createLogger().error(chalk.red(`Config require an input`));
    process.exit(1);
  }

  if (!options.output) {
    createLogger().error(chalk.red(`Config require an output`));
    process.exit(1);
  }

  const inputOptions = isString(options.input)
    ? { target: options.input }
    : options.input;

  const outputOptions = isString(options.output)
    ? { target: options.output }
    : options.output;

  if (typeof outputOptions.override?.angular?.provideInRoot !== 'undefined') {
    console.warn('provideInRoot is deprecated, use provideIn instead');
  }

  const outputWorkspace = normalizePath(
    outputOptions.workspace || '',
    workspace,
  );

  const { clean, prettier, client, mode, mock, tslint } = globalOptions;

  const tsconfig = await loadTsconfig(
    outputOptions.tsconfig || globalOptions.tsconfig,
    workspace,
  );

  const packageJson = await loadPackageJson(
    outputOptions.packageJson || globalOptions.packageJson,
    workspace,
  );

  const normalizedOptions: NormalizedOptions = {
    input: {
      target: normalizePathOrUrl(inputOptions.target, workspace),
      validation: inputOptions.validation || false,
      override: {
        transformer: normalizePath(
          inputOptions.override?.transformer,
          workspace,
        ),
      },
      converterOptions: inputOptions.converterOptions ?? {},
      parserOptions: mergeDeep(
        parserDefaultOptions,
        inputOptions.parserOptions ?? {},
      ),
    },
    output: {
      target: normalizePath(outputOptions.target, outputWorkspace),
      schemas: normalizePath(outputOptions.schemas, outputWorkspace),
      workspace: outputOptions.workspace ? outputWorkspace : undefined,
      client: outputOptions.client ?? client ?? OutputClient.AXIOS_FUNCTIONS,
      mode: normalizeOutputMode(outputOptions.mode ?? mode),
      mock: outputOptions.mock ?? mock ?? false,
      clean: outputOptions.clean ?? clean ?? false,
      prettier: outputOptions.prettier ?? prettier ?? false,
      tslint: outputOptions.tslint ?? tslint ?? false,
      tsconfig,
      packageJson,
      override: {
        ...outputOptions.override,
        operations: normalizeOperationsAndTags(
          outputOptions.override?.operations ?? {},
          outputWorkspace,
        ),
        tags: normalizeOperationsAndTags(
          outputOptions.override?.tags ?? {},
          outputWorkspace,
        ),
        mutator: normalizeMutator(
          outputWorkspace,
          outputOptions.override?.mutator,
        ),
        formData:
          (!isBoolean(outputOptions.override?.formData)
            ? normalizeMutator(
                outputWorkspace,
                outputOptions.override?.formData,
              )
            : outputOptions.override?.formData) ?? true,
        formUrlEncoded:
          (!isBoolean(outputOptions.override?.formUrlEncoded)
            ? normalizeMutator(
                outputWorkspace,
                outputOptions.override?.formUrlEncoded,
              )
            : outputOptions.override?.formUrlEncoded) ?? true,
        header:
          outputOptions.override?.header === false
            ? false
            : outputOptions.override?.header &&
              isFunction(outputOptions.override?.header)
            ? outputOptions.override.header
            : getFilesHeader,
        requestOptions: outputOptions.override?.requestOptions ?? true,
        components: {
          schemas: {
            suffix: RefComponentSuffix.schemas,
            ...(outputOptions.override?.components?.schemas ?? {}),
          },
          responses: {
            suffix: RefComponentSuffix.responses,
            ...(outputOptions.override?.components?.responses ?? {}),
          },
          parameters: {
            suffix: RefComponentSuffix.parameters,
            ...(outputOptions.override?.components?.parameters ?? {}),
          },
          requestBodies: {
            suffix: RefComponentSuffix.requestBodies,
            ...(outputOptions.override?.components?.requestBodies ?? {}),
          },
        },
        query: {
          useQuery: true,
          ...(outputOptions.override?.query ?? {}),
        },
        angular: {
          provideIn:
            outputOptions.override?.angular?.provideIn ??
            outputOptions.override?.angular?.provideInRoot ??
            'root',
        },
        useDates: outputOptions.override?.useDates || false,
      },
    },
  };

  if (!normalizedOptions.input.target) {
    createLogger().error(chalk.red(`Config require an input target`));
    process.exit(1);
  }

  if (!normalizedOptions.output.target && !normalizedOptions.output.schemas) {
    createLogger().error(
      chalk.red(`Config require an output target or schemas`),
    );
    process.exit(1);
  }

  return normalizedOptions;
};

const parserDefaultOptions = {
  validate: true,
  resolve: { github: githubResolver },
} as SwaggerParserOptions;

const normalizeMutator = (
  workspace: string,
  mutator?: Mutator,
): NormalizedMutator | undefined => {
  if (isObject(mutator)) {
    if (!mutator.path) {
      createLogger().error(chalk.red(`Mutator need a path`));
      process.exit(1);
    }

    return {
      ...mutator,
      path: resolve(workspace, mutator.path),
      default: (mutator.default || !mutator.name) ?? false,
    };
  }

  if (isString(mutator)) {
    return {
      path: resolve(workspace, mutator),
      default: true,
    };
  }

  return mutator;
};

const normalizePathOrUrl = <T>(path: T, workspace: string) => {
  if (isString(path) && !isUrl(path)) {
    return normalizePath(path, workspace);
  }

  return path;
};

export const normalizePath = <T>(path: T, workspace: string) => {
  if (!isString(path)) {
    return path;
  }
  return resolve(workspace, path);
};

const normalizeOperationsAndTags = (
  operationsOrTags: {
    [key: string]: OperationOptions;
  },
  workspace: string,
): {
  [key: string]: NormalizedOperationOptions;
} => {
  return Object.fromEntries(
    Object.entries(operationsOrTags).map(
      ([
        key,
        {
          transformer,
          mutator,
          formData,
          formUrlEncoded,
          requestOptions,
          ...rest
        },
      ]) => {
        return [
          key,
          {
            ...rest,
            ...(transformer
              ? { transformer: normalizePath(transformer, workspace) }
              : {}),
            ...(mutator
              ? { mutator: normalizeMutator(workspace, mutator) }
              : {}),
            formData:
              (!isBoolean(formData)
                ? normalizeMutator(workspace, formData)
                : formData) ?? true,
            formUrlEncoded:
              (!isBoolean(formUrlEncoded)
                ? normalizeMutator(workspace, formUrlEncoded)
                : formUrlEncoded) ?? true,
            requestOptions: requestOptions ?? true,
          },
        ];
      },
    ),
  );
};

const normalizeOutputMode = (mode?: OutputMode): OutputMode => {
  if (!mode) {
    return OutputMode.SINGLE;
  }

  if (!Object.values(OutputMode).includes(mode)) {
    createLogger().warn(chalk.yellow(`Unknown the provided mode => ${mode}`));
    return OutputMode.SINGLE;
  }

  return mode;
};
