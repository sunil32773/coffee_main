import React from "react";
import { motion } from "framer-motion";

function Testimonials() {
  const testimonials = [
    {
      name: "Uday Kiran",
      message:
        '"Wildfire coffee is the best I\'ve ever tasted! Highly recommend it to everyone."',
      stars: 5,
    },
    {
      name: "Srinivas",
      message:
        '"Harvest Moon coffee has such a unique flavor. I can\'t get enough of it!"',
      stars: 4,
    },
    {
      name: "Asha kumar",
      message:
        '"Breezy Beans coffee is perfect for a relaxing morning. Great taste!"',
      stars: 3,
    },
    {
      name: "Kummari M",
      message:
        '"Walnut Wonder coffee is a delight to the senses. Absolutely delicious!"',
      stars: 4,
    },
    {
      name: "Bhargav rishi",
      message:
        "\"I've tried many coffees, but none compare to Walnut Wonder. It's truly exceptional!\"",
      stars: 5,
    },
  ];

  return (
    <div className="w-full syne h-auto mb-10 px-5 md:px-2 md:p-5 ">
      <h1 className="text-2xl w-full text-center syne font-semibold underline mb-10 md:text-2.5xl lg:text-3xl">
        Feedbacks
      </h1>

      <div className="flex justify-center gap-10 flex-wrap">
        {testimonials.map((testimonial, index) => (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 5 }}
            key={index}
            className="max-w-md rounded-lg overflow-hidden shadow-lg bg-white"
          >
            <div className="p-4">
              <p className="text-gray-800 mb-4">{testimonial.message}</p>
              <p className="text-gray-600">- {testimonial.name}</p>
              <div className="flex mt-4">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <span
                    key={starIndex}
                    className={`text-${
                      testimonial.stars > starIndex ? "yellow" : "gray"
                    }-500`}
                  >
                    &#9733;
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
