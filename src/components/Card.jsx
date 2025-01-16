import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { motion } from "framer-motion";
import React, { useContext } from "react";
import { ProductContext } from "../context/productsContext";
import { GiCoffeeCup } from "react-icons/gi";

function Card({ _id, price, name, image_url, popular, catalog }) {
  const { addToCart } = useContext(ProductContext);

  return (
    <>
      {popular ? (
        <div className="relative shadow-md syne mr-4 my-auto overflow-hidden ">
          <div>
            <img
              src={image_url}
              alt="product image"
              className="hover:scale-90 transition-all duration-300 "
            />
            <div className="overlay">
              {/* Display product name */}
              <h1>{name}</h1>
            </div>
          </div>
          <div className="overlay1 w-[3rem]">
            <Link to={`/singleProduct/${_id}`}>
              <div className="h-[3rem] border  text-lg rounded-full flex justify-center items-center cursor-pointer hover:bg-[#E3EBFF]">
                <FaEye />
              </div>
            </Link>
            {/* <div className='h-[3rem] border text-xl rounded-full flex justify-center items-center cursor-pointer hover:bg-[#E3EBFF]' onClick={() => addToCart(_id)}>
                            <GiCoffeeCup />
                        </div> */}
          </div>
          <div className="bg-red-500 text-white font-semibold absolute bottom-14 p-2">
            Popular
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
          whileInView={{ opacity: 1, y: 0 }}
          className={`relative syne w-[295px] bg-[#FCFFFD] ${catalog ? "mx-auto" : ""
            }  overflow-hidden shadow-lg rounded-lg my-auto md:w-[300px] lg:w-[350px]`}
        >
          <Link to={`/singleProduct/${_id}`}>
            <div>
              <img
                src={image_url}
                alt="product image"
                className="hover:scale-90 transition-all duration-300 md:h-[300px]"
              />
            </div>
          </Link>
          <div className="overlay1 w-[3rem]">
            <Link to={`/singleProduct/${_id}`}>
              <div className="h-[3rem] border text-lg rounded-full flex justify-center items-center cursor-pointer hover:bg-[#E3EBFF]">
                <FaEye />
              </div>
            </Link>
            {catalog && (
              <div className="flex flex-col gap-3">
                <div
                  className="h-[3rem] border text-lg rounded-full flex justify-center items-center cursor-pointer hover:bg-[#E3EBFF]"
                  onClick={() => addToCart(_id)}
                >
                  <GiCoffeeCup />
                </div>
                <div className="text-ml">${price}</div>
              </div>
            )}
          </div>
          <div className="overlay">
            {/* Display product name */}
            <h1>{name}</h1>
          </div>
        </motion.div>
      )}
    </>
  );
}

export default Card;
