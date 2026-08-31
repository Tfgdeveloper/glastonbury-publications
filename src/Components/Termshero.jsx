import React from 'react'

function Termshero({
  
  title = "WE ARE CREATIVE BOOK PUBLISHING", 
}) {
  return (
    <section
    className="relative py-20 md-30 px-2 bg-cover bg-top bg-no-repeat bg-[linear-gradient(145deg,#3b6635,#2d6588)]"
   
    >
        <div className="max-w-7xl mx-auto pt-20  items-center">
            <h1 className="text-[50px] font-bold text-[#FFF] leading-tight mb-4 text-center ">
            {title}
            
            
          </h1>

        </div>

 
    </section>
  )
}

export default Termshero
