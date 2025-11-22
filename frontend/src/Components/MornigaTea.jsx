import React from 'react'
import MilkBackground from "../assets/MornigaTea.png";
import { motion } from "framer-motion";
import Dropdown from './Dropdown';

const Moringa = () => {
   const content = [
    {
      name: "History and Context",
      description: `The idea of processing Moringa Tea at Sundarban Bari emerged through a close collaboration with the Farmers Producer Company (FPC). During one such interaction, a member shared insights about the growing market demand for moringa leaves. This simple exchange of information and encouragement inspired Tapash da and the local community to begin large-scale drying and processing of moringa leaves.
. 
`,

    },
    
    {
      name: "Production process",
      description: `Fresh moringa leaves are carefully harvested, cleaned, and dried to preserve their rich green colour and nutritional value. Once fully dried, the leaves are gently crushed or powdered and packed for tea and other dietary uses. This simple, low-energy process supports sustainable production while retaining the natural goodness of moringa.
`,
    },
    {
      name: "Grassroots and local mobilization",
      description: `Local women’s groups and self-help collectives in Kumirmari have come together to process and promote moringa tea. This grassroots collaboration strengthens community networks while encouraging sustainable use of locally available natural resources.

`,
    },{
      name:"Livelihood opportunities and market linkages",
      description:`Moringa cultivation and tea processing create sustainable livelihood opportunities for marginal farmers in saline and flood-prone areas, like the Indian Sundarbans. With increasing awareness of its health benefits, Moringa connects local producers to national health-food markets.

`,
    },
    {
      name:`Gender empowerment and agencys`,
      description:`Women’s self-help groups (SHGs) are central to Moringa leaf drying and tea packaging, enabling them to earn supplementary income and manage small enterprises
.
`
    },
    {
      name:"Nutritional benefits",
      description:`Packed with vitamins A, C, and E, calcium and iron. Moringa Tea supports immunity, reduces inflammation, and helps detoxify the body. 
`
    },
    {
      name:`Food security (local to global)`,
      description:`Particularly in the Indian Sundarbans and largely in India, Moringa serves as a vital nutritional source where access to fresh vegetables is limited due to salinity and remoteness. One tree whose leaves, flowers and stems are edible and supports household food security by providing vitamins, iron, and protein from a hardy, fast-growing tree. On a global scale, Moringa is recognized as a climate-smart crop that can combat malnutrition and micronutrient deficiencies in vulnerable regions.`
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
        <span></span>
        <img
          src={MilkBackground}
          alt="Milk"
          className="w-64 md:w-80 mb-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
        />

        <div className="w-full">
 
 {
    content.map((item, index) => (
        <Dropdown key={index} title={item.name}>
        <p className="text-left text-gray-200 font-light bg-black/60 p-4 rounded-2xl shadow-lg hover:bg-black/70 transition-all duration-500">
        {item.description}
        </p>
      </Dropdown>
    ) )
 }

        </div>
      </motion.div>
    </div>
  )
}

export default Moringa
