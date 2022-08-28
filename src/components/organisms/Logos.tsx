import { Component } from 'solid-js';
import { Logo } from '../atoms';

export const Logos__organism: Component = () => (
  <div class='flex justify-center'>
    <Logo src='/vite.svg' alt='Vite logo' href='#' />
    <Logo src='/tauri.svg' alt='Tauri logo' href='#' />
    <Logo src='/logo.svg' alt='Solid logo' href='#' />
  </div>
);
