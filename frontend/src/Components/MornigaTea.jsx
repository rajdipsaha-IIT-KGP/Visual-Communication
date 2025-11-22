import React from 'react'
import MilkBackground from "../assets/MornigaTea.png";
import { motion } from "framer-motion";
import Dropdown from './Dropdown';

const Moringa = () => {
   const content = [
    {
      name: "History and Context",
      description: (
        <>
          The idea of processing Moringa Tea at Sundarban Bari emerged through a close collaboration with the <b className="font-bold">Farmers Producer Company (FPC)</b>. During one such interaction, a member shared insights about the <b className="font-bold">growing market demand</b> for moringa leaves. This simple exchange of information and encouragement inspired <b className="font-bold">Tapash da</b> and the local community to begin large-scale <b className="font-bold">drying and processing</b> of moringa leaves.
        </>
      )
    },
    {
      name: "Production process",
      description: (
        <>
          Fresh <b className="font-bold">moringa leaves</b> are carefully harvested, cleaned, and dried to preserve their <b className="font-bold">rich green colour</b> and <b className="font-bold">nutritional value</b>. Once fully dried, the leaves are gently <b className="font-bold">crushed or powdered</b> and packed for <b className="font-bold">tea</b> and other dietary uses. This simple, <b className="font-bold">low-energy process</b> supports sustainable production while retaining the natural goodness of moringa.
        </>
      )
    },
    {
      name: "Grassroots and local mobilization",
      description: (
        <>
          Local <b className="font-bold">women’s groups</b> and <b className="font-bold">self-help collectives</b> in Kumirmari have come together to process and promote <b className="font-bold">moringa tea</b>. This grassroots collaboration strengthens <b className="font-bold">community networks</b> while encouraging sustainable use of locally available natural resources.
        </>
      )
    },
    {
      name:"Livelihood opportunities and market linkages",
      description: (
        <>
          <b className="font-bold">Moringa cultivation</b> and tea processing create <b className="font-bold">sustainable livelihood opportunities</b> for <b className="font-bold">marginal farmers</b> in saline and flood-prone areas, like the Indian Sundarbans. With increasing awareness of its <b className="font-bold">health benefits</b>, Moringa connects local producers to <b className="font-bold">national health-food markets</b>.
        </>
      )
    },
    {
      name:`Gender empowerment and agencys`,
      description: (
        <>
          Women’s <b className="font-bold">self-help groups (SHGs)</b> are central to Moringa leaf drying and tea packaging, enabling them to earn <b className="font-bold">supplementary income</b> and manage <b className="font-bold">small enterprises</b>.
        </>
      )
    },
    {
      name:"Nutritional benefits",
      description: (
        <>
          Packed with <b className="font-bold">vitamins A, C, and E</b>, <b className="font-bold">calcium</b> and <b className="font-bold">iron</b>. Moringa Tea supports <b className="font-bold">immunity</b>, reduces <b className="font-bold">inflammation</b>, and helps <b className="font-bold">detoxify</b> the body.
        </>
      )
    },
    {
      name:`Food security (local to global)`,
      description: (
        <>
          Particularly in the Indian Sundarbans and largely in India, Moringa serves as a <b className="font-bold">vital nutritional source</b> where access to fresh vegetables is limited due to <b className="font-bold">salinity and remoteness</b>. One tree whose leaves, flowers, and stems are <b className="font-bold">edible</b> supports household food security by providing <b className="font-bold">vitamins, iron, and protein</b> from a hardy, fast-growing tree. On a global scale, Moringa is recognized as a <b className="font-bold">climate-smart crop</b> that can combat <b className="font-bold">malnutrition</b> and <b className="font-bold">micronutrient deficiencies</b> in vulnerable regions.
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
          MORNIGA TEA
        </h1>

        {/* Milk image just above the paragraph */}
        <img
          src={MilkBackground}
          alt="Milk"
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
    </div>
  )
}

export default Moringa;
