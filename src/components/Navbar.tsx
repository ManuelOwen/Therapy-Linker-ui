import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">Therapy Linker</div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 text-2xl focus:outline-none">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Nav Links */}
        <ul
          className={`md:flex md:items-center absolute md:static left-0 w-full md:w-auto bg-white md:bg-transparent z-10 transition-all duration-300 ease-in ${
            isOpen ? "top-14 opacity-100" : "-top-96 opacity-0 md:opacity-100"
          } md:opacity-100 md:flex-row flex-col md:space-x-6 space-y-4 md:space-y-0 text-center md:text-left`}
        >
          {["Home", "About", "Department", "Doctors", "Contact"].map((item) => (
            <li key={item} className="cursor-pointer text-lg hover:text-cyan-400 transition">
                 <Link to={item ==="Home" ? "/" :`/${item.toLowerCase()}`} onClick={() => setIsOpen(false)}>
                {item}
              </Link>
            </li>
          ))}
          {/* Button */}
          <li>
            {/* <button className="bg-teal-300 text-white font-medium px-5 py-2 rounded-md hover:bg-teal-400 transition">
              Make Appointment
            </button> */}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
