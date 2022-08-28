import { Component } from 'solid-js';

type Props = {
  children: string;
};

export const Submit__atom: Component<Props> = ({ children }) => {
  return (
    <button
      type='submit'
      class='dark:text-slate-300 bg-slate-300 dark:bg-black shadow-md outline-0 px-4 py-1 duration-200 transition hover:border-orange-300 border-2 border-transparent rounded-lg ease-out'
    >
      {children}
    </button>
  );
};
