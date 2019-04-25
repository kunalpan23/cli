const Steps = require('cli-step');

module.exports = {
    create(count) {
        return new Steps(count);
    },
    advance(steps, text, emoji, help) {
        return steps && steps.advance(text, emoji, help);
    },
    success(instance) {
        instance && instance.success(null, 'white_check_mark');
    },
    error(instance) {
        instance && instance.error(null, 'x') && console.log('\n');
    },
    start(instance) {
        instance && instance.start();
    },
    stop(instance) {
        instance && instance.stop();
    }
};
