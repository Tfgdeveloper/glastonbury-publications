import { useRef, useMemo, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import CustomVideoPlayer from "./CustomVideoPlayer";

const VIDEOS = [
  { 
    videoUrl: "Video/5.mp4", 
    
  },
  { 
    videoUrl: "Video/6.mp4", 
   
  },
  { 
    videoUrl: "Video/7.mp4", 
   
  },
  // add more videos...
];

function Card({ videoUrl}) {
 
  


  return (
    <article className="overflow-relative rounded-xl ring-1 ring-black/5">
      <div className="relative ">
         <CustomVideoPlayer src={videoUrl} />
      
      </div>
      
    </article>
  );
}

export default function Podcast() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [navReady, setNavReady] = useState(false);

  const fewSlides = VIDEOS.length <= 1;
  const breakpoints = useMemo(
    () => ({
      768: { slidesPerView: Math.min(2, VIDEOS.length) }, 
      1024: { slidesPerView: fewSlides ? Math.min(2, VIDEOS.length) : 1 },
    }),
    [fewSlides]
  );

  useEffect(() => {
    setNavReady(true);
  }, []);

  return (
    <section className="mx-auto max-w-sm md:max-w-6xl px-4">
      <p className="text-lp text-center text-[18px] tracking-widest text-[#333]">
        INSPIRING CONVERSATIONS. UNFORGETTABLE STORIES.
      </p>
      <h2 className="heading-lp mt-2 text-center text-[42px] font-extrabold text-black">
        Explore Our Client Success Stories
      </h2>

      <div className="mt-8">
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={24}
          rewind
          navigation={navReady ? { prevEl: prevRef.current, nextEl: nextRef.current } : false}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          breakpoints={breakpoints}
          className="!pb-14"
        >
          {VIDEOS.map((t, i) => (
            <SwiperSlide key={i} className="!h-auto">
              <Card {...t} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom arrows */}
        <div className="mt-3 flex items-center justify-center gap-6">
          <button
            ref={prevRef}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white shadow ring-1 ring-neutral-200 hover:bg-neutral-50"
            aria-label="Previous"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M15 6L9 12l6 6" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
          <button
            ref={nextRef}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white shadow ring-1 ring-neutral-200 hover:bg-neutral-50"
            aria-label="Next"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
