import React from 'react'
import MilkBackground from "../assets/HibiscousJuice.png";
import { motion } from "framer-motion";
import Dropdown from './Dropdown';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

const HibiscousJuice = () => {
const navigate = useNavigate();
  const content = [
    {
      name: "History and Context",
      description: (
        <>
          During one of the field visits to <b className="font-bold">Sundarban Bari</b> in <b className="font-bold">Kumirmari</b>, parents of <b className="font-bold">Dr Anuradha Choudry</b> observed the abundant, naturally blooming <b className="font-bold">hibiscus plants</b> thriving across the landscape. Recognizing their <b className="font-bold">nutritional</b> and <b className="font-bold">medicinal potential</b>, Dr Choudry’s mother encouraged the local community to explore new ways of using these flowers, particularly by preparing <b className="font-bold">hibiscus tea and juice</b>. What began as a simple suggestion soon evolved into a local practice that combined <b className="font-bold">tradition</b>, <b className="font-bold">health awareness</b>, and <b className="font-bold">sustainable enterprise</b>. It transformed a common flower into a source of both <b className="font-bold">wellness</b> and <b className="font-bold">livelihood</b>.
        </>
      )
    },
    {
      name: "Production process",
      description: (
        <>
          The process begins with careful selection of <b className="font-bold">fresh hibiscus flowers</b>. The petals are gently cleaned and then soaked in <b className="font-bold">lemon water for 3–4 hours</b> to extract their <b className="font-bold">natural colour</b> and <b className="font-bold">nutritional components</b>. The concentrate is blended with water and a locally sourced <b className="font-bold">natural sweetener (honey)</b> to create a refreshing drink. Once <b className="font-bold">filtered</b> and <b className="font-bold">cooled</b>, the juice is <b className="font-bold">bottled</b> and sealed, ready to be consumed or sold in local markets.
        </>
      )
    },
    {
      name: "Grassroots and local mobilization",
      description: (
        <>
          <b className="font-bold">Community-based initiatives</b> have played a key role in introducing hibiscus juice production. Local organizations have facilitated <b className="font-bold">training programs</b> and set up <b className="font-bold">shared processing facilities</b>. These efforts have strengthened <b className="font-bold">collective learning</b> and increased participation—especially among <b className="font-bold">women</b>.
        </>
      )
    },
    {
      name: "Livelihood opportunities and market linkages",
      description: (
        <>
          By transforming fresh hibiscus flowers into a <b className="font-bold">value-added beverage</b>, small producers have diversified their income beyond seasonal farming. The juice is now sold in <b className="font-bold">local fairs</b> and <b className="font-bold">retail networks in Kolkata</b>, connecting traditional knowledge with modern <b className="font-bold">health-conscious markets</b>.
        </>
      )
    },
    {
      name: "Gender empowerment and agency",
      description: (
        <>
          Just like in hibiscus tea production, <b className="font-bold">women</b> play a crucial role in <b className="font-bold">harvesting, cleaning, and packaging</b> the flowers. This involvement helps them gain <b className="font-bold">financial independence</b>. With the rising demand for <b className="font-bold">herbal drinks</b>, women's participation in <b className="font-bold">value chains</b>—traditionally dominated by men—continues to grow.
        </>
      )
    },
    {
      name: "Nutritional benefits",
      description: (
        <>
          <b className="font-bold">Hibiscus juice</b> supports <b className="font-bold">heart health</b> by lowering blood pressure and cholesterol, aids <b className="font-bold">liver function</b> by preventing fat buildup, and provides powerful <b className="font-bold">antioxidants</b> that reduce free radicals. It helps regulate <b className="font-bold">blood sugar</b>, may support <b className="font-bold">weight management</b>, and boosts the <b className="font-bold">immune system</b> through its high <b className="font-bold">vitamin C</b> and <b className="font-bold">iron</b> content.
        </>
      )
    },
    {
      name: "Food security (local to global)",
      description: (
        <>
          <b className="font-bold">Hibiscus juice</b> carries traditional nutritional and herbal value while supporting <b className="font-bold">local food security</b> through small-scale processing and community-led production. Such innovations demonstrate how locally rooted, <b className="font-bold">value-added products</b> can be scaled and marketed globally to enhance <b className="font-bold">sustainable nutrition</b> and <b className="font-bold">livelihoods</b>.
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
          HIBISCUS JUICE
        </h1>

        <img
          src={MilkBackground}
          alt="Hibiscus Juice"
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
                onClick={() => navigate("/fish")}
                className="flex items-center gap-2 underline decoration-white text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                  Fish
                 <span className="underline decoration-white">
                  <FontAwesomeIcon icon={faCaretRight} />
                </span>
              </button>
            </div>
    </div>
  );
};

export default HibiscousJuice;
