const Steps = require('../utils/steps.util');

const createFolder = require('./create-folder');
const addFiles = require('./add-files');
const changeCwd = require('./change-cwd');
const yarnInstall = require('./yarn-install');
const gitSetup = require('./git-setup');

module.exports = async function() {
    const steps = Steps.create(4);

    await createFolder(
        steps.advance('Landscaping your project', 'house_with_garden')
    );
    await addFiles(steps.advance('Planting the greenery', 'tulip'));
    await changeCwd();
    await yarnInstall(steps.advance('Bringing in the goodies', 'gift'));
    await gitSetup(steps.advance('Adding the finishing touches', 'sparkles'));
};
