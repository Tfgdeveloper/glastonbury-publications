import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";






const Portfoliosection = () => {
  // Sample images array for each category
  const images = {
    Fiction: [
      "/portfolio/5.webp",
      "/portfolio/7.webp",
      "/portfolio/10.webp",
      "/portfolio/11.webp",
      "/portfolio/3.webp",
      "/portfolio/23.webp",
      "/portfolio/24.webp",
    ],
    NonFiction: [
      "/portfolio/22.webp",
      "/portfolio/27.webp",
      "/portfolio/29.webp",
      "/portfolio/30.webp",
      "/portfolio/37.webp",
      "/portfolio/38.webp",
    ],
    Biography: [
      "/portfolio/6.webp",
      "/portfolio/28.webp",
      "/portfolio/34.webp",
      "/portfolio/35.webp",
      
      "/portfolio/3.webp",
    ],
    Informative: [
      "/portfolio/2.webp",
      "/portfolio/8.webp",
      "/portfolio/9.webp",
      "/portfolio/4.webp",
      "/portfolio/14.webp",
      "/portfolio/13.webp",
      "/portfolio/25.webp",
      "/portfolio/33.webp",
    ],
    Memoir: [
      "/portfolio/12.webp",
      "/portfolio/31.webp",
      "/portfolio/32.webp",
      "/portfolio/34.webp",
      "/portfolio/35.webp",
      
      
    ],
    Children: [
      "/portfolio/19.webp",
      "/portfolio/15.webp",
      "/portfolio/18.webp",
      "/portfolio/17.webp",
      "/portfolio/16.webp",
      "/portfolio/20.webp",
    ],
  };

  // State to manage the images shown for each category
  const [selectedTab, setSelectedTab] = useState("Fiction");
  const [visibleImages, setVisibleImages] = useState(images.Fiction.slice(0, 5));

  // Function to load more images for each category
  const loadMoreImages = (category) => {
    const currentVisible = visibleImages.length;
    const newVisible = images[category].slice(0, currentVisible + 5);
    setVisibleImages(newVisible);
  };

  // Handle tab switch
  const handleTabSwitch = (category) => {
    setSelectedTab(category);
    setVisibleImages(images[category].slice(0, 5)); // Reset to first 4 images for the selected tab
  };



  return (
    <section className="py-16 px-4 lg:px-20 bg-[#EAE9E9] ">
      
      {/* Portfolio Heading */}
      <h2
            className="font-bold mb-4 text-center text-[32px] lg:text-[48px]"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontStyle: "normal",
              fontWeight: 700,
            }}
          >
           
          
        Check Out <span >Our Work</span>
      </h2>

      {/* Portfolio Description */}
      <p className="text-black text-center text-[18px] text-gray-700 mb-8 mx-5 lg:mx-30">
        We take pride in delivering exceptional results for authors worldwide. From expertly crafted ghostwriting to impactful creative writing, we bring your ideas to life with unmatched professionalism.We ensure every project is polished, published, and ready to inspire readers on different platforms.
      </p>

      {/* Swiper for Category Slider on Mobile */}
      <div className="block lg:hidden mb-8">
        <Slider
          dots={false}
          infinite={true}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={3000}
          arrows={false}
          centerMode={true}
          centerPadding="0px"
        >
    {Object.keys(images).map((category, index) => (
      <div key={index} className="px-3">
        <div className="flex flex-col items-center">
          <h3 className="text-[24px] font-bold text-[#0A2342] mb-4">{category}</h3>
          <div className="grid grid-cols-2 gap-4 w-full">
            {images[category].slice(0, 4).map((image, i) => (
              <div key={i} className="w-full">
                <img
                  src={image}
                  alt={`${category} ${i + 1}`}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            ))}
          </div>
          <button
            onClick={() => loadMoreImages(category)}
            className="px-6 py-2 font-medium"
            
          >
            Load More
          </button>
          
        </div>
      </div>
    ))}
  </Slider>

   
      </div>

      {/* Tabs for Desktop */}
      <div className="hidden lg:flex justify-center mb-8">
        <div className="tabs flex gap-8">
          {Object.keys(images).map((category, index) => (
            <button
              key={index}
              className={`px-6 py-2 text-lg font-semibold ${selectedTab === category ? 'bg-[linear-gradient(145deg,#3b6635,#2d6588)] text-white' : 'bg-transparent text-[#3b6635] border-2 border-[linear-gradient(145deg,#3b6635,#2d6588)]'} rounded-full hover:bg-[linear-gradient(145deg,#3b6635,#2d6588)] hover:text-white transition-colors`}
              onClick={() => handleTabSwitch(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Displaying Images for Selected Category */}
      <div className="mb-12 hidden lg:block"> {/* Hide on mobile/tablets, show on desktop */}
  <div className="grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
    {visibleImages.map((image, i) => (
      <div key={i} >
        <img
          src={image}
          alt={`${selectedTab} Image ${i + 1}`}
          className="w-[200px] h-[272px] object-contain"
        />
      </div>
    ))}
  </div>

  {/* Load More Button */}
  {visibleImages.length < images[selectedTab].length && (
    <div className="text-center mt-8">
      <button
        onClick={() => loadMoreImages(selectedTab)}
        className="bg-[#0A2342] text-white font-semibold py-3 px-8 rounded-full hover:bg-white hover:text-[#0A2342] transition-colors duration-300"
      >
        Load More
      </button>
    </div>
  )}
</div>
    </section>
  );
};

export default Portfoliosection;