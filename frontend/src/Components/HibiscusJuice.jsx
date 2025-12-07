import React from "react";
import MilkBackground from "../assets/HibiscousJuice.png";
import { motion } from "framer-motion";
import Dropdown from "./Dropdown";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import juiceprocess from "../assets/Juicepro.jpg";
import juiceprdct from "../assets/juiceproduct.webp";
import JuiceBG from "../assets/hibiscusjuice-bg.jpeg"; 

const HibiscousJuice = () => {
  const navigate = useNavigate();

  const content = [
  {
    name: "History and Context",
    description: (
      <>
        History and Context: During one of the field visits to Sundarban Bari in Kumirmari, parents of Dr Anuradha Choudry observed the abundant, naturally blooming hibiscus plants thriving across the landscape. Recognizing their nutritional and medicinal potential, Dr Choudry’s mother encouraged the local community to explore new ways of using these flowers, particularly by preparing hibiscus tea and juice. What began as a simple suggestion soon evolved into a local practice that combined tradition, health awareness, and sustainable enterprise. It transformed a common flower into a source of both wellness and livelihood.
      </>
    ),
  },
  {
    name: "Production process",
    description: (
      <>
        Production process: The process begins with careful selection of fresh hibiscus flowers. The petals are gently cleaned, then soaked in lemon water for 3-4 hours, to extract their natural colour and nutrition. The concentrate is blended with water and locally sourced natural sweetener (honey) to create a refreshing drink. Once filtered and cooled, the drink is bottled and sealed, ready to be enjoyed or sold in local markets.
        <div className="flex justify-center">
          <img
            src={juiceprocess}
            alt="Hibiscus Juice Process"
            className="w-50 md:w-50 mt-4 mb-2 rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
          />
        </div>
        <b className="flex justify-center">Filtration Of Hibiscus Juice</b>
      </>
    ),
  },
  {
    name: "Grassroots and local mobilization",
    description: (
      <>
        Grassroots and local mobilization: Community-based initiatives have played a key role in introducing hibiscus juice production, with local organizations facilitating training and shared processing facilities. These efforts have fostered collective learning and participation, especially among women.
      </>
    ),
  },
  {
    name: "Livelihood opportunities and market linkages",
    description: (
      <>
        Livelihood opportunities and market linkages: By transforming fresh hibiscus flowers into a value-added beverage, small producers have expanded their income sources beyond seasonal farming. The juice is now sold in local fairs and small retail networks in Kolkata, linking traditional knowledge to emerging health-conscious markets.
        <div className="flex justify-center">
          <img
            src={juiceprdct}
            alt="Bottled Hibiscus Juice"
            className="w-50 md:w-50 mt-4 mb-2 rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
          />
        </div>
        <b className="flex justify-center">Bottled Hibiscus Juice</b>
      </>
    ),
  },
  {
    name: "Gender empowerment and agency",
    description: (
      <>
        Gender empowerment and agency: Just like in hibiscus tea production, Women play a key role in harvesting, drying, and packaging the flowers, thereby gaining financial independence. With the rising demand of herbal drinks in the market, this enhances women’s participation in value chains those traditionally dominated by men.
      </>
    ),
  },
  {
    name: "Nutritional benefits",
    description: (
      <>
        Nutritional benefits: Hibiscus juice benefits include supporting heart health by lowering blood pressure and cholesterol, aiding liver function by protecting against fat buildup, and providing antioxidants that combat free radicals. It also helps regulate blood sugar, may aid in weight management, and can boost the immune system due to its high vitamin C and iron content.
      </>
    ),
  },
  {
    name: "Food security (local to global)",
    description: (
      <>
        Food security (local to global): Hibiscus juice carries traditional nutritional and herbal value while supporting local food security through small-scale processing and income generation. Such community-led innovations demonstrate how locally rooted, value-added products can be replicated and marketed globally to enhance sustainable nutrition and livelihoods.
      </>
    ),
  },
];

  return (
    <div
      className="relative w-full min-h-screen text-white bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${JuiceBG})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Scrollable Content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-start pt-20 px-8 overflow-y-auto pb-20">
        <motion.div
          className="max-w-5xl flex flex-col items-center"
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

        <div className="w-full flex justify-end mt-6 z-20">
          <button
            onClick={() => navigate("/fish")}
            className="flex items-center gap-2 underline decoration-white font-semibold rounded-xl shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer text-black bg-white p-3 mb-5"
          >
            Fish
            <span className="underline decoration-white">
              <FontAwesomeIcon icon={faCaretRight} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HibiscousJuice;
