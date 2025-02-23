import React from "react";
import { FaCheck } from "react-icons/fa";
import about from "../imgs/about.jpg"

const About: React.FC = () => {
  return (
    <section className="py-16 px-6 md:px-20 lg:px-32">
      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">About Us</h2>
        <div className="w-16 h-1 bg-teal-400 mx-auto mt-2"></div>
        <p className="text-gray-600 mt-3">
          We provide the best online therapy services to help you navigate life’s challenges.
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center gap-10">
       
        <div className="relative w-full md:w-1/2">
          <img
         src={about}
            alt="Building"
            className="rounded-lg shadow-lg w-full"
          />
          <button className="absolute inset-0 flex items-center justify-center">
            <div className="bg-teal-500 w-16 h-16 rounded-full flex items-center justify-center shadow-md hover:bg-teal-600 transition duration-300">
              <svg
                className="w-10 h-10 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </button>
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl font-semibold text-gray-800">
            Providing Quality Therapy Services at Your Convenience
          </h3>
          <p className="text-gray-600 italic mt-3">
            Our goal is to connect you with the best professionals, ensuring personalized care and support.
          </p>

          {/* Bullet Points */}
          <ul className="mt-4 space-y-3 text-gray-700">
            {[
              "Professional and experienced therapists.",
              "Confidential and secure online sessions.",
              "Flexible scheduling to fit your lifestyle.",
              "Affordable pricing and various plans available.",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <FaCheck className="text-teal-400 mt-1" />
                {item}
              </li>
            ))}
          </ul>

          {/* Extra Paragraph */}
          <p className="mt-4 text-gray-700">
            We prioritize your mental well-being and provide tools to help you achieve a balanced and healthy life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
