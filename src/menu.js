const chalk = require('chalk');

const MENU = {
    title: 'Markeroo',
    description: 'A simple documentation creator powered by markdown.',
    commands: [
        {
            key: 'init',
            help: 'markeroo init <project-name>',
            description:
                'Create a new Markeroo project to start writing your documentation.'
        },
        {
            key: 'add',
            help: 'markeroo add <project-name>',
            description: "Add an existing project into Markeroo's entry."
        },
        {
            key: 'start',
            help: 'markeroo start <project-name>',
            description: 'Run the development server of your Markeroo project.'
        },
        {
            key: 'build',
            help: 'markeroo build <project-name>',
            description: ''
        },
        {
            key: 'delete',
            help: 'markeroo delete <project-name>',
            description: 'Delete a Markeroo project.'
        }
    ]
};

module.exports = () => {
    const { title, description, commands } = MENU;
    console.log('');
    console.log(chalk.cyan.bold('\t', title));
    console.log(chalk.white.bold('\t', description));

    console.log(chalk.white.bold('\n\t', 'Available commands:\n'));

    commands.forEach(({ key, help, description }) => {
        console.log('\t', chalk.magenta.bold(key), chalk.grey.bold('-', help));
        console.log('\t', description);
        console.log('');
    });
};
