import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      {/* Heading */}
      <div className="text-center text-2xl pt-10 text-[#707070]">
        <p>
          ABOUT <span className="text-gray-700 font-semibold">US</span>
        </p>
      </div>

      {/* About Section */}
      <div className="my-10 flex flex-col md:flex-row gap-12 items-center">
        <img
          className="w-full md:max-w-[360px] rounded-lg shadow-md"
          src={assets.about_image}
          alt="About HMS"
        />

        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            Welcome to <b>HMS (Hospital Management System)</b>, a modern
            healthcare platform designed to simplify how patients, doctors, and
            administrators interact. We focus on making healthcare access
            faster, safer, and more transparent.
          </p>

          <p>
            HMS allows patients to easily discover available doctors, book
            appointments, and make secure online payments. Doctors can
            efficiently manage appointments, while administrators maintain
            complete control over doctors, users, and revenue.
          </p>

          <p>
            Built using modern web technologies, HMS ensures high performance,
            scalability, and data security. Our platform is designed to support
            real hospital workflows while delivering an intuitive user
            experience.
          </p>

          <b className="text-gray-800 text-base">Our Vision</b>

          <p>
            Our vision is to create a seamless digital healthcare ecosystem
            where patients receive timely care, doctors focus on treatment, and
            hospitals operate efficiently. HMS bridges the gap between
            healthcare providers and patients through technology.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="text-xl my-4 text-center md:text-left">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row mb-20 gap-4">
        {/* Card 1 */}
        <div className="border rounded-lg px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-4 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>EFFICIENCY</b>
          <p>
            Quick appointment booking, instant confirmations, and simplified
            healthcare workflows that save time for everyone.
          </p>
        </div>

        {/* Card 2 */}
        <div className="border rounded-lg px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-4 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>CONVENIENCE</b>
          <p>
            Easy access to verified doctors, appointment history, and secure
            online payments—all from one platform.
          </p>
        </div>

        {/* Card 3 */}
        <div className="border rounded-lg px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-4 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>SECURITY & PERSONALIZATION</b>
          <p>
            Secure authentication, role-based access, and personalized
            healthcare experiences for patients, doctors, and admins.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
