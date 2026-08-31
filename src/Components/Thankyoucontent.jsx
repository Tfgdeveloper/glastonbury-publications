import React from 'react'
import { useNavigate } from 'react-router'

const Thankyoucontent = () => {
  const navigate = useNavigate();

    const getStartedButtonStyle = {
    borderRadius: "23.19px 23.19px 0px 23.19px",
    background: "#0A2342",
    color: "#FFF",
    fontFamily: "Poppins",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: 400,
    letterSpacing: "1px",
    transition: "all 0.3s ease",
    transform: "translateY(0)",
  };
  const getStartedButtonHoverStyle = {
    ...getStartedButtonStyle,
    background: "#0A2342",
    transform: "translateY(-2px)",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  };

  return (
    <section className="w-full max-h-[200vh] lg:max-h-[100vh] overflow-hidden flex flex-col md:flex-col lg:flex-row items-center justify-between bg-[linear-gradient(145deg,#3b6635,#2d6588)] px-4 md:px-16 py-30">
       <div className="max-w-6xl mx-auto">
        {/* Top Column */}
        <div className="mb-16">
<h2 className="text-white text-3xl md:text-[48px] font-bold text-center mb-6 animate-glow">
  Thank You!
</h2>
<p className="text-white text-center max-w-3xl mx-auto mb-12 leading-relaxed">
  Your message has been sent successfully. We'll get back to you soon!
</p>
            <div className=" flex justify-center">
                        <button 
                        type="button"
                        onClick={() => navigate(-1)}
                        className="px-6 py-2 font-medium"
                        style={getStartedButtonStyle}
            onMouseEnter={(e) => {
              Object.assign(e.target.style, getStartedButtonHoverStyle);
            }}
            onMouseLeave={(e) => {
              Object.assign(e.target.style, getStartedButtonStyle);
            }}>
                         
                                          Back to Page
                                        
                        </button>
                        
                      </div>
          
          
          
        </div>

        
        
      </div>
    </section>
  )
}

export default Thankyoucontent
