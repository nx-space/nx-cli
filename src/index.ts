#!/usr/bin/env node
import { createCommand } from 'commander';
import { commands } from './commands';
import { helper } from "./helper";

const program = createCommand();
program.version(require('../package.json').version);
helper();
commands();
program.parse(process.argv);
