import React from 'react';
import { motion } from "framer-motion";
import Dropdown from './Dropdown';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import BoriImage from "../assets/Bori.jpg";
import Borigender from "../assets/Borigender.jpg";
import AshGourd from "../assets/Ash gourd.jpg";
import dal from "../assets/dal.jpg";
import plant from "../assets/plant.webp";


const BoriPage = () => {
  const navigate = useNavigate();

  const content = [
    {
      name: "History and Context",
      description: (
        <>
          <b className="font-bold">Bori</b>, the traditional dried lentil dumpling, has long
          been a staple in Sundarbans households, passed down through generations.
          Originally developed as a method to preserve surplus lentils and
          vegetables, it reflects <b className="font-bold">social resilience</b> in adapting to
          seasonal cycles and limited resources. Over time, Bori making has
          evolved beyond preservation—it has become a <b className="font-bold">ritualistic and
          communal activity</b>, especially during winter when conditions are ideal
          for sun-drying.
          <br /><br />
          The practice embodies a fusion of culinary knowledge, ecological
          adaptation, and cultural heritage, sustaining both <b className="font-bold">food
          security</b> and <b className="font-bold">social bonds</b> within local communities.
        </>
      ),
    },
    {
      name: "Production process",
      description: (
        <>
          The process begins with soaking <b className="font-bold">thikre moong</b>, a lentil
          unique to the Sundarbans, overnight. Ash gourd (<b className="font-bold">chalkumro</b>)
          is grated and left to drain in a protective net.
          <br /><br />
          The next morning, lentil skins are removed and ground along with ash gourd
          using a traditional <b className="font-bold">shil-nora</b> to form a smooth paste.
          This mixture is then stirred vigorously in an earthen vessel
          (<b className="font-bold">malsa</b>) using a <b className="font-bold">ghoton-kathi</b>—a locally crafted
          wooden or bamboo stirring tool.
          <br /><br />
          Small dumplings are shaped by hand and arranged on white cloths to dry
          naturally under the winter sun. The process depends on clear skies,
          strong sunlight, and low humidity, blending <b className="font-bold">scientific
          precision</b> with seasonal wisdom.
          <br /><br />
          Bori making is <b className="font-bold">labour-intensive</b> and primarily undertaken by
          women. Among them, <b className="font-bold">Shobha di, Ujjala di, Sagarika di, and Sudha
          Kakima</b> are active members who keep this tradition alive.
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
  
  
  <div className="flex flex-col items-center">
    <img 
      src={AshGourd} 
      alt="Ash Gourd" 
      className="w-full md:w-50 mt-4 mb-2 rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
    />
    <p className="text-center text-sm font-semibold">Ash Gourd</p>
  </div>


  <div className="flex flex-col items-center">
    <img 
      src={dal} 
      alt="Dal" 
      className="w-full md:w-50 h-50 mt-4 mb-2 rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
    />
    <p className="text-center text-sm font-semibold">Dal Paste</p>
  </div>

  
  <div className="flex flex-col items-center">
    <img 
      src={plant} 
      alt="Plant" 
      className="w-full md:w-50 mt-4 mb-2 rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
    />
    <p className="text-center text-sm font-semibold">Sun-Drying Setup</p>
  </div>

</div>

            
        </>
      ),
    },
    {
      name: "Grassroots and local mobilization",
      description: (
        <>
          Bori making is an <b className="font-bold">intergenerational skill</b>, deeply rooted in
          household traditions. Local NGOs and <b className="font-bold">women’s Self Help Groups
          (SHGs)</b> are now working together to revive and expand this cultural
          practice through community mobilization, collaborative learning, and
          team-based production.
        </>
      ),
    },
    {
      name: "Livelihood opportunities and market linkages",
      description: (
        <>
          Bori production supports <b className="font-bold">home-based entrepreneurial ventures</b>.
          Connecting these micro-enterprises to urban markets through a
          <b className="font-bold"> Farmer Producer Company (FPC)</b> can significantly boost income
          and create sustainable livelihood pathways for women-led households.
        </>
      ),
    },
    {
      name: "Gender empowerment and agency",
      description: (
        <>
          Traditionally made by <b className="font-bold">women</b>, Bori symbolizes both culinary
          heritage and <b className="font-bold">women’s entrepreneurship</b>. As more women engage
          in production, packaging, and marketing, Bori making strengthens their
          economic agency and role in local value chains.
            <div className='flex justify-center'><img src={Borigender} alt="Bori Gender" className="w-50 md:w-50 mt-4 mb-2 rounded-xl shadow-lg hover:scale-105 transition-transform duration-500 "/></div>
            <b className=' flex justify-center'>Women Empowerment in Bori Making</b>
        </>
      ),
    },
    {
      name: "Nutritional benefits",
      description: (
        <>
          Made from sun-dried <b className="font-bold">lentil paste</b> and <b className="font-bold">ash gourd</b>, Bori
          is rich in <b className="font-bold">protein, fibre, and essential minerals</b>. It is a
          versatile ingredient that enhances flavour and texture in a wide range
          of traditional dishes, contributing to balanced, nutritious meals.
        </>
      ),
    },
    {
      name: "Food security (local to global)",
      description: (
        <>
          Bori making sustains <b className="font-bold">traditional knowledge systems</b> and
          reinforces <b className="font-bold">women’s cooperative networks</b>. At a global level,
          such place-based practices demonstrate how food heritage can contribute
          to year-round availability, reduce post-harvest losses, and strengthen
          <b className="font-bold"> community food security</b>.
        </>
      ),
    },
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
         
     DRIED LENTIL DUMPLINGS (BORI)
        </h1>

     
        <img src={BoriImage} alt="Bori" className="w-50 md:w-50 mb-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-500" />

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
          onClick={() => navigate("/roselle")}   // change route later
          className="flex items-center gap-2 underline decoration-white text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
        >
          Roselle
          <span className="underline decoration-white">
            <FontAwesomeIcon icon={faCaretRight} />
          </span>
        </button>
      </div>

    </div>
  );
};

export default BoriPage;
