import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center items-center text-center text-white px-8 pt-20">
      {/* Overlay */}
      <div className="absolute inset-0"></div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 max-w-5xl flex flex-col items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Hero Heading */}
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-8 text-white"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          Discover Sundarban Products
        </motion.h1>

        {/* Hero Description */}
        <motion.p
          className="text-lg md:text-xl leading-relaxed text-gray-200 font-light bg-black/60 p-6 rounded-2xl shadow-lg hover:bg-black/70 transition-all duration-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          Explore the <b className="font-semibold">natural and sustainable products</b> of the Sundarbans. From <b className="font-semibold">Moringa Tea</b> to <b className="font-semibold">Hibiscus Tea</b> and <b className="font-semibold">Butterfly Pea Tea</b>, each product reflects <b className="font-semibold">community resilience</b>, <b className="font-semibold">eco-friendly practices</b>, and <b className="font-semibold">wellness</b>.  
          <br /><br />
          These products are crafted with care by local communities, preserving <b className="font-semibold">traditional knowledge</b> while supporting <b className="font-semibold">livelihoods</b>. The cultivation methods emphasize <b className="font-semibold">sustainability</b> and <b className="font-semibold">environmental protection</b>. Every sip of tea or use of a Sundarban product tells a story of <b className="font-semibold">heritage, culture, and nature</b>. By choosing these products, visitors contribute to <b className="font-semibold">empowered communities</b> and a healthier planet.
        </motion.p>

        {/* Call to Action */}
        <motion.button
          className="mt-8 px-8 py-4 bg-green-600 hover:bg-green-700 rounded-full font-semibold shadow-lg transition-all duration-500 cursor-pointer" 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          onClick={()=>{
          navigate("/bluetea")
          }}
        >
          Explore Products
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Home;
