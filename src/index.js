const argv = require('minimist')(process.argv.slice(2));
const chalk = require('chalk');
const clear = require('clear');

const { isValidName } = require('./utils');

const NAME = argv._[0];

if (!NAME) {
    require('./menu')();
    process.exit(1);
}

if (!isValidName(NAME)) {
    console.log('');
    console.log(
        chalk.red.bold(
            '',
            '',
            chalk.cyan.bold('Markeroo -'),
            `The name ${NAME} is not valid.`
        )
    );
    console.log(
        chalk.gray.bold(
            '',
            '',
            'Project name can only contain alpha-numeric characters, dashes and underscores.\n'
        )
    );
    process.exit(1);
}

global.NAME = NAME;

(async function() {
    clear();
    console.log('');
    console.log(
        '',
        '',
        chalk.cyan.bold('Markeroo -'),
        chalk.yellow.bold(`Creating project ${global.NAME}\n`)
    );
    await require('./steps')();
    console.log(
        '\n',
        '',
        '',
        chalk.cyan.bold('Markeroo -'),
        chalk.green.bold('Successfully created project', global.NAME)
    );
    console.log(
        '',
        '',
        '',
        chalk.gray.bold('Project path:', require('path').resolve('.')),
        '\n'
    );
})();
