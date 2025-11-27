import React from 'react';
import { motion } from "framer-motion";
import Dropdown from './Dropdown';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

const Roselle = () => {
  const navigate = useNavigate();

  const content = [
    {
      name: "History and Context",
      description: (
        <>
          <b className="font-bold">Tapash da</b>, who leads a Farmers Producer Company and 
          operates a shop at the Rajarhat Farmer’s Haat, observed the rising demand 
          for <b className="font-bold">Roselle pickle</b> when his counterpart from 
          Bankura brought the product for sale. It was both popular and expensive. 
          Inspired, Tapash da shared his experience with the women members in 
          Kumirmari, and <b className="font-bold">Sudha di</b> volunteered, offering her knowledge 
          to prepare Roselle pickles in bulk. This collaboration gave birth to a new 
          locally produced product at <b className="font-bold">Sundarban Bari</b>.
          <br /><br />
          One characteristic feature of the Roselle plant is its ability to 
          <b className="font-bold"> thrive on infertile land</b> while yielding abundant fruits, 
          making it a <b className="font-bold">resilient and sustainable crop</b> for the region.
          <br /><br />
          Roselle pickle has long been intertwined with traditional cultural 
          practices in the Sundarbans. However, due to limited awareness and 
          changing lifestyles, this practice gradually declined over the years. 
          Initiatives and local mobilization like these are now 
          <b className="font-bold"> reviving roselle cultivation and processing</b>, reconnecting 
          the community with its cultural and culinary heritage.
        </>
      )
    },
    {
      name: "Grassroots and local mobilization",
      description: (
        <>
          Roselle pickle has long been intertwined with 
          <b className="font-bold"> traditional cultural practices</b> in the Sundarbans. 
          Due to limited awareness and changing lifestyles, this practice declined 
          over time. Through <b className="font-bold">initiatives and community mobilization</b>, 
          roselle cultivation and processing are being revived, reconnecting the 
          community with its cultural and culinary heritage.
        </>
      )
    },
    {
      name: "Livelihood opportunities and market linkages",
      description: (
        <>
          Due to rising demand, Roselle pickle has strong potential for generating 
          <b className="font-bold"> livelihood opportunities</b> for marginal farmers, especially 
          those with <b className="font-bold">limited or no land</b> in 
          <b className="font-bold"> saline and flood-prone areas</b> of the Indian Sundarbans.
        </>
      )
    },
    {
      name: "Gender empowerment and agency",
      description: (
        <>
          Women’s <b className="font-bold">Self-Help Groups (SHGs)</b> play a central role in 
          preparing and preserving traditional food recipes like Roselle pickle. 
          Their involvement strengthens <b className="font-bold">women’s agency, skills, and economic 
          empowerment</b>.
        </>
      )
    },
    {
      name: "Nutritional benefits",
      description: (
        <>
          Roselle is packed with <b className="font-bold">antioxidants</b>, supports 
          <b className="font-bold"> digestion</b>, has natural <b className="font-bold">diuretic qualities</b>, 
          and is rich in <b className="font-bold">Vitamin C</b>.
        </>
      )
    }
  ];

  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center items-center text-center text-white px-8 pt-20">

      <div className="absolute inset-0"></div>

      <motion.div
        className="relative z-10 max-w-5xl flex flex-col items-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-8 text-white">
          ROSELLE PICKLE
        </h1>

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
  onClick={() => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSc1f4t3i7Y92yx9MzY6J86cunpfqI-Ir3AUHaQQMMOB64wdUw/viewform?usp=dialog",
      "_blank"
    );
  }}
  className="flex items-center gap-2 underline decoration-white text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
>
  Feedback Form
  <span className="underline decoration-white">
    <FontAwesomeIcon icon={faCaretRight} />
  </span>
</button>

      </div>

    </div>
  );
};

export default Roselle;
