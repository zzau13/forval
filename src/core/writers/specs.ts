import chalk from 'chalk';
import { log } from 'console';
import execa = require('execa');
import { appendFile, outputFile, pathExists, readFile } from 'fs-extra';
import uniq from 'lodash.uniq';
import { InfoObject } from 'openapi3-ts';
import { join } from 'upath';
import { AwaitedReturn, NormalizedOptions, OutputMode } from '../../types';
import { jsDoc } from '../../utils/doc';
import { getFileInfo } from '../../utils/file';
import { createSuccessMessage } from '../../utils/messages/logs';
import { getSpecName, relativeSafe } from '../../utils/path';
import { writeSchemas } from './schemas';
import { writeSingleMode } from './singleMode';
import { writeSplitMode } from './splitMode';
import { writeSplitTagsMode } from './splitTagsMode';
import { writeTagsMode } from './tagsMode';
import { importSpecs } from '../importers/specs';

const getHeader = (
  option: false | ((info: InfoObject) => string | string[]),
  info: InfoObject,
): string => {
  if (!option) {
    return '';
  }

  const header = option(info);

  return Array.isArray(header) ? jsDoc({ description: header }) : header;
};

export const writeSpecs = async (
  { operations, schemas, target, info }: AwaitedReturn<typeof importSpecs>,
  workspace: string,
  options: NormalizedOptions,
  projectName?: string,
) => {
  const { output } = options;
  const projectTitle = projectName || info.title;

  const specsName = Object.keys(schemas).reduce((acc, specKey) => {
    const basePath = getSpecName(specKey, target);
    const name = basePath.slice(1).split('/').join('-');

    acc[specKey] = name;

    return acc;
  }, {} as Record<keyof typeof schemas, string>);

  const header = getHeader(output.override.header, info);

  if (output.schemas) {
    const rootSchemaPath = output.schemas;

    await Promise.all(
      Object.entries(schemas).map(([specKey, schemas]) => {
        const isRootKey = target === specKey;
        const schemaPath = !isRootKey
          ? join(rootSchemaPath, specsName[specKey])
          : rootSchemaPath;

        return writeSchemas({
          schemaPath,
          // TODO
          schemas: schemas as any,
          target,
          specsName,
          isRootKey,
          header,
        });
      }),
    );
  }

  let implementationPaths: string[] = [];

  if (output.target) {
    switch (output.mode) {
      case OutputMode.SPLIT:
        implementationPaths = await writeSplitMode({
          workspace,
          operations,
          output,
          info,
          schemas,
          specsName,
          header,
        });
        break;
      case OutputMode.TAGS:
        implementationPaths = await writeTagsMode({
          workspace,
          operations,
          output,
          info,
          schemas,
          specsName,
          header,
        });
        break;
      case OutputMode.TAGS_SPLIT:
        implementationPaths = await writeSplitTagsMode({
          workspace,
          operations,
          output,
          info,
          schemas,
          specsName,
          header,
        });
        break;
      case OutputMode.SINGLE:
      default:
        implementationPaths = await writeSingleMode({
          workspace,
          operations,
          output,
          info,
          schemas,
          specsName,
          header,
        });
        break;
    }
  }

  if (output.workspace) {
    const workspacePath = output.workspace;
    const imports = implementationPaths
      .filter((path) => !path.endsWith('.msw.ts'))
      .map((path) =>
        relativeSafe(workspacePath, getFileInfo(path).pathWithoutExtension),
      );

    if (output.schemas) {
      imports.push(
        relativeSafe(workspacePath, getFileInfo(output.schemas).dirname),
      );
    }

    const indexFile = join(workspacePath, '/index.ts');

    if (await pathExists(indexFile)) {
      const data = await readFile(indexFile, 'utf8');
      const importsNotDeclared = imports.filter((imp) => !data.includes(imp));
      await appendFile(
        indexFile,
        uniq(importsNotDeclared)
          .map((imp) => `export * from '${imp}';`)
          .join('\n') + '\n',
      );
    } else {
      await outputFile(
        indexFile,
        uniq(imports)
          .map((imp) => `export * from '${imp}';`)
          .join('\n') + '\n',
      );
    }

    implementationPaths = [indexFile, ...implementationPaths];
  }

  if (output.prettier) {
    try {
      await execa('prettier', [
        '--write',
        ...(output.schemas ? [getFileInfo(output.schemas).dirname] : []),
        ...implementationPaths,
      ]);
    } catch (e) {
      log(
        chalk.yellow(
          `⚠️  ${projectTitle ? `${projectTitle} - ` : ''}Prettier not found`,
        ),
      );
    }
  }

  createSuccessMessage(projectTitle);
};
