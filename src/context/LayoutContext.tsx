'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LayoutContextType {
  menuState: boolean;
  setMenuState: React.Dispatch<React.SetStateAction<boolean>>;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}

const LayoutContext = createContext<LayoutContextType>({
  menuState: true,
  setMenuState: () => { },
  text: '',
  setText: () => { },
});

export const LayoutProvider = ({ children }: { children: ReactNode }) => {
  const [menuState, setMenuState] = useState<boolean>(true);
  const [text, setText] = useState('');

  return (
    <LayoutContext.Provider value={{ menuState, setMenuState, text, setText }}>
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayoutContext = () => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error('useLayoutContext must be used within a MenuProvider');
  }
  return context;
};
