import React, { useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import logo from "../../assets/logo.png";
import { FaCartPlus, FaRegHeart } from "react-icons/fa";
import NavLinks from "./Navlinks";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 z-50 w-full px-6 py-3 font-medium text-black bg-white shadow-md lg:px-14">
      <div className="container flex items-center justify-between mx-auto">
        <div className="text-lg font-bold h-[80px] w-[80px] rounded-[40px] border border-black">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="bg-cover h-[80px] w-[80px] rounded-[40px] border border-black-700"
            />
          </Link>
        </div>

        <nav className="items-center hidden space-x-4 font-bold md:flex">
          <div>
            <NavLinks />
          </div>
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/mylearning" className="hover:text-gray-300">Our Courses</Link>
          <Link to="/about" className="hover:text-gray-300">About</Link>
          <Link to="/new-contact" className="hover:text-gray-300">Contact</Link>
          {/* Uncomment if needed */}
          {/* <Link to="/wishlist" className="hover:text-gray-300">
            <FaRegHeart className="w-6 h-6 cursor-pointer hover:text-gray-300" />
          </Link>
          <Link to="/search" className="hover:text-gray-300">
            <FiSearch className="w-6 h-6 cursor-pointer hover:text-gray-300" />
          </Link>
          <Link to="/cart" className="block px-4 py-2">
            <FaCartPlus className="w-6 h-6 cursor-pointer hover:text-gray-300" />
          </Link> */}
        </nav>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <FiAlignJustify />
          </button>
        </div>

        <div className="hidden md:block bg-[#F68B33] font-bold rounded-lg p-3 text-white">
          <nav>
            <Link to="/login" className="hover:text-gray-300">Login /</Link>
            <Link to="/register" className="hover:text-gray-300">Registration</Link>
            <Link to="/profile" className="hover:text-gray-300">/ Profile</Link>
          </nav>
        </div>
      </div>

      {isOpen && (
        <nav className="font-bold bg-white shadow-md md:hidden">
          <Link to="/" className="block px-4 py-2 hover:bg-gray-200">Home</Link>
          <Link to="/mylearning" className="block px-4 py-2 hover:bg-gray-200">My Learning</Link>
          <Link to="/about" className="block px-4 py-2 hover:bg-gray-200">About</Link>
          <Link to="/new-contact" className="block px-4 py-2 hover:bg-gray-200">Contact</Link>
          <Link to="/login" className="block px-4 py-2 hover:bg-gray-200">Login</Link>
          <Link to="/register" className="block px-4 py-2 hover:bg-gray-200">Registration</Link>
          {/* Uncomment if needed */}
          {/* <Link to="/search" className="block px-4 py-2 hover:bg-gray-200">
            <FiSearch className="w-6 h-6 cursor-pointer hover:text-gray-300" />
          </Link>
          <Link to="/cart" className="block px-4 py-2 hover:bg-gray-200">
            <FaCartPlus className="w-6 h-6 cursor-pointer hover:text-gray-300" />
          </Link> */}
        </nav>
      )}
    </header>
  );
};

export default Header;
