import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";


const column1 = [
  "books/2.webp",
  "books/3.webp",
  "books/4.webp",
  "books/5.webp",
  "books/6.webp",
  "books/7.webp",
  "books/8.webp",
  "books/2.webp",
  "books/3.webp",
  "books/4.webp",
  "books/5.webp",
  "books/6.webp",
  "books/7.webp",
  "books/8.webp",
  "books/2.webp",
  "books/3.webp",
  "books/4.webp",
  "books/5.webp",
  "books/6.webp",
  "books/7.webp",
  "books/8.webp",
  "books/2.webp",
  "books/3.webp",
  "books/4.webp",
  "books/5.webp",
  "books/6.webp",
  "books/7.webp",
  "books/8.webp",
];

const column2 = [
  "books/9.webp",
  "books/10.webp",
  "books/11.webp",
  "books/12.webp",
  "books/27.webp",
  "books/30.webp",
  "books/15.webp",
  "books/9.webp",
  "books/10.webp",
  "books/11.webp",
  "books/12.webp",
  "books/27.webp",
  "books/30.webp",
  "books/15.webp",
   "books/9.webp",
  "books/10.webp",
  "books/11.webp",
  "books/12.webp",
  "books/27.webp",
  "books/30.webp",
  "books/15.webp",
  "books/9.webp",
  "books/10.webp",
  "books/11.webp",
  "books/12.webp",
  "books/27.webp",
  "books/30.webp",
  "books/15.webp",
];

const column3 = [
  "books/16.webp",
  "books/17.webp",
  "books/18.webp",
  "books/19.webp",
  "books/29.webp",
  "books/21.webp",
  "books/22.webp",
  "books/16.webp",
  "books/17.webp",
  "books/18.webp",
  "books/19.webp",
  "books/29.webp",
  "books/21.webp",
  "books/22.webp",
  "books/16.webp",
  "books/17.webp",
  "books/18.webp",
  "books/19.webp",
  "books/29.webp",
  "books/21.webp",
  "books/22.webp",
  "books/16.webp",
  "books/17.webp",
  "books/18.webp",
  "books/19.webp",
  "books/29.webp",
  "books/21.webp",
  "books/22.webp",
];

const column4 = [
  "books/13.webp",
  "books/14.webp",
  "books/20.webp",
  "books/23.webp",
  "books/24.webp",
  "books/25.webp",
  "books/28.webp",
  "books/13.webp",
  "books/14.webp",
  "books/20.webp",
  "books/23.webp",
  "books/24.webp",
  "books/25.webp",
  "books/28.webp",
  "books/13.webp",
  "books/14.webp",
  "books/20.webp",
  "books/23.webp",
  "books/24.webp",
  "books/25.webp",
  "books/28.webp",
  "books/13.webp",
  "books/14.webp",
  "books/20.webp",
  "books/23.webp",
  "books/24.webp",
  "books/25.webp",
  "books/28.webp",
];

const Animations = () => {
      const [moveDistance, setMoveDistance] = useState(1500);

  useEffect(() => {
    function updateDistance() {
      const width = window.innerWidth;
      if (width < 768) {
        setMoveDistance(500); // mobile
      } else if (width < 1200) {
        setMoveDistance(1000); // tablet
      } else {
        setMoveDistance(1500); // desktop
      }
    }

    updateDistance(); // set on mount
    window.addEventListener("resize", updateDistance); // update on resize

    return () => window.removeEventListener("resize", updateDistance);
  }, []);



  const columns = [column1, column2, column3, column4];


  return (
    <div
        className="hidden md:grid md:grid-cols-4 "
      style={{
       
        gridTemplateColumns: "repeat(4, 1fr)", // 4 equal columns, responsive
        columnGap: "20px",
        justifyContent: "start",
        padding: "10px",
        transform: "rotate(15deg)",
        width: "100%",           // full width container
        maxWidth: "1200px",      // max width limit for container
        margin: "0 auto", 
        zIndex:"10"  ,
            // center container horizontally
      }}
    >
      {columns.map((colImages, colIndex) => {
        const finalY = colIndex % 2 === 0 ? moveDistance : -moveDistance;

        return (
          <motion.div
            key={colIndex}
            style={{
              display: "flex",
              flexDirection: "column",
              rowGap: "10px",
              width: "100%",     // fill the grid column width
              alignItems: "center",
            }}
            initial={{ y: 0 }}
            animate={{ y: finalY }}
            transition={{
              duration: 5,
              ease: [0.33, 1, 0.68, 1],
            }}
          >
            {colImages.map((src, i) => (
              <img
                key={i}
                src={src}
                loading="lazy"
                 alt={`img-col${colIndex + 1}-${i + 1}`}
                className="
                 w-120
                 h-180       /* mobile default */
                 md:max-w-[150px] md:h-[225px] /* tablet and up */
                 lg:max-w-[180px] lg:h-[270px] /* laptop and larger */
                 
                 object-cover block"
              />
            ))}
          </motion.div>
        );
      })}
    </div>
  );
};

export default Animations;
