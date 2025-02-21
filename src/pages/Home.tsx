import hero1 from "../imgs/hero-carousel/hero-carousel-1.jpg"; // Ensure correct path
import { FaHeartbeat, FaCapsules, FaSyringe, FaDna } from "react-icons/fa"; // Import icons

function Home() {
  // Card data array
  const features = [
    { id: 1, icon: <FaHeartbeat className="text-teal-400 text-3xl mx-auto mb-2" />, title: "Lorem Ipsum", text: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi" },
    { id: 2, icon: <FaCapsules className="text-teal-400 text-3xl mx-auto mb-2" />, title: "Sed ut perspici", text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore" },
    { id: 3, icon: <FaSyringe className="text-teal-400 text-3xl mx-auto mb-2" />, title: "Magni Dolores", text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia" },
    { id: 4, icon: <FaDna className="text-teal-400 text-3xl mx-auto mb-2" />, title: "Nemo Enim", text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis" },
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden flex flex-col"> 
      
      {/* Background Image */}
      <img src={hero1} alt="hero" className="w-full h-full object-cover" />

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end items-center pb-[50px] px-4">
        
        {/* White Semi-transparent Box */}
        <div className="bg-white bg-opacity-70 rounded-md shadow-md p-6 md:p-8 max-w-3xl border-t-4 border-cyan-400 w-[90%] md:w-auto text-center">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800">Welcome to Therapy  Linker</h1>
          <p className="text-gray-700 text-sm md:text-base mt-3">
         The fastand the best online therapy platform that connects you to a therapist at the comfirt  of your home or place of work
          </p>
          
          {/* Button */}
          <button className="mt-6 bg-teal-400 hover:bg-teal-500 text-white font-semibold py-2 px-5 rounded-md transition duration-300">
            Read More
          </button>
        </div>

        {/* Features Cards Section with Padding */}
        <div className="mt-5 px-5 w-full flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl">
            {features.map((feature) => (
              <div key={feature.id} className="bg-white shadow-md rounded-md p-6 text-center">
                {feature.icon}
                <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
