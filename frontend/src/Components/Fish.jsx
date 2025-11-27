import React from 'react'
import FishBackground from "../assets/Fish.png";  
import { motion } from "framer-motion";
import Dropdown from './Dropdown';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import Fishproduction from "../assets/Fishproduction.jpg";
import Fishmarket from "../assets/Fishmarket.jpg";
const Fish = () => {
  const navigate = useNavigate();

  const content = [
    {
      name: "History and Context",
      description: (
        <>
          Fishing has long been a central <b className="font-bold">livelihood</b> and <b className="font-bold">cultural practice</b> in the Indian Sundarbans, rooted in <b className="font-bold">place-based ecological knowledge</b> and <b className="font-bold">intergenerational skills</b>. Communities use ponds, rivers, canals, and even <b className="font-bold">paddy fields</b> to breed and harvest fish, showcasing both innovation and adaptation to local ecosystems.

          Historically, fishing has sustained households and shaped the <b className="font-bold">social and cultural fabric</b> of the region. After the devastating <b className="font-bold">Cyclone Aila</b>, saline intrusion forced many families to adopt <b className="font-bold">aquaculture</b> on their own lands—an example of resilience.

          Building on these traditional practices, IIT Kharagpur launched a collaborative experiment blending <b className="font-bold">scientific</b> and <b className="font-bold">traditional knowledge</b> systems. The first phase, supported by <b className="font-bold">CIFRI</b> and <b className="font-bold">SPSS</b>, showed major improvements in productivity.

          The project is now expanding through the <b className="font-bold">“canal as commons”</b> framework with <b className="font-bold">41 households</b>, providing alternative livelihoods for landless and marginalized community members, reinforcing both <b className="font-bold">ecological sustainability</b> and <b className="font-bold">socio-economic resilience</b> in the Sundarbans.
        </>
      )
    },
    {
      name: "Production process",
      description: (
        <>
          Under the <b className="font-bold">“canal as commons”</b> fishing initiative, varieties of fish such as <b className="font-bold">Rohu, Catla, and Mrigel</b> are introduced into the Mukherjee canal.  

          The <b className="font-bold">41 participating households</b> collectively monitor the canal, ensuring fish health and maintaining the <b className="font-bold">overall canal ecosystem</b>.  

          This approach integrates <b className="font-bold">traditional knowledge</b> with <b className="font-bold">scientific guidance</b> to support sustainable fish production while preserving ecological balance.
          <div className='flex justify-center'><img src={Fishproduction} alt="Fish Production" className="w-50 md:w-50 mt-4 mb-2 rounded-xl shadow-lg hover:scale-105 transition-transform duration-500 "/></div>
          <b className=' flex justify-center'>Aquaculture in Sunderbans</b>
        </>
      )
    },
    {
      name: "Grassroots and local mobilization",
      description: (
        <>
          The initiative is powered by <b className="font-bold">41 households</b> organized into <b className="font-bold">7 groups</b>, each responsible for different tasks to ensure smooth management.  

          Participation spans <b className="font-bold">all age groups</b> and includes both <b className="font-bold">men and women</b>, reflecting strong collective unity.  

          This inclusive structure strengthens <b className="font-bold">social cohesion</b> and empowers the community to sustainably manage their <b className="font-bold">water resources</b> and <b className="font-bold">fishing practices</b>.
        </>
      )
    },
    {
      name: "Livelihood opportunities and market linkages",
      description: (
        <>
          Fishing remains a major source of <b className="font-bold">food security</b> and <b className="font-bold">livelihood</b> in the Sundarbans.  
<br />
          Freshly harvested fish can be sold in <b className="font-bold">Kumirmari local markets</b>, and through <b className="font-bold">cold-chain networks</b>, transported to <b className="font-bold">Dhamakhali</b> or Kolkata wholesale markets.  
<br />
          This strengthens market access and enhances income stability for local communities.
          <div className='flex justify-center'><img src={Fishmarket} alt="Fish Market" className="w-50 md:w-50 mt-4 mb-2 rounded-xl shadow-lg hover:scale-105 transition-transform duration-500 "/></div>
          <b className=' flex justify-center'>Fish Market in Sundarban</b>
        </>
      )
    },
    {
      name: "Gender empowerment and agency",
      description: (
        <>
          Women play a vital role in this collective fishing initiative. They actively participate in:  
          – <b className="font-bold">monitoring fish growth</b>  
          – <b className="font-bold">maintaining canal ecosystem health</b>  
          – <b className="font-bold">managing collective resources</b>  

          Their involvement goes beyond labour—they contribute to <b className="font-bold">decision-making</b> and <b className="font-bold">planning</b>, enhancing their economic and social agency.  

          This challenges traditional gender norms and strengthens <b className="font-bold">women’s empowerment</b> in the Sundarbans.
        </>
      )
    },
    {
      name: "Nutritional benefits",
      description: (
        <>
          Fish is a rich source of <b className="font-bold">high-quality protein</b> and <b className="font-bold">omega-3 fatty acids</b>, supporting:  
          – <b className="font-bold">brain function</b>  
          – <b className="font-bold">heart health</b>  
          – <b className="font-bold">muscle development</b>  

          It also provides essential nutrients such as <b className="font-bold">vitamin D</b> and <b className="font-bold">selenium</b>.
        </>
      )
    },
    {
      name: "Food security (local to global)",
      description: (
        <>
          Fishing is a backbone of <b className="font-bold">food and livelihood security</b> in the Indian Sundarbans.  

          The <b className="font-bold">“canal as commons”</b> model strengthens both traditional livelihoods and future food security by ensuring equitable resource use.

          This approach contributes to global conversations on <b className="font-bold">sustainable resource management</b>, <b className="font-bold">climate resilience</b>, and the preservation of <b className="font-bold">local knowledge systems</b>.
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
          FISHING (CANAL AS COMMONS)
        </h1>

        <img
          src={FishBackground}
          alt="Fishing"
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
                onClick={() => navigate("/honey")}   
                className="flex items-center gap-2 underline decoration-white text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                Honey
                <span className="underline decoration-white">
                  <FontAwesomeIcon icon={faCaretRight} />
                </span>
              </button>
            </div>
    </div>
  );
};

export default Fish;
