import { useState } from "react";
import { Link } from "react-router-dom";
import serviceOne from '../assets/service-img/Customer Support.jpg' 
import serviceTwo from '../assets/service-img/Back Office.jpg' 
import serviceThree from '../assets/service-img/sales.jpg' 
import serviceFour from '../assets/service-img/digital&marketing.jpg' 
import serviceFive from '../assets/service-img/e-E-commerce.jpg' 
import serviceSix from '../assets/service-img/HRO.jpg' 

function Services() {
  const [active, setActive] = useState("Customer Support Services");

  return (
    <div>
      

      <section className="max-w-7xl mx-auto px-4 py-16 pt-50 md:pt-50">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-500 mb-3">Services</h1>
        <div className="w-20 h-[2px] bg-orange-500 mb-10"></div>

        <p className="text-gray-700 mb-8 text-base sm:text-lg md:text-lg max-w-full md:max-w-[90%] mx-auto md:mx-0">
         At Technologist E-Solutions, we provide end-to-end Business Process Outsourcing (BPO) solutions designed to help businesses improve efficiency, reduce operational costs, and deliver exceptional customer experiences. Our services are flexible, scalable, and tailored to meet the unique needs of each client.
        </p>

        {/* TOP MENU (TABS) */}
        <div className="flex gap-2 sm:gap-3 flex-wrap mt-6 border-b pb-4 overflow-x-auto">
          {[
            "Customer Support Services",
            "Back Office Services",
            "Sales & Lead Generation",
            "Digital & Marketing Support",
            "E-commerce Support",
            "Human Resources Outsourcing (HRO)",
          ].map((item) => (
            <button
              key={item}
              className={`px-4 py-2 rounded-md text-sm font-medium transition 
                ${
                  active === item
                    ? "bg-orange-500 text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              onClick={() => setActive(item)}
            >
              {item}
            </button>
          ))}
        </div>

        {/* CONTENT SECTION */}
        {/* CONTENT SECTION */}
<div className="pt-10">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

    {/* LEFT CONTENT */}
    <div>
      {active === "Customer Support Services" && (
        <>
          <h2 className="text-2xl font-semibold mb-2 text-gray-600">Customer Support Services</h2>
          <p className="text-gray-600 leading-relaxed">
            Our customer support solutions are designed to strengthen customer relationships and enhance brand loyalty. We offer multi-channel support including voice, live chat, email, and ticket-based systems to ensure seamless communication with your customers.  
  </p>
          <p className="text-gray-700 leading-relaxed mt-2">
            We provide trained professionals who represent your brand with professionalism, empathy, and efficiency. Our teams are available 24/7 to handle inquiries, complaints, technical issues, and service requests.   </p>
          <ul className="list-disc mt-5 text-gray-600">
            <li><strong>Inbound & Outbound Call Handling: </strong> 
            Managing incoming and outgoing calls professionally to handle inquiries, provide information, and maintain strong customer communication.</li>
            <li><strong>Customer Care & Helpdesk Support: </strong>
             Providing dedicated assistance to resolve customer issues, answer queries, and ensure a smooth and satisfying support experience. </li>
            <li><strong>Email & Live Chat Support: </strong>
            Providing quick and professional support through email and live chat to resolve customer queries and ensure timely communication. </li>
            <li><strong>Technical Support (Tier 1 & 2): </strong> 
            Providing first and second-level technical assistance to diagnose issues, troubleshoot problems, and ensure quick resolution for customers.</li>
          </ul>
        </>
      )}

      {active === "Back Office Services" && (
        <>
          <h2 className="text-2xl font-semibold mb-2 text-gray-600">Back Office Services</h2>
          <p className="text-gray-600 leading-relaxed">
         Our back-office services help businesses manage critical operations efficiently while maintaining accuracy and compliance. We take care of time-consuming administrative tasks so you can focus on core business growth. </p>
          <p className="text-gray-600 leading-relaxed mt-2">
            From data processing to document management, our teams follow strict quality standards and secure workflows. We ensure error-free execution and timely delivery across all back-office processes.  </p>
         <ul className="list-disc mt-5 text-gray-600">
          <li><strong>Data Entry & Data Processing: </strong> Entering and processing data accurately and efficiently. </li>
          <li><strong>Document Management: </strong> 
          Organizing and managing documents securely.</li>
          <li><strong>Form Processing: </strong> Reviewing and processing forms with accuracy. </li>
          <li><strong>Order Processing: </strong> Handling orders smoothly from entry to completion.</li>
         </ul>
        </>
      )}

      {active === "Sales & Lead Generation" && (
        <>
          <h2 className="text-2xl font-semibold mb-2 text-gray-600">Sales & Lead Generation</h2>
          <p className="text-gray-600 leading-relaxed">
           Technologist E-Solutions delivers performance-driven sales and lead generation services that help businesses increase revenue and expand their customer base. Our sales professionals identify, qualify, and nurture leads using proven outreach strategies.   </p>
          <p className="text-gray-600 leading-relaxed mt-2">
            We focus on understanding customer needs, building trust, and converting prospects into long-term customers. We work closely with your sales goals to deliver measurable results and consistent growth.   </p>
         
           <ul className="list-disc mt-5 text-gray-600">
<li><strong> Telemarketing (B2B & B2C): </strong> 
Providing first- and second-level technical assistance to diagnose issues, troubleshoot problems, and ensure quick resolution for customers.</li>
<li><strong>Lead Generation & Qualification: </strong> 
Identifying potential customers and qualifying leads to ensure high-quality prospects for your sales team. </li>
<li><strong>Appointment Setting: </strong> Scheduling meetings with interested prospects to help your sales team focus on closing deals. </li>
<li><strong>Upselling & Cross-selling: </strong> 
Increasing revenue by promoting relevant upgrades or additional products to existing customers. </li>          
</ul>
        </>
      )}

      {active === "Digital & Marketing Support" && (
        <>
          <h2 className="text-2xl font-semibold mb-2 text-gray-600">Digital & Marketing Support</h2>
          <p className="text-gray-600 leading-relaxed">
            Our digital and marketing support services help businesses manage and optimize their online marketing efforts. We provide dedicated teams to support campaigns, content, analytics, and customer engagement activities. </p>
          <p className="text-gray-600 leading-relaxed mt-2">
           We ensure that your digital initiatives are executed smoothly, consistently, and aligned with your brand strategy. </p>
<ul className="list-disc mt-5 text-gray-600">
            <li> <strong>Social Media Management: </strong> 
            Managing social media accounts to engage audiences, maintain brand presence, and support marketing campaigns.  </li>
            <li><strong>Content Moderation: </strong> 
            Monitoring and reviewing online content to ensure it follows brand guidelines and community standards. </li>
            <li><strong>Email Marketing Support: </strong>
            Assisting with email campaigns, audience management, and performance tracking to improve engagement and conversions. </li>
            <li><strong>Market Research: </strong>
            Collecting and analyzing market data to understand customer behavior, trends, and business opportunities. </li>
          </ul>
        </>
      )}

      {active === "E-commerce Support" && (
        <>
          <h2 className="text-2xl font-semibold mb-2 text-gray-600">E-commerce Support</h2>
          <p className="text-gray-600 leading-relaxed">
            We offer complete e-commerce support solutions to help online businesses manage operations efficiently and scale with confidence. </p>
          <p className="text-gray-600 leading-relaxed mt-2">
            Our teams handle product listings, order processing, customer queries, and post-sale support. We ensure smooth workflows across platforms like Shopify, WooCommerce, Amazon, and other marketplaces.  </p>
          <p className="text-gray-600 leading-relaxed mt-2">
          By improving operational efficiency and customer satisfaction, we help your e-commerce business grow faster. 
          </p>
          <ul className="list-disc mt-5 text-gray-600">
                      <li><strong>Product Listing & Catalog Management: </strong> Creating, updating, and optimizing product listings to ensure accurate and appealing product catalogs.</li>
            <li><strong>Order & Returns Management:</strong> Managing order processing, tracking, returns, and refunds to ensure smooth customer experiences. </li>
            <li><strong>Customer Support for E-commerce:</strong> Handling customer inquiries, order issues, and post-purchase support across multiple channels.   </li>
            <li><strong>Inventory Management:</strong> Monitoring stock levels, coordinating updates across platforms, preventing overselling, and ensuring timely replenishment for uninterrupted operations. </li>

          </ul>
        </>
      )}

      {active === "Human Resources Outsourcing (HRO)" && (
        <>
          <h2 className="text-2xl font-semibold mb-2 text-gray-600">Human Resources Outsourcing (HRO)</h2>
          <p className="text-gray-600 leading-relaxed">
           At Technologist E-Solutions, our Human Resources Outsourcing (HRO) services help businesses manage their workforce efficiently while reducing administrative burden and operational costs. We support your HR functions with accuracy, compliance, and confidentiality, allowing you to focus on strategic growth. </p>
          <p className="text-gray-600 leading-relaxed mt-2">
            Our experienced HR professionals handle end-to-end HR operations, ensuring smooth employee lifecycle management. We follow industry best practices and use secure systems to manage sensitive employee data with complete confidentiality.   </p>
          <ul className="list-disc mt-5 text-gray-600">
            <li><strong>Recruitment & Talent Sourcing: </strong> Identifying and sourcing qualified candidates to meet your hiring needs. </li>
            <li><strong>Resume Screening: </strong> Reviewing and shortlisting resumes based on job requirements..</li>
            <li><strong>Onboarding Support:</strong>  Assisting new hires with documentation and smooth onboarding processes. </li>
          <li><strong>Payroll & Benefits Administration: </strong> Managing payroll processing and employee benefits accurately and compliantly. </li>
          </ul>
        </>
      )}
    </div>

    {/* RIGHT IMAGE */}
    <div className="w-full">
      {active === "Customer Support Services" && (
        <img src={serviceOne} className="rounded-xl shadow-lg w-full" />
      )}

      {active === "Back Office Services" && (
        <img src={serviceTwo} className="rounded-xl shadow-lg w-full" />
      )}

      {active === "Sales & Lead Generation" && (
        <img src={serviceThree} className="rounded-xl shadow-lg w-full" />
      )}

      {active === "Digital & Marketing Support" && (
        <img src={serviceFour} className="rounded-xl shadow-lg w-full" />
      )}

      {active === "E-commerce Support" && (
        <img src={serviceFive} className="rounded-xl shadow-lg w-full" />
      )}

      {active === "Human Resources Outsourcing (HRO)" && (
        <img src={serviceSix} className="rounded-xl shadow-lg w-full" />
      )}
    </div>

  </div>
</div>

      </section>
    </div>
  );
}

export default Services;
