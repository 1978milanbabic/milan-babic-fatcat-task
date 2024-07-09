import clsx from 'clsx';

import { LayoutInterface } from '@homework-task/interfaces/LayoutInterface';

export const Layout = ({ children, background }: LayoutInterface) => {
  return <section className={clsx(background)}>{children}</section>;
};
