const { createDirectory } = require('../utils');

module.exports = async function(STEP) {
    STEP.start();

    try {
        await createDirectory(`./${global.NAME}`);
    } catch (e) {
        STEP.error();
        console.error(e);
        process.exit(1);
    }

    STEP.success();
};
