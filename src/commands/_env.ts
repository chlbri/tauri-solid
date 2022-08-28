export function checkEnv() {
  return (
    !!window.__TAURI__ &&
    !!window.__TAURI_METADATA__ &&
    !!window.__TAURI_IPC__
  );
}
