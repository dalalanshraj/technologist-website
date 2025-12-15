import React from "react";
const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.6639184723094!2d-86.42497132497604!3d30.38889990216947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88914355b8e4facd%3A0x3ed931f656e0623d!2s34990%20Emerald%20Coast%20Pkwy%20%23300%2C%20Destin%2C%20FL%2032541%2C%20USA!5e0!3m2!1sen!2sin!4v1755020767237!5m2!1sen!2sin";
import { FaFacebook, FaVimeo, FaLinkedin, FaGoogle, FaInstagram ,  FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
  className="w-full text-gray-300 py-12 bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('https://e1.pxfuel.com/desktop-wallpaper/842/396/desktop-wallpaper-gray-dotted-blur-dotted-blur.jpg')" }}
>

      <div className="max-w-7xl mx-auto px-4">

        {/* GRID AREA */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <div className="w-20 h-[2px] bg-orange-500 mt-2 mb-4"></div>

            <p>34990 Emerald Coast Pkwy, Suite 300,
Destin, FL 32541</p>
            <p>Phone: +1 786 224 2351</p>
            <p className="mt-2">
              E-mail:{" "}<a href="mailto:contact@technologistesolutions.com" className="text-orange-400 hover:underline ">
               contact@technologistesolutions.com
              </a>
            </p>
             <div className="mt-4 flex  gap-5 text-[30px] md:mx-0 mx-22">
              {/* <a href="https://www.facebook.com/people/Digify-America/61574315640630/"><FaFacebook className="hover:text-blue-500 cursor-pointer" /></a> */}
                
              <a href="https://www.instagram.com/technologistesolutions/"><FaInstagram className="hover:text- cursor-pointer" /></a>
              {/* <a
                href="https://wa.me/14482381683?text=Hello!%20I%20want%20to%20grow%20my%20business%20online.%20Please%20guide%20me."> <FaWhatsapp className="hover:text-green-500 cursor-pointer"/> </a> */}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold">Services</h3>
            <div className="w-20 h-[2px] bg-orange-500 mt-2 mb-4"></div>

            <ul className="space-y-2">
              <li>- Customer Support Services</li>
              <li>- Back Office Services</li>
              <li>- Sales & Lead Generation</li>
              <li>- Digital & Marketing Support</li>
              <li>-  E-commerce Support</li>
              <li>- Human Resources Outsourcing (HRO)</li>
            </ul>
          </div>

          {/* Work */}
          

          {/* Social Media */}
          <div>
             <iframe
    src={mapSrc}
    className="w-[100%] h-72 md:h-56 md:w-[220%] lg:h-[270px]"
    style={{ border: 0 }}
    allowFullScreen={true}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Google Maps Location"
  ></iframe>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
         2025 Copyright © & Powered by <a href="https://www.digifyamerica.com/"> Digify America</a>
        </div>

      </div>
    </footer>
  );
}
