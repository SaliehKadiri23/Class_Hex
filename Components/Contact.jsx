import React from 'react'
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Contact = ({className, size="1.5em"}) => {
  return (
    <div className="w-full">
      <div className={`w-full text-lg flex flex-col justify-center gap-3 ${className}`}>
        {/* Phone Number */}
        <div className="flex items-center">
          <FaPhoneVolume size={size} className='mr-2 ' />
          <p>
            <b>Phone : </b>
            <span> +234 90 3778 6418</span>
          </p>
        </div>

        {/* Email */}
        <div className="flex items-center">
          <MdEmail size={size} className='mr-2' />
          <p>
            <b>E-Mail : </b>
            <span>saliehkadiri79@gmail.com</span>
          </p>
        </div>

        {/* Address */}
        <div className="flex items-center">
          <FaLocationDot size={size} className='mr-2' />
          <p>
            <b>Location : </b>
            <span>Tarauni, Kano, Nigeria</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact