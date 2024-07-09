import clsx from 'clsx';

import { LayoutInterface } from '@app-root/interfaces/LayoutInterface';

export const Layout = ({ children, background }: LayoutInterface) => {
  return <section className={clsx(background)}>{children}</section>;
};
