import React from 'react'
import Logo from "../../Components/Logo.jsx"
import Socials from '../../Components/Socials.jsx';
import Contact from '../../Components/Contact.jsx';
import { FaAngleDoubleRight } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-blue-100 flex flex-col justify-center items-center">
      <div className="w-full py-3 md:flex max-w-[1250px]">
        {/* 1st Row */}
        <div className="flex gap-12 grow md:gap-5 items-start lg:gap-7  md:pr-0 pt-7 md:w-[50%] px-5">
          {/* 1st Section */}
          <div className="flex max-w-[50%] grow shrink flex-col items-start gap-5 justify-start ">
            <Logo />
            <p className="text-sm md:text-xs lg:text-sm">
              At Class Hex, we empower learners with future-ready skills through
              high-quality online courses designed by industry experts.{" "}
            </p>
            <Socials size="1.7em" className=" justify-start gap-3" />
          </div>

          {/* 2nd Section */}
          <div className="flex w-[50%] grow shrink md:w-auto flex-col items-start gap-5 justify-start">
            <div className="flex flex-col gap-3">
              <h2 className="font-bold mb-1 text-3xl md:text-2xl transition-all duration-300 hover:scale-110 hover:text-blue-700">
                Useful Links
              </h2>
              <a href="/" className="font-semibold text-lg flex items-center  transition-all duration-300 hover:scale-110 hover:text-blue-700">
                <FaAngleDoubleRight className="mr-2" />
                Home
              </a>
              <a href="/about" className="font-semibold text-lg flex items-center  transition-all duration-300 hover:scale-110 hover:text-blue-700">
                <FaAngleDoubleRight className="mr-2" /> About Us
              </a>
              <a href="/courses" className="font-semibold text-lg flex items-center  transition-all duration-300 hover:scale-110 hover:text-blue-700">
                <FaAngleDoubleRight className="mr-2" /> Courses
              </a>
              <a href="/pricing" className="font-semibold text-lg flex items-center  transition-all duration-300 hover:scale-110 hover:text-blue-700">
                <FaAngleDoubleRight className="mr-2" /> Pricing
              </a>
            </div>
          </div>
        </div>

        {/* 2nd Row */}
        <div className="flex gap-5 grow sm:gap-12 md:gap-5 items-start py-7 px-5 ">
          {/* 1st Section */}
          <div className="flex  grow shrink  min-w-[40%] flex-col gap-1">
            <h2 className="font-bold mb-3 text-3xl transition-all duration-300 hover:scale-110 hover:text-blue-700">
              Courses
            </h2>
            <p className="font-semibold flex items-center md:text-sm transition-all duration-300 hover:scale-110 hover:text-blue-700">
              <FaAngleDoubleRight className="mr-2" /> Web Development
            </p>
            <p className="font-semibold flex items-center md:text-sm transition-all duration-300 hover:scale-110 hover:text-blue-700">
              <FaAngleDoubleRight className="mr-2" /> Machine Learning
            </p>
            <p className="font-semibold flex items-center md:text-sm transition-all duration-300 hover:scale-110 hover:text-blue-700">
              <FaAngleDoubleRight className="mr-2" /> Accounting
            </p>
            <p className="font-semibold flex items-center md:text-sm transition-all duration-300 hover:scale-110 hover:text-blue-700">
              <FaAngleDoubleRight className="mr-2" /> Artificial Intelligence
            </p>
            <p className="font-semibold flex items-center md:text-sm transition-all duration-300 hover:scale-110 hover:text-blue-700">
              <FaAngleDoubleRight className="mr-2" /> Data Science
            </p>
            <p className="font-semibold flex items-center md:text-sm transition-all duration-300 hover:scale-110 hover:text-blue-700">
              <FaAngleDoubleRight className="mr-2" /> Digital Marketing
            </p>
          </div>

          {/* 2nd Section */}
          <div className="flex  grow shrink  flex-col gap-1">
            <h2 className="font-bold mb-3 text-3xl  transition-all duration-300 hover:scale-110 hover:text-blue-700">
              Contact
            </h2>
            <Contact
              className={
                "scale-90 text-sm sm:text-lg md:text-sm  transition-all duration-300 hover:scale-110 hover:text-blue-700"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer
