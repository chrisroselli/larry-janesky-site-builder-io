"use client";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => setNav(!nav);

  const navItems = [
    { id: 1, text: "Teacher", url: "#teacher" },
    { id: 2, text: "Leader", url: "#leader" },
    { id: 3, text: "Speaker", url: "#speaker" },
    { id: 4, text: "Author", url: "#author" },
  ];
  const outsideLinks = [
    { id: 1, text: "Think Daily", url: "https://www.thinkdaily.com/" },
    { id: 2, text: "The SOE", url: "https://www.thesoe.com/" },
    {
      id: 3,
      text: "Contractor Nation",
      url: "https://www.contractornation.com/",
    },
    { id: 4, text: "Store", url: "https://shop.thehighestcallingbook.com/" },
  ];

  return (
    <div className="sticky top-0 z-30 bg-primary-color flex justify-between items-center h-24 mx-auto px-5 lg:px-20">
      <div className="flex items-center gap-4 lg:gap-16">
        <div className="text-xl lg:text-3xl uppercase text-white font-gotham_bold">
          Larry Janesky
        </div>
      </div>
      {/* Desktop Navigation */}
      <div className="flex flex-col items-end xl:flex-row">
        <ul className="hidden md:flex">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="p-2 text-secondary-color hover:text-white rounded-xl lg:m-2 cursor-pointer duration-300"
            >
              <Link href={item.url}>{item.text}</Link>
            </li>
          ))}
        </ul>

        <ul className="hidden md:flex">
          {outsideLinks.map((item) => (
            <li
              key={item.id}
              className="p-2 text-white hover:text-secondary-color rounded-xl lg:m-2 cursor-pointer duration-300"
            >
              <Link href={item.url} target="_blank">
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? (
          <AiOutlineClose size={20} color={"#fff"} />
        ) : (
          <AiOutlineMenu size={20} color={"#fff"} />
        )}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[60%] bg-primary-color h-full ease-in-out duration-500"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        {/* Mobile Logo */}
        <h1 className="text-lg uppercase text-white font-gotham_bold m-4">
          Larry Janesky
        </h1>

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 duration-300 cursor-pointer text-secondary-color hover:text-white"
          >
            <Link onClick={() => setNav(false)} href={item.url}>
              {item.text}
            </Link>
          </li>
        ))}
        {outsideLinks.map((item) => (
          <li
            key={item.id}
            className="p-2 text-white hover:text-secondary-color rounded-xl m-2 cursor-pointer duration-300"
          >
            <Link href={item.url} target="_blank">
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
