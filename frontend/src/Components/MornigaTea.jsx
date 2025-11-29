import React from "react";
import MilkBackground from "../assets/MornigaTea.png";
import { motion } from "framer-motion";
import Dropdown from "./Dropdown";
import Process from "../assets/MornigaTeaProcess.jpg";
import History from "../assets/Moringa leaves.jpg";
import Packaging from "../assets/Mornigapacking.jpg";
import bg from "../assets/Matcha Tea.jpeg";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

const Moringa = () => {
  const navigate = useNavigate();

  const content = [
    {
      name: "History and Context",
      description: (
        <>
          The idea of processing Moringa Tea at Sundarban Bari emerged through a
          close collaboration with the{" "}
          <b className="font-bold">Farmers Producer Company (FPC)</b>. During one
          such interaction, a member shared insights about the{" "}
          <b className="font-bold">growing market demand</b> for moringa leaves.
          This simple exchange of information inspired{" "}
          <b className="font-bold">Tapash da</b> and the community to begin{" "}
          <b className="font-bold">drying and processing</b> moringa leaves.
          <div className="flex justify-center">
            <img
              src={History}
              alt="Moringa Leaves"
              className="w-50 md:w-50 mt-4 mb-2 rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
            />
          </div>
          <b className="flex justify-center">Moringa Leaves</b>
        </>
      ),
    },
    {
      name: "Production process",
      description: (
        <>
          Fresh <b className="font-bold">moringa leaves</b> are harvested,
          cleaned, and dried to preserve their{" "}
          <b className="font-bold">green colour</b> and{" "}
          <b className="font-bold">nutritional value</b>. Once fully dried, they
          are gently <b className="font-bold">crushed or powdered</b> and packed.
          <div className="flex justify-center">
            <img
              src={Process}
              alt="Moringa Process"
              className="w-50 md:w-50 mt-4 mb-2 rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
            />
          </div>
          <b className="flex justify-center">
            Moringa powder from the leaves
          </b>
        </>
      ),
    },
    {
      name: "Grassroots and local mobilization",
      description: (
        <>
          Local <b className="font-bold">women’s groups</b> and{" "}
          <b className="font-bold">self-help collectives</b> in Kumirmari process
          and promote <b className="font-bold">moringa tea</b>, strengthening{" "}
          <b className="font-bold">community networks</b> and local resource use.
        </>
      ),
    },
    {
      name: "Livelihood opportunities and market linkages",
      description: (
        <>
          <b className="font-bold">Moringa cultivation</b> creates{" "}
          <b className="font-bold">sustainable livelihood opportunities</b> in
          saline and flood-prone areas like the Indian Sundarbans. With rising
          demand, moringa connects producers to{" "}
          <b className="font-bold">national health-food markets</b>.
          <div className="flex justify-center">
            <img
              src={Packaging}
              alt="Packaging"
              className="w-50 md:w-50 mt-4 mb-2 rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
            />
          </div>
        </>
      ),
    },
    {
      name: "Gender empowerment and agency",
      description: (
        <>
          Women’s <b className="font-bold">self-help groups (SHGs)</b> lead
          drying and packaging, enabling{" "}
          <b className="font-bold">supplementary income</b> and{" "}
          <b className="font-bold">small enterprises</b>.
        </>
      ),
    },
    {
      name: "Nutritional benefits",
      description: (
        <>
          Packed with <b className="font-bold">vitamins A, C, E</b>,{" "}
          <b className="font-bold">calcium</b>, and{" "}
          <b className="font-bold">iron</b>. Moringa tea boosts{" "}
          <b className="font-bold">immunity</b>, reduces{" "}
          <b className="font-bold">inflammation</b>, and helps{" "}
          <b className="font-bold">detoxify</b> the body.
        </>
      ),
    },
    {
      name: "Food security (local to global)",
      description: (
        <>
          In the Sundarbans, moringa offers a{" "}
          <b className="font-bold">nutritional lifeline</b> where vegetable
          access is limited. Globally, it is recognized as a{" "}
          <b className="font-bold">climate-smart crop</b> that combats{" "}
          <b className="font-bold">malnutrition</b> in vulnerable regions.
        </>
      ),
    },
  ];

  return (
    <div
      className="relative w-full min-h-screen text-white bg-cover bg-center"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay like BlueTea */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Scrollable Content Area (matched with BlueTea) */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-start pt-20 px-8 overflow-y-auto pb-20">
        <motion.div
          className="max-w-5xl flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-8 text-white">
            MORINGA TEA
          </h1>

          <img
            src={MilkBackground}
            alt="Moringa"
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
            onClick={() => navigate("/hibiscustea")}
            className="flex items-center gap-2 underline decoration-white font-semibold rounded-xl shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer text-black bg-white p-3 mb-5"
          >
            Hibiscus Tea
            <span className="underline decoration-white">
              <FontAwesomeIcon icon={faCaretRight} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Moringa;
