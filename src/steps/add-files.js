const Path = require('path');

const { readDirectory, isDirectory, writeFile } = require('../utils');

module.exports = async function(STEP) {
    STEP.start();

    try {
        const CONFIG_PATH = Path.join(__dirname, '..', '__defaults', 'configs');
        const configItems = readDirectory(CONFIG_PATH)
            .map(name => name)
            .filter(name => isDirectory(Path.join(CONFIG_PATH, name)));

        for (let config of configItems) {
            let currentConfig = require(`${CONFIG_PATH}/${config}`)();

            if (currentConfig.constructor === Object) {
                currentConfig = JSON.stringify(currentConfig, null, 4);
            }

            await writeFile(
                Path.resolve('.', global.NAME, config.replace(/_/g, '.')),
                currentConfig,
                { flag: 'w' }
            );
        }
    } catch (e) {
        STEP.error();
        console.error(e);
        process.exit(1);
    }

    STEP.success();
};
