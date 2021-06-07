#!/usr/bin/env node

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const path = require('path');
const program = require('commander');

clear();

console.log(
  chalk.hex('#ffa500').bold(
    figlet.textSync('commandeer-cli', { horizontalLayout: 'full' })
  )
);

program
  .version('0.0.3')
  .description('Welcome to the Commandeer CLI.')
  .option('localstack -V, localstack --version', 'View LocalStack Version')
  .parse(process.argv);

const options = program.opts();

console.log(options);
console.log('you ordered a pizza with:');
if (options.peppers) console.log('  - peppers');
if (options.pineapple) console.log('  - pineapple');
if (options.bbq) console.log('  - bbq');

const cheese: string = undefined === options.cheese
    ? 'marble'
    : options.cheese || 'no';

console.log('  - %s cheese', cheese);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}
