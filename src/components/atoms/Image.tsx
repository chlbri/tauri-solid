import { Component, JSX } from 'solid-js';

type Props = {
  src: string;
  alt?: string;
  class?: string;
  style?: JSX.CSSProperties;
};

export const Image: Component<Props> = ({
  src,
  alt,
  class: className,
  style,
}) => {
  return <img {...{ src, alt, class: className }} style={style} />;
};
