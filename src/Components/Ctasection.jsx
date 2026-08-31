import React, { useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

function Ctasection() {
  const [isMaximized, setIsMaximized] = useState(true);

  return (
    <motion.div
      className="w-full flex flex-col lg:flex-row md:flex-row sm:flex-col items-center justify-between bg-contain bg-center gap-5"
      
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }} // triggers when 30% of the section is in view
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <img src="/images/Group 1707481923.png" className="w-full "/>
    </motion.div>
  );
}

export default Ctasection;
