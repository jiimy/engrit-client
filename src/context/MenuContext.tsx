'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface MenuContextType {
  menuState: boolean;
  setMenuState: React.Dispatch<React.SetStateAction<boolean>>;
  youtubeId: string;
  setYoutubeId: React.Dispatch<React.SetStateAction<string>>;
}

// Context 생성
const MenuContext = createContext<MenuContextType | undefined>(undefined);

// Provider 컴포넌트
export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [menuState, setMenuState] = useState<boolean>(true);
  const [youtubeId, setYoutubeId] = useState('');

  return (
    <MenuContext.Provider value={{ menuState, setMenuState, youtubeId, setYoutubeId }}>
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
