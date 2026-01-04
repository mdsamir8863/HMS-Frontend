import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10 ">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm border-t border-gray-300 pt-10 ">
        {/* Brand */}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="HMS Logo" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            HMS (Hospital Management System) is a modern healthcare platform
            designed to simplify doctor appointments, patient management, and
            hospital operations with secure and scalable technology.
          </p>
        </div>

        {/* Company */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li className="cursor-pointer hover:text-primary">Home</li>
            <li className="cursor-pointer hover:text-primary">About Us</li>
            <li className="cursor-pointer hover:text-primary">Doctors</li>
            <li className="cursor-pointer hover:text-primary">
              Privacy Policy
            </li>
            <li className="cursor-pointer hover:text-primary">
              Terms & Conditions
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>📞 +91 90000 00000</li>
            <li>✉️ support@hms.com</li>
            <li>🏥 India</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center text-gray-500">
          © {new Date().getFullYear()} HMS. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
