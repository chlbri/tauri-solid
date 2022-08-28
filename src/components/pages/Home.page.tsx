import { Component } from 'solid-js';
import { Home__template as Home } from '../templates';
import useHook from './Home.hook';

export const HomePage: Component = () => {
  const props = useHook();
  return <Home {...props} />;
};
