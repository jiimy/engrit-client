'use client';
import { useMenuContext } from '@/context/MenuContext';
import React from 'react';

const Bottom = () => {
  const { menuState } = useMenuContext();

  const handleClick = () => {
    console.log('cc', menuState)
  };

  return <button onClick={handleClick}>Click Me</button>;
};

export default Bottom;