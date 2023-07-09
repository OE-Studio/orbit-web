// PINContext.js
import React, { createContext, useState } from 'react';

export const PINContext = createContext();

export const PINProvider = ({ children }) => {
  const [pin, setPin] = useState('');
  const [pinError, setPinError] = useState('');

  const setPIN = (newPIN) => {
    setPin(newPIN);
  };

  const clearPIN = () => {
    setPin('');
  };

  return (
    <PINContext.Provider value={{ pin, clearPIN, setPIN,pinError, setPinError }}>
      {children}
    </PINContext.Provider>
  );
};
