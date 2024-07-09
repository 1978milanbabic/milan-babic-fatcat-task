import clsx from 'clsx';

import { ButtonInterface } from '@homework-task/interfaces/ButtonInterface';

export const Button = ({ children, onClick, className }: ButtonInterface) => {
  return (
    <button
      className={clsx(
        'rounded-lg',
        'px-4',
        'py-2',
        'bg-black',
        'text-white',
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
