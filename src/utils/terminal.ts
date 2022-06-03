/*
 * @FilePath: /nx-cli/src/utils/terminal.ts
 * @author: Wibus
 * @Date: 2022-06-03 21:48:26
 * @LastEditors: Wibus
 * @LastEditTime: 2022-06-03 21:48:26
 * Coding With IU
 */
const { spawn, exec } = require('child_process');


const spawnCommand = (...args) => {
  return new Promise<void>((resole, reject) => {
    const childProcess = spawn(...args);
    childProcess.stdout.pipe(process.stdout);
    childProcess.stderr.pipe(process.stderr);
    childProcess.on('close', () => {
      resole();
    })
  })
}

const execCommand = (...args) => {
  return new Promise<void>((resolve, reject) => {
    exec(...args, (err, stdout, stderr) => {
      if (err) {
        reject(err);
        return;
      }
      console.log(stdout.replace('\n', ''));
      // console.log(stderr);
      resolve();
    })
  })
}

module.exports = {
  spawn: spawnCommand,
  exec: execCommand
};