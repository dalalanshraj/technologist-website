import React from 'react'
import { Link } from 'react-router-dom'
import founderImage from "../assets/founder/founder-img.jpg";

function Founder() {
  return (
    <div>
             
        <section className="px-4 md:px-8 pt-50">
             {/* <h1 className="mx-30 text-[2rem] font-bold text-gray-500">Founder - Sourabh Singh</h1> */}
     
             <div className="container mx-auto max-w-6xl pt-1 pb-21">
     
               {/* GRID → IMAGE LEFT + CONTENT RIGHT */}
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 items-center">
     
                 {/* LEFT SIDE — HEADING + IMAGE */}
                 <div className="order-1 text-center lg:text-left">
     
                   {/* Heading Above Image */}
                   <h2 className="text-3xl text-gray-600 ">Founder - Sourabh Singh</h2>
                   <div className="w-23 h-[2px] bg-orange-500 mt-1 mb-6 mx-auto lg:mx-0"></div>
     
                   <img
                     loading="lazy"
                     src={founderImage}
                     alt="Founder"
                     className="w-full max-w-[500px] h-auto rounded-lg shadow-xl object-cover mx-auto lg:mx-0"
                   />
                 </div>
     
                 {/* RIGHT SIDE CONTENT */}
                 <div className="order-2 text-gray-700">
     
                   <p className="text-lg mb-10">
                    Sourabh Singh rides his bike the way others do yoga — as a form of meditation. When the wind rushes past him and the world gets loud, that’s exactly when he finds his peace. He is a magician when it comes to using motion, speed, and the lens to slow everything down. Riding, camping and photography are more than hobbies for him.
                   </p>
                   <p className='text-lg mb-10'>
                    It is how he processes the world and sees beauty in the chaos. He's got the heart of an adventurer and the soul of a saint — grounded, thoughtful, and always seeking. He is also a proud dog dad to two adorable pups who are basically his shadows. They bring out the softer side of a guy who already has a golden heart.
                   </p>
                 </div>
     
               </div>
               
              
             </div>
           </section>
    </div>
  )
}

export default Founder
