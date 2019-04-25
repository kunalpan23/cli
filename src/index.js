const argv = require('minimist')(process.argv.slice(2));
const chalk = require('chalk');
const clear = require('clear');

global.FOLDER = argv._[0];

if (!global.FOLDER) {
    require('./menu')();
    process.exit(1);
}

global.NAME = global.FOLDER.split('/').pop();

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
        chalk.green.bold('Successfully created project', global.NAME, '\n')
    );
})();
