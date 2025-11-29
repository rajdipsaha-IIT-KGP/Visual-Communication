import React from 'react';
import { motion } from "framer-motion";
import Dropdown from './Dropdown';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import HoneyImage from "../assets/Honey.jpg";
import Honeyproduction from "../assets/Honeyproduction.jpg";
import Honeyhistory from "../assets/Honeyhistory.jpg";
import Honeygender from "../assets/Honeygender.jpg";
import HoneyBG from "../assets/honeybg.jpeg"; // your honey background

const Honey = () => {
  const navigate = useNavigate();

  const content = [
    {
      name: "History and Context",
      description: (
        <>
          Honey collection in the <b className="font-bold">Sundarbans</b> has traditionally
          been a seasonal and highly regulated practice, with permits issued by
          the Forest Department for a short period of <b className="font-bold">15–21 days</b>.
          This limited window protects the <b className="font-bold">fragile mangrove ecosystem</b>,
          as year-round harvesting can disrupt both communities and wildlife.
          Despite these restrictions, honey remains an important source of
          livelihood, supported by generations of specialized knowledge that
          enables sustainable collection within this tight timeframe.
          <div className='flex justify-center'>
            <img src={Honeyhistory} alt="Honey History" className="w-50 md:w-50 mt-4 mb-2 rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"/>
          </div>
          <b className='flex justify-center'>Beekeeping in Sunderbans</b>
        </>
      )
    },
    {
      name: "Production process",
      description: (
        <>
          Honey collection in the Sundarbans is a unique blend of adventure and
          skill, carried out by experienced collectors known as <b className="font-bold">maules</b>.
          Harvesting occurs exclusively during the <b className="font-bold">spring season</b>,
          within a strict <b className="font-bold">21-day period</b> authorized by the Forest Department.
          Maules receive a <b className="font-bold">Boat License Certificate (BLC)</b>, granting
          legal access to core forest zones. All registered collectors are also
          members of the <b className="font-bold">Sundarban-Fed Honey Natural Product Farmers Company</b>,
          ensuring livelihood support and structured market linkages.
          <div className='flex justify-center'>
            <img src={Honeyproduction} alt="Honey Production" className="w-50 md:w-50 mt-4 mb-2 rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"/>
          </div>
          <b className='flex justify-center'>Honey Collection in Sunderbans</b>
        </>
      )
    },
    {
      name: "Grassroots and local mobilization",
      description: (
        <>
          Honey collection depends on a closely coordinated network of
          <b className="font-bold"> maules</b>, who work together to safely navigate the core
          forest regions during the short harvest season. Their membership in the
          <b className="font-bold"> Sundarban-Fed Honey Natural Product Farmers Company</b>
          promotes community-driven decision-making, knowledge sharing, and
          adherence to environmentally sound harvesting methods. This
          community-based structure strengthens social cohesion and ensures both
          ecological and economic sustainability.
        </>
      )
    },
    {
      name: "Livelihood opportunities and market linkages",
      description: (
        <>
          The <b className="font-bold">Farmer Producer Company (FPC)</b> acts as a crucial bridge
          between honey collectors and the market, providing stable livelihood
          opportunities. With improved branding and certification, Sundarban wild
          honey has strong potential across <b className="font-bold">organic</b> and
          <b className="font-bold"> fair-trade markets</b>, increasing income security for
          forest-dependent communities.
          <div className='flex justify-center'>
            <img src={HoneyImage} alt="Honey Production" className="w-50 md:w-50 mt-4 mb-2 rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"/>
          </div>
          <b className='flex justify-center'>Honey As a Final Product</b>
        </>
      )
    },
    {
      name: "Gender empowerment and agency",
      description: (
        <>
          Although honey collection is traditionally dominated by <b className="font-bold">men</b>,
          women can also be trained in <b className="font-bold">beekeeping</b> and
          <b className="font-bold"> honey processing</b>. This diversification not only reduces
          direct dependence on the forest but also creates alternative income
          streams, fostering greater <b className="font-bold">gender empowerment</b>.
          <div className='flex justify-center'>
            <img src={Honeygender} alt="Honey Gender" className="w-50 md:w-50 mt-4 mb-2 rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"/>
          </div>
          <b className='flex justify-center'>Women Empowerment in Honey Collection</b>
        </>
      )
    },
    {
      name: "Nutritional benefits",
      description: (
        <>
          Wild honey is a natural and healthier alternative to processed sugar.
          It is rich in <b className="font-bold">antioxidants</b>, boosts energy, aids digestion,
          and possesses <b className="font-bold">antibacterial</b> and
          <b className="font-bold"> wound-healing</b> properties, making it a powerful natural
          functional food.
        </>
      )
    },
    {
      name: "Food security (local to global)",
      description: (
        <>
          Honey collection in the Sundarbans links <b className="font-bold">biodiversity
          conservation</b> with <b className="font-bold">rural food security</b>. It sustains
          nutrition and income for forest-dependent communities. This craft is
          an <b className="font-bold">intergenerational skill</b>, requiring deep understanding
          of ecological conditions that influence honey quality, making it both
          a traditional knowledge system and a global example of sustainable
          food practices.
        </>
      )
    }
  ];

  return (
    <div
      className="relative w-full min-h-screen text-white bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${HoneyBG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Scrollable content */}
      <div className="relative z-10 w-full flex flex-col items-center pt-20 px-8 overflow-y-auto">
        <motion.div
          className="relative z-10 max-w-5xl flex flex-col items-center pb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-8 text-white">
            WILD HONEY COLLECTION
          </h1>

          <img
            src={HoneyImage}
            alt="Wild Honey"
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

          <div className="w-full flex justify-end mt-4 z-20">
            <button
              onClick={() => navigate("/bori")} // update this route
              className="flex items-center gap-2 underline decoration-white font-semibold rounded-xl shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer text-black bg-white p-3 mb-5"
            >
              Bori
              <span className="underline decoration-white">
                <FontAwesomeIcon icon={faCaretRight} />
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Honey;
