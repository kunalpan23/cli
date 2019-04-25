const Steps = require('../utils/steps.util');

const createFolder = require('./create-folder');
const addFiles = require('./add-files');
const changeCwd = require('./change-cwd');
const yarnInstall = require('./yarn-install');

module.exports = async function() {
    const steps = Steps.create(3);

    await createFolder(
        steps.advance('Creating folder structure', 'file_folder')
    );
    await addFiles(steps.advance('Adding required files', 'page_with_curl'));
    await changeCwd();
    await yarnInstall(steps.advance('Installing dependencies', 'package'));
};
