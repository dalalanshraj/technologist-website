import { useState } from "react";
import { Link } from 'react-router-dom'

import { ChevronDown } from "lucide-react";


 const faqs = [
  {
    question: "What is Technologist E-Solutions?",
    answer:
      "Technologist E-Solutions is a professional Business Process Outsourcing (BPO) company providing reliable, scalable, and cost-effective outsourcing solutions to businesses worldwide.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes. Technologist E-Solutions works with clients globally. Our teams support businesses across different time zones with flexible and efficient BPO solutions.",
  },
  {
    question: "What services does Technologist E-Solutions offer?",
    answer: (
      <div className="text-left">
        We provide a complete range of BPO services, including:
        <ul className="list-disc ml-5 space-y-1 pt-1">
          <li>Customer Support Services (Call, Chat & Email)</li>
          <li>Back Office Operations</li>
          <li>Sales & Lead Generation</li>
          <li>Digital & Marketing Support</li>
          <li>E-commerce Support</li>
        </ul>
      </div>
    ),
  },
  {
    question: "Which industries do you serve?",
    answer:
      "We serve multiple industries including e-commerce, real estate, healthcare, technology, finance, education, hospitality, and service-based businesses. Our solutions are customized to each industry’s needs.",
  },
  {
    question: "Can your services be customized for my business?",
    answer:
      "Yes. We offer fully customized BPO solutions based on your business goals, workload, industry requirements, and budget.",
  },
  {
    question: "Do you provide 24/7 customer support?",
    answer:
      "Yes. Our teams operate 24/7 to support global clients and ensure uninterrupted customer service across all time zones.",
  },
  {
    question: "How do you ensure service quality?",
    answer:
      "We follow strict quality control processes, performance monitoring, regular training, and KPI-based evaluations to ensure consistent and high-quality service delivery.",
  },
  {
    question: "Is my business data secure with you?",
    answer:
      "Absolutely. We follow strong data security protocols and confidentiality standards to protect your business and customer information at all times.",
  },
  {
    question: "Can I scale services as my business grows?",
    answer:
      "Yes. Our BPO solutions are fully scalable, allowing you to easily increase or decrease resources based on your business requirements.",
  },
  {
    question: "How can I get started with Technologist E-Solutions?",
    answer:
      "You can get started by contacting us through our website. Our team will understand your requirements and propose a tailored BPO solution for your business.",
  },
];


function FaqSection() {
           const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div>
          

      <section className="features-section py-16 px-6 md:py-24 md:px-12 lg:px-20 pt-50 md:pt-50">
  <h2 className="text-2xl md:text-4xl lg:text-5xl font-playfair text-gray-500 mb-6 text-center lg:text-left">
    FAQ
  </h2>
  <h3 className="text-xl md:text-2xl text-gray-600 text-center lg:text-left">Frequently Asked Questions</h3>
  <div className="w-24 h-1 bg-orange-500 mt-1 mb-6 mx-auto lg:mx-0"></div>

  <div className="max-w-4xl mx-auto space-y-4">
    {faqs.map((faq, index) => (
      <div
        key={index}
        className="border rounded-2xl p-5 bg-white shadow-md transition-all duration-300"
      >
        <button
          onClick={() => toggleFAQ(index)}
          className="w-full flex justify-between items-center"
        >
          <span className="text-base md:text-lg font-medium text-gray-900 text-left">
            {faq.question}
          </span>
          <ChevronDown
            className={`transition-transform duration-300 cursor-pointer ${
              openIndex === index ? "rotate-180" : ""
            }`}
          />
        </button>

        {openIndex === index && (
          <div className="mt-4 text-gray-700 leading-relaxed text-sm md:text-base">
            {faq.answer}
          </div>
        )}
      </div>
    ))}
  </div>
</section>

    </div>
  )
}

export default FaqSection
