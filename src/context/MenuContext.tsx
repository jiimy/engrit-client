'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface MenuContextType {
  menuState: string | null;
  setMenuState: React.Dispatch<React.SetStateAction<string | null>>;
}

// Context 생성
const MenuContext = createContext<MenuContextType | undefined>(undefined);

// Provider 컴포넌트
export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [menuState, setMenuState] = useState<string | null>(null);

  return (
    <MenuContext.Provider value={{ menuState, setMenuState }}>
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
