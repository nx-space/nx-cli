/*
 * @FilePath: /nx-cli/src/commands.ts
 * @author: Wibus
 * @Date: 2022-06-03 21:46:08
 * @LastEditors: Wibus
 * @LastEditTime: 2022-06-03 21:46:09
 * Coding With IU
 */
import { createCommand } from 'commander';
const program = createCommand();

export const commands = () => {
  program
    .command('create <project> [otherArgs...]')
    .description('clone a repository into a newly created directory')
}