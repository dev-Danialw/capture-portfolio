import React from "react";
// Page Components
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FaqSeqtion from "../components/FaqSection";
// animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const AboutUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutSection />;
      <ServicesSection />
      <FaqSeqtion />
    </motion.div>
  );
};
export default AboutUs;
