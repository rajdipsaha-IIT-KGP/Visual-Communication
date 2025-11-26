import React from 'react'
import MilkBackground from "../assets/Aparajita Tea3.jpg";
import { motion } from "framer-motion";
import Dropdown from './Dropdown';
import BlueTeaP from "../assets/BlueTeaProcess.jpg";
import BlueTeaMarket from "../assets/BlueTeaMarket.jpg";
import Aparajita from "../assets/Aparajita.jpg";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";


const BlueTea = () => {
  const navigate = useNavigate();

  const content = [
    {
      name: "History and Context",
      description: (
        <>
          In the regions of the Indian <b className="font-bold">Sundarbans</b>, <b className="font-bold">Butterfly Pea</b> plant, locally known as <b className="font-bold">Aparajita</b>, has long flourished as wild and untamed...
          <div className='flex justify-center'>
            <img src={Aparajita} alt="Aparajita Flower" className="w-50 md:w-50 mt-4 mb-2 rounded-xl shadow-lg hover:scale-105 transition-transform duration-500 "/>
          </div>
          <b className=' flex justify-center'>Aparajita Flower</b>
        </>
      )
    },
    {
      name: "Production process",
      description: (
        <>
          The process begins by carefully plucking the <b className="font-bold">Aparajita flowers</b>...
          <div className='flex justify-center'>
            <img src={BlueTeaP} alt="Blue Tea" className="w-50 md:w-50 mt-4 mb-2 rounded-xl shadow-lg hover:scale-105 transition-transform duration-500 "/>
          </div>
          <b className=' flex justify-center'>Sun Dried Aparajita Flower</b>
        </>
      )
    },
    {
      name: "Grassroots and local mobilization",
      description: (
        <>
          <b className="font-bold">Community-based groups</b> have begun experimenting with <b className="font-bold">intercropping</b>...
        </>
      )
    },
    {
      name:"Livelihood opportunities and market linkages",
      description: (
        <>
          Cultivating <b className="font-bold">Blue Tea</b> offers opportunities...
          <div className='flex justify-center'>
            <img src={BlueTeaMarket} alt="Blue Tea" className="w-50 md:w-50 mt-4 mb-2 rounded-xl shadow-lg hover:scale-105 transition-transform duration-500 "/>
          </div>
        </>
      )
    },
    {
      name:`Gender empowerment and agency`,
      description: (
        <>
          <b className="font-bold">Women</b> play a key role...
        </>
      )
    },
    {
      name:"Nutritional benefits",
      description: (
        <>
          Rich in <b className="font-bold">antioxidants</b>, particularly <b className="font-bold">anthocyanins</b>...
        </>
      )
    },
    {
      name:`Food security (local to global)`,
      description: (
        <>
          Locally, in <b className="font-bold">Kumirmari</b>...
        </>
      )
    }
  ];

  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center items-center text-center text-white px-8 pt-20">

      {/* Overlay — fixed with pointer-events-none */}
      <div className="absolute inset-0 pointer-events-none"></div>

      <motion.div
        className="relative z-10 max-w-5xl flex flex-col items-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-8 text-white">
          BLUE TEA
        </h1>

        <img
          src={MilkBackground}
          alt="Blue Tea"
          className="w-64 md:w-70 mb-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
        />

        <div className="w-full">
          {content.map((item, index) => (
            <Dropdown key={index} title={item.name}>
              <p className="text-left text-gray-200 font-normal bg-black/60 p-4 rounded-2xl shadow-lg hover:bg-black/70 transition-all duration-500">
                {item.description}
              </p>
            </Dropdown>
          ))}
        </div>
      </motion.div>

      
    <div className="w-full flex justify-end mt-10 z-20">
  <button
    onClick={() => navigate("/moringatea")}
    className="flex items-center gap-2 underline decoration-white text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
  >
    Moringa Tea
    <span className="underline decoration-white">
      <FontAwesomeIcon icon={faCaretRight} />
    </span>
  </button>
</div>



    </div>
  )
}

export default BlueTea;
