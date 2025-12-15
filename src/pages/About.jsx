import React from 'react'
import { Link } from 'react-router-dom'
import aboutImage from "../assets/image/generated-image (2).png";
import whychooseImage from "../assets/image/why-choose-us.jpg";

function About() {
  return (
    <div>

      {/* ------------- MAIN SECTION ------------- */}
      <section className="px-4 md:px-8 pt-50">
        <h1 className="md:mx-25 mx-0 text-[2rem] font-bold text-gray-500">About Us</h1>

        <div className="container mx-auto max-w-7xl pt-1 pb-24">

          {/* GRID → IMAGE LEFT + CONTENT RIGHT */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* LEFT SIDE — HEADING + IMAGE */}
            <div className="order-1 text-center lg:text-left">

              {/* Heading Above Image */}
              <h2 className="text-2xl text-gray-500">Technologist E-Solutions</h2>
              <div className="w-40 h-[2px] bg-orange-500 mt-1 mb-6 mx-auto lg:mx-0"></div>

              <img
                loading="lazy"
                src={aboutImage}
                alt="Founder"
                className="w-full max-w-[900px] h-auto rounded-lg shadow-xl object-cover mx-auto lg:mx-0"
              />
            </div>

            {/* RIGHT SIDE CONTENT */}
            <div className="order-2 pt-10 ">

              <p className="text-lg mt-2 text-gray-700">
               Technologist E-Solutions is a trusted Business Process Outsourcing (BPO) company delivering efficient, scalable, and cost-effective solutions to businesses worldwide. We help organizations streamline operations, improve customer engagement, and accelerate growth through reliable outsourcing services.
              </p>
              <p className='text-lg mt-2 text-gray-700'>
                With a strong focus on quality and performance, we specialize in Customer Support Services, Back Office Operations, Sales & Lead Generation, Digital & Marketing Support, and E-commerce Support. Our experienced teams work as an extension of your business, ensuring accuracy, efficiency, and measurable results.
              </p>
              <p className="text-lg mt-2 text-gray-700">
                At Technologist E-Solutions, we believe in a <strong>people-first approach </strong> backed by technology and innovation. By combining skilled professionals, modern tools, and proven processes, we deliver consistent excellence while building long-term partnerships based on trust and transparency.
              </p>
            </div>

          </div>
          
          <section className=" py-16 px-4 md:px-8">
                    <div className="w-40 h-[2px] bg-orange-500 mt-1 mb-6 mx-auto lg:mx-0"></div>
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">

              {/* Vision Card */}
              <div className=" p-8 rounded-xl  hover:shadow-2xl transition text-gray-700 duration-300 transform hover:-translate-y-2">
                
                <h3 className="text-2xl md:text-3xl Poppins-font font-[300]  mb-4 text-center ">Our Vision</h3>
                <p className=" text-center">To become a globally trusted BPO partner by delivering innovative, scalable, and reliable outsourcing solutions that empower businesses to grow and succeed in a competitive digital world.


                </p>
                
              </div>

              {/* Mission Card */}
              <div className=" p-8 rounded-xl  hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
                
                <h3 className="text-2xl md:text-3xl font-[300] Poppins-font text-gray-700 mb-4 text-center">Our Goals</h3>
                <p className=" text-center">
                  Our goal is to create a unified digital ecosystem where businesses can scale confidently, innovate continuously, and thrive in a competitive landscape. 
                </p>
              </div>
               <div className=" p-8 rounded-xl  hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
                
                <h3 className="text-2xl md:text-3xl font-[300] Poppins-font text-gray-700 mb-4 text-center">Our Mission</h3>
                <p className=" text-center">
                  Our mission is to help businesses streamline operations and enhance customer experiences through high-quality BPO services. 
                </p>
              </div>

            </div>
          </div>
        </section>
        </div>
      </section>
      <section className="px-4 md:px-8 ">

  <div className="container mx-auto max-w-7xl  pb-24">

    {/* GRID – CONTENT LEFT & IMAGE RIGHT */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      {/* LEFT SIDE CONTENT */}
      <div className="order-2 lg:order-1 ">

        <h2 className="text-2xl text-gray-500">Why Choose Us</h2>
        <div className="w-43 h-[2px] bg-orange-500 mt-1 mb-6"></div>

       <ul className='list-disc text-lg text-gray-700'>
          <li>Skilled teams with hands-on expertise across customer support, back-office, sales, and digital operations</li>
          <li>High-quality services designed to reduce operational costs without compromising performance.</li>
          <li>Round-the-clock support to serve global clients across multiple time zones.</li>
          <li>Easily scale your operations up or down based on your business needs..</li>
          <li>Modern tools, automation, and data-driven workflows for higher efficiency and accuracy.</li>
          <li>Strict quality checks and performance monitoring to ensure consistent results.</li>
          <li>Strong data protection policies to safeguard your business and customer information.</li>
          <li>We work as an extension of your team, focused on long-term partnerships and success.</li>
       </ul>
       
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="order-1 lg:order-2">
        <img
          loading="lazy"
          src={whychooseImage}
          alt="Founder"
          className="w-full max-w-[500px] h-auto rounded-lg shadow-xl object-cover mx-auto lg:mx-0"
        />
      </div>

    </div>
  </div>
</section>

    </div>
  )
}

export default About
