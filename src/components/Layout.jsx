import React, { useContext, useEffect, useState } from "react";
import Header from "./Header";
import Coffee from "./CoffeeSection/Coffee";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import { SiBuymeacoffee } from "react-icons/si";
import { motion } from "framer-motion";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

  //   bg-[#FB5607]
  //   text-[#D5CEA3]

  export default function Layout() {
    const images = [image1, image2, image3];
  
    return (
      <>
        <main className="h-[90vh] w-full bg-[#BFA58A] overflow-hidden relative">
          <Header />
          <motion.div
            initial={{ y: "100px", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="pacifico z-0 flex flex-col items-center text-[#4B342C] justify-center text-5xl h-[60vh] mx-auto md:text-6xl lg:text-6xl xl:text-8xl"
          >
            <h1>Indulge in Pure</h1>
            <h1 className="mb-5">Coffee Bliss</h1>
            <SiBuymeacoffee className="shakeBottle"/>
          </motion.div>
          
          
          <motion.div
            initial={{ y: "300px", opacity: 0 }}
            animate={{ y: "0", opacity: 1 }}
            transition={{ duration: 2 }}
            className="absolute bottom-[-100px] w-full flex items-center justify-center"
          >
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                className="h-[300px] w-[385px] hover:-translate-y-[100px] transition-all duration-500"
              />
            ))}
          </motion.div>
        </main>
  
        <Coffee />
        <Testimonials />
        <Footer />
      </>
    );
  }
  