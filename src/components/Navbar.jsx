import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";

const navItems = [
  { name: 'HOME', path: '/' },
  { name: 'SERVICES', path: '/services' },
  { name: 'ABOUT', path: '/about' },
  { name: 'SHOP', path: '/shop' },
  { name: 'CONTACT', path: '/contact' },
];

function Navbar() {
  const [clicked, setClicked] = useState(null);
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav
      className={`w-full z-50  ${isHome
          ? "bg-transparent absolute top-0 left-0"
          : "bg-cover bg-center bg-fixed bg-black/40 backdrop-blur-sm"
        }`}
      style={
        !isHome
          ? { backgroundImage: "url('/banner-bg.png')" }
          : {}
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">


          <div className="flex items-center">
            <Link
              to="/"
              className={'text-2xl font-bold '}
            >
              VINTAGEFUR
            </Link>
          </div>


          <div className="hidden sm:flex sm:space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => {
                  setClicked(index);
                  setTimeout(() => setClicked(null), 300);
                }}
                className={`inline-flex  items-center px-1 pt-1 text-lg font-medium transition duration-300 
                  ${isHome ? " hover:text-yellow-400" : " hover:text-yellow-400"} 
                  ${clicked === index ? "animate-glitch" : ""}`}
              >
                {item.name}
              </Link>
            ))}
          </div>


          <div className="flex items-center  space-x-4">
            <IoSearch className={`text-xl cursor-pointer transition ${isHome ? " hover:text-yellow-400" : " hover:text-yellow-400"}`} />
            <p className={`cursor-pointer text-lg transition ${isHome ? " hover:text-yellow-400" : " hover:text-yellow-400"}`}>LOGIN</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
