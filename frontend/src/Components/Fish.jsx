import React from 'react';
import { motion } from "framer-motion";
import Dropdown from './Dropdown';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import FishBG from "../assets/Fish.jpeg";  
import FishBG1 from "../assets/Fish.png";  
import Fishproduction from "../assets/Fishproduction.jpg";
import Fishmarket from "../assets/Fishmarket.jpg";

const Fish = () => {
  const navigate = useNavigate();

 const content = [
  {
    name: "History and Context",
    description: (
      <>
        <b className="font-bold">Fishing has long been a central livelihood and cultural practice</b> in the Indian Sundarbans, rooted in place-based ecological knowledge and intergenerational skills. Communities utilize a variety of water bodies, including ponds, rivers, canals, and even paddy fields, to breed and harvest fish, reflecting both innovation and adaptation to local ecosystems. <b className="font-bold">Historically, fishing has not only sustained livelihoods but also shaped the social and cultural fabric</b> of the region. In recent years, following the devastating cyclone Aila, saline water intrusion compelled many households to adopt aquaculture on their own lands, demonstrating resilience and innovation in the face of environmental challenges. 
        <br /><br />
        Building on these traditional practices, a collaborative experiment was initiated by <b className="font-bold">IIT Kharagpur</b> to explore how scientific and traditional knowledge systems could work together to enhance fishing yields. The first phase of the project, conducted in partnership with CIFRI and SPSS, demonstrated significant improvements in productivity, validating the integration of local expertise with scientific methods. In its current phase, the initiative is expanding through the <b className="font-bold">“canal as commons”</b> framework, involving <b className="font-bold">41 households</b> to provide alternative livelihoods for marginalized community members those lack access to private lands or ponds, reinforcing both ecological sustainability and socio-economic resilience in the Sundarbans.
      </>
    ),
  },
  {
    name: "Production process",
    description: (
      <>
        As part of the <b className="font-bold">“canal as commons” fishing initiative</b>, different varieties of fish, including <b className="font-bold">Rohu, Catla, and Mrigel</b>, have been introduced into the Mukherjee canal. The 41 participating households actively monitor the canals, <b className="font-bold">ensuring the health of the fish populations</b> while keeping track of the overall canal ecosystem. This collaborative approach blends traditional knowledge and scientific guidance, supporting sustainable production and maintaining ecological balance.
        <div className="flex justify-center">
          <img
            src={Fishproduction}
            alt="Fish Production"
            className="w-50 md:w-50 mt-4 mb-2 rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
          />
        </div>
        <b className="flex justify-center">Aquaculture in Sunderbans</b>
      </>
    ),
  },
  {
    name: "Grassroots and local mobilization",
    description: (
      <>
        The <b className="font-bold">“canal as commons” fishing initiative</b> is driven by 41 households organized into 7 groups, each with distinct responsibilities to ensure smooth management and monitoring. From young to old, men to women, the entire community actively participates, reflecting a <b className="font-bold">strong collective effort</b>. This inclusive approach not only strengthens social cohesion but also empowers the community to sustainably manage <b className="font-bold">local water resources</b> and fishing practices.
      </>
    ),
  },
  {
    name: "Livelihood opportunities and market linkages",
    description: (
      <>
        Fishing is one of the primary sources of <b className="font-bold">sustenance and food security</b> in the Indian Sundarbans. The fish can be sold in <b className="font-bold">Kumirmari local markets</b> or through cold-chain, it can be transported to wholesale markets in <b className="font-bold">Dhamakhali</b> in Kolkata.  
        <div className="flex justify-center">
          <img
            src={Fishmarket}
            alt="Fish Market"
            className="w-50 md:w-50 mt-4 mb-2 rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
          />
        </div>
        <b className="flex justify-center">Fish Market in Sundarban</b>
      </>
    ),
  },
  {
    name: "Gender empowerment and agency",
    description: (
      <>
        Women in this collective-fishing initiative play an active and essential role, participating in <b className="font-bold">monitoring fish growth</b>, maintaining <b className="font-bold">canal ecosystem</b>, and managing <b className="font-bold">collective resources</b>. Their involvement extends beyond labour to <b className="font-bold">decision-making and planning</b>, giving them greater <b className="font-bold">agency</b> in shaping livelihoods and community practices. By integrating women into every stage of the process, the initiative challenges traditional gender norms and strengthens <b className="font-bold">economic and social empowerment</b> within the Sundarbans communities.
      </>
    ),
  },
  {
    name: "Nutritional benefits",
    description: (
      <>
        Fish is a good source of <b className="font-bold">high-quality protein</b> and <b className="font-bold">omega-3 fatty acids</b>, supporting <b className="font-bold">brain function, heart health, and muscle development</b>. It also provides essential nutrients such as <b className="font-bold">vitamin D</b> and <b className="font-bold">selenium</b>.
      </>
    ),
  },
  {
    name: "Food security (local to global)",
    description: (
      <>
        Fishing remains a cornerstone of <b className="font-bold">food and livelihood security</b> in the Indian Sundarbans. The <b className="font-bold">“canal as commons”</b> is an instrumental intervention in securing both <b className="font-bold">traditional livelihoods</b> and ensuring <b className="font-bold">food security</b>, thereby contributing to the global discussion on <b className="font-bold">equitable access, sustainable resource use</b>, <b className="font-bold">preservation of local knowledge</b>, and <b className="font-bold">climate risk mitigation</b>.
      </>
    ),
  },
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
          src={FishBG1}
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
