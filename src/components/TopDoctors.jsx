import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  return (
    <div className="flex flex-col items-center gap-6 my-16 text-[#262626] md:mx-10">
      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-semibold text-center">
        Top Doctors You Can Trust
      </h1>
      <p className="sm:w-2/3 text-center text-gray-600 text-sm">
        Explore our curated list of experienced doctors across multiple
        specialties. Book appointments easily and manage your healthcare with
        confidence.
      </p>

      {/* Doctors Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-8">
        {doctors.slice(0, 10).map((doc) => (
          <div
            key={doc._id}
            onClick={() => {
              navigate(`/appointment/${doc._id}`);
              window.scrollTo(0, 0);
            }}
            className="border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 hover:shadow-lg transition-all duration-300 bg-white"
          >
            <img
              className="w-full h-48 object-cover bg-[#EAEFFF]"
              src={doc.image}
              alt={doc.name}
            />
            <div className="p-4 flex flex-col gap-2">
              {/* Availability */}
              <div
                className={`flex items-center gap-2 text-sm ${
                  doc.available ? "text-green-500" : "text-gray-500"
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    doc.available ? "bg-green-500" : "bg-gray-500"
                  }`}
                />
                {doc.available ? "Available Now" : "Currently Unavailable"}
              </div>

              {/* Doctor Info */}
              <p className="text-lg font-medium text-[#262626]">{doc.name}</p>
              <p className="text-sm text-gray-500">{doc.speciality}</p>

              {/* Optional Extra Info */}
              <div className="flex justify-between items-center mt-2 text-xs text-gray-400">
                <span>
                  {doc.experience
                    ? `${doc.experience} yrs experience`
                    : "Experience info"}
                </span>
                {/* <span>⭐ {doc.rating || "4.5"}</span> */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* More Doctors Button */}
      <button
        onClick={() => {
          navigate("/doctors");
          window.scrollTo(0, 0);
        }}
        className="bg-primary text-white px-8 py-3 rounded-full mt-10 hover:bg-primary-dark transition-colors duration-300"
      >
        See All Doctors
      </button>
    </div>
  );
};

export default TopDoctors;
