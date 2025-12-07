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
import HibiscusBG from "../assets/hibiscustea-bg.jpeg"; 
import Hibiscus1 from "../assets/Hibiscus1.png"
const HibiscousTea = () => {
  const navigate = useNavigate();

  const content = [
  {
    name: "History and Context",
    description: (
      <>
        During one of the field visits to <b className="font-bold">Sundarban Bari</b> in{" "}
        <b className="font-bold">Kumirmari</b>, parents of{" "}
        <b className="font-bold">Dr Anuradha Choudry</b> observed the abundant, naturally
        blooming <b className="font-bold">hibiscus plants</b> thriving across the landscape.
        Recognizing their <b className="font-bold">nutritional</b> and{" "}
        <b className="font-bold">medicinal potential</b>, Dr Choudry’s mother encouraged
        the local community to explore new ways of using these flowers, particularly by
        preparing <b className="font-bold">hibiscus tea</b> and juice.
        <br /><br />
        What began as a simple suggestion soon evolved into a local practice that
        combined tradition, health awareness, and sustainable enterprise. It transformed
        a common flower into a source of both wellness and livelihood.

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
        <b className="font-bold">hibiscus petals</b>, allowing them to dry naturally under the sun.
        Once dried, they are stored in <b className="font-bold">airtight containers</b> to preserve
        their <b className="font-bold">colour</b>, <b className="font-bold">shelf life</b>, and{" "}
        <b className="font-bold">nutritional value</b>.  
        <br /><br />
        When soaked in hot water, the petals release a brilliant ruby-red infusion that is tangy,
        aromatic, and rich in <b className="font-bold">vitamin C</b>.

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
        <b className="font-bold">self-help collectives</b> in Kumirmari have come together to
        cultivate, process, and promote <b className="font-bold">hibiscus tea</b>.
        <br /><br />
        This collaboration strengthens <b className="font-bold">community networks</b> while
        encouraging sustainable use of local natural resources.
      </>
    ),
  },
  {
    name: "Livelihood opportunities and market linkages",
    description: (
      <>
        The growing popularity of <b className="font-bold">herbal teas</b> has opened new{" "}
        <b className="font-bold">market opportunities</b> for small-scale producers. Through
        training and local branding initiatives, community members can now earn steady incomes
        by connecting their hibiscus products to regional and urban wellness markets, mostly
        through <b className="font-bold">FPC networks</b>.

        <div className="flex justify-center">
          <img
            src={Packaging}
            alt="Packaging"
            className="w-70 md:w-70 h-70 mt-4 mb-2 rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
          />
        </div>
      </>
    ),
  },
  {
    name: "Gender empowerment and agency",
    description: (
      <>
        Like in Blue Tea, women play a key role in <b className="font-bold">harvesting, drying,
        and packaging</b> hibiscus flowers, thereby gaining{" "}
        <b className="font-bold">financial independence</b>.
        <br /><br />
        As hibiscus tea becomes more popular in the market, it enhances women’s
        participation in value chains that were traditionally dominated by men.

        <div className="flex justify-center">
          <img
            src={Hibiscus1}
            alt="Hibiscus Women Work"
            className="w-50 md:w-50 mt-4 mb-2 rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
          />
        </div>
      </>
    ),
  },
  {
    name: "Nutritional benefits",
    description: (
      <>
        Hibiscus Tea is a rich source of <b className="font-bold">antioxidants</b> and{" "}
        <b className="font-bold">vitamin C</b>. It helps:
        <ul className="list-disc ml-6 mt-2">
          <li>regulate <b>blood pressure</b></li>
          <li>support <b>heart health</b></li>
          <li>cool the body</li>
          <li>improve skin and liver function</li>
        </ul>
      </>
    ),
  },
  {
    name: "Food security (local to global)",
    description: (
      <>
        Hibiscus cultivation provides an alternative <b className="font-bold">livelihood</b>{" "}
        for small-scale farmers, especially women, while helping restore{" "}
        <b className="font-bold">degraded land</b>.
        <br /><br />
        Its <b className="font-bold">petals</b> and <b className="font-bold">leaves</b> serve both
        nutritional and medicinal purposes, showing how value-added herbal products can create
        sustainable income streams and diversify food sources in climate-affected regions.
        
       
      </>
    ),
  },
];


  return (
    <div
      className="relative w-full min-h-screen text-white bg-cover bg-center bg-fixed"
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
