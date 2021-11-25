import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { processTemplates } from './template';
test('process Js Templates', async () => {
  expect(
    await catchError(() =>
      processTemplates(path.join(__dirname, '../plugin'), {
        projectName: 'monaTest',
        cssExt: 'less',
        typescript: false
      })
    )
  ).toBe(false);
}, 100000);
// test('template build', async () => {
//   execSync(`cd ${path.join(__dirname, '../plugin')} && npm run build`, { stdio: 'ignore' });
// }, 100000);

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
