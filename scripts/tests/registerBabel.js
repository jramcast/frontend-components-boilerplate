/* eslint-disable import/no-extraneous-dependencies */
// Necessary to run tests with mocha when other roi components
// installed with npm are also written in ES6
// Ref: http://stackoverflow.com/a/35045012/869606
require('babel-core/register')({
    // ignore all node_modules except other roi components
    ignore: /node_modules\/(?!logi-.*)/,
    presets: 'babel-preset-env'
});
