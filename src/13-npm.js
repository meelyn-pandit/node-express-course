// npm - global command, comes with node
// npm --version = get version of npm

// local dependency - use it only in this particular project
// npm i <packageName> = install package in local directory (project you are working on)

// global dependency - use it in any project
// npm install -g <packageName> = installs package on your machine and able to use across dependencies
// sudo install -g <packageName> (Mac)

// package.json - manifest file (stores important info about project/package), has list of all packages, and scripts to run project
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)

console.log(newItems)