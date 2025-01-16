import React, { createContext, useEffect, useState, useMemo } from "react";
import axios from "axios";
import { api } from "../api/api";

const ProductContext = createContext();

function ProductsContext({ children }) {
  const [cartArray, setCartArray] = useState([]);
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(api);
      setProductsList(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  const memoizedProductsList = useMemo(() => productsList, [productsList]);
  const fetchSingleProduct = (id) => {
    const singleProduct = memoizedProductsList.find((pro) => pro.id === id);
    console.log(singleProduct);
  };

  const addToCart = (id) => {
    try {
      const selectedProduct = memoizedProductsList.find(
        (pro) => pro._id === id
      );
      const existingItemIndex = cartArray.findIndex((item) => item._id === id);
      if (existingItemIndex !== -1) {
        const updatedCart = [...cartArray];
        updatedCart[existingItemIndex].quantity += 1;
        setCartArray(updatedCart);
      } else {
        setCartArray([...cartArray, { ...selectedProduct, quantity: 1 }]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const removeFromCart = (id) => {
    const updatedCart = cartArray.filter((item) => item._id !== id);
    setCartArray(updatedCart);
  };

  const cartSubtotal = cartArray.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );

  return (
    <ProductContext.Provider
      value={{
        productsList: memoizedProductsList,
        cartArray,
        setCartArray,
        fetchProducts,
        addToCart,
        fetchSingleProduct,
        removeFromCart,
        cartSubtotal,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export { ProductsContext, ProductContext };
