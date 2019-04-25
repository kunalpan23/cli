module.exports = async function() {
    return new Promise(async resolve => {
        process.chdir(`./${global.NAME}`);
        resolve();
    });
};
