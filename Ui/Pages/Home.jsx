import React from "react";
import HeroSection from "./HeroSection";
import WhyChooseUs from "./WhyChooseUs";
import OurCourses from "./OurCourses";
import Testimonials from "./Testimonials";
import JoinUs from "./JoinUs";
import PricingSection from "./PricingSection";

const Home = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full flex flex-col justify-center items-center">
        <HeroSection />
        <WhyChooseUs />
        <OurCourses />
        <PricingSection />
        <Testimonials />
        <JoinUs />
      </div>
    </div>
  );
};

export default Home;
