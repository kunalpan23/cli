module.exports = () =>
    [
        'node_modules/',
        'dist/',
        'dev-dist/',
        '.cache/',
        '.DS_Store',
        '*.idea',
        '*.log'
    ].join('\n');
