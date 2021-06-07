#!/usr/bin/env node
"use strict";
var chalk = require('chalk');
var clear = require('clear');
var figlet = require('figlet');
var path = require('path');
var program = require('commander');
clear();
console.log(chalk.hex('#ffa500').bold(figlet.textSync('commandeer-cli', { horizontalLayout: 'full' })));
program
    .version('0.0.3')
    .description('Welcome to the Commandeer CLI.')
    .option('localstack -V, localstack --version', 'View LocalStack Version')
    .parse(process.argv);
var options = program.opts();
console.log(options);
console.log('you ordered a pizza with:');
if (options.peppers)
    console.log('  - peppers');
if (options.pineapple)
    console.log('  - pineapple');
if (options.bbq)
    console.log('  - bbq');
var cheese = undefined === options.cheese
    ? 'marble'
    : options.cheese || 'no';
console.log('  - %s cheese', cheese);
if (!process.argv.slice(2).length) {
    program.outputHelp();
}
