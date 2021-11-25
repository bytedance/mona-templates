import path from 'path';
import { execSync } from 'child_process';
import { processTemplates } from './template';
import fse from 'fs-extra';
const tmpDir = path.join(__dirname, `../${new Date().valueOf()}`);
test('process Js Templates', async () => {
  await fse.copy(path.join(__dirname, '../plugin'), tmpDir);
  expect(
    await catchError(() =>
      processTemplates(tmpDir, {
        projectName: 'monaTest',
        cssExt: 'less',
        typescript: true
      })
    )
  ).toBe(false);
}, 100000);

test('template build', async () => {
  try {
    expect(
      await catchError(() =>
        execSync(`cd ${tmpDir}  && npm install --registry=https://registry.npmjs.org && npm run build`, {
          encoding: 'utf8'
        })
      )
    ).toBe(false);
  } finally {
    await fse.remove(tmpDir);
  }
}, 100000);

const catchError = async (fn: any) => {
  let hasError = false;
  try {
    await fn();
    hasError = false;
  } catch (error) {
    console.log(error);
    hasError = true;
  }
  return hasError;
};
