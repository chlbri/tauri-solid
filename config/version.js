/* eslint-disable @typescript-eslint/no-var-requires */

const { stringify } = require('@iarna/toml');
const { writeFileSync } = require('fs');
const { getCargoToml, getTauri } = require('./cargo');
const { getPackageVersion } = require('./node');

function changeCargoVersion(version = '0.0.1') {
  const [file, _transformed] = getCargoToml();

  if (_transformed.package.version) {
    _transformed.package.version = version;
    const transformed = stringify(_transformed);
    writeFileSync(file, transformed, {});
  }
}

function changeTauriVersion(version = '0.0.1') {
  const [file, tauri] = getTauri();
  if (tauri.package.version) {
    tauri.package.version = version;
    const transformed = JSON.stringify(tauri);
    writeFileSync(file, transformed, {});
  }
}

function version(_version) {
  const version = _version || getPackageVersion();
  if (version !== undefined && version !== '') {
    changeCargoVersion(version);
    changeTauriVersion(version);
  }
}

module.exports =version ;
