import React, { useState } from "react";
import { BsBag } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  let links = [
    { name: "About", path: "/about" },
    { name: "Blog", path: "/about" },
    { name: "Login", path: "/about" },
  ];
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
        <Link className="sm:hidden" to="/shop">
          Shop
        </Link>
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
          <div className="p-10">
            <div className="dropdown inline-block relative">
              <Link to="shop">
                <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                  <span className="mr-1">Shop</span>
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                  </svg>
                </button>
              </Link>
              <ul className="dropdown-menu absolute hidden hover:block text-gray-700 pt-1">
                <li className="">
                  <a
                    className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    One
                  </a>
                </li>
                <li className="">
                  <a
                    className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Two
                  </a>
                </li>
                <li className="">
                  <a
                    className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Three is the magic number
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {links.map((link, index) => (
            <li key={index} className="my-2 sm:my-0 sm:mx-2">
              <Link className="hover:text-gray-800" to={link.path}>
                {link.name}
              </Link>
            </li>
          ))}
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
