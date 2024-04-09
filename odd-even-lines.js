module.exports = {
    meta: {
        type: 'layout',
        docs: {
            description: 'На чётных строках должно быть чётное количество символов, на нечётных строках — нечётное.',
        },
        messages: {
            fuck: 'На этой строке должно быть {{oddOrEven}} количество символов.',
        },
        schema: [],
    },
    create(context) {
        const sourceCode = context.sourceCode;
        return {
            Program(node) {
                sourceCode.lines.forEach((line, i) => {
                    const lineNumber = i + 1;
                    const lineNumberIsOdd = lineNumber % 2;
                    const lineLengthIsOdd = line.length % 2;
                    if (!!line.length && lineNumberIsOdd !== lineLengthIsOdd) {
                        const loc = {
                            start: {
                                line: lineNumber,
                                column: 0,
                            },
                            end: {
                                line: lineNumber,
                                column: line.length,
                            },
                        };
                        context.report({
                            node,
                            loc,
                            messageId: 'fuck',
                            data: {
                                oddOrEven: lineNumberIsOdd ? 'нечётное' : 'чётное',
                            },
                        });
                    }
                });
            },
        };
    },
};
