import React, { useState, useEffect, useRef } from "react";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHome,
  faUser,
  faCode,
  faCalendarAlt,
  faImages,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);
   const navigate = useNavigate();

  const navItems = [
    { name: "Home", icon: faHome },
    { name: "Milk", icon: faUser },
    { name: "Honey", icon: faCode },
    { name: "Fish", icon: faCalendarAlt },
    { name: "Ghee", icon: faImages },
  ];

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <>
      {/* Menu Button */}
      <button
        className="fixed top-5 left-5 z-50 text-white bg-black/70 rounded-full p-3 cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <FontAwesomeIcon icon={faBars} size="lg" />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"></div>
      )}

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full w-64 
                    bg-black/40 backdrop-blur-md text-white shadow-2xl z-50
                    transform transition-transform duration-300 ease-in-out
                    ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Centered Heading */}
        <div className="flex justify-center items-center py-6 border-b border-gray-700">
          <h1 className="text-2xl font-semibold tracking-wide">Products</h1>
        </div>

        {/* Navigation Items */}
      <ul className="flex flex-col space-y-6 mt-8 px-6">
  
    
         <li
      
      className="flex justify-center items-center gap-3 cursor-pointer text-lg hover:text-emerald-400 transition"
    >
     
      <button
        onClick={() => {
        navigate('/about')
        }}
      >
       Milk
      </button>
    </li>
     <li
      
      className="flex justify-center items-center gap-3 cursor-pointer text-lg hover:text-emerald-400 transition"
    >
     
      <button
        onClick={() => {
        navigate('/about')
        }}
      >
      Honey
      </button>
    </li>
     <li
      
      className="flex justify-center items-center gap-3 cursor-pointer text-lg hover:text-emerald-400 transition"
    >
     
      <button
        onClick={() => {
        navigate('/about')
        }}
      >
      Fish
      </button>
    </li>
    <li
      
      className="flex justify-center items-center gap-3 cursor-pointer text-lg hover:text-emerald-400 transition"
    >
     
      <button
        onClick={() => {
        navigate('/about')
        }}
      >
      Oil
      </button>
    </li>
    <li
      
      className="flex justify-center items-center gap-3 cursor-pointer text-lg hover:text-emerald-400 transition"
    >
     
      <button
        onClick={() => {
        navigate('/about')
        }}
      >
      Ghee
      </button>
    </li>
</ul>

      </div>
    </>
  );
};

export default Header;
