/*
 * @FilePath: /nx-cli/src/utils/file.ts
 * @author: Wibus
 * @Date: 2022-06-03 21:49:35
 * @LastEditors: Wibus
 * @LastEditTime: 2022-06-03 21:49:36
 * Coding With IU
 */
import chalk from 'chalk';
import fs from 'fs';
import path from 'path';

const writeFile = (path, content) => {
  if (fs.existsSync(path)) {
    chalk.red("the file already exists~")
    return;
  }
  return fs.promises.writeFile(path, content);
}

const mkdirSync = (dirname) => {
  if (fs.existsSync(dirname)) {
    return true
  } else {
    // 不存在,判断父亲文件夹是否存在？
    if (mkdirSync(path.dirname(dirname))) {
      // 存在父亲文件，就直接新建该文件
      fs.mkdirSync(dirname)
      return true
    }
  }
}

module.exports = {
  writeFile,
  mkdirSync
}