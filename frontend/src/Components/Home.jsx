import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center items-center text-center text-white px-8 pt-20">
      {/* Overlay for readability */}
      <div className="absolute inset-0 "></div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-5xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-8 text-white">
          PRODUCTS OF SUNDARVANS
        </h1>

        <p className="text-lg md:text-xl leading-relaxed text-gray-200 font-light bg-black/60 p-6 rounded-2xl shadow-lg hover:bg-black/70 transition-all duration-500">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, voluptate? Error sapiente est quibusdam, repudiandae inventore blanditiis perferendis ullam. Odio est commodi illum maxime? Quo ipsa ex ea vel nostrum!
          Quidem magni aliquid, est ad quo itaque harum nihil, accusamus cum mollitia eum quia reprehenderit ipsa quis quaerat eius eligendi tenetur dolore voluptatum, dolorem culpa? Ab corrupti soluta aliquid eligendi?
          Quaerat vero, libero temporibus laborum nisi quos commodi nulla quam ab aperiam dolorum obcaecati consectetur quasi sed autem harum saepe animi consequatur possimus voluptatum assumenda sunt eveniet beatae cupiditate! Maxime.
          Itaque velit voluptate ullam voluptas eveniet maiores sequi, molestias minus quos neque dicta cumque architecto cum officia sed vero enim repellat! Molestiae sequi expedita ipsam alias accusamus magni consequatur a!
        </p>
      </motion.div>

    </div>
  );
};

export default Home;
