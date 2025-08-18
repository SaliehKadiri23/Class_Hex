import React from "react";
import WebDev from "../../src/assets/Courses/Web Development.png";
import MachineLearning from "../../src/assets/Courses/Machine Learning.png";
import Accounting from "../../src/assets/Courses/Accounting.png";
import AI from "../../src/assets/Courses/AI.png";
import DataScience from "../../src/assets/Courses/Data Science.png";
import DigitalMarketing from "../../src/assets/Courses/Digital Marketing.png";
import { motion } from "motion/react";



let courses = [
  {
    imgSrc: WebDev,
    title: "Web Development",
    body: "Build interactive, responsive websites and apps using HTML, CSS, JavaScript, and modern frameworks with hands-on projects.",
  },
  {
    imgSrc: MachineLearning,
    title: "Machine Learning",
    body: "Dive into Machine Learning to build predictive models, master neural networks with Python, and tackle real‑world datasets through hands‑on labs.",
  },
  {
    imgSrc: Accounting,
    title: "Accounting",
    body: "Master financial fundamentals, bookkeeping, tax regulations, and auditing with real world studies and expert-led instruction!",
  },
  {
    imgSrc: AI,
    title: "Artificial Intelligence",
    body: "Master AI fundamentals and advanced techniques with expert-led labs, real-world projects, and personalized mentorship. & more!",
  },
  {
    imgSrc: DataScience,
    title: "Data Science",
    body: "Master data science, statistical analysis, machine learning, and visualization with real hands-on projects and expert guidance",
  },
  {
    imgSrc: DigitalMarketing,
    title: "Digital Marketing",
    body: "Drive real engagement—master SEO, social media ads, email marketing, and analytics through hands‑on projects and expert coaching.",
  },
];

const OurCourses = () => {
  return (
    <div className="w-full py-2">
      <motion.div
        initial={{
          opacity: 0,
          y: 200,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.24,
            duration: 0.5,
          },
        }}
        viewport={{ once: true }}
        className="w-full flex mt-2 flex-col justify-center items-center"
      >
        <h3 className="mb-4 mt-8 font-extrabold text-4xl">Our Courses</h3>
        <div className="w-full items-center justify-center max-w-[1000px] grid gap-5 place-items-center grid-cols-2 md:grid-cols-3 px-3 py-5">
          {/* courses */}
          {courses.map((course, index) => (
            <div className="hover:scale-107 border-1 border-gray-100 shadow-lg transition-all duration-300 flex md:max-w-[320px] h-[370px] flex-col gap-3 p-3 text-center rounded-xl justify-center items-center bg-white">
              <img src={course.imgSrc} alt="" className="w-[100px] mt-3" />
              <h2 className="font-black text-lg">{course.title}</h2>
              <h3 className="text-sm">{course.body}</h3>
              <button className="scale-90 mb-3 md:mb-0 font-extrabold text-lg bg-blue-700 p-2 rounded-lg text-white hover:bg-white hover:text-blue-800 hover:border-1 hover:border-blue-800 hover:scale-105 transition-all duration-300">
                View Details
              </button>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default OurCourses;
