import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  const sections = [
    {
      title: "Who We Are",
      description: "We are Rajdip and Rhita Rhiddha, two passionate students creating a web experience to showcase Sundarban’s rich cultural and natural products. Through this project, we aim to tell the story of how local communities live, work, and sustain their unique way of life."
    },
    {
      title: "Our Mission",
      description: "Our mission is to connect people with the authentic Sundarban experience. By highlighting local products, crafts, and sustainable practices, we want to empower communities and promote awareness about their traditions and challenges."
    },
    {
      title: "Our Approach",
      description: "We combine UX design, visual storytelling, and interactive web elements to create an engaging platform. Every design choice is inspired by the Sundarban environment—its mangroves, rivers, and the resilience of its people."
    },
    {
      title: "Our Values",
      description: "Sustainability, authenticity, and community empowerment are at the core of our work. We value collaboration with local producers, respect for culture, and transparent storytelling that educates and inspires."
    },
  ];

  return (
    <div className="min-h-screen  text-white px-6 py-20 flex flex-col items-center">
      {/* Header */}
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold mb-12 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Us
      </motion.h1>

      {/* Sections */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            className="bg-black/50 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
            <p className="text-gray-200 font-light">{section.description}</p>
          </motion.div>
        ))}
      </div>

      
    </div>
  );
};

export default AboutUs;
