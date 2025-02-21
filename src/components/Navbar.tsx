import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar md:flex md:items-center my-3 h-14 px-6 ">
      <ul className="flex items-center gap-x-6 flex-wrap justify-end w-full  ml-10">
        <li className="cursor-pointer text-[20px] hover:text-cyan-200 duration-500 ml-6">
          <Link to="/">Home</Link>
        </li>
        <li className="cursor-pointer text-[20px] hover:text-cyan-200 duration-500 ml-6">
          <Link to="/about">About</Link>
        </li>
        <li className="cursor-pointer text-[20px] hover:text-cyan-200 duration-500 ml-6">
          <Link to="/department">Department</Link>
        </li>
        <li className="cursor-pointer text-[20px] hover:text-cyan-200 duration-500 ml-6">
          <Link to="/doctors">Doctors</Link>
        </li>
        <li className="cursor-pointer text-[20px] hover:text-cyan-200 duration-500 ml-6">
          <Link to="/contact">Contact</Link>
        </li>
        <button className=" cursor-pointer text-[20px] hover:text bg-cyan-400 duration-300 transition h-9 w-48 ml-16 rounded-[5px]">Make Appointment</button>
      </ul>
    </div>
  );
}

export default Navbar;
