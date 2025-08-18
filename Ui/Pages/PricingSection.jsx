import React from 'react';
import { FaCheckCircle, FaUsers, FaBookOpen, FaHeadset, FaUserTie } from 'react-icons/fa';
import Community from "../../src/assets/why choose us/Chat Icon.png";
import { motion } from 'motion/react';

const plans = [
  {
    name: "Basic",
    price: "$19",
    period: "/month",
    features: [
      { icon: <FaCheckCircle />, text: "Access to courses" },
      { icon: <FaBookOpen />, text: "Advanced resources" },
      {
        icon: <img src={Community} className="w-[20px]" alt="" />,
        text: "Community Support",
      },
      { icon: <FaCheckCircle />, text: "Limited" },
    ],
    button: { text: "Get Started", style: "basic" },
  },
  {
    name: "Premium",
    price: "$39",
    period: "/month",
    features: [
      { icon: <FaCheckCircle />, text: "Access to courses" },
      { icon: <FaBookOpen />, text: "Advanced resources" },
      {
        icon: <img src={Community} className="w-[20px]" alt="" />,
        text: "Community Support",
      },
      { icon: <FaHeadset />, text: "24/7 support" },
    ],
    button: { text: "Get Started", style: "premium" },
    highlight: true,
  },
  {
    name: "Expert",
    price: "Contact us",
    period: "",
    features: [
      { icon: <FaCheckCircle />, text: "Access to courses" },
      { icon: <FaBookOpen />, text: "Exclusive resources" },
      { icon: <FaHeadset />, text: "1-on-1 support" },
      {
        icon: <img src={Community} className="w-[20px]" alt="" />,
        text: "Community Support",
      },
      { icon: <FaHeadset />, text: "Dedicated Tutor" },
    ],
    button: { text: "Get Started", style: "expert" },
  },
];

const PricingSection = () => {
  return (
    <div className="w-full bg-gradient-to-r from-red-100 bg-red-300 to-blue-100">
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
        className="w-full py-16 "
      >
        <div className="text-center mb-12 ">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-2">
            Pricing
          </h2>
          <p className="text-lg text-black">
            Choose the plan that's right for you.
          </p>
        </div>
        <div className="w-full flex flex-row justify-center items-start flex-wrap gap-3 sm:gap-7">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className="group rounded-2xl  sm:mx-3 sm:grow sm:max-w-[250px] h-[420px] mt-2 border-4 border-green-500 transition-all duration-300 bg-white hover:border-blue-500  hover:scale-107"
            >
              <div
                className={`flex flex-col items-center pb-6 rounded-2xl bg-white shadow-xl h-[99%] transition-all duration-300`}
              >
                <div className="w-full bg-blue-100 rounded-t-xl py-4 flex flex-col items-center mb-4">
                  <h3 className="text-2xl  font-bold text-gray-800">
                    {plan.name}
                  </h3>
                </div>
                <div className="w-full flex flex-col items-center px-3">
                  <div className="flex items-end mb-6">
                    <span className="text-4xl font-extrabold text-gray-900">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-lg text-gray-500 ml-1">
                        {plan.period}
                      </span>
                    )}
                  </div>
                  <ul className="mb-8 space-y-3 w-full">
                    {plan.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-gray-700 text-base"
                      >
                        <span className="text-green-500 text-lg">
                          {feature.icon}
                        </span>
                        {feature.text}
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`font-semibold text-lg bg-blue-700 p-2 rounded-lg text-white hover:bg-white hover:text-blue-800 hover:border-1 hover:border-blue-800 hover:scale-105 transition-all duration-300 `}
                  >
                    {plan.button.text}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default PricingSection;