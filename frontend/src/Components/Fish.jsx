import React from 'react';
import { motion } from "framer-motion";
import Dropdown from './Dropdown';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import FishBG from "../assets/Fish.jpeg";  
import Fishproduction from "../assets/Fishproduction.jpg";
import Fishmarket from "../assets/Fishmarket.jpg";

const Fish = () => {
  const navigate = useNavigate();

  const content = [
    {
      name: "History and Context",
      description: (
        <>
          Fishing has long been a central <b className="font-bold">livelihood</b> and <b className="font-bold">cultural practice</b> in the Indian Sundarbans, rooted in <b className="font-bold">place-based ecological knowledge</b> and <b className="font-bold">intergenerational skills</b>. Communities use ponds, rivers, canals, and even <b className="font-bold">paddy fields</b> to breed and harvest fish, showcasing both innovation and adaptation to local ecosystems.
          <br /><br />
          Historically, fishing has sustained households and shaped the <b className="font-bold">social and cultural fabric</b> of the region. After the devastating <b className="font-bold">Cyclone Aila</b>, saline intrusion forced many families to adopt <b className="font-bold">aquaculture</b> on their own lands—an example of resilience.
          <br /><br />
          Building on these traditional practices, IIT Kharagpur launched a collaborative experiment blending <b className="font-bold">scientific</b> and <b className="font-bold">traditional knowledge</b> systems. The first phase, supported by <b className="font-bold">CIFRI</b> and <b className="font-bold">SPSS</b>, showed major improvements in productivity.
        </>
      )
    },
    {
      name: "Production process",
      description: (
        <>
          Under the <b className="font-bold">“canal as commons”</b> fishing initiative, varieties of fish such as <b className="font-bold">Rohu, Catla, and Mrigel</b> are introduced into the Mukherjee canal.  
          <div className='flex justify-center'>
            <img src={Fishproduction} alt="Fish Production" className="w-50 md:w-50 mt-4 mb-2 rounded-xl shadow-lg hover:scale-105 transition-transform duration-500 "/>
          </div>
          <b className=' flex justify-center'>Aquaculture in Sunderbans</b>
        </>
      )
    },
    {
      name: "Livelihood opportunities and market linkages",
      description: (
        <>
          Freshly harvested fish are sold in <b className="font-bold">Kumirmari local markets</b> and through <b className="font-bold">cold-chain networks</b>, reaching <b className="font-bold">Dhamakhali</b> or Kolkata wholesale markets.  
          <div className='flex justify-center'>
            <img src={Fishmarket} alt="Fish Market" className="w-50 md:w-50 mt-4 mb-2 rounded-xl shadow-lg hover:scale-105 transition-transform duration-500 "/>
          </div>
          <b className=' flex justify-center'>Fish Market in Sundarban</b>
        </>
      )
    },
    {
      name: "Gender empowerment and agency",
      description: (
        <>
          Women actively participate in <b className="font-bold">monitoring fish growth</b>, <b className="font-bold">maintaining canal ecosystem health</b>, and <b className="font-bold">managing collective resources</b>, contributing to <b className="font-bold">decision-making</b> and <b className="font-bold">planning</b>.  
          This enhances <b className="font-bold">women’s empowerment</b> in the Sundarbans.
        </>
      )
    },
    {
      name: "Nutritional benefits",
      description: (
        <>
          Fish provides <b className="font-bold">high-quality protein</b> and <b className="font-bold">omega-3 fatty acids</b>, supporting <b className="font-bold">brain function</b>, <b className="font-bold">heart health</b>, and <b className="font-bold">muscle development</b>. It also offers essential nutrients such as <b className="font-bold">vitamin D</b> and <b className="font-bold">selenium</b>.
        </>
      )
    },
    {
      name: "Food security (local to global)",
      description: (
        <>
          Fishing is a backbone of <b className="font-bold">food and livelihood security</b> in the Sundarbans.  
          The <b className="font-bold">“canal as commons”</b> model ensures equitable resource use and contributes to <b className="font-bold">sustainable resource management</b> and <b className="font-bold">climate resilience</b>.
        </>
      )
    }
  ];

  return (
    <div
      className="relative w-full min-h-screen flex flex-col justify-center items-center text-center text-white px-8 pt-20"
      style={{
        backgroundImage: `url(${FishBG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // Fixed background
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-5xl flex flex-col items-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-8 text-white">
          FISHING (CANAL AS COMMONS)
        </h1>

        {/* Main Image */}
        <img
          src={FishBG}
          alt="Fishing"
          className="w-64 md:w-80 mb-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-500 bg-fixed"
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

      {/* Button like Blue Tea */}
      <div className="w-full flex justify-end mt-10 z-20">
        <button
          onClick={() => navigate("/honey")}
          className="lex items-center gap-2 underline decoration-white font-semibold rounded-xl shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer text-black bg-white p-3 mb-5"
        >
          Honey
          <span className="underline decoration-white">
            <FontAwesomeIcon icon={faCaretRight} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Fish;
