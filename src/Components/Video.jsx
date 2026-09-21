import React from "react";
import CustomVideoPlayer from "./CustomVideoPlayer"; // Adjust path as needed

export default function Video() {
  return (
    <section className="mx-auto max-w-sm md:max-w-6xl px-4">
      <p className="text-lp text-center text-[18px] tracking-widest text-[#333]">
        WHERE EVERY STORY IS GIVEN A VOICE
      </p>
      <h2 className="heading-lp mt-2 text-center text-[42px] font-extrabold text-black">
        Our Audiobook Collection
      </h2>

      <div className="mt-8 flex flex-col md:flex-row gap-6">
        <div className="md:w-[29%]">
          <CustomVideoPlayer src="Video/2.mp4" />
        </div>
        <div className="md:w-[42%] flex flex-col justify-between">
          <CustomVideoPlayer src="Video/4.mp4" />
          <CustomVideoPlayer src="Video/1.mp4" />
        </div>
        <div className="md:w-[29%]">
          <CustomVideoPlayer src="Video/3.mp4" />
        </div>
      </div>
    </section>
  );
}