import React, { createContext, useState } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [paymentErrorMessage, setPaymentErrorMessage] = useState("");

  const setProductsHandler = (product) => {
    // setProducts((products) => [...products,product]);
    setProducts([product]);
  };

  const setPaymentErrorHandler = (msg) => {
    setPaymentErrorMessage(msg);
  }

  return (
    <ThemeContext.Provider value={{ products, setProductsHandler,paymentErrorMessage,setPaymentErrorHandler }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
