
import React from 'react';
import { HERO_TITLE, WEDDING_DATE } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[80vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-black">
      {/* 
          ВАЖНО: Файл должен лежать по пути assets/videos/hero_bg.mp4
          Мы добавили preload="auto" для более плавной загрузки.
      */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover grayscale opacity-30"
      >
        <source src="./assets/videos/hero_bg.mp4" type="video/mp4" />
      </video>
      
      <div className="relative z-10 space-y-4">
        <p className="text-[9px] uppercase tracking-[0.6em] text-white/40 font-light mb-2">
          Коллекция воспоминаний
        </p>
        <h1 className="text-lg md:text-xl lg:text-2xl font-serif font-light text-white tracking-[0.4em] uppercase">
          {HERO_TITLE}
        </h1>
        <div className="w-6 h-[1px] bg-white/20 mx-auto my-4"></div>
        <p className="text-[11px] font-serif italic text-white/60 tracking-widest">
          {WEDDING_DATE}
        </p>
      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-20">
        <span className="text-[8px] uppercase tracking-[0.3em] text-white">Листайте вниз</span>
        <div className="w-[1px] h-8 bg-white"></div>
      </div>
    </section>
  );
};

export default Hero;
