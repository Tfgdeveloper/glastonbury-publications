import React from 'react';

const PublishingProcess = ({
  title = "Book Publishing",
  highlightedText = "Work Process",
  steps = [
    {
      imgSrc: "https://via.placeholder.com/50", 
      heading: "Schedule A Free Strategy Call",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      imgSrc: "https://via.placeholder.com/50", 
      heading: "Get Onboard with Us",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      imgSrc: "https://via.placeholder.com/50", 
      heading: "Getting Work Done",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    }
  ],
  image = "https://via.placeholder.com/400x300"
}) => {
  return (
    <section className="pb-20 pt-0 px-6 md:px-16 bg-[#EAE9E9]  ">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2
            className="font-bold mb-4 text-center text-[32px] lg:text-[48px]"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontStyle: "normal",
              fontWeight: 700,
            }}
          >
           {title} <span>{highlightedText}</span>
          
        
      </h2>
        
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-center ">
        {/* Left Column - Steps */}
        <div className="w-full lg:w-1/2 space-y-15">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-6">
              {/* Replaced circle with image */}
              <div className=" w-[80%] lg:w-[30%] flex items-center justify-center bg-[#A13D51] rounded-full">
                <img src={step.imgSrc} alt={`Step ${index + 1}`} className="w-full h-full object-cover rounded-full" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-2xl font-semibold text-[#000] leading-tight text-left mb-2">{step.heading}</h3>
                <p className="text-[16px] text-black-700">{step.text}</p>
              </div>
              
            </div>
          ))}
        </div>

        {/* Right Column - Image */}
        <div className="w-full lg:w-1/2">
          <img src={image} alt="Work Process" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default PublishingProcess;
