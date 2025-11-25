import React from 'react'
import MilkBackground from "../assets/Aparajita Tea.jpg";
import { motion } from "framer-motion";
import Dropdown from './Dropdown';
import BlueTeaP from "../assets/BlueTeaProcess.jpg";
import BlueTeaMarket from "../assets/BlueTeaMarket.jpg";
import Aparajita from "../assets/Aparajita.jpg";

const BlueTea = () => {
  const content = [
    {
      name: "History and Context",
      description: (
        <>
          In the regions of the Indian <b className="font-bold">Sundarbans</b>, <b className="font-bold">Butterfly Pea</b> plant, locally known as <b className="font-bold">Aparajita</b>, has long flourished as wild and untamed. Traditionally, the flower was used for <b className="font-bold">rituals</b> and <b className="font-bold">natural dyeing</b>, but not as a beverage. The idea of brewing <b className="font-bold">Aparajita</b> into <b className="font-bold">Blue Tea</b> arrived recently during a field school visit, when a professor from the <b className="font-bold">University of Waterloo</b> shared its <b className="font-bold">nutritional</b> and <b className="font-bold">economic potential</b>. A hands-on workshop conducted by <b className="font-bold">Utsav</b> trained local communities to naturally process and prepare the flowers into tea. Today, this small experiment stands as a symbol of <b className="font-bold">innovation</b>, where local knowledge and global learning meet to create new <b className="font-bold">livelihoods</b> rooted in <b className="font-bold">sustainability</b>.
          <div className='flex justify-center'><img src={Aparajita} alt="Aparajita Flower" className="w-50 md:w-50 mt-4 mb-2 rounded-xl shadow-lg hover:scale-105 transition-transform duration-500 "/></div>
          <b className=' flex justify-center'>Aparajita Flower</b>
        </>
      )
    },
    {
      name: "Production process",
      description: (
        <>
          The process begins by carefully plucking the <b className="font-bold">Aparajita flowers</b>, each handpicked. Petals are gently washed and laid out to dry in the sun over two to three days. After drying, they are stored in <b className="font-bold">airtight aluminium containers</b> to preserve them. This process is avoided during <b className="font-bold">monsoon</b>, when humidity and rain make drying difficult. Finally, the tea is packaged by <b className="font-bold">local women</b>, adding care and craftsmanship to every batch.
          <div className='flex justify-center'><img src={BlueTeaP} alt="Blue Tea" className="w-50 md:w-50 mt-4 mb-2 rounded-xl shadow-lg hover:scale-105 transition-transform duration-500 "/></div>
           <b className=' flex justify-center'>Sun Dried Aparajita Flower</b>
          
        </>
      )
    },
    {
      name: "Grassroots and local mobilization",
      description: (
        <>
          <b className="font-bold">Community-based groups</b> have begun experimenting with <b className="font-bold">intercropping</b> and <b className="font-bold">collective branding</b>, encouraged by market demand. This demonstrates how <b className="font-bold">local innovation</b> can strengthen <b className="font-bold">rural economies</b> and <b className="font-bold">climate adaptation</b>.
        </>
      )
    },
    {
      name:"Livelihood opportunities and market linkages",
      description: (
        <>
          Cultivating <b className="font-bold">Blue Tea</b> offers <b className="font-bold">small and landless farmers</b> an alternative, <b className="font-bold">climate-resilient income source</b> on <b className="font-bold">saline soils</b>. Through local cooperatives like the <b className="font-bold">Farmers Producer Company (FPC)</b>, farmers can connect to <b className="font-bold">urban market chains</b>.
           <div className='flex justify-center'><img src={BlueTeaMarket} alt="Blue Tea" className="w-50 md:w-50 mt-4 mb-2 rounded-xl shadow-lg hover:scale-105 transition-transform duration-500 "/></div>
           
        </>
      )
    },
    {
      name:`Gender empowerment and agencys`,
      description: (
        <>
          <b className="font-bold">Women</b> play a key role in <b className="font-bold">harvesting, drying, and packaging</b> the flowers, gaining <b className="font-bold">financial independence</b>. The growing popularity of <b className="font-bold">Blue Tea</b> enhances women’s participation in <b className="font-bold">value chains</b> traditionally dominated by men.

        </>
      )
    },
    {
      name:"Nutritional benefits",
      description: (
        <>
          Rich in <b className="font-bold">antioxidants</b>, particularly <b className="font-bold">anthocyanins</b>, which help combat <b className="font-bold">free radicals</b>, support <b className="font-bold">healthy skin and hair</b>, and promote <b className="font-bold">overall wellness</b>. It has <b className="font-bold">anti-inflammatory properties</b> and aids in reducing <b className="font-bold">stress</b>, improving <b className="font-bold">digestion</b>, and keeping <b className="font-bold">blood sugar, cholesterol, and blood pressure</b> in check.
        </>
      )
    },
    {
      name:`Food security (local to global)`,
      description: (
        <>
          Locally, in <b className="font-bold">Kumirmari</b>, <b className="font-bold">Blue Tea cultivation</b> promotes a <b className="font-bold">diversified cropping system</b>, reducing dependence on a single crop and restoring <b className="font-bold">soil fertility</b>. Its <b className="font-bold">drought-tolerant</b> and <b className="font-bold">untamed nature</b> makes it suitable for <b className="font-bold">saline-affected soils</b>, enhancing <b className="font-bold">climate resilience</b> in the delta. Globally, such <b className="font-bold">adaptive crops</b> contribute to <b className="font-bold">sustainable agricultural transitions</b> and <b className="font-bold">nutritional security</b> under changing climate conditions.
        </>
      )
    }
  ];

  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center items-center text-center text-white px-8 pt-20">
      {/* Overlay for readability */}
      <div className="absolute inset-0"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-5xl flex flex-col items-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-8 text-white">
          BLUE TEA
        </h1>

        {/* Blue Tea image */}
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
    </div>
  )
}

export default BlueTea;
