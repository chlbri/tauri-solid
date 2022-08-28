import { Component } from 'solid-js';
import { NameInput__atom, Submit__atom } from '../atoms';

type Props = {
  onsubmit: (event: project.SubmitEvent) => Promise<string>;
};

export const NameForm__organism: Component<Props> = ({ onsubmit }) => {
  return (
    <form class='flex gap-6' {...{ onsubmit }}>
      <NameInput__atom />
      <Submit__atom>Greet</Submit__atom>
    </form>
  );
};
