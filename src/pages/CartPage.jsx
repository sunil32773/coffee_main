import React, { useContext } from "react";
import { ProductContext } from "../context/productsContext";
import Header from "../components/Header";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineDelete } from "react-icons/ai";

function CartPage() {
  const { cartArray, removeFromCart, cartSubtotal, addToCart, setCartArray } =
    useContext(ProductContext);

  const handleIncrement = (id) => {
    addToCart(id);
  };

  const handleDecrement = (id) => {
    const existingItemIndex = cartArray.findIndex((item) => item._id === id);
    if (existingItemIndex !== -1) {
      const updatedCart = [...cartArray];
      if (updatedCart[existingItemIndex].quantity === 1) {
        removeFromCart(id);
        toast('Product removed');
      } else {
        updatedCart[existingItemIndex].quantity -= 1;
        setCartArray(updatedCart);
      }
    }
  };

  return (
    <>
      <Header />
      <ToastContainer />
      <div className="container mx-auto py-8 px-5 ">
        <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
        {cartArray.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-col-2 lg:grid-cols-3 gap-4">
              {cartArray.map((product) => (
                <div
                  key={product._id}
                  className="bg-white p-4 rounded-lg shadow-md"
                >
                  <img
                    src={product.image_url}
                    alt={product.name}
                    className="w-full h-50 object-contain mb-4"
                  />
                  <p className="text-lg font-semibold">{product.name}</p>
                  <p className="text-gray-600">${product.price}</p>
                  <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center">
                      <button
                        onClick={() => handleDecrement(product._id)}
                        className="bg-gray-300 px-2 py-1 rounded-md"
                      >
                        -
                      </button>
                      <p className="mx-2">{product.quantity}</p>
                      <button
                        onClick={() => handleIncrement(product._id)}
                        className="bg-gray-300 px-2 py-1 rounded-md"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => {
                        removeFromCart(product._id);
                        toast.success('Product removed');
                      }}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                    >
                      <AiOutlineDelete className="text-xl"/>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <p className="text-lg font-semibold">
                Subtotal: ${cartSubtotal.toFixed(2)}
              </p>
            </div>
          </>
        ) : (
          <p className="text-xl ">Add some coffee to fill ☕☕☕...</p>
        )}
      </div>
    </>
  );
}

export default CartPage;
