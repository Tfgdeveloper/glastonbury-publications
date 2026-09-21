import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TESTIMONIALS = [
  { name: "Sarah Jones", text: "I was nervous about publishing my first children’s book, but the they guided me through every step. From editing to illustrations, everything turned out even better.", background: "url('/Landing/testimonial.png')" },
  { name: "Daniel Mall", text: "They made the process so simple and stress-free. My children’s story went from a messy draft to a polished book I’m proud to share with readers.", background: "url('/Landing/testimonial2.png')" },
  { name: "Andy Kims", text: "The illustrations give my story to a life in a way I never thought possible. Their attention to detail and support made me feel like my book truly mattered.", background: "url('/Landing/testimonial3.png')" },
  { name: "Mark Loneey", text: "I’ve worked with other publishers before, but none matched the level of professionalism and care I found here. My children’s series looks amazing, and I couldn’t be more happier.", background: "url('/Landing/testimonial.png')" },
  { name: "Emily Rose", text: "As a new writer, I was overwhelmed by the idea of publishing. They walked me through it with expertise, and now my dream of becoming a author is real.", background: "url('/Landing/testimonial2.png')" },
];

const BubbleCard = ({ t }) => (
  <div className="px-3">
    <div
      className="rounded-3xl bg-no-repeat bg-contain p-6 md:p-10 min-h-[220px] md:min-h-[400px] "
      style={{ backgroundImage: t.background, backgroundPosition: "center" }}
    >
      <h3 className="chewy text-[24px] md:text-[36px] font-semibold text-white md:mt-10 mt-2">
        {t.name}
      </h3>
      <p className="josh text-white/90 leading-relaxed text-[14px] md:text-[18px]">
        {t.text}
      </p>
    </div>
  </div>
);

const Testimonialschild = () => {
  // assign different colors per dot
  const dotColors = ["bg-[#F37063]", "bg-[#7F78FF]", "bg-[#C202F4]", ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
    appendDots: (dots) => (
      <div>
        <ul className="flex justify-center gap-0 mt-6">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className={`h-3 rounded-full transition-all duration-300 ease-in-out ${
          dotColors[i % dotColors.length]
        }`}
      />
    ),
  };

  return (
    <section className="py-12 md:py-16">
      <div className="md:max-w-[1720px] max-w-screen mx-auto px-6">
        <Slider {...settings}>
          {TESTIMONIALS.map((t, i) => (
            <BubbleCard t={t} key={i} />
          ))}
        </Slider>
      </div>

      {/* Custom CSS for active dot */}
      <style jsx global>{`
        .slick-dots li {
          width: 14px; /* base width */
        }
        
      `}</style>
    </section>
  );
};

export default Testimonialschild;
