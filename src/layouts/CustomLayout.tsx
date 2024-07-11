import clsx from 'clsx';

import { CustomLayoutInterface } from '@homework-task/interfaces/CustomLayoutInterface';

export const CustomLayout = ({
  children,
  tailwindStyleString,
}: CustomLayoutInterface) => {
  return <section className={clsx(tailwindStyleString)}>{children}</section>;
};
