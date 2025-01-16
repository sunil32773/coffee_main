import React, { useContext } from "react";
import coffee from "../assets/icon.webp";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GiCoffeeCup } from "react-icons/gi";
import { ProductContext } from "../context/productsContext";

function Header() {
  const { cartArray } = useContext(ProductContext);
  return (
    <motion.div
      initial={{ y: "-150px" }}
      animate={{ y: "0" }}
      transition={{ ease: "linear", duration: "1" }}
      className="w-full bg-transparent text-[#181716] flex justify-between items-center gap-4 p-5 md:justify-center md:gap-[700px] md:py-2"
    >
      <div className="flex items-center">
        <img
          src={coffee}
          alt="coffeeBean"
          className="w-[50px] md:w-[80px] lg:w-[90px]"
        />
        <Link to="/">
          <p className="font-semibold md:text-xl lg:text-2xl">
            Coffee<span className="text-[#E5E5CB]">Shop</span>
          </p>
        </Link>
      </div>
      <div>
        <ul className="syne flex items-center gap-5 text-sm outline-none font-semibold cursor-pointer md:text-xl">
          <Link to="/" className="hidden md:block">
            <p className="hover:border-b-2">Home</p>
          </Link>
          <Link to="/catalog">
            <p className="hover:border-b-2">Products</p>
          </Link>
          <a href="https://github.com/adityananu/coffeeshop" target="_blank" className="hover:border-b-2">
            Github
          </a>
          <Link to="/cart">
            <div className="relative hover:translate-y-[-5px] hover:text-3xl transition-all ">
              <GiCoffeeCup className="text-2xl md:text-3xl lg:text-4xl" />
              {cartArray.length >= 1 && (
                <span className="absolute top-[-10px] right-[-10px] w-[20px] h-[20px] flex justify-center items-center rounded-full text-sm bg-red-700 text-white">
                  {cartArray.length}
                </span>
              )}
            </div>
          </Link>
        </ul>
      </div>
    </motion.div>
  );
}

export default Header;
