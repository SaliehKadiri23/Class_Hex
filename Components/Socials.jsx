import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

const Socials = ({size = "2.5em", className }) => {
  return (
    <div className="w-full">
      <div
        className={`w-full  flex justify-center items-center ${className} `}
      >
        {/* Facebook */}
        <FaFacebook
          size={size}
          className="text-blue-600 transition-all duration-300 hover:scale-120"
        />

        {/* Instagram */}
        <FaInstagramSquare
          size={size}
          className="text-[#dd4d52] transition-all duration-300 hover:scale-120"
        />

        {/* Youtube */}
        <FaYoutube
          size={size}
          className="text-red-600 transition-all duration-300 hover:scale-120"
        />

        {/* WhatsApp */}
        <FaWhatsappSquare
          size={size}
          className="text-green-600 transition-all duration-300 hover:scale-120"
        />

        {/* Telegram */}
        <FaTelegram
          size={size}
          className="text-blue-500 transition-all duration-300 hover:scale-120"
        />
      </div>
    </div>
  );
}

export default Socials