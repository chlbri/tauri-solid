import { Component } from 'solid-js';

export const NameInput__atom: Component = () => {
  return (
    <input
      placeholder='Enter a name...'
      name='name'
      class='placeholder:text-slate-400 placeholder:font-light dark:placeholder:text-slate-600 dark:bg-slate-100  bg-slate-700 dark:text-slate-900 text-white outline-0 px-4 py-1 shadow-md shadow-slate-900 dark:shadow-slate-500 border-transparent border-2 rounded-lg duration-300 focus:border-orange-300 hover:border-orange-200 outline-none'
    />
  );
};
