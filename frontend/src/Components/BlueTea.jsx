import React from 'react'
import MilkBackground from "../assets/bluetea.png";
import { motion } from "framer-motion";
import Dropdown from './Dropdown';

const Milk = () => {
   const content = [
    {
      name: "History and Context",
      description: `In the regions of the Indian Sundarbans, Butterfly Pea plant, locally known as Aparajita, has long flourished as wild and untamed. Traditionally, the flower was used for rituals and natural dyeing, but not as a beverage. The idea of brewing Aparajita into blue tea arrived recently during a field school visit, when a professor from the University of Waterloo shared its remarkable nutritional and economic potential. It was followed by a hands-on workshop conducted by Utsav, to train local communities how to naturally process and prepare the flowers into tea. Today, this small experiment stands as a symbol of innovation, where local knowledge and global learning meet to create new livelihoods rooted in sustainability. 
`,

    },
    
    {
      name: "Production process",
      description: `The process begins by carefully plucking the Aparajita flowers, each one handpicked. Then petals are gently washed and laid out to dry in the sun, which is a natural process that takes two to three days. After drying, the flowers are stored in airtight aluminium containers to preserve them. This process is not carried out during the monsoon, when humidity and rain make drying difficult. Finally, the tea is packaged by local women, adding both care and craftsmanship to every batch.`,
    },
    {
      name: "Grassroots and local mobilization",
      description: `Community-based groups have begun experimenting with intercropping and collective branding, encouraged by the market. This demonstrates how local innovation can strengthen rural economies and climate adaptation.
`,
    },{
      name:"Livelihood opportunities and market linkages",
      description:`Cultivating Blue Tea offers small and landless farmers an alternative, climate-resilient income source on saline soils. Through local cooperatives like the Farmers Producer Company (FPC), farmers can link to urban market chains.
`,
    },
    {
      name:`Gender empowerment and agencys`,
      description:`Women play a key role in harvesting, drying, and packaging the flowers, gaining financial independence. Gaining popularity of herbal tea, especially, blue tea enhances women’s participation in value chains traditionally dominated by men.
`
    },
    {
      name:"Nutritional benefits",
      description:`Rich in antioxidants, particularly anthocyanins, which helps combat free radicals, supports healthy skin and hair, and promotes overall wellness. It has anti-inflammatory properties and aids in reducing stress, digestion and keeps in check blood sugar levels, cholesterol and blood pressure.
`
    },
    {
      name:`Food security (local to global)`,
      description:`Locally, in Kumirmari, Blue Tea cultivation promotes diversified cropping system, reducing dependence on single cropping system and restore soil fertility. Its drought-tolerant and untamed nature makes it suitable for saline-affected soils, enhancing climate resilience in the delta. Globally, such adaptive crops contribute to sustainable agricultural transitions and nutritional security under changing climate conditions.`
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

export default Milk
