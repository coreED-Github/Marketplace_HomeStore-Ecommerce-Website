"use client";
import React from "react";
import Image from "next/image";
const Banner = () => {
  return (
    <div className="mx-5 md:mx-10 mt-20">

      <div className="text-start ml-5">
        <h2 className="text-lg font-bold text-gray-800">
          <span className="text-slate-800 text-2xl mb-1 font-serif">Featured</span>
        </h2>
        <h3 className="text-2xl font-semibold mt-2 mb-5 text-slate-600 font-mono ">New Arrival</h3>
      </div>
      <div className="grid gap-6 md:gap-8 grid-cols-1 lg:grid-cols-2 mb-10">

        <div className="relative h-[365px] bg-black rounded-lg overflow-hidden">
          <Image
            src="/modern serenity.jpg"
            alt="PlayStation 5"
            className="w-full h-full object-cover"
            height={300}
            width={300}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
            <h4 className="text-2xl py-3 font-bold text-white">Modern Serenity</h4>
            <p className="text-sm text-white">In the coming days, you will not only be able to purchase products but also avail
              a top-notch setup service.</p>

          </div>
        </div>

        {/* Right Section */}
        <div className="grid gap-6">

          <div className="relative h-[200px] bg-black rounded-lg overflow-hidden">
            <Image
              src="/tropical.jpg"
              alt="Women's Collections"
              className="w-full h-full object-cover"
              height={300}
              width={300}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
              <h4 className="text-xl font-bold text-white">Tropical vibe
              </h4>
              <p className="text-sm text-white">Modern enivronment.</p>

            </div>
          </div>


          <div className="grid grid-cols-2 gap-6">
            <div className="relative h-[150px] bg-black rounded-lg overflow-hidden">
              <Image
                src="/relective haven.jpg"
                alt="Speakers"
                className="w-full h-full object-cover"
                height={300}
                width={300}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
                <h4 className="text-lg font-bold text-white">Reflective Haven</h4>
                <p className="text-sm text-white">Inner Peace.</p>

              </div>
            </div>

            <div className="relative h-[150px] bg-black rounded-lg overflow-hidden">
              <Image
                src="/bright space.jpg"
                alt="Perfume"
                className="w-full h-full object-cover"
                height={300}
                width={300}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
                <h4 className="text-lg font-bold text-white">Bright Space</h4>
                <p className="text-sm text-white">A lively Place.</p>

              </div>
            </div>


          </div>
        </div>
      </div>

    </div>
  );
};

export default Banner;