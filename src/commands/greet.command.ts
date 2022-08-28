import { invoke } from '@tauri-apps/api';
import { checkEnv } from './_env';

function greet__TS(name = '') {
  return `Hello, ${name} ! You've been greeted from Rust !`;
}

export async function greet__C(name = ''): Promise<string> {
  if (checkEnv()) {
    return invoke('greet', { name });
  }
  return greet__TS(name);
}
