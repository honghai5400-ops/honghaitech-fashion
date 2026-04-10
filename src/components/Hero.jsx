import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import bannerSummer from '../assets/images/hero-banner-summer.jpg';
import bannerAutumn from '../assets/images/hero-banner-autumn.jpg';
import bannerOffice from '../assets/images/hero-banner-office.jpg';

const slides = [
  {
    image: bannerSummer,
    title: "Bộ sưu tập",
    main: "DREAM\nTEAM\nSummer",
  },
  {
    image: bannerAutumn,
    title: "Hoa cỏ mùa xuân",
    main: "YÊN YÊU\nCOLLECTION\nBlooming",
  },
  {
    image: bannerOffice,
    title: "Thời trang",
    main: "PHONG CÁCH\nNAM GIỚI\n2026",
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = (e) => {
    e.stopPropagation();
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };
  
  const prevSlide = (e) => {
    e.stopPropagation();
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  return (
    <div className="w-full relative overflow-hidden group cursor-pointer" style={{ aspectRatio: '21/9' }}>
      {slides.map((slide, index) => (
        <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? 'opacity-100' : 'opacity-0 z-0'}`}>
          <img 
            src={slide.image} 
            alt={`Slide ${index}`} 
            className={`w-full h-full object-cover transition-transform duration-[7000ms] ease-out ${index === current ? 'scale-105' : 'scale-100'}`}
          />
          <div className="absolute inset-0 bg-black/20"></div>
          
          {/* Slider Content */}
          <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-24">
            <div className={`mt-20 max-w-xl text-white transition-all duration-[800ms] delay-300 ${index === current ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
               <h2 className="text-xl md:text-2xl font-medium mb-3 drop-shadow-md tracking-[0.2em] uppercase font-outfit text-white/90">
                 {slide.title}
               </h2>
               <h1 className="text-6xl md:text-[100px] font-black mb-8 drop-shadow-2xl whitespace-pre-line leading-[0.9] font-outfit tracking-tight">
                 {slide.main.split('\n').map((line, i) => (
                   <React.Fragment key={i}>
                     {line.match(/Summer|Blooming|2026/) ? <span className="text-5xl md:text-7xl font-light italic font-serif text-[#fca120] drop-shadow-md">{line}</span> : line}<br/>
                   </React.Fragment>
                 ))}
               </h1>
               <div className="mt-8">
                 <button className="bg-white/10 backdrop-blur-md border border-white/40 text-white px-10 py-4 rounded-full font-bold uppercase text-[15px] tracking-widest hover:bg-white hover:text-[#112950] transition-all duration-300 shadow-xl group">
                  Khám phá ngay
                  <span className="inline-block transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300 ml-2">→</span>
                 </button>
               </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Left/Right Arrows */}
      <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-white shadow-md hover:scale-110 z-10">
        <ChevronLeft className="w-6 h-6 text-gray-700" />
      </button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-white shadow-md hover:scale-110 z-10">
        <ChevronRight className="w-6 h-6 text-gray-700" />
      </button>

      {/* Pagination dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
           <button 
             key={index}
             onClick={(e) => { e.stopPropagation(); setCurrent(index); }}
             className={`h-2.5 rounded-full transition-all duration-300 shadow-sm ${index === current ? 'w-8 bg-[#fca120] opacity-100' : 'w-2.5 bg-white/50 hover:bg-white'}`} 
             aria-label={`Go to slide ${index + 1}`}
           />
        ))}
      </div>
    </div>
  );
};

export default Hero;
