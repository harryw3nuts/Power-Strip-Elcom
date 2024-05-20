import React, { createContext, useState } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const setProductsHandler = (product) => {
    // setProducts((products) => [...products,product]);
    setProducts([product]);
  };

  return (
    <ThemeContext.Provider value={{ products, setProductsHandler }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
