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
          During one of the field visits to <b className="font-bold">Sundarban Bari</b> in{" "}
          <b className="font-bold">Kumirmari</b>, parents of{" "}
          <b className="font-bold">Dr Anuradha Choudry</b> observed abundant, naturally
          blooming <b className="font-bold">hibiscus plants</b>. Recognizing their{" "}
          <b className="font-bold">nutritional</b> and <b className="font-bold">medicinal potential</b>,
          Dr Choudry’s mother encouraged the local community to explore new ways of
          using these flowers, particularly by preparing <b className="font-bold">hibiscus tea and juice</b>.
          <b className="font-bold"> Tradition, health awareness</b>, and{" "}
          <b className="font-bold">sustainable enterprise</b> were combined, transforming
          the flower into a source of <b className="font-bold">wellness</b> and{" "}
          <b className="font-bold">livelihood</b>.
        </>
      ),
    },
    {
      name: "Production process",
      description: (
        <>
          The process begins with careful selection of <b className="font-bold">fresh hibiscus flowers</b>. 
          The petals are cleaned, soaked in <b className="font-bold">lemon water</b> for 3–4 hours to extract their{" "}
          <b className="font-bold">natural colour and nutrients</b>. The concentrate is blended with water and a locally
          sourced <b className="font-bold">natural sweetener (honey)</b>, filtered, cooled, and bottled.
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
          <b className="font-bold">Community initiatives</b> introduced hibiscus juice production. Local organizations facilitated{" "}
          <b className="font-bold">training programs</b> and <b className="font-bold">shared processing facilities</b>, increasing participation,
          especially among <b className="font-bold">women</b>.
        </>
      ),
    },
    {
      name: "Livelihood opportunities and market linkages",
      description: (
        <>
          Transforming fresh hibiscus flowers into a <b className="font-bold">value-added beverage</b> diversifies incomes. 
          The juice is sold in <b className="font-bold">local fairs</b> and <b className="font-bold">Kolkata retail networks</b>.
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
          Women play a key role in <b className="font-bold">harvesting, cleaning, and packaging</b>, gaining{" "}
          <b className="font-bold">financial independence</b>. Rising demand for <b className="font-bold">herbal drinks</b> enhances their participation in value chains.
        </>
      ),
    },
    {
      name: "Nutritional benefits",
      description: (
        <>
          <b className="font-bold">Hibiscus juice</b> supports <b className="font-bold">heart health</b>, aids <b className="font-bold">liver function</b>, 
          provides <b className="font-bold">antioxidants</b>, regulates <b className="font-bold">blood sugar</b>, supports <b className="font-bold">weight management</b>, and boosts the <b className="font-bold">immune system</b>.
        </>
      ),
    },
    {
      name: "Food security (local to global)",
      description: (
        <>
          <b className="font-bold">Hibiscus juice</b> supports <b className="font-bold">local food security</b> and demonstrates how <b className="font-bold">value-added products</b> can scale globally for <b className="font-bold">sustainable nutrition and livelihoods</b>.
        </>
      ),
    },
  ];

  return (
    <div
      className="relative w-full min-h-screen text-white bg-cover bg-center"
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
