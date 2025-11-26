import React from 'react'
import MilkBackground from "../assets/HibiscousTea.png";
import { motion } from "framer-motion";
import Dropdown from './Dropdown';
import History from   "../assets/Red Hibiscus flowers.jpg";
import HibiscousProcess from  "../assets/HibiscousProcess.jpg";
import Packaging from  "../assets/Packed Hibiscus Tea.jpg";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
const HibiscousTea = () => {
  const navigate = useNavigate();
   const content = [
    {
      name: "History and Context",
      description: (
        <>
          During one of the field visits to <b className="font-bold">Sundarban Bari</b> in <b className="font-bold">Kumirmari</b>, parents of <b className="font-bold">Dr Anuradha Choudry</b> observed the abundant, naturally blooming <b className="font-bold">hibiscus plants</b> thriving across the landscape. Recognizing their <b className="font-bold">nutritional</b> and <b className="font-bold">medicinal potential</b>, Dr Choudry’s mother encouraged the local community to explore new ways of using these flowers, particularly by preparing <b className="font-bold">hibiscus tea</b> and juice. What began as a simple suggestion soon evolved into a local practice that combined <b className="font-bold">tradition, health awareness</b>, and <b className="font-bold">sustainable enterprise</b>.
          <div className='flex justify-center'><img src={History} alt="Hibiscous Tea" className="w-50 md:w-50 mt-4 mb-2 rounded-xl shadow-lg hover:scale-105 transition-transform duration-500 "/></div>
           <b className=' flex justify-center'>Red Hibiscus Of Sunderbans</b>
        </>
      )
    },
    {
      name: "Production process",
      description: (
        <>
          The process begins with the careful selection of freshly bloomed <b className="font-bold">hibiscus petals</b>, allowing them to dry under the sun. Once dried, they are stored in <b className="font-bold">airtight containers</b> to preserve their <b className="font-bold">colour, shelf life</b> and <b className="font-bold">nutritional value</b>. When soaked in hot water, the petals release a <b className="font-bold">brilliant ruby-red infusion</b> that is <b className="font-bold">tangy, aromatic</b>, and rich in <b className="font-bold">vitamin C</b>.
          <div className='flex justify-center'><img src={HibiscousProcess} alt="Hibiscous Tea" className="w-50 md:w-50 mt-4 mb-2 rounded-xl shadow-lg hover:scale-105 transition-transform duration-500 "/></div>
           <b className=' flex justify-center'>Dried Hibiscus Petals</b>
        </>
      )
    },
    {
      name: "Grassroots and local mobilization",
      description: (
        <>
          Local <b className="font-bold">women’s groups</b> and <b className="font-bold">self-help collectives</b> in Kumirmari have come together to <b className="font-bold">cultivate, process, and promote hibiscus tea</b>. This grassroots collaboration strengthens <b className="font-bold">community networks</b> while encouraging sustainable use of locally available <b className="font-bold">natural resources</b>.
        </>
      )
    },
    {
      name:"Livelihood opportunities and market linkages",
      description: (
        <>
          The growing popularity of <b className="font-bold">herbal teas</b> has opened new <b className="font-bold">market opportunities</b> for <b className="font-bold">small-scale producers</b>. Through <b className="font-bold">training</b> and local <b className="font-bold">branding initiatives</b>, community members are now able to earn steady incomes by connecting their <b className="font-bold">hibiscus products</b> to regional and urban <b className="font-bold">wellness markets</b>, mostly mediated through the <b className="font-bold">Farmers Producer Company (FPC)</b> networks.
          <div className='flex justify-center'><img src={Packaging} alt="Hibiscous Tea" className="w-50 md:w-50 mt-4 mb-2 rounded-xl shadow-lg hover:scale-105 transition-transform duration-500 "/></div>
          
        </>
      )
    },
    {
      name:`Gender empowerment and agencys`,
      description: (
        <>
          Like in Blue Tea, <b className="font-bold">women</b> play a key role in <b className="font-bold">harvesting, drying, and packaging</b> the flowers, thereby gaining <b className="font-bold">financial independence</b>. As <b className="font-bold">hibiscus tea</b> is gaining popularity in the market, this enhances women’s participation in <b className="font-bold">value chains</b> traditionally dominated by men.
        </>
      )
    },
    {
      name:"Nutritional benefits",
      description: (
        <>
          A rich source of <b className="font-bold">antioxidants</b> and <b className="font-bold">vitamin C</b>, <b className="font-bold">Hibiscus Tea</b> helps regulate <b className="font-bold">blood pressure</b>, supports <b className="font-bold">heart health</b>, and aids in <b className="font-bold">cooling the body</b>. It also contributes to better <b className="font-bold">skin</b> and <b className="font-bold">liver function</b>.
        </>
      )
    },
    {
      name:`Food security (local to global)`,
      description: (
        <>
          <b className="font-bold">Hibiscus cultivation</b> offers an alternative <b className="font-bold">livelihood</b> for <b className="font-bold">small-scale farmers</b>, especially women, while restoring <b className="font-bold">degraded land</b>. Its <b className="font-bold">petals</b> and <b className="font-bold">leaves</b> are used both for <b className="font-bold">nutrition</b> and local <b className="font-bold">herbal medicine</b>, reflecting how <b className="font-bold">value-added herbal products</b> can create <b className="font-bold">sustainable income streams</b> and diversify <b className="font-bold">food sources</b> in <b className="font-bold">climate-affected regions</b>.
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
          HIBISCUS TEA
        </h1>

        {/* Hibiscus image just above the paragraph */}
        <img
          src={MilkBackground}
          alt="Hibiscus"
          className="w-64 md:w-80 mb-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
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
          onClick={() => navigate("/hibiscusjuice")}
          className="flex items-center gap-2 underline decoration-white text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
        >
          Hibiscus Juice
          <span className="underline decoration-white">
            <FontAwesomeIcon icon={faCaretRight} />
          </span>
        </button>
      </div>
    </div>
  )
}

export default HibiscousTea;
