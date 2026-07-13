import React, { useEffect, useState } from "react";
// import Slider from '../components/Slider'
import imgTwo from '../assets/image/img1.jpeg'
import imgOne from '../assets/image/img2.jpeg'
import heroOne from "../assets/HeroImg/hero1.jpeg"
import heroTwo from "../assets/HeroImg/hero2.jpeg";
import heroThree from "../assets/HeroImg/hero3.jpeg"

function Home() {

  const slides = [
    { id: 1, 
      img: heroOne,
      title: "Boost Your Sales with Smart Lead Generation",
      desc: "Our expert sales teams generate high-quality leads and convert prospects into loyal customers.We focus on results-driven sales strategies, customer engagement, and revenue growth for your business."
    },
    { id: 2, 
      img: heroTwo,
      title: "Digital Marketing & E-commerce Support That Scales",
      desc: "We support your online growth with digital marketing and e-commerce management solutions.From campaign support to order management and customer queries, we help you scale faster and smarter."
    },
    { id: 3, 
      img: heroThree,
      title: "24/7 Customer Support & Back Office Solutions",
      desc: "We help businesses deliver exceptional customer experiences with reliable customer support and efficient back-office operations.From live chat and email support to data management and process handling, we ensure accuracy, speed, and satisfaction."
    }

  ];
  
    const skills = [
    { label: "Great Knowledge of Marketing Industry", value: 90 },
    { label: "Excellent Understanding of the Business", value: 85 },
    { label: "Good Communication Skills", value: 80 },
    { label: "Polished Approach Towards Work", value: 75 },
    { label: "Hands on Experience", value: 70 },
  ];
  const [animatedValues, setAnimatedValues] = useState(
    skills.map(() => 0)
  );

  // Animate on component mount
  useEffect(() => {
    setTimeout(() => {
      setAnimatedValues(skills.map((s) => s.value));
    }, 200);
  }, []);
  const [current, setCurrent] = useState(0);
  
    const prevSlide = () =>
      setCurrent(current === 0 ? slides.length - 1 : current - 1);
  
    const nextSlide = () =>
      setCurrent(current === slides.length - 1 ? 0 : current + 1);
          
  return (
    <div>
     <div className="relative w-full h-[70vh] md:h-[98vh] overflow-hidden">
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
            className="w-full h-full object-cover"
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
      <section className="w-full px-4 md:px-10 lg:px-20 py-10">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl text-gray-600">
        Technologist E-Solutions
      </h2>
      <div className="w-40 h-[2px] bg-orange-400 mt-2 mb-8"></div>

      {/* Main Card Container */}
      <div className="w-full bg-white shadow-md border rounded-lg overflow-hidden">

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3">

          {/* LEFT BIG BLUE BOX */}
          <div className="bg-[#7CC6DF] p-10 flex flex-col justify-center text-white min-h-[350px]">
            <h1 className="text-3xl md:text-4xl font-light leading-tight">
              Smart Business Process Outsourcing Solutions
            </h1>
            <p className="mt-6 text-lg">
              Technologist E-Solutions empowers businesses with reliable, scalable, and performance-driven BPO services.
We help companies reduce operational costs, improve efficiency, and deliver exceptional customer experiences through our skilled teams and proven processes.
              </p>
               <p className="mt-6 text-lg">
                Our expertise covers Customer Support Services, Back Office Operations, Sales & Lead Generation, Digital & Marketing Support, and E-commerce Support, tailored to meet your business goals.
               </p>
          </div>

          {/* RIGHT SIDE GRID */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2">

            {/* Image 1 */}
            <div className="bg-gray-200 h-full">
              <img
                src={imgOne}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            {/* Employee Satisfaction */}
            <div className="bg-[#0F526A] text-white p-6">
              <h3 className="text-xl ">People-First Culture</h3>
              <p className="mt-4 text-sm md:text-base">
                We believe our people are our biggest strength.
By creating a supportive and growth-focused environment, we ensure motivated teams that deliver consistent and high-quality results.
              </p>
            </div>

            {/* Higher Remuneration */}
            <div className="bg-[#0F526A] text-white p-6">
              <h3 className="text-xl ">Performance-Driven Rewards</h3>
              <p className="mt-4 text-sm md:text-base">
               Quality work deserves the right recognition.
Our performance-based approach encourages accountability, excellence, and long-term commitment across all operations.
              </p>
            </div>

            {/* Image 2 */}
            <div className="bg-gray-200">
              <img
                src={imgTwo}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            {/* Innovation */}
            <div className="bg-[#7CC6DF] text-white p-6">
              <h3 className="text-xl text-gray-600">Innovation & Technology</h3>
              <p className="mt-4 text-sm md:text-base">
                We leverage modern tools, automation, and data-driven strategies to deliver faster, smarter, and more efficient BPO solutions.
                             </p>
            </div>

            {/* Better Workplace */}
            <div className="bg-[#0F526A] text-white p-6">
              <h3 className="text-xl ">Productive Work Environment</h3>
              <p className="mt-4 text-sm md:text-base">
                A positive and collaborative workplace drives efficiency and innovation.
We focus on employee well-being, engagement, and continuous improvement.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
      <section className="w-full px-4 md:px-10 lg:px-20 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* LEFT - On Hiring */}
        <div>
          <h3 className="text-xl text-gray-600 flex">On Hiring &nbsp; <p class="fade-text">News</p></h3>
          <div className="w-24 h-[2px] bg-orange-500 mt-2 mb-6"></div>

          <div className="flex gap-4 items-start mb-6">
            <div className="bg-orange-500 text-white text-gray-600 w-10 h-10 flex items-center justify-center rounded">
              1
            </div>
            <div>
              <h4 className="text-gray-600">BDM Business Development Manager</h4>
              <p className="text-sm text-gray-600">
                Experience 1 to 2 year <br /> Fresher Can Apply
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="bg-orange-500 text-white text-gray-600 w-10 h-10 flex items-center justify-center rounded">
              2
            </div>
            <div>
              <h4 className="text-gray-600">Data Entry Operator</h4>
              <p className="text-sm text-gray-600">
                Experience 1 to 2 year <br /> Fresher Can Apply
              </p>
            </div>
          </div>
              <div className="flex gap-4 items-start pt-5">
            <div className="bg-orange-500 text-white text-gray-600 w-10 h-10 flex items-center justify-center rounded">
              3
            </div>
            <div>
              <h4 className="text-gray-600">Digital Marketer</h4>
              <p className="text-sm text-gray-600">
                Experience 1 to 5inde year <br /> Fresher Can Apply
              </p>
            </div>
          </div>
          
        </div>

        {/* MIDDLE - Progress Bars */}
        <div>
          <h3 className="text-xl text-gray-600">Our Core Team specializes</h3>
          <div className="w-40 h-[2px] bg-orange-500 mt-2 mb-6"></div>

          <div className="flex flex-col gap-5">
            {skills.map((skill, index) => (
              <div key={index}>
                <p className="text-sm text-gray-600 mb-1">{skill.label}</p>

                <div className="w-full bg-gray-200 h-6 rounded-full overflow-hidden">
                  <div
                    className="bg-orange-500 h-6 text-white text-xs font-bold flex items-center px-3 transition-all duration-[1500ms] ease-out"
                    style={{ width: `${animatedValues[index]}%` }}
                  >
                    {animatedValues[index]}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT - Our Vision */}
        <div>
          <h3 className="text-xl text-gray-600">Our Vision</h3>
          <div className="w-28 h-[2px] bg-orange-500 mt-2 mb-6"></div>
          <p className="text-gray-700 leading-relaxed">
            At Technologist E-Solutions, our vision is to become a trusted global BPO partner by delivering innovative, reliable, and value-driven outsourcing solutions.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We aim to empower businesses by simplifying operations, enhancing customer experiences, and driving sustainable growth through technology, skilled talent, and continuous innovation.
            </p>
        </div>

      </div>
    </section>
    {/* <section className="w-full py-10 px-4">
  
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl text-gray-600 ">Our Clients</h2>
        <div className="w-32 h-[3px] bg-orange-500 mt-1"></div>
      </div>

    
      <div
        className="max-w-5xl mx-auto mt-6 border border-gray-300 bg-white 
                   rounded-md p-6 flex items-center justify-center flex-wrap gap-30"
      >
        
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpw4vLCtSxvAtFo2TeYoo4aVtBmbXHeAk_7Q&s"
          alt="FlipKey"
          className="h-10 object-contain"
        />

        <img
          src="https://www.multivu.com/players/English/8514651-vrbo-new-look-pronunciation-online-vacation-rentals/image/VRBOlogo2_1553632991359-HR.jpg"
          alt="TripAdvisor"
          className="h-10 object-contain"
        />

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2XYywd8MIsS2rpCyVRIx2CZqkDx0BsnfBCg&s"
          alt="Holiday Lettings"
          className="h-10 object-contain"
        />

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmwdmWvPTaivE-hORVwTJPJpybe9xJJXFupA&s"
          alt="Vacation Home Rentals"
          className="h-10 object-contain"
        />
      </div>
    </section>
   */}
    </div>
    
  )
}

export default Home
