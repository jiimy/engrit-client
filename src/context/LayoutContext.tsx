'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LayoutContextType {
  menuState: boolean;
  setMenuState: React.Dispatch<React.SetStateAction<boolean>>;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  tag: Record<string, any>;
  setTag: React.Dispatch<React.SetStateAction<Record<string, any>>>;
}

const LayoutContext = createContext<LayoutContextType>({
  menuState: true,
  setMenuState: () => { },
  text: '',
  setText: () => { },
  tag: {},
  setTag: () => { },
});

export const LayoutProvider = ({ children }: { children: ReactNode }) => {
  const [menuState, setMenuState] = useState<boolean>(true);
  const [text, setText] = useState<string>('');
  const [tag, setTag] = useState<Record<string, any>>({});

  return (
    <LayoutContext.Provider
      value={{ menuState, setMenuState, text, setText, tag, setTag }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayoutContext = () => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error('useLayoutContext must be used within a LayoutProvider');
  }
  return context;
};
