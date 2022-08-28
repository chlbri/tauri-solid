import { Component, JSX } from 'solid-js';

type Props = {
  children: JSX.Element;
};

export const Layout__layout: Component<Props> = ({ children }) => {
  return (
    <div class='h-screen flex flex-col pt-20 gap-5 items-center text-slate-900 bg-slate-100 dark:text-white dark:bg-slate-900 font-normal font-default'>
      {children}
    </div>
  );
};
