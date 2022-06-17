import chalk from 'chalk';
import { generateConfig, generateSpec } from './generate';
import { GlobalOptions, Options, OptionsExport } from './types';
import { isString } from './utils/is';
import { log } from './utils/messages/logs';
import { defineConfig, normalizeOptions } from './utils/options';
import { startWatcher } from './utils/watcher';

const generate = async (
  optionsExport?: string | OptionsExport,
  workspace = process.cwd(),
  options?: GlobalOptions,
) => {
  if (isString(optionsExport)) {
    return generateConfig(optionsExport, options);
  }

  const normalizedOptions = await normalizeOptions(
    optionsExport,
    workspace,
    options,
  );

  if (options?.watch) {
    startWatcher(
      options?.watch,
      async () => {
        try {
          await generateSpec(workspace, normalizedOptions);
        } catch (e) {
          log(
            chalk.red(
              `🛑  ${
                options?.projectName ? `${options?.projectName} - ` : ''
              }${e}`,
            ),
          );
        }
      },
      normalizedOptions.input.target as string,
    );
  } else {
    try {
      return await generateSpec(workspace, normalizedOptions);
    } catch (e) {
      log(
        chalk.red(
          `🛑  ${options?.projectName ? `${options?.projectName} - ` : ''}${e}`,
        ),
      );
    }
  }
};

export * from './constants';
export * from './types/generator';
export * from './core/generators/imports';
export * from './core/generators/options';
export * from './utils/tsconfig';
export * from './utils/string';
export * from './utils/case';
export { defineConfig };
export { Options };
export { generate };

export default generate;
