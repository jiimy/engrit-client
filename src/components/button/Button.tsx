import React from 'react';
import s from './button.module.scss';
import classNames from 'classnames';

type buttonType = {
  children: React.ReactNode
  theme?: 'primary' | 'secondary',
  className?: string;
  onClick?: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ children, theme = 'primary', className, onClick }: buttonType) => {
  return (
    <button className={classNames([s.button], {
      [s.is_primary]: theme == 'primary',
      [s.is_secondary]: theme == 'secondary',
    })}>
      {children}
    </button>
  );
};

export default Button;