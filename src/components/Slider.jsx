import React, { useState } from "react";
import heroOne from "../assets/HeroImg/hero1.jpeg"
import heroTwo from "../assets/HeroImg/hero2.jpeg";
import heroThree from "../assets/HeroImg/hero3.jpeg"

const slides = [
  { id: 1, 
    img: heroOne,
    title: "Strategic Partner for Digital Business Transformation",
    desc: "Empower and transform conventional businesses into modern digital experiences."
  },
  { id: 2, 
    img: heroTwo,
    title: "Empowering Digital Growth",
    desc: "We redesign business models and create world-class digital experiences."
  },
  { id: 3, 
    img: heroThree,
    title: "Innovate. Transform. Scale.",
    desc: "Deliver innovative strategies for tomorrow’s business landscape."
  }
];


export default function Slider() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () =>
    setCurrent(current === 0 ? slides.length - 1 : current - 1);

  const nextSlide = () =>
    setCurrent(current === slides.length - 1 ? 0 : current + 1);

  return (
    <div className="relative w-full h-[70vh] md:h-[98vh] ">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.img}
            alt="slide"
            className="w-full h-[80] object-cover"
          />

          {/* Text overlay */}
          <div className="absolute inset-0 bg-black/50 flex items-center">
            <div className="text-white px-6 md:px-20 max-w-2xl ">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                {slide.title}
              </h2>
              <p className="text-sm md:text-lg">{slide.desc}</p>
            </div>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-white/80 p-3  text-black"
      >
        ❮
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-white/80 p-3  text-black"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 w-full flex justify-center gap-3">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-4 h-4 rounded-full cursor-pointer ${
              current === index ? "bg-white" : "bg-white/40"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
