import { useState } from "react";
import Logo from "../../Components/Logo.jsx";
import { RiMenu3Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import Socials from "../../Components/Socials";
import Contact from "../../Components/Contact";
import { motion } from "motion/react";
import { FaPhoneVolume } from "react-icons/fa6";
import { NavLink } from "react-router";

const Navbar = () => {
  let [dropDownState, setDropDownState] = useState(false);
  return (
    <div className="w-full relative">
      <div className="w-full py-1 flex items-center bg-blue-200 overflow-hidden">
        {/* Site Logo */}
        <div className="ml-2 lg:scale-110 xl:scale-120 w-[50%] sm:w-[47%] md:max-w-[30%] ">
          <div className="w-full md:pl-5 lg:pl-[23%]">
            <Logo  />
          </div>
        </div>

        <div className="hidden md:w-[40%] text-gray-700 lg:ml-5 lg:scale-110 lg:gap-10 md:flex gap-5 justify-center items-center">
          <NavLink to={"/"}>
            <li className="text-lg list-none font-semibold hover:text-blue-800 hover:scale-110 transition-all duration-300">
              Home
            </li>
          </NavLink>
          <NavLink to={"/about"}>
            <li className="text-lg list-none font-semibold hover:text-blue-800 hover:scale-110 transition-all duration-300">
              About Us
            </li>
          </NavLink>
          <NavLink to={"/courses"}>
            <li className="text-lg list-none font-semibold hover:text-blue-800 hover:scale-110 transition-all duration-300">
              Courses
            </li>
          </NavLink>
          <NavLink to={"/pricing"}>
            <li className="text-lg list-none font-semibold hover:text-blue-800 hover:scale-110 transition-all duration-300">
              Pricing
            </li>
          </NavLink>
        </div>

        <div className="hidden md:w-[30%] md:flex scale-80 md:flex-col md:justify-center md:items-center">
          <div className="flex items-center">
            <FaPhoneVolume size={"1.5em"} className="mr-2 text-blue-800" />
            <p>
              <b>Phone : </b>
              <span> +234 90 3778 6418</span>
            </p>
          </div>
          <div className="w-full flex justify-center gap-5 ">
            <div className="ripple-wrapper">
              <div className="ripple"></div>
              <div className="ripple ripple2"></div>
              <button
                className="heartbeat my-2 font-extrabold text-lg bg-blue-700 p-2 rounded-lg text-white hover:bg-white hover:text-blue-800 hover:border-1 hover:border-blue-800 hover:scale-105 transition-all duration-300"
                style={{ position: "relative", zIndex: 1 }}
              >
                Enroll Now
              </button>
            </div>
            <button className=" my-2 font-extrabold text-lg bg-white py-2 px-4 rounded-lg text-blue-800 hover:bg-blue-700 hover:text-white border-1 border-blue-800 hover:scale-105 transition-all duration-300">
              Login
            </button>
          </div>
        </div>

        {/* Enroll / Sign Up Button */}
        <div className="md:hidden w-[48%] flex justify-center">
          <div className="ripple-wrapper">
            <div className="ripple"></div>
            <div className="ripple ripple2"></div>
            <button
              className="heartbeat font-extrabold text-lg bg-blue-700 p-2 rounded-lg text-white hover:bg-white hover:text-blue-800 hover:border-1 hover:border-blue-800 hover:scale-105 transition-all duration-300"
              style={{ position: "relative", zIndex: 1 }}
            >
              Enroll Now
            </button>
          </div>
        </div>

        {/* Menu */}
        <button
          onClick={() => setDropDownState(!dropDownState)}
          className="md:hidden w-[10%] text-blue-800 justify-self-end hover:scale-115 transition-all duration-300"
        >
          <RiMenu3Fill size={"2em"} />
        </button>

        {/* Mobile Dropdown Menu */}
        {dropDownState && (
          <motion.div
            initial={{
              opacity: 0,
              x: 300,
            }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.35 },
            }}
            exit={{
              opacity: 0,
              x: 300,
            }}
            className="overscroll-none md:hidden border-l-1 border-gray-600 w-[90%] top-0 h-[100vh] z-1000 right-0 fixed bg-white overflow-hidden"
          >
            <div className="w-full">
              {/* Close Menu */}
              <div className="w-full flex justify-end border-b-2 border-gray-400">
                <button onClick={() => setDropDownState(!dropDownState)}>
                  <IoCloseSharp
                    size={"2.5em"}
                    className="mr-5 my-2 hover:text-red-600 hover:scale-115 transition-all duration-300"
                  />
                </button>
              </div>

              {/* Enroll Now | Login */}

              <div className="w-full border-b-2 flex justify-center gap-25 border-gray-400">
                <button className="my-3 font-extrabold text-lg bg-blue-700 p-2 rounded-lg text-white hover:bg-white hover:text-blue-800 hover:border-1 hover:border-blue-800 hover:scale-105 transition-all duration-300">
                  Enroll Now
                </button>
                <button className="my-3 font-extrabold text-lg bg-white py-2 px-4 rounded-lg text-blue-800 hover:bg-blue-700 hover:text-white border-1 border-blue-800 hover:scale-105 transition-all duration-300">
                  Login
                </button>
              </div>

              {/* Nav Links */}
              <div className="w-full">
                <div className="w-full pl-7 divide-y-1 divide-gray-500 ">
                  <div>
                    <button
                      onClick={() => setDropDownState(!dropDownState)}
                      className="py-4 text-lg font-semibold hover:text-blue-800 hover:scale-105 transition-all duration-300  "
                    >
                      <NavLink to={"/"}>Home</NavLink>
                    </button>
                  </div>
                  <div>
                    <button onClick={() => setDropDownState(!dropDownState)} className="py-4 text-lg font-semibold hover:text-blue-800 hover:scale-105 transition-all duration-300">
                      <NavLink to={"/about"}>About Us</NavLink>
                    </button>
                  </div>
                  <div>
                    <button onClick={() => setDropDownState(!dropDownState)} className="py-4 text-lg font-semibold hover:text-blue-800 hover:scale-105 transition-all duration-300">
                      <NavLink to={"/courses"}>Courses</NavLink>
                    </button>
                  </div>
                  <div>
                    <button onClick={() => setDropDownState(!dropDownState)} className="py-4 text-lg font-semibold hover:text-blue-800 hover:scale-105 transition-all duration-300">
                      <NavLink to={"/pricing"}>Pricing</NavLink>
                    </button>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div className="w-full border-y-1 border-gray-500">
                <div className="w-full my-3">
                  <Socials className={"gap-7"} />
                </div>
              </div>

              {/* Contact */}

              <div className="w-full ">
                <div className="w-full my-5 pl-7">
                  <Contact />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
