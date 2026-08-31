import React, { useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

function Ctasection() {
  const [isMaximized, setIsMaximized] = useState(true);

  return (
    <motion.div
      className="w-full py-10 px-4 md:px-16 flex flex-col lg:flex-row md:flex-row sm:flex-col items-center justify-between bg-cover bg-center gap-5"
      style={{
        backgroundImage: "url('/images/EXCLUSIVE-oFFER.jpg')",
        height: "200px"
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }} // triggers when 30% of the section is in view
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
    </motion.div>
  );
}

export default Ctasection;
