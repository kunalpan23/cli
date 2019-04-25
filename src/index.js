const Path = require('path');
const fs = require('fs');
const { exec } = require('child_process');
const argv = require('minimist')(process.argv.slice(2));
const chalk = require('chalk');

console.log(chalk.cyan.bold('Markeroo application!'));

const FOLDER = argv._[0];

fs.mkdirSync(`./${FOLDER}`);

global.name = FOLDER;

const CONFIG_PATH = Path.join(__dirname, '__defaults', 'configs');

const isDirectory = source => fs.lstatSync(source).isDirectory();

const configItems = fs
    .readdirSync(CONFIG_PATH)
    .map(name => name)
    .filter(name => isDirectory(Path.join(CONFIG_PATH, name)));

(async function() {
    for (let config of configItems) {
        let currentConfig = require(`${CONFIG_PATH}/${config}`)();

        if (currentConfig.constructor === Object) {
            currentConfig = JSON.stringify(currentConfig, null, 4);
        }

        await fs.writeFileSync(
            Path.resolve('.', FOLDER, config.replace(/_/g, '.')),
            currentConfig,
            { flag: 'w' }
        );
    }

    const npm = require('npm-programmatic');
    const { devDependencies } = require('./dependencies.json');
    const saveDev = true;
    process.chdir(`./${FOLDER}`);
    exec(`yarn add --dev ${devDependencies.join(' ')}`);
})();
