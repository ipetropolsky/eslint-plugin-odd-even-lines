module.exports = {
    '*.js': ['yarn prettier -w', 'yarn eslint --fix'],
    'package.json': 'bash -c "yarn install --frozen-lockfile"',
};
