'use client';
import Snackbar from '@/components/snackbar/Snackbar';
import React, { createContext, useContext, useState } from 'react';

type SnackbarContextType = {
  showSnackbar: (message: string) => void;
};

const SnackbarContext = createContext<SnackbarContextType | undefined>(undefined);

export const useSnackbar = () => {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error('useSnackbar must be used within a SnackbarProvider');
  }
  return context;
};

export const SnackbarProvider = ({ children }: { children: React.ReactNode }) => {
  const [snackbars, setSnackbars] = useState<string[]>([]);

  const showSnackbar = (message: string) => {
    setSnackbars((prev) => [...prev, message]);
  };

  const handleClose = (index: number) => {
    setSnackbars((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      <div>
        {snackbars.map((message, index) => (
          <Snackbar key={index} message={message} onClose={() => handleClose(index)} />
        ))}
      </div>
    </SnackbarContext.Provider>
  );
};