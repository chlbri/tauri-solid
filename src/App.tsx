import { Route, Routes } from '@solidjs/router';
import { Component } from 'solid-js';
import { HomePage } from './components/pages';

export const App: Component = () => (
  <Routes>
    <Route path='/' component={HomePage} />
  </Routes>
);
