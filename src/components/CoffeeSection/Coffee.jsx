import React, { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../Card";
import coverImage from "../../assets/coverImage.jpg";
import { motion } from "framer-motion";
import { ProductContext } from "../../context/productsContext";

function Coffee() {
  const { productsList } = useContext(ProductContext);
  const [perPage, setPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);

  const indexofLastProduct = currentPage * perPage;
  const indexofFirstProduct = indexofLastProduct - perPage;
  const currentProduct = productsList.slice(
    indexofFirstProduct,
    indexofLastProduct
  );
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  var settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {productsList && (
        <section className="p-[1.6rem] lg:p-10 ">
          <div>
            <h1 className="text-2xl w-full text-center syne font-semibold underline mb-10 md:text-2.5xl lg:text-3xl">
              Most popular
            </h1>
            <Slider {...settings}>
              {productsList?.slice(3, 12).map((pro) => (
                <Card key={pro._id} {...pro} popular={true} />
              ))}
            </Slider>
          </div>
          <div className="w-full bg-red-300 relative hidden md:block lg:block">
            <img
              src={coverImage}
              alt="coverCoffee"
              className="w-full mt-10 opacity-98 object-cover hidden sm:block md:h-[40vh] lg:h-[50vh]"
            />
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="pacifico text-8xl absolute inset-0 flex items-center justify-center text-white"
            >
              Explore all flavours
            </motion.p>
          </div>

          <div className="w-full flex flex-col mt-10 items-center lg:p-[50px] lg:mt-3">
            <h1 className="text-2xl w-full text-center syne font-semibold mb-10 underline md:text-2.5xl lg:text-3xl">
              Products
            </h1>
            <div className="w-full flex flex-wrap gap-4 px-7 lg:gap-[5rem]">
              {currentProduct.map((products) => (
                <Card key={products._id} {...products} />
              ))}
            </div>
          </div>
          <div className="mt-5">
            <ul className="flex text-white gap-5 justify-center">
              {Array.from({
                length: Math.ceil(productsList.length / perPage),
              }).map((_, index) => (
                <li
                  key={index}
                  onClick={() => paginate(index + 1)}
                  className={`bg-[#837c4f] px-4 py-2 rounded-full ${
                    index == currentPage - 1 && "bg-[#42261e]"
                  } hover:scale-110 transition-all `}
                >
                  <button className="outline-none">{index + 1}</button>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}

export default Coffee;
