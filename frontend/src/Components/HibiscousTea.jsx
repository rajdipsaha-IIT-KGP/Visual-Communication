import React from "react";
import MilkBackground from "../assets/HibiscousTea.png";
import { motion } from "framer-motion";
import Dropdown from "./Dropdown";
import History from "../assets/Red Hibiscus flowers.jpg";
import HibiscousProcess from "../assets/HibiscousProcess.jpg";
import Packaging from "../assets/Packed Hibiscus Tea.jpg";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import HibiscusBG from "../assets/hibiscustea-bg.jpeg"; // <-- replace this with your background image

const HibiscousTea = () => {
  const navigate = useNavigate();

  const content = [
    {
      name: "History and Context",
      description: (
        <>
          During one of the field visits to <b className="font-bold">Sundarban Bari</b> in{" "}
          <b className="font-bold">Kumirmari</b>, parents of{" "}
          <b className="font-bold">Dr Anuradha Choudry</b> observed abundant, naturally
          blooming <b className="font-bold">hibiscus plants</b> thriving across the landscape.
          Recognizing their <b className="font-bold">nutritional</b> and{" "}
          <b className="font-bold">medicinal potential</b>, Dr Choudry’s mother encouraged
          the local community to explore new ways of using these flowers, particularly
          by preparing <b className="font-bold">hibiscus tea</b> and juice.
          <div className="flex justify-center">
            <img
              src={History}
              alt="Red Hibiscus"
              className="w-50 md:w-50 mt-4 mb-2 rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
            />
          </div>
          <b className="flex justify-center">Red Hibiscus Of Sundarbans</b>
        </>
      ),
    },
    {
      name: "Production process",
      description: (
        <>
          The process begins with the careful selection of freshly bloomed{" "}
          <b className="font-bold">hibiscus petals</b>, drying them under the sun, then
          storing in <b className="font-bold">airtight containers</b> to preserve{" "}
          <b className="font-bold">colour, shelf life</b> and{" "}
          <b className="font-bold">nutritional value</b>.
          <div className="flex justify-center">
            <img
              src={HibiscousProcess}
              alt="Hibiscus Process"
              className="w-50 md:w-50 mt-4 mb-2 rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
            />
          </div>
          <b className="flex justify-center">Dried Hibiscus Petals</b>
        </>
      ),
    },
    {
      name: "Grassroots and local mobilization",
      description: (
        <>
          Local <b className="font-bold">women’s groups</b> and{" "}
          <b className="font-bold">self-help collectives</b> in Kumirmari cultivate,
          process, and promote <b className="font-bold">hibiscus tea</b>, strengthening
          <b className="font-bold"> community networks</b>.
        </>
      ),
    },
    {
      name: "Livelihood opportunities and market linkages",
      description: (
        <>
          The popularity of <b className="font-bold">herbal teas</b> has opened new{" "}
          <b className="font-bold">market opportunities</b> for small-scale producers.
          Training and local branding initiatives enable steady incomes via{" "}
          <b className="font-bold">FPC networks</b>.
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
          Women play a key role in <b className="font-bold">harvesting, drying, and packaging</b>,
          gaining <b className="font-bold">financial independence</b>. Popularity of{" "}
          <b className="font-bold">hibiscus tea</b> enhances women’s participation in value chains.
        </>
      ),
    },
    {
      name: "Nutritional benefits",
      description: (
        <>
          Rich in <b className="font-bold">antioxidants</b> and{" "}
          <b className="font-bold">vitamin C</b>, hibiscus tea helps regulate{" "}
          <b className="font-bold">blood pressure</b>, supports{" "}
          <b className="font-bold">heart health</b>, and aids in{" "}
          <b className="font-bold">cooling the body</b>.
        </>
      ),
    },
    {
      name: "Food security (local to global)",
      description: (
        <>
          Hibiscus cultivation offers an alternative <b className="font-bold">livelihood</b>{" "}
          for small-scale farmers, especially women, while restoring <b className="font-bold">degraded land</b>.
          Its <b className="font-bold">petals</b> and <b className="font-bold">leaves</b> are used for{" "}
          <b className="font-bold">nutrition</b> and herbal medicine, creating sustainable income streams.
        </>
      ),
    },
  ];

  return (
    <div
      className="relative w-full min-h-screen text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${HibiscusBG})`, backgroundSize: "cover", backgroundPosition: "center" }}
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
            HIBISCUS TEA
          </h1>

          <img
            src={MilkBackground}
            alt="Hibiscus Tea"
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
            onClick={() => navigate("/hibiscusjuice")}
            className="flex items-center gap-2 underline decoration-white font-semibold rounded-xl shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer text-black bg-white p-3 mb-5"
          >
            Hibiscus Juice
            <span className="underline decoration-white">
              <FontAwesomeIcon icon={faCaretRight} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HibiscousTea;
