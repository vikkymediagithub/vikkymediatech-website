
import { FaRegLightbulb } from "react-icons/fa"; // placeholder icon

const Nav = () => {
  return (
    <nav className="w-full px-4 py-3 bg-gradient-to-r from-purple-800 to-purple-900 text-white rounded-xl shadow-md max-w-6xl mx-auto mt-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="bg-black p-2 rounded-lg">
            <span className="text-purple-500 text-2xl font-bold">◇</span>
          </div>
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          <li className="text-purple-400 cursor-pointer hover:text-white">Home</li>
          <li className="cursor-pointer hover:text-purple-400">About</li>
          <li className="cursor-pointer hover:text-purple-400">Services</li>
          <li className="cursor-pointer hover:text-purple-400">Projects</li>
          <li className="cursor-pointer hover:text-purple-400">Testimonials</li>
          <li className="cursor-pointer hover:text-purple-400">Contact</li>
        </ul>

        {/* Icon / Theme toggle */}
        <div className="text-purple-300 hover:text-white cursor-pointer">
          <FaRegLightbulb size={18} />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
