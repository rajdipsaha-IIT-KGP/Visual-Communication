import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);
  const navigate = useNavigate();

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
      {/* Sidebar Open Button */}
      <button
        className="fixed top-5 left-5 z-50 text-white bg-black/70 rounded-full p-3 cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <FontAwesomeIcon icon={faBars} size="lg" />
      </button>

      {/* Dim background overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"></div>
      )}

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full w-64 bg-black/40 backdrop-blur-md text-white shadow-2xl z-50
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
        style={{ display: "block" }}
      >
        {/* Title Section */}
        <div
          style={{
            textAlign: "center",
            padding: "24px 0",
            borderBottom: "1px solid rgb(55 65 81)",
          }}
        >
          <h1 className="text-2xl font-semibold tracking-wide">Products</h1>
        </div>

        {/* Menu List */}
        <ul style={{ listStyle: "none", padding: "32px 24px 0", margin: 0 }}>
          <li style={{ marginBottom: "24px", textAlign: "center" }}>
            <button className="hover:text-emerald-400" onClick={() => navigate("/bluetea")}>
              Blue Tea
            </button>
          </li>

          <li style={{ marginBottom: "24px", textAlign: "center" }}>
            <button className="hover:text-emerald-400" onClick={() => navigate("/moringatea")}>
              Moringa Tea
            </button>
          </li>

          <li style={{ marginBottom: "24px", textAlign: "center" }}>
            <button className="hover:text-emerald-400" onClick={() => navigate("/hibiscustea")}>
              Hibiscus Tea
            </button>
          </li>

          <li style={{ marginBottom: "24px", textAlign: "center" }}>
            <button className="hover:text-emerald-400" onClick={() => navigate("/hibiscusjuice")}>
              Hibiscus Juice
            </button>
          </li>

          <li style={{ marginBottom: "24px", textAlign: "center" }}>
            <button className="hover:text-emerald-400" onClick={() => navigate("/fish")}>
              Fish
            </button>
          </li>
          <li style={{ marginBottom: "24px", textAlign: "center" }}>
            <button className="hover:text-emerald-400" onClick={() => navigate("/honey")}>
              Honey
            </button>
          </li>
          <li style={{ marginBottom: "24px", textAlign: "center" }}>
            <button className="hover:text-emerald-400" onClick={() => navigate("/bori")}>
              Bori
            </button>
          </li>
          <li style={{ marginBottom: "24px", textAlign: "center" }}>
            <button className="hover:text-emerald-400" onClick={() => navigate("/roselle")}>
              Roselle
            </button>
          </li>
        </ul>

        {/* Home Button Bottom */}
       <div
  style={{
    position: "absolute",
    bottom: 10,
    width: "100%",
    padding: "50px 24px",   
    borderTop: "1px solid rgb(55 65 81)",
    textAlign: "center",
  }}
>
  <ul style={{ listStyle: "none", padding: 0 }}>
    <li style={{ marginBottom: "20px" }}>    {/* extra spacing */}
      <button
        className="text-lg hover:text-emerald-400"
        onClick={() => navigate("/")}
      >
        Home
      </button>
    </li>
              
    <li>
      <button
        className="text-lg hover:text-emerald-400"
        onClick={() => navigate("/about")}
      >
        About Us
      </button>
    </li>
  </ul>
</div>
    
     
      </div>
    </>
  );
};

export default Header;
