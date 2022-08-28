/* eslint-disable @typescript-eslint/no-var-requires */
const { readFileSync } = require('fs');
const { NODE_JSON } = require('./constants');

function getPackageJSON() {
  const readed = readFileSync(NODE_JSON).toLocaleString();
  return JSON.parse(readed);
}

function getPackageVersion() {
  return getPackageJSON()?.version;
}

module.exports = {
  getPackageVersion,
  getPackageJSON,
};
