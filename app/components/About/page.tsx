"use client"
import Image from "next/image";
import { FaTruck, FaPhone, FaMoneyBillAlt , FaBox , FaUsers, FaChartBar} from "react-icons/fa";
export default function About() {
  return (
    <main className="bg-gray-50 text-gray-800">
      

     
      <section className="py-12 max-w-6xl mx-auto px-4 md:flex md:items-center">
        <div className="md:w-1/2">
          <Image
            src="/about1.webp" 
            alt="Our Story"
            width={500}
            height={300}
            className="rounded-lg"
          />
        </div>
        <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0">
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p>
          Launched in 2025, HomeStore Market is a leading online shopping platform in South Asia,
           catering to Pakistan vibrant e-commerce market. Backed by innovative marketing,
            data-driven insights, and exceptional service, StyleMart connects 8,000 sellers and
             200+ brands with over 2 million customers. Offering a catalog of 700,000+ products across
           diverse categories, StyleMart is rapidly expanding, providing a seamless shopping experience for all.
          </p>
        </div>
      </section>

     
      <section className="bg-white py-12">
       <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
  {[
    { label: "Sellers active on our site", value: "10.5k", icon: <FaBox className="text-green-800" /> },
    { label: "Monthly Product Sale", value: "33k", icon: <FaMoneyBillAlt className="text-blue-800" /> },
    { label: "Customers active on our site", value: "45.5k", icon: <FaUsers className="text-purple-800" /> },
    { label: "Annual gross sale", value: "25k", icon: <FaChartBar className="text-yellow-800"  /> },
  ].map((stat, index) => (
    <div
      key={index}
      className="flex flex-col items-center text-center bg-gray-100 p-4 rounded-md shadow"
    >
      <div className="text-4xl">{stat.icon}</div>
      <h3 className="text-2xl font-bold">{stat.value}</h3>
      <p className="text-gray-600">{stat.label}</p>
    </div>
  ))}
</div>


      </section>

      
     
      <section className="py-12 max-w-6xl mx-auto px-4">
  <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
  <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-5 mr-10 ml-10">
    {[
      { 
        name: "Tom Cruise", 
        role: "Founder & Chairman", 
        img: "/men1.png", 
        facebook: "#", 
        twitter: "#", 
        linkedin: "#"
      },
      { 
        name: "Saira Nasir", 
        role: "Managing Director", 
        img: "/mem2.png", 
        facebook: "#", 
        twitter: "#", 
        linkedin: "#"
      },
      { 
        name: "Will Smith", 
        role: "Product Designer", 
        img: "/men3.png", 
        facebook: "#", 
        twitter: "#", 
        linkedin: "#"
      },
    ].map((member, index) => (
      <div
        key={index}
        className="flex flex-col  text-black items-center bg-white p-4 rounded-md shadow-lg"
      >
       
        <Image
          src={member.img}
          alt={member.name}
          className="w-24 h-44 text-black object-cover"
          height={300}
              width={300}
        />
       
        <h3 className="text-xl text-black font-bold mt-4">{member.name}</h3>
        <p className="text-gray-600">{member.role}</p>
       
        <div className="flex space-x-4 mt-3 text-white">
         
          <a href={member.facebook} target="_blank" className="hover:text-blue-600 text-black">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.117 8.437 9.878v-6.987h-2.54V12h2.54V9.797c0-2.508 1.492-3.89 3.777-3.89 1.094 0 2.238.194 2.238.194v2.46h-1.26c-1.242 0-1.632.772-1.632 1.563V12h2.773l-.443 2.891h-2.33v6.987C18.343 21.117 22 16.991 22 12z" />
            </svg>
          </a>
        
          <a href={member.twitter} target="_blank" className="hover:text-blue-400 text-black">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.954 4.569c-.885.385-1.83.643-2.825.755 1.014-.611 1.794-1.574 2.163-2.724-.949.564-2.002.974-3.127 1.195-.897-.959-2.178-1.56-3.594-1.56-2.725 0-4.93 2.207-4.93 4.93 0 .39.045.765.127 1.124-4.094-.205-7.725-2.166-10.148-5.144-.425.722-.666 1.561-.666 2.457 0 1.69.861 3.181 2.169 4.055-.798-.026-1.55-.245-2.203-.61v.061c0 2.362 1.68 4.337 3.907 4.785-.41.112-.843.171-1.29.171-.314 0-.622-.03-.921-.086.623 1.947 2.432 3.362 4.576 3.404-1.675 1.313-3.786 2.095-6.075 2.095-.394 0-.779-.023-1.17-.067 2.168 1.39 4.743 2.201 7.523 2.201 9.054 0 14-7.496 14-13.986 0-.21 0-.423-.015-.633.96-.695 1.8-1.562 2.462-2.549z" />
            </svg>
          </a>
         
          <a href={member.linkedin} target="_blank" className="hover:text-blue-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8.5 19H5.5V9h3v10zm-1.5-11.8c-.95 0-1.7-.76-1.7-1.7s.76-1.7 1.7-1.7c.95 0 1.7.76 1.7 1.7s-.76 1.7-1.7 1.7zM19 19h-3v-5c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5v5h-3V9h3v1.3c.7-.8 1.8-1.3 3-1.3 2.2 0 4 1.8 4 4v5z" />
            </svg>
          </a>
        </div>
      </div>
    ))}
  </div>
</section>
       
    <section className="py-10 flex justify-center text-black items-center  bg-gray-100">
      
<div className="max-w-6xl mx-auto text-slate-900 grid grid-cols-2 md:grid-cols-4 gap-6 px-4 ml-10 mr-10">
  {[
    { icon: <FaTruck className="text-sky-800 " />, label: "Free and Fast Delivery" },
    { icon: <FaPhone className="text-yellow-700" />, label: "24/7 Customer Service" },
    { icon: <FaMoneyBillAlt className="text-green-900" />, label: "Money Back Guarantee" },
    { icon: <FaPhone className="text-red-600" />, label: "24/7 Customer Service" },
  ].map((feature, index) => (
    <div
      key={index}
      className="flex flex-col text-black items-center text-center bg-white p-4 rounded-md shadow"
    >
      <div className="text-4xl text-black">{feature.icon}</div>
      <h3 className="text-xl text-black font-bold mt-2">{feature.label}</h3>
    </div>))}
</div>



      </section>
    </main>
  );
}

