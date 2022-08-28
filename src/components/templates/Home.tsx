import type { Accessor, Component } from 'solid-js';
import { Layout__layout as Layout } from '../layouts';
import { Logos__organism as Logos } from '../organisms';
import { NameForm__organism as NameForm } from '../organisms/NameForm';

type Props = {
  onsubmit: (event: project.SubmitEvent) => Promise<string>;
  msg: Accessor<string>;
};

export const Home__template: Component<Props> = ({ onsubmit, msg }) => {
  return (
    <Layout>
      <h1 class='text-3xl font-semibold mb-3'>Welcome to Tauri!</h1>

      <Logos />

      <p class='max-w-xl text-center'>
        Click on the Tauri, Vite, and Solid logos to learn more about each
        framework.
      </p>

      <NameForm {...{ onsubmit }} />

      <p class='dark:text-orange-400 text-orange-700 mt-3 font-light italic'>
        {msg()}
      </p>
    </Layout>
  );
};
