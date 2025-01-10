import React, { useState } from "react";
import { navLinks } from "../constants/index";

const NavItems = () => {
  return (
    <ul className="nav-ul">
      {navLinks.map(({ id, name, href }) => (
        <li key={id} className="nav-li">
          <a className="nav-li_a" href={href}>
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);

  return (
    <header className="text-white fixed top-0 left-0 right-0 bg-black/90">
      {/* web navbar */}
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a
            href="/"
            className="text-neutral-400 font-bold text-xl transition-colors hover:text-white"
          >
            {" "}
            hello
          </a>

          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white sm:hidden font-bold text-xl transition-colors focus:outline-none flex "
            aria-label="Toggle Menu"
          >
            {/* <i class="fa-solid fa-bars"></i> */}
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="size-6"
            />
          </button>

          <nav className="hidden sm:flex">
            <NavItems />
          </nav>
        </div>
      </div>

      {/* mobile navbar */}
      <div
        className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}
      >
        <nav className="p-5" >
        <NavItems/>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
