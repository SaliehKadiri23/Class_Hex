import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { IoStar } from "react-icons/io5";
import { motion } from "motion/react";


const testimonials = [
  {
    name: "John Doe",
    role: "Student",
    rating: 5,
    text: "The Web Development course transformed my coding skills—clear lessons, practical projects, and real‑time feedback. Highly recommend!",
    avatar:
      "https://ui-avatars.com/api/?name=John+Doe&background=0D8ABC&color=fff",
  },
  {
    name: "Maryam Jidda",
    role: "Student",
    rating: 3,
    text: "Wow..The Digital Marketing modules gave me actionable strategies for SEO and social ads. My campaign ROI improved 3× after just one project!",
    avatar:
      "https://ui-avatars.com/api/?name=Maryam+Jidda&background=0D8ABC&color=fff",
  },
  {
    name: "Ahmed Ali",
    role: "Student",
    rating: 5,
    text: "The Data Science course with hands‑on exercises made complex concepts easy to grasp. The instructor’s support was phenomenal throughout.",
    avatar:
      "https://ui-avatars.com/api/?name=Ahmed+Ali&background=0D8ABC&color=fff",
  },
  {
    name: "Yusuf Ahmad",
    role: "Student",
    rating: 4,
    text: "The ML course exceeded my expectations—engaging labs, real‑world datasets, and personalized mentorship. A game‑changer!",
    avatar:
      "https://ui-avatars.com/api/?name=Yusuf+Ahmad&background=0D8ABC&color=fff",
  },
];

function getRatingStars(rating) {
  let ratings = [];
  for (let r = 1; r <= rating; r++) {
    ratings.push(<IoStar className="text-yellow-400 size-5" />);
  }
  return ratings;
}
const Testimonials = () => {
  return (
    <div className="w-full">
      <motion.section
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
        className="bg-white py-12 w-full overflow-hidden flex flex-col justify-center items-center"
      >
        <h2 className="text-center font-bold text-4xl mb-8 text-[#16213e]">
          What Our Students Say
        </h2>
        <div className="w-full flex justify-center items-center max-w-full overflow-x-hidden rounded-2xl md:max-w-[1050px] px-2 ">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
          >
            {testimonials.map((t, idx) => (
              <SwiperSlide
                key={idx}
                className=" mb-15 flex flex-col justify-center place-items-center items-center px-2 w-full"
              >
                <div className="flex flex-col bg-white md:flex-row justify-center items-center max-w-[570px] border-1 border-gray-100 gap-4 md:gap-6 rounded-xl p-4 md:p-6 shadow-md w-full">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-20 h-20 rounded-full object-cover bg-[#e3eaf2] mb-4 md:mb-0"
                  />
                  <div className="flex-1 text-center md:text-left">
                    <p className="flex gap-1 w-full justify-center md:justify-start  mb-2">
                      {getRatingStars(t.rating)}
                    </p>

                    <p className="text-base text-[#222b45] mb-4">{t.text}</p>
                    <div className="font-bold text-lg text-[#16213e]">
                      {t.name}
                    </div>
                    <div className="text-gray-500 text-sm">{t.role}</div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.section>
    </div>
  );
};

export default Testimonials;
