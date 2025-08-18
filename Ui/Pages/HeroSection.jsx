import React, { useEffect, useRef } from "react";
import Books from "../../src/assets/Floating Badges/Books.png";
import Bulb from "../../src/assets/Floating Badges/Bulb.png";
import FreeBooks2 from "../../src/assets/Floating Badges/Free books - 2.png";
import FreeBooks from "../../src/assets/Floating Badges/Free books.png";
import Laptop2 from "../../src/assets/Floating Badges/Laptop -2.png";
import Laptop from "../../src/assets/Floating Badges/Laptop.png";
import Pen2 from "../../src/assets/Floating Badges/Pen - 2.png";
import Pen from "../../src/assets/Floating Badges/Pen.png";
import SchoolBag2 from "../../src/assets/Floating Badges/School bag - 2.png";
import SchoolBag from "../../src/assets/Floating Badges/School bag.png";
import University from "../../src/assets/University.png"

const badges = [
  { img: Books, radius: 150, speed: 30 },
  { img: SchoolBag, radius: 150, speed: 30 },
  { img: Bulb, radius: 150, speed: 30 },
  { img: Laptop2, radius: 150, speed:  30 },
  { img: SchoolBag2, radius: 150, speed: 30 },
  { img: FreeBooks2, radius: 150, speed: 30 },
  { img: Pen, radius: 150, speed:  30 },
  { img: FreeBooks, radius: 150, speed: 30 },
  { img: Pen2, radius: 150, speed:  30 },
  { img: Laptop, radius: 150, speed: 30 },
];


const HeroSection = () => {
  const badgeRefs = useRef([]);

  useEffect(() => {
    let frameId;
    const start = Date.now();

    function animate() {
      const now = Date.now();
      badges.forEach((badge, i) => {
        const angle =
          (((now / 1000) * 360) / badge.speed + (i * 36)) % 360; // offset each badge
        const orbit = badgeRefs.current[i];
        if (orbit) {
          orbit.style.transform = `
            rotateX(75deg)
            rotate(${angle}deg)
            translateY(-${badge.radius}px)
            rotate(${-angle}deg)
            rotateX(-75deg)
          `;
          // Show only when in front (angle between 270 and 90, i.e. front half)
          const normalized = (angle + 360) % 360;
          orbit.style.opacity =
            normalized <= 90 || normalized >= 270 ? "1" : "0";
        }
      });
      frameId = requestAnimationFrame(animate);
    }
    animate();
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <div className="w-full bg-blue-300 flex justify-center items-center">
      <div className="w-full h-100 sm:h-110 md:h-130 max-w-[1200px] lg:max-h-[100vh] lg:h-[86.3vh] flex justify-center">
        {/* Left */}
        <div className="w-[45%] flex flex-col gap-8 sm:gap-13 md:gap-15 justify-center items-start pl-5 ">
          <h2 className="font-bold text-2xl mt-5 sm:text-3xl md:text-4xl">
            Learn Anytime, Anywhere
          </h2>
          <h3 className="text-gray-800 sm:text-lg md:text-2xl">
            Explore our diverse range of courses and discover new learning
            opportunities
          </h3>
          <button className="sm:scale-110 sm:ml-3 font-extrabold text-md bg-blue-700 p-2 rounded-lg text-white hover:bg-blue-200 hover:text-blue-800 hover:border-1 hover:border-blue-800 hover:scale-105 transition-all duration-300">
            Browse Courses
          </button>

          <div className="w-full flex md:scale-120  justify-center gap-2 sm:gap-5 flex-wrap">
            <div className="flex sm:scale-110 sm:pl-5 flex-col justify-center items-center mr-4">
              <p className="border-b-2 border-blue-600 pb-1 text-xl font-bold text-amber-500 transition-all duration-300 hover:scale-125">
                5+ Million
              </p>
              <p className="font-semibold text-blue-700">Students</p>
            </div>
            <div className="flex flex-col justify-center items-center mr-4">
              <p className="border-b-2 border-blue-600 pb-1 text-xl font-bold text-amber-500 transition-all duration-300 hover:scale-125">
                70+
              </p>
              <p className="font-semibold text-blue-700">Courses</p>
            </div>
          </div>
        </div>
        {/* Right */}
        <div className="w-[55%] overflow-hidden">
          <div className="hero-orbit-x-container h-[100%] flex flex-col justify-center items-center relative mr-7 ">
           

           <img src={University} alt="" />
            <img            />
            {badges.map((badge, i) => (
              <div
                key={i}
                ref={(el) => (badgeRefs.current[i] = el)}
                className="orbit-x-badge my-2"
                style={{
                  position: "absolute",
                  left: "40%",
                  top: `${10 + i * 10}%`,
                  width: 50,
                  height: 50,
                  transform: `translateX(-50%) translateY(-${badge.radius}px)`,
                  zIndex: 100,
                  pointerEvents: "auto",
                }}
              >
                <img
                  src={badge.img}
                  alt=""
                  className="w-[65px] rounded-2xl "
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
