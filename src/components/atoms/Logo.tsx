import { Component } from 'solid-js';
import { Image } from './Image';

type Props = {
  src: string;
  alt?: string;
  class?: string;
  href: string;
};

export const Logo: Component<Props> = ({
  class: className,
  href,
  ..._props
}) => {
  return (
    <a
      href={href}
      class='!outline-none shadow-none hover:outline-none'
      style={{ 'box-sizing': 'inherit' }}
    >
      <Image
        {..._props}
        style={{ height: '8em', padding: '1.7em' }}
        class={`duration-700 !transition-colors will-change-transform  hover:drop-shadow-[0px_0px_40px_#24c8db]  ${className}`}
      />
    </a>
  );
};
