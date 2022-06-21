import { appendFile, ensureFile, outputFile, readFile } from 'fs-extra';
import { join } from 'upath';
import { GeneratorSchema } from '../../types/generator';
import { camel } from '../../utils/case';
import { generateImports } from '../generators/imports';

const getSchema = ({
  schema: { imports, model },
  target,
  isRootKey,
  specsName,
  header,
}: {
  schema: GeneratorSchema;
  target: string;
  isRootKey: boolean;
  specsName: Record<string, string>;
  header: string;
}): string => {
  let file = header;
  file += generateImports({ imports, target, isRootKey, specsName });
  file += imports.length ? '\n\n' : '\n';
  file += model;
  return file;
};

const getPath = (path: string, name: string): string =>
  join(path, `/${name}.ts`);

export const writeModelInline = (acc: string, model: string): string =>
  acc + `${model}\n`;

export const writeModelsInline = (array: GeneratorSchema[]): string =>
  array.reduce((acc, { model }) => writeModelInline(acc, model), '');

export const writeSchema = async ({
  path,
  schema,
  target,
  isRootKey,
  specsName,
  header,
}: {
  path: string;
  schema: GeneratorSchema;
  target: string;
  isRootKey: boolean;
  specsName: Record<string, string>;
  header: string;
}) => {
  const name = camel(schema.name);
  try {
    await outputFile(
      getPath(path, name),
      getSchema({ schema, target, isRootKey, specsName, header }),
    );
    const indexPath = getPath(path, 'index');

    const data = await readFile(indexPath);

    const stringData = data.toString();
    if (
      !stringData.includes(`export * from './${name}'`) &&
      !stringData.includes(`export * from "./${name}"`)
    ) {
      await appendFile(getPath(path, 'index'), `export * from './${name}';\n`);
    }
  } catch (e) {
    throw `Oups... 🍻. An Error occurred while writing schema ${name} => ${e}`;
  }
};

export const writeSchemas = async ({
  schemaPath,
  schemas,
  target,
  isRootKey,
  specsName,
  header,
}: {
  schemaPath: string;
  schemas: GeneratorSchema[];
  target: string;
  isRootKey: boolean;
  specsName: Record<string, string>;
  header: string;
}) => {
  await ensureFile(join(schemaPath, '/index.ts'));
  await Promise.all(
    schemas.map((schema) =>
      writeSchema({
        path: schemaPath,
        schema,
        target,
        isRootKey,
        specsName,
        header,
      }),
    ),
  );
};
