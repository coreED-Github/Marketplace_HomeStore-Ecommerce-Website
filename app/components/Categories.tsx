"use client";

import { FaBed, FaChair, FaCrown, FaGem, FaLightbulb } from "react-icons/fa";
import { IoMedalOutline } from "react-icons/io5";



export default function Categories() {
  return (
    <div className="p-10 bg-white flex flex-col">
     <h2 className="text-red-600 mb-4 text-lg font-bold">Categories</h2>
   
 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
       
        <div className="flex flex-col items-center justify-center text-black border p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
          <FaChair className="h-8 w-8 text-red-500 mb-2" />
          <p className="text-sm text-black font-semibold">Furniture</p>
        </div>
 <div className="flex flex-col items-center text-black justify-center border p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
          <IoMedalOutline className="h-8 w-8 text-blue-500 mb-2" />
          <p className="text-sm text-black font-semibold">HomeDecor</p>
        </div>
 <div className="flex flex-col items-center justify-center border p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
          <FaCrown className="h-8 w-8 text-green-500 mb-2" />
          <p className="text-sm text-black font-semibold">Luxurious</p>
        </div>
<div className=" border p-4 rounded-lg text-black shadow hover:shadow-lg flex flex-col items-center justify-center transition-shadow">
          <FaGem className="h-8 w-8 text-yellow-500 mb-2" />
          <p className="text-sm text-black font-semibold">Modern</p>
        </div>
 <div className=" border p-4 rounded-lg text-black flex flex-col items-center justify-center shadow hover:shadow-lg transition-shadow">
          <FaBed className="h-8 w-8 text-purple-500 mb-2" />
          <p className="text-sm  text-black font-semibold">Classic</p>
        </div>


         <div className=" border text-black p-4 rounded-lg shadow hover:shadow-lg transition-shadow flex flex-col items-center justify-center">
          <FaLightbulb className="h-8 w-8 text-pink-500 mb-2" />
          <p className="text-sm text-black font-semibold">Electronic</p>
        </div>
      </div>
    </div>
  );
}