import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductContext } from "../context/productsContext";
import { GiCoffeeCup } from "react-icons/gi";
import Header from "../components/Header";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function SingleProduct() {
  const { id } = useParams();
  const { productsList, addToCart } = useContext(ProductContext);
  const [product, setProduct] = useState(null);
  const notify = () => toast.success('Added to Cart ☕');

  useEffect(() => {
    const foundProduct = productsList.find((pro) => pro._id === id);
    setProduct(foundProduct);
  }, [id, productsList]);

  return (
    <div className="relative h-screen w-full flex flex-col items-center bg-gray-100">
      <div>
        <Header />
      </div>
      <div className="border lg:w-3/4 bg-white rounded-lg shadow-lg p-[1rem] lg:mt-[10px]">
        {product && (
          <div className="flex flex-col lg:flex-row items-start lg:items-center lg:gap-8">
            <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
              <img
                src={product.image_url}
                alt={product.name}
                className="w-full lg:h-96 object-contain rounded-lg"
              />
            </div>
            <div className="syne w-full lg:w-1/2 order-1 lg:order-2">
              <h1 className="text-2xl lg:text-4xl font-bold mb-4">
                {product.name}
              </h1>
              <p className="text-lg lg:text-xl text-gray-700 mb-4">
                {product.description}
              </p>
              <p className="text-lg lg:text-xl text-gray-900 font-bold mb-4">
                Price: ${product.price}
              </p>
              <p className="text-lg lg:text-xl mb-4">
                Region: {product.region}
              </p>
              <p className="text-lg lg:text-xl mb-4">
                Weight: {product.weight}g
              </p>
              <p className="text-lg lg:text-xl text-gray-900 font-bold mb-4">
                Roast Level: {product.roast_level}
              </p>
              <div className="text-lg lg:text-xl text-gray-900 font-bold mb-4">
                Flavor Profile: {product.flavor_profile.join(", ")}
              </div>
              <div className="text-lg lg:text-xl text-gray-900 font-bold mb-4">
                Grind Options: {product.grind_option.join(", ")}
              </div>
              <div className="flex flex-col lg:flex-row gap-4">
                <button
                  className="flex items-center gap-3 px-6 py-3 bg-blue-500 text-white rounded-lg text-lg lg:text-xl mb-4 lg:mb-0 hover:opacity-80"
                  onClick={() => {
                    addToCart(product._id);
                    notify();
                  }}
                >
                  Add to sip <GiCoffeeCup />
                </button>
                <Link to="/catalog">
                  <button className="px-6 py-3 bg-gray-300 text-gray-800 rounded-lg text-lg lg:text-xl hover:opacity-80">
                    Go Back
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
}

export default SingleProduct;
