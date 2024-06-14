import React, { createContext, useState } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [paymentErrorMessage, setPaymentErrorMessage] = useState("");
  const [orderInfo, setOrderInfo] = useState("");

  const setProductsHandler = (product) => {
    // setProducts((products) => [...products,product]);
    if(product == ''){
      setProducts([]);
    }else{
      setProducts([product]);
    }
  };

  const setPaymentErrorHandler = (msg) => {
    setPaymentErrorMessage(msg);
  }

  const setOrderInfoHandler = (orderData) => {
    setOrderInfo(orderData);
  }

  return (
    <ThemeContext.Provider value={{ products, setProductsHandler,paymentErrorMessage,setPaymentErrorHandler,orderInfo,setOrderInfo }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
