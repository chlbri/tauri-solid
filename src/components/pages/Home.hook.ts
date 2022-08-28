import { createSignal, onMount } from 'solid-js';
import { greet__C } from '../../commands';
import { getSubmitEntries } from '../../helpers';

type SubmitEvent = Event & {
  currentTarget: HTMLFormElement;
};

function _submit(event: SubmitEvent, key: string): string | undefined {
  const _temp = getSubmitEntries(event).find(
    ([__key]) => key === __key,
  )?.[1] as string | undefined;
  return _temp;
}

export default function useHook() {
  const [msg, setMsg] = createSignal('');
  const _greet = (name?: string) => greet__C(name).then(setMsg);

  onMount(_greet);

  function onsubmit(event: SubmitEvent) {
    return _greet(_submit(event, 'name'));
  }

  return { msg, onsubmit };
}
