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
          <li className="hidden sm:block my-2 sm:my-0 sm:mx-2">
            <div className="dropdown dropdown-hover">
              <label tabIndex={0} className="btn m-1 border-0 p-0">
                <Link to="shop">Shop</Link>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow rounded-box w-52 z-10 bg-red-50"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
          </li>
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
