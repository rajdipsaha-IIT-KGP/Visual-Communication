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
          In the regions of the Indian <b className="font-bold">Sundarbans</b>, 
          the <b className="font-bold">Butterfly Pea</b> plant, locally known as 
          <b className="font-bold"> Aparajita</b>, has long flourished as wild and untamed. 
          Traditionally, the flower was used for <b className="font-bold">rituals</b> and 
          <b className="font-bold"> natural dyeing</b>, but not as a beverage. The idea of brewing Aparajita into blue tea arrived recently during a 
          <b className="font-bold"> field school visit</b>, when a professor from the 
          <b className="font-bold"> University of Waterloo</b> shared its remarkable nutritional and economic potential.  
          It was followed by a hands-on workshop conducted by <b className="font-bold">Utsav</b>, 
          to train local communities on how to naturally process and prepare the flowers into tea.  
          Today, this small experiment stands as a symbol of <b className="font-bold">innovation</b>, 
          where local knowledge and global learning meet to create new livelihoods rooted in sustainability.

          <div className='flex justify-center'>
            <img src={Aparajita} alt="Aparajita Flower" 
              className="w-50 md:w-50 mt-4 mb-2 rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"/>
          </div>
          <b className=' flex justify-center'>Aparajita Flower</b>
        </>
      )
    },
    {
      name: "Production process",
      description: (
        <>
          The process begins by carefully plucking the 
          <b className="font-bold"> Aparajita flowers</b>, each one handpicked.  
          Then petals are gently washed and laid out to <b className="font-bold">dry in the sun</b>, 
          a natural process that takes two to three days.  
          After drying, the flowers are stored in <b className="font-bold">airtight aluminium containers</b> 
          to preserve them.  
          This process is not carried out during the <b className="font-bold">monsoon</b>, 
          when humidity and rain make drying difficult.  
          Finally, the tea is <b className="font-bold">packaged by local women</b>, adding both care and craftsmanship to every batch.

          <div className='flex justify-center'>
            <img src={BlueTeaP} alt="Blue Tea Process" 
              className="w-50 md:w-50 mt-4 mb-2 rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"/>
          </div>
          <b className=' flex justify-center'>Sun Dried Aparajita Flower</b>
        </>
      )
    },
    {
      name: "Grassroots and local mobilization",
      description: (
        <>
          <b className="font-bold">Community-based groups</b> have begun experimenting with 
          <b className="font-bold"> intercropping</b> and <b className="font-bold">collective branding</b>, 
          encouraged by the market.  
          This demonstrates how <b className="font-bold">local innovation</b> can strengthen rural economies and climate adaptation.
        </>
      )
    },
    {
      name: "Livelihood opportunities and market linkages",
      description: (
        <>
          Cultivating <b className="font-bold">Blue Tea</b> offers small and landless farmers an 
          <b className="font-bold"> alternative, climate-resilient income source</b> on saline soils.  
          Through local cooperatives like the <b className="font-bold">Farmers Producer Company (FPC)</b>, 
          farmers can link to urban market chains.

          <div className='flex justify-center'>
            <img src={BlueTeaMarket} alt="Blue Tea Market"
              className="w-50 md:w-50 mt-4 mb-2 rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"/>
          </div>
        </>
      )
    },
    {
      name: "Gender empowerment and agency",
      description: (
        <>
          <b className="font-bold">Women</b> play a key role in harvesting, drying, and packaging the flowers, 
          gaining <b className="font-bold">financial independence</b>.  
          The rising popularity of <b className="font-bold">herbal tea</b>, especially blue tea, 
          enhances women’s participation in value chains traditionally dominated by men.
        </>
      )
    },
    {
      name: "Nutritional benefits",
      description: (
        <>
          Rich in <b className="font-bold">antioxidants</b>, particularly 
          <b className="font-bold"> anthocyanins</b>, which help combat free radicals, 
          support healthy skin and hair, and promote overall wellness.  
          It has <b className="font-bold">anti-inflammatory</b> properties and aids in reducing 
          <b className="font-bold"> stress</b>, <b className="font-bold">digestion</b>, 
          and helps maintain <b className="font-bold">blood sugar levels</b>, cholesterol, and blood pressure.
        </>
      )
    },
    {
      name: "Food security (local to global)",
      description: (
        <>
          Locally, in <b className="font-bold">Kumirmari</b>, Blue Tea cultivation promotes a 
          <b className="font-bold">diversified cropping system</b>, reducing dependence on single crops 
          and helping restore soil fertility.  
          Its <b className="font-bold">drought-tolerant</b> and <b className="font-bold">wild-growing</b> nature 
          makes it suitable for saline-affected soils, enhancing climate resilience in the delta.  
          Globally, such adaptive crops support <b className="font-bold">sustainable agricultural transitions</b> 
          and strengthen <b className="font-bold">nutritional security</b> under changing climate conditions.
        </>
      )
    }
  ];

  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center items-center text-center text-white px-8 pt-20">
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
  );
};

export default BlueTea;
