import { useState, useEffect, useRef } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import logo from "../assets/Logo/logo.png";
import { Link , useLocation  } from "react-router-dom";

export default function Navbar() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const aboutRef = useRef(null);

  // Shrink navbar on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on outside click
const location = useLocation();

useEffect(() => {
  setIsOpen(false);
  setAboutOpen(false);
}, [location]);


  return (
    <header className="w-full fixed top-0 left-0 z-50 shadow-xl/30 shadow-white">
      {/* TOP BAR */}
      <div className="bg-gray-600 text-white text-sm py-1 px-4 flex justify-center md:justify-end ">
        <div className="mx-90 md:mx-0">
        Call us: +1 786 224 2351 | E-mail: contact@technologistesolutions.com

        </div>
      </div>

      {/* MAIN NAV */}
      <div
        className={`bg-white shadow-md transition-all duration-300 ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">

          {/* LOGO */}
         <Link to={"/"}> <img
            src={logo}
            alt="logo"
            className={`transition-all duration-300 ${
              scrolled ? "w-34" : "w-56"
            }`}
          /></Link>

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex gap-10 items-center font-medium text-gray-800">
           <Link to={"/"}> <li className="bg-orange-500 text-white px-4 py-2 rounded-sm cursor-pointer">
              Home
            </li></Link>

            {/* ABOUT WITH CLICK DROPDOWN */}
            <li className="relative" ref={aboutRef}>
              <button
                onClick={() => setAboutOpen(!aboutOpen)}
                className="flex items-center gap-1 hover:text-orange-500 cursor-pointer"
              >
                About <MdKeyboardArrowDown />
              </button>

              {aboutOpen && (
                <div
                  className="absolute top-8 left-0 w-40 bg-white border shadow-lg rounded-md"
                  onClick={(e) => e.stopPropagation()}
                >
                 <Link to={"/about"}> <p className="px-4 py-2 hover:bg-orange-500 hover:text-white cursor-pointer">
                    About Us
                  </p></Link>
                  <Link to={"/faq"}><p className="px-4 py-2 hover:bg-orange-500 hover:text-white cursor-pointer">
                    FAQ
                  </p></Link>
                  <Link to={"/founder"}> <p className="px-4 py-2 hover:bg-orange-500 hover:text-white cursor-pointer">
                    Founder
                  </p></Link>
                </div>
              )}
            </li>

           <Link to={"/services"}> <li className="hover:text-orange-500 cursor-pointer">Services</li></Link>
          <Link to={"/contact"} > <li className="hover:text-orange-500 cursor-pointer">Contact Us</li></Link>
          </ul>

          {/* MOBILE HAMBURGER ICON */}
          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-black"></span>
              <span className="block w-6 h-0.5 bg-black"></span>
              <span className="block w-6 h-0.5 bg-black"></span>
            </div>
          </button>
        </div>

       {/* MOBILE MENU */}
{isOpen && (
  <div className="lg:hidden bg-white shadow-lg px-6 py-6 space-y-4 rounded-b-2xl animate-slideDown">

    <Link to="/" className="block text-lg font-medium text-gray-800 hover:text-blue-600 transition">
      Home
    </Link>

    <details className="group">
      <summary className="cursor-pointer text-lg font-medium text-gray-800 hover:text-blue-600 transition">
        About
      </summary>

      <div className="mt-2 ml-4 space-y-2">
        <Link to="/about" className="block text-gray-700 hover:text-blue-600 transition">
          About Us
        </Link>
        <Link to="/faq" className="block text-gray-700 hover:text-blue-600 transition">
          FAQ
        </Link>
        <Link to="/founder" className="block text-gray-700 hover:text-blue-600 transition">
          Founder
        </Link>
      </div>
    </details>

    <Link to="/services" className="block text-lg font-medium text-gray-800 hover:text-blue-600 transition">
      Services
    </Link>

    <Link to="/contact" className="block text-lg font-medium text-gray-800 hover:text-blue-600 transition">
      Contact Us
    </Link>

  </div>
)}

      </div>
    </header>
  );
}
