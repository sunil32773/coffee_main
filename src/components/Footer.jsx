import React from "react";
import { BiSolidCoffeeBean } from "react-icons/bi";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <p className="font-semibold text-lg flex items-center gap-2">
              <BiSolidCoffeeBean />
              Stay Caffeinated!
            </p>
            <hr />
            <p className="text-md mt-5">Baked 😁 by Aditya </p>
            <p className="text-md">
              Portfolio:{" "}
              <a
                href="https://aditya-fawn.vercel.app/"
                target="_blank"
                className="text-blue-200 hover:underline"
              >
                Click here
              </a>{" "}
            </p>
          </div>
          {/* <div className="mt-4 md:mt-0">
            <input type="email" placeholder="Your email" className="bg-gray-700 text-white px-4 py-2 rounded-md outline-none" />
            <button className="bg-red-500 text-white px-4 py-2 rounded-md ml-2">Subscribe</button>
          </div> */}
        </div>
        <div className="border-t border-gray-700 mt-6 pt-4 text-center">
          <p>
            &copy; {new Date().getFullYear()} Your Coffee Shop. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
