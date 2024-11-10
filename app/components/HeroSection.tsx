// components/HeroSection.tsx
import React from 'react';

const HeroSection = () => {
  return (
    <section className="flex items-center justify-between p-8 bg-white">
      <div className="max-w-md text-black">
        <h1 className="  font-sans md:font-serif font-normal  text-3xl p-7 pb-2 ml-64 mt-28 w-full">IMPECCABLE CRAFTSMANSHIP AND FINESSE</h1>
        <p className="text-[#c0ad87] ml-72  mt-7 w-full">
          An example of intricate workmanship and detail, elegant necklaces and long and short
          chains form a part of our desirable collection.
        </p>
        <button className="m-5 px-6 py-2 bg-[#c0ad87] text-white rounded ml-72">
          Explore Now
        </button>
      </div>
      <div  className="absolute bottom-10 right-40  w-80 h-100 rounded-lg overflow-hidden shadow-lg">
        <img
          src="/imge/buty2.jpg" 
          alt="Jewellery Collection"
          className="rounded-lg"
        />
      </div>
    </section>
  );
};

export default HeroSection;
