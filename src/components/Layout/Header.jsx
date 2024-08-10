import React, { useState, useEffect, useRef } from "react";
import { FiAlignJustify, FiSearch } from "react-icons/fi";
import logo from "../../assets/logo.png";
import { FaCartPlus, FaRegHeart } from "react-icons/fa";
import NavLinks from "./Navlinks";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigation = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 z-50 w-full px-6 py-3 font-medium text-black bg-white shadow-md lg:px-14">
      <div className="container flex items-center justify-between mx-auto">
        <div className="text-lg font-bold h-[80px] w-[80px] rounded-[40px] border border-black">
          <a href="/">
            <img
              src={logo}
              alt="Logo"
              className="bg-cover h-[80px] w-[80px] rounded-[40px] border border-black-700"
            />
          </a>
        </div>

        <nav className="items-center hidden space-x-4 font-bold md:flex">
          <div>
            <NavLinks />
          </div>
          <a href="/" className="hover:text-gray-300">
            Home
          </a>
          <a href="/mylearning" className="hover:text-gray-300">
            Our Courses
          </a>
          <a href="/about" className="hover:text-gray-300">
            About
          </a>
          <a href="/new-contact" className="hover:text-gray-300">
            Contact
          </a>
          {/* <a href="/wishlist" className="hover:text-gray-300">
            <FaRegHeart className="w-6 h-6 cursor-pointer hover:text-gray-300" />
          </a>
          <a href="/search" className="hover:text-gray-300">
            <FiSearch className="w-6 h-6 cursor-pointer hover:text-gray-300" />
          </a>
          <a href="/cart" className="block px-4 py-2 ">
            <FaCartPlus className="w-6 h-6 cursor-pointer hover:text-gray-300" />
          </a> */}
        </nav>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <FiAlignJustify />
          </button>
        </div>

        <div className="hidden md:block bg-[#F68B33] font-bold rounded-lg p-3 text-white">
          <nav>
            <a href="/login" className="hover:text-gray-300">
              Login /
            </a>
            <a href="/register" className="hover:text-gray-300">
              Registration
            </a>
            <a href="/profile" className="hover:text-gray-300">
              / Profile{" "}
            </a>
          </nav>
        </div>
      </div>

      {isOpen && (
        <nav className="font-bold bg-white shadow-md md:hidden">
          <a onClick={navigation("/")} className="block px-4 py-2 hover:bg-gray-200">
            Home
          </a>
          <a onClick={navigation("/mylearning")}  className="block px-4 py-2 hover:bg-gray-200">
            My Learning
          </a>
          <a onClick={navigation("/about")} className="block px-4 py-2 hover:bg-gray-200">
            About
          </a>
          <a onClick={navigation("/new-contact")}   className="block px-4 py-2 hover:bg-gray-200">
            Contact
          </a>
          <a onClick={navigation("/login")}  className="block px-4 py-2 hover:bg-gray-200">
            Login
          </a>
          <a onClick={navigation("/register")} className="block px-4 py-2 hover:bg-gray-200">
            Registration
          </a>
          {/* <a href="/search" className="block px-4 py-2 hover:bg-gray-200">
            <FiSearch className="w-6 h-6 cursor-pointer hover:text-gray-300" />
          </a>
          <a href="/cart" className="block px-4 py-2 hover:bg-gray-200">
            <FaCartPlus className="w-6 h-6 cursor-pointer hover:text-gray-300" />
          </a> */}
        </nav>
      )}
    </header>
  );
};

export default Header;
