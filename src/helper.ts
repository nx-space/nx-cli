/*
 * @FilePath: /nx-cli/src/core/helper.ts
 * @author: Wibus
 * @Date: 2022-06-03 21:39:19
 * @LastEditors: Wibus
 * @LastEditTime: 2022-06-03 21:43:59
 * Coding With IU
 */
import { createCommand } from 'commander';
const program = createCommand();

export const helper = () => {
  program.option('-w --why', 'a coderwhy option');

  program.option('-s --src <src>', 'a source folder');
  program.option('-d --dest <dest>', 'a destination folder, 例如: -d src/pages, 错误/src/pages');
  program.option('-f --framework <framework>', 'your framework name');

  program.on('--help', () => {
    console.log("");
    console.log("usage");
    console.log("   coderwhy -v");
    console.log("   coderwhy -version");
  })
}