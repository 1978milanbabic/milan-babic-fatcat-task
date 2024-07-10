import { LandingCardInterface } from '@homework-task/interfaces/LandingCardInterface.ts';

export const vscodeProjectLink = `vscode://file/${__CWD__}`;

export const cards: LandingCardInterface[] = [
  {
    title: 'Transfer the project to TypeScript',
    text: 'Your first task involves transitioning this project from JavaScript to TypeScript.',
    link: vscodeProjectLink,
  },
  {
    title: 'Create a scalable List Component',
    text: 'Build a scalable React component to fetch and display key information (id, name, username, email, and phone) from an API in a list format.',
    link: '/list',
  },
  {
    title: 'Create a Form Generator Component',
    text: 'Build a versatile React component with validation, API hook, and form rendering capabilities. ',
    link: '/form',
  },
  {
    title: 'Create a Page Generator Component',
    text: 'Create a versatile React component for dynamic webpage construction, adapting to various layouts and components through received props.',
    link: '/page',
  },
];
