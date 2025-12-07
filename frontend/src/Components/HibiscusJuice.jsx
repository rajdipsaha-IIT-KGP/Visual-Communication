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
        During one of the field visits to <b className="font-bold">Sundarban Bari in Kumirmari</b>, parents of <b className="font-bold">Dr Anuradha Choudry</b> observed the abundant, naturally blooming hibiscus plants thriving across the landscape. Recognizing their <b className="font-bold">nutritional and medicinal potential</b>, Dr Choudry’s mother encouraged the local community to explore new ways of using these flowers, particularly by preparing <b className="font-bold">hibiscus tea and juice</b>. What began as a simple suggestion soon evolved into a local practice that combined <b className="font-bold">tradition, health awareness, and sustainable enterprise</b>. It transformed a common flower into a source of both <b className="font-bold">wellness and livelihood</b>.
      </>
    ),
  },
  {
    name: "Production process",
    description: (
      <>
        The process begins with careful selection of <b className="font-bold">fresh hibiscus flowers</b>. The petals are gently cleaned, then soaked in <b className="font-bold">lemon water for 3-4 hours</b> to extract their natural colour and nutrition. The concentrate is blended with water and a locally sourced <b className="font-bold">natural sweetener (honey)</b> to create a refreshing drink. Once filtered and cooled, the drink is bottled and sealed, ready to be enjoyed or sold in local markets.
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
        <b className="font-bold">Community-based initiatives</b> have played a key role in introducing hibiscus juice production, with local organizations facilitating <b className="font-bold">training and shared processing facilities</b>. These efforts have fostered <b className="font-bold">collective learning and participation</b>, especially among women.
      </>
    ),
  },
  {
    name: "Livelihood opportunities and market linkages",
    description: (
      <>
        By transforming fresh hibiscus flowers into a <b className="font-bold">value-added beverage</b>, small producers have expanded their income sources beyond seasonal farming. The juice is now sold in <b className="font-bold">local fairs and small retail networks in Kolkata</b>, linking <b className="font-bold">traditional knowledge</b> to emerging <b className="font-bold">health-conscious markets</b>.
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
        Women play a key role in <b className="font-bold">harvesting, drying, and packaging</b> the flowers, thereby gaining <b className="font-bold">financial independence</b>. With the rising demand of herbal drinks in the market, this enhances women’s participation in <b className="font-bold">value chains</b> that were traditionally dominated by men.
      </>
    ),
  },
  {
    name: "Nutritional benefits",
    description: (
      <>
        Hibiscus juice benefits include supporting <b className="font-bold">heart health</b> by lowering blood pressure and cholesterol, aiding <b className="font-bold">liver function</b> by protecting against fat buildup, and providing <b className="font-bold">antioxidants</b> that combat free radicals. It also helps regulate <b className="font-bold">blood sugar</b>, may aid in <b className="font-bold">weight management</b>, and can boost the <b className="font-bold">immune system</b> due to its high <b className="font-bold">vitamin C and iron content</b>.
      </>
    ),
  },
  {
    name: "Food security (local to global)",
    description: (
      <>
        Hibiscus juice carries <b className="font-bold">traditional nutritional and herbal value</b> while supporting <b className="font-bold">local food security</b> through small-scale processing and income generation. Such community-led innovations demonstrate how <b className="font-bold">locally rooted, value-added products</b> can be replicated and marketed globally to enhance <b className="font-bold">sustainable nutrition and livelihoods</b>.
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
