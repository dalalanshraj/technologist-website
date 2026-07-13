import React, { useState } from "react";
import { Link } from "react-router-dom";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState({ show: false, message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbx0uQU7kvc-daifZuk18naR9XRHXh1EvcaTzPO12fccr7dDn-xCrHgSHKW6Eol-1YNHgg/exec",
        {
          method: "POST",
          body: JSON.stringify(form),
        }
      );

      setPopup({
        show: true,
        message: "Your message has been sent successfully!",
      });

      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setPopup({
        show: true,
        message: "Something went wrong. Please try again.",
      });
    }

    setLoading(false);
  };

  return (
    <>
      {/* POPUP */}
      {popup.show && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl max-w-sm w-full text-center animate-fadeIn">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Message</h2>
            <p className="text-gray-600">{popup.message}</p>

           <Link to={'/'}><button
              onClick={() => setPopup({ show: false, message: "" })}
              className="mt-5 px-5 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition"
            >
              Close
            </button></Link>
          </div>
        </div>
      )}

      <section className="max-w-7xl mx-auto px-4 py-16 pt-50">
        <h1 className="text-4xl font-bold text-gray-500">Contact Us</h1>
        <p className="text-lg text-gray-600 mt-3">Get in touch with us</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
          {/* FORM */}
          <form className="lg:col-span-2 space-y-6" onSubmit={handleSubmit}>
            {/* Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-gray-700 font-medium">Name</label>
                <input
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full border p-3 rounded-md mt-1 focus:ring-2 focus:ring-orange-500 outline-none"
                />
              </div>

              <div>
                <label className="text-gray-700 font-medium">E-mail</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full border p-3 rounded-md mt-1 focus:ring-2 focus:ring-orange-500 outline-none"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="text-gray-700 font-medium">Subject</label>
              <input
                name="subject"
                type="text"
                value={form.subject}
                onChange={handleChange}
                required
                className="w-full border p-3 rounded-md mt-1 focus:ring-2 focus:ring-orange-500 outline-none"
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-gray-700 font-medium">Message</label>
              <textarea
                name="message"
                rows="6"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full border p-3 rounded-md mt-1 focus:ring-2 focus:ring-orange-500 outline-none resize-none"
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 bg-orange-500 text-white rounded-md font-bold shadow-md hover:bg-orange-600 transition disabled:opacity-50"
            >
              {loading ? "Sending..." : "SEND MESSAGE"}
            </button>
          </form>

          {/* CONTACT DETAILS */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              Contact details
            </h2>
            <div className="w-28 h-[2px] bg-orange-500"></div>

            <p className="text-gray-700 leading-relaxed">
              <strong>Technologist E-Solutions</strong> <br />
               E48/4, Okhla phase 2, Ind. Area New Delhi-110020
            </p>

            <p className="text-gray-700">
              <strong>Phone:</strong> +91 8750059005
            </p>

            <p className="text-gray-700">
              <strong>E-mail:</strong> contact@technologistesolutions.com
            </p>
          </div>
        </div>
      </section>

      {/* FADE-IN ANIMATION */}
      <style>
        {`
          .animate-fadeIn {
            animation: fadeIn 0.3s ease-in-out;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }
        `}
      </style>
    </>
  );
}

export default Contact;
