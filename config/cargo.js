/* eslint-disable @typescript-eslint/no-var-requires */
const { parse } = require('@iarna/toml');
const { readFileSync } = require('fs');
const { CARGO_TOML, TAURI_JSON } = require('./constants');

function getCargoToml() {
  const readed = readFileSync(CARGO_TOML, {}).toLocaleString();
  return [CARGO_TOML, parse(readed)];
}

function getTauri() {
  const readed = readFileSync(TAURI_JSON, {}).toLocaleString();
  return [TAURI_JSON, JSON.parse(readed)];
}

module.exports = {
  getCargoToml,
  getTauri,
};
