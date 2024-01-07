import React from "react";
import { FaBars } from "react-icons/fa";
export default function Header() {
  return (
    <div className="flex justify-between">
      <div className="flex items-center justify-center gap-3">
        <img src="./Logo.svg" alt="logo" /> 
        <button className="bg-gradient-to-r from-orange-400 to-red-400 text-xs text-white px-2.5 py-1.5 rounded-2xl font-bold border border-transparent hover:border-green-600">Hoster is hiring</button>
      </div>
      <ul className="hidden lg:flex justify-between items-center font-lato text-gray-400 gap-6">
        <li><a href="/">Plans</a></li>
        <li><a href="/">Find Domain</a></li>
        <li><a href="/">Why Hoster</a></li>
      </ul>
      <div className="hidden lg:flex justify-center items-center font-lato gap-6">
        <a className="text-gray-400" href="/">sign In</a>
        <button className="rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white">Join Wiaitlist</button>
      </div>
      <div>
        <FaBars className="lg:hidden" />
      </div>
    </div>
  );
}
