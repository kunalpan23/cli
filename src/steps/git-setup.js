const simpleGit = require('simple-git')('.');

module.exports = async function(STEP) {
    STEP.start();

    return new Promise(async resolve => {
        simpleGit
            .init()
            .add('./*')
            .commit('Initial commit')
            .exec(() => {
                STEP.success();
                resolve();
            });
    });
};
