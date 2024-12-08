'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface MenuContextType {
  menuState: boolean;
  setMenuState: React.Dispatch<React.SetStateAction<boolean>>;
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [menuState, setMenuState] = useState<boolean>(true);
  const [content, setContent] = useState('');

  return (
    <MenuContext.Provider value={{ menuState, setMenuState, content, setContent }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenuContext = () => {
  const context = useContext(MenuContext);
  if (context === undefined) {
    throw new Error('useMenuContext must be used within a MenuProvider');
  }
  return context;
};
