import React, { useState } from "react";
import { BsBag } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="p-4 flex flex-col items-center justify-around max-w-[1200px] sm:m-auto sm:flex-row">
      <h1 className="text-xl font-bold sm:w-3/4 md:w-2/4 lg:w-1/4">
        Pectus Plus
      </h1>
      <div className="flex min-w-[280px] items-center justify-evenly p-5 sm:min-w-0 w-full sm:w-auto  sm:order-3">
        <button className="sm:hidden focus:outline-none" onClick={toggleNav}>
          {isNavOpen ? (
            <IoClose className="text-2xl absolute top-10 left-5 z-[1] cursor-pointer" />
          ) : (
            <RxHamburgerMenu className="text-2xl cursor-pointer" />
          )}
        </button>
        <a className="sm:hidden" href="#shop">
          Shop
        </a>
        <a className="sm:hidden" href="#welcome">
          Welcome
        </a>
        <button>
          <BsBag className="text-2xl cursor-pointer sm:w-auto" />
        </button>
      </div>
      <div
        className={`${
          isNavOpen
            ? "flex w-[88%] h-full inset-y-0 left-0 absolute p-5 bg-gray-400 justify-center items-center pb-[200px]"
            : "hidden"
        } sm:block sm:relative sm:bg-inherit sm:pb-0 sm:order-2`}
      >
        <ul className="sm:flex sm:justify-center sm:items-center">
          <li className="my-2 sm:my-0 sm:mx-3">
            <a className="text-gray-600 hover:text-gray-800" href="#shop">
              Shop
            </a>
          </li>
          <li className="my-2 sm:my-0 sm:mx-3">
            <a className="text-gray-600 hover:text-gray-800" href="#about">
              About
            </a>
          </li>
          <li className="my-2 sm:my-0 sm:mx-3">
            <a className="text-gray-600 hover:text-gray-800" href="#blog">
              Blog
            </a>
          </li>
          <li className="my-2 sm:my-0 sm:mx-3">
            <a className="text-gray-600 hover:text-gray-800" href="#login">
              Login
            </a>
          </li>
        </ul>
      </div>
      <div className="w-full sm:flex sm:order-1">
        <input
          type="text"
          placeholder="Search Products"
          className="border-4 border-solid border-gray-300 rounded-md p-2 w-full"
        />
      </div>
    </nav>
  );
};

export default Navbar;
