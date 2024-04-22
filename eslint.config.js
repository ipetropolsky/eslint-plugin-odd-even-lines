const eslintJs = require('@eslint/js');
const globals = require('globals');

const eslintPluginOddEvenLines = require('eslint-plugin-odd-even-lines');

module.exports = [
    {
        ignores: ['.*', 'node_modules/'],
    },
    {
        ...eslintJs.configs.recommended,
        files: ['**/*.js', '*.js'],
        ignores: ['example.js'],
        languageOptions: {
            sourceType: 'commonjs',
            ecmaVersion: 'latest',
            globals: {
                ...globals.node,
            },
        },
    },
    {
        files: ['example.js'],
        languageOptions: {
            sourceType: 'module',
        },
        plugins: { 'hh-holyjs-2024': eslintPluginOddEvenLines },
        rules: {
            'hh-holyjs-2024/odd-even-lines': 'warn',
        },
    },
];
