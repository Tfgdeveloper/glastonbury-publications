import { useRef, useMemo, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const TESTIMONIALS = [
  { quote: "I wanted my book to reach readers outside the U.S., and with Kobo, Glastonbury Publications made that happen. I now have readers in Canada, Europe, and even Asia.", author: "— Clara B" },
  { quote: "They optimized everything for Kobo — the formatting, the categories, and the marketing. I couldn’t have managed international publishing on my own.", author: "— Hassan K" },
  { quote: "Professional team, global results. My book found audiences across three continents thanks to their Kobo expertise.", author: "— Emily D" },
  { quote: "Expanding beyond the U.S. felt overwhelming, but Glastonbury Publications simplified the process. Through Kobo, my book is now reaching readers in the UK, Germany, and Australia.", author: "— Sofia M" },
   { quote: "They didn’t just publish my book internationally — they made sure it stood out. With Kobo optimization, I’ve connected with readers in multiple languages and cultures.", author: "— Ahmed R" },
   { quote: "Global publishing felt out of reach until Glastonbury Publications stepped in. Today, my book is gaining traction in Canada, Asia, and beyond.", author: "— Laura J" },
  // add more…
];

function Card({ quote, author }) {
  return (
    <article className="overflow-relative h-full rounded-xl bg-white p-6 shadow-md ring-1 ring-black/5">
      <span className="block -mt-2 text-7xl font-serif">
        <span className="bg-[linear-gradient(270deg,#2B6781_0%,#31552F_99.09%)] bg-clip-text text-transparent">&ldquo;</span>
      </span>
      <p className="text-lp mt-1 text-[18px] leading-6 text-neutral-700">{quote}</p>
      <p className="heading-lp mt-5 text-[24px] font-semibold text-neutral-900">{author}</p>
    </article>
  );
}

export default function Testimonialskobo() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [navReady, setNavReady] = useState(false);

  // If there are 3 or fewer slides, use 2 on large so arrows still do something.
  const fewSlides = TESTIMONIALS.length <= 3;
  const breakpoints = useMemo(
    () => ({
      768:  { slidesPerView: Math.min(2, TESTIMONIALS.length) },        // tablet
      1024: { slidesPerView: fewSlides ? Math.min(2, TESTIMONIALS.length) : 3 }, // large
    }),
    [fewSlides]
  );

  // Ensure the buttons exist in the DOM before enabling navigation
  useEffect(() => {
    setNavReady(true);
  }, []);

  return (
    <section className="">
      <div className="mx-auto max-w-sm md:max-w-6xl px-4">
        <p className="text-lp text-center text-[18px] tracking-widest text-[#333]">
          AUTHOR REVIEWS &amp; SUCCESS STORIES
        </p>
        <h2 className="heading-lp mt-2 text-center text-[42px] font-extrabold text-black">
          Real Stories. Real Success.
        </h2>

        <div className="mt-8">
          <Swiper
            modules={[Navigation]}
            slidesPerView={1}               // mobile
            spaceBetween={24}
            rewind                           // wrap at ends
            // IMPORTANT: attach custom buttons after they exist
            navigation={navReady ? { prevEl: prevRef.current, nextEl: nextRef.current } : false}
            onInit={(swiper) => {
              // double-bind to be safe in StrictMode
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            breakpoints={breakpoints}
            className="!pb-14"
          >
            {TESTIMONIALS.map((t, i) => (
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
      </div>
    </section>
  );
}
