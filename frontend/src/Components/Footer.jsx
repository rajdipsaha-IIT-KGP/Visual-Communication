import React from "react";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-black/90 text-gray-300 py-10 px-8 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* 🌿 Section 1 - About */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">EcoPlanet</h2>
          <p className="text-sm leading-relaxed">
            Dedicated to building a sustainable future through awareness,
            education, and environmental projects that make real impact.
          </p>
        </div>

        {/* 🌍 Section 2 - Quick Links */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-emerald-400 transition-all cursor-pointer"><button onClick={()=>{
              navigate("/");
            }}>Home</button></li>
            <li className="hover:text-emerald-400 transition-all cursor-pointer"><button onClick={()=>{
              navigate("/about");
            }}>About Us</button></li>
            <li className="hover:text-emerald-400 transition-all cursor-pointer"><button>Settings</button></li>
            
          </ul>
        </div>

        {/* 🌱 Section 3 - Resources */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Products</h2>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-emerald-400 transition-all cursor-pointer"><button onClick={()=>{
              navigate("/milk");
            }}>Milk</button></li>
            <li className="hover:text-emerald-400 transition-all cursor-pointer"><button onClick={()=>{
              navigate("/honey");
            }}>Honey</button></li>
            <li className="hover:text-emerald-400 transition-all cursor-pointer"><button onClick={()=>{
              navigate("/fish");
            }}>Fish</button></li>
            <li className="hover:text-emerald-400 transition-all cursor-pointer"><button 
            onClick={()=>{
              navigate("/oil");
            }}>Oil</button></li>
            <li className="hover:text-emerald-400 transition-all cursor-pointer"><button onClick={()=>{
              navigate("/ghee");
            }}>Ghee</button></li>
          </ul>
        </div>

        {/* 🌎 Section 4 - Contact */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Contact</h2>
          <ul className="text-sm space-y-2">
            <li>Email: info@ecoplanet.org</li>
            <li>Phone: +91 98765 43210</li>
            <li>Location: IIT Kharagpur, India</li>
          </ul>
        </div>
      </div>

      {/* 🌸 Bottom Line */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} EcoPlanet | Designed with 💚 for a Greener Tomorrow
      </div>
    </footer>
  );
};

export default Footer;
