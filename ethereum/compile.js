
//helps build a path between compile.js to Inbox.sol with cross-platform
const path = require('path');
//  fs = file system module -extra is a community made version with some extra features
const fs = require('fs-extra');

//  solidity compiler
const solc = require('solc');


const buildPath = path.resolve(__dirname, 'build');

//  delete entire build folder
//  removeSync is a special function in fs-extra
fs.removeSync(buildPath);

//  Read Campaign.sol from the contracts folder
const campaignContractPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
const source = fs.readFileSync(campaignContractPath, 'utf8');

//  Compile both contracts with solidity compiler
const output = solc.compile(source, 1).contracts;

//  Write output to build folder
//  ensureDirSync checks to see if a folder exists and creates it if it doesn't already
fs.ensureDirSync(buildPath);

console.log(output);
for (let contract in output) {
  fs.outputJsonSync(
    path.resolve(buildPath, contract.replace(':', '') + '.json'),
    output[contract]
  );
}