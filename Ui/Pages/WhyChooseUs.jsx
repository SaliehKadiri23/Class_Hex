import React from "react";
import Calendar from "../../src/assets/why choose us/Calendar Badge.png";
import GraduationCap from "../../src/assets/why choose us/Graduation Cap.png";
import Certificate from "../../src/assets/why choose us/Certificate Badge.png";
import Megaphone from "../../src/assets/why choose us/Megaphone.png";
import Puzzle from "../../src/assets/why choose us/Puzzle Badge.png";
import ChatIcom from "../../src/assets/why choose us/Chat Icon.png";
import { motion } from "motion/react";


let reasons = [
  {
    imgSrc: GraduationCap,
    title: "Expert Instructors",
    body: "Learn from veterans, seasoned developers, data scientists, marketers, and analysts who provide hands-on personalized guidance.!",
  },
  {
    imgSrc: Calendar,
    title: "Flexible Learning",
    body: "Learn on your schedule with on‑demand courses, bite‑sized lessons, and offline access—study anytime, anywhere to fit your life.",
  },
  {
    imgSrc: Certificate,
    title: "Online Certificates",
    body: "Earn industry‑recognized certificates upon course completion, showcasing your expertise in web development, AI, data science, and more.",
  },
  {
    imgSrc: Megaphone,
    title: "World Class Marketing",
    body: "Leverage proven strategies from top-tier marketers—gain cutting-edge skills, actionable insights, and results-driven campaigns",
  },
  {
    imgSrc: Puzzle,
    title: "Interactive Content",
    body: "Engage with real‑time quizzes, code challenges, and collaborative projects that make learning active, effective and engaging.",
  },
  {
    imgSrc: ChatIcom,
    title: "Community Support",
    body: "Connect with peers and mentors in our active forum—share insights, solve challenges, and grow together every step",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="w-full">
      <motion.div
        initial={{
          opacity: 0,
          y: 200,
        }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.24,
            duration: 0.5,
          },
        }}
        viewport={{ once: true }}
        className="w-full mt-3 flex flex-col justify-center items-center"
      >
        <h3 className="mb-4 mt-8 text-black font-extrabold text-4xl">
          About Us
        </h3>
        <p className="text-sm pb-3 px-5 sm:px-10 text-center max-w-[1000px]">
          At Class Hex, we empower learners with future-ready skills through
          high-quality online courses designed by industry experts. Whether
          you're diving into Web Development, exploring the world of Artificial
          Intelligence, mastering Machine Learning and Data Science, or building
          a solid foundation in Accounting and Digital Marketing, Class Hex is
          your trusted learning partner. Our mission is to make tech and
          business education accessible, practical, and impactful — helping you
          grow, upskill, and succeed in a rapidly evolving digital world.
        </p>
        <h3 className="mb-4 mt-8 text-black font-extrabold text-4xl">
          Why Choose Us
        </h3>
        <div className="w-full items-center justify-center max-w-[1000px] grid gap-5 place-items-center grid-cols-2 md:grid-cols-3 px-3 py-5">
          {/* Reasons */}
          {reasons.map((reason, index) => (
            <div className="flex border-1 border-gray-100 shadow-lg h-[320px] sm:h-[300px] md:max-w-[320px] flex-col gap-3 p-3 text-center rounded-xl justify-center items-center bg-white">
              <img src={reason.imgSrc} alt="" className="w-[100px] mt-3" />
              <h2 className="font-black text-lg">{reason.title}</h2>
              <h3 className="text-sm pb-3">{reason.body}</h3>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default WhyChooseUs;
