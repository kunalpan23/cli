const { exec } = require('child_process');

module.exports = function(STEP) {
    STEP.start();

    return new Promise(resolve => {
        const { devDependencies } = require('../dependencies.json');
        exec(`yarn add --dev ${devDependencies.join(' ')}`, err => {
            if (err) {
                STEP.error();
                console.error(err);
                process.exit(1);
            }

            STEP.success();
            resolve();
        });
    });
};
