"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaPhoneAlt, FaEnvelope, FaFacebook, FaLinkedin } from "react-icons/fa";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
 const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_id",
        "template_id",
        formData,
        "user_id"
      )
      .then(
        () => {
          alert("Message sent successfully!");
        },
        () => {
          alert("Failed to send the message. Please try again.");
        }
      );

    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8 bg-white">
   
          
      <p className="text-center p-5 border border-gray-700 text-gray-800 font-medium">
        If you have any questions or need assistance, feel free to contact us!
      </p>
      
      <h1 className="font-bold text-[#2A254B] mb-10 font-serif text-center text-2xl">
        Contact Us
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
        <div className="space-y-10 border border-gray-500 p-5">
          <div className="flex items-center space-x-4">
            <FaPhoneAlt className="text-red-500 text-2xl" />
            <div>
              <h2 className="text-lg text-black font-bold">Call To Us</h2>
              <p className="text-black">Available 24h.</p>
              <p className="text-black">Phone: o3492908035</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-red-500 text-2xl" />
            <div>
              <h2 className="text-lg text-black font-bold">Write To Us</h2>
              <p className="text-black">Emails:</p>
              <p className="text-black">cus@HomeStoreMarket.com</p>
              <p className="text-black">sup@HomeStoreMarket.com</p>
            </div>
          </div>
        </div>

       
        <form className="space-y-6 border border-gray-400 p-5" onSubmit={sendEmail}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded text-black"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded text-black"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded text-black"
            />
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded w-full text-black"
            rows={4}
            required
          ></textarea>
          <button
            type="submit"
            className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
          >
            Send Message
          </button>
        </form>
      </div>

     
      <div className="mt-10 text-center space-y-4">
        <p className="text-gray-700 font-medium">Saira</p>
        <p className="text-gray-700">Email: saira@example.com</p>
        <p className="text-gray-700">Phone: +1234567890</p>
        <div className="flex justify-center space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-blue-600 text-2xl hover:scale-110 transition-transform" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-blue-700 text-2xl hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;