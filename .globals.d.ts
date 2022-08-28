/** @ignore */
declare global {
  interface Window {
    __TAURI__: any;
  }
  
  namespace project {
    interface SubmitEvent extends Event {
      currentTarget: HTMLFormElement;
    }
  }
}

export {};
