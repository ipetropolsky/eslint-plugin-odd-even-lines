const { RuleTester } = require('eslint');
const oddEvenLinesRule = require('./odd-even-lines');

const ruleTester = new RuleTester({
    parserOptions: { ecmaVersion: 2015 },
});

ruleTester.run('odd-even-lines', oddEvenLinesRule, {
    valid: [
        {
            name: 'Empty line',
            code: ``,
        },
        {
            name: 'An odd comment on an odd line',
            code: `// ab`,
        },
        {
            name: 'An even comment on an even line',
            code: `
// abc`,
        },
        {
            name: 'An odd code on an odd line',
            code: `const a = 'ab';`,
        },
        {
            name: 'An even code on an even line',
            code: `
const a = 'abc';`,
        },
    ],
    invalid: [
        {
            name: 'An even comment on an odd line',
            code: `// abc`,
            errors: 1,
        },
        {
            name: 'An odd comment on an event line',
            code: `
// ab`,
            errors: 1,
        },
        {
            name: 'An even code on an odd line',
            code: `const a = 'abc';`,
            errors: 1,
        },
        {
            name: 'An odd code on an even line',
            code: `
const a = 'ab';`,
            errors: 1,
        },
        {
            name: 'More than one error',
            code: `const a = 'abc';
const b = 'ab';`,
            errors: 2,
        },
    ],
});

console.log('All tests passed!');
