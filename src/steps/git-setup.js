const simpleGit = require('simple-git')('.');

module.exports = async function(STEP) {
    STEP.start();
    return new Promise(async resolve => {
        try {
            await simpleGit
                .init()
                .add('./*')
                .commit('Initial commit');
        } catch (e) {
            STEP.error();
            console.error(e);
            process.exit(1);
        }

        STEP.success();
        resolve();
    });
};
