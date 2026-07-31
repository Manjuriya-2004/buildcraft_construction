import { useState } from "react";
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.jpeg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-5 left-0 w-full z-50 px-4">
      <div
        className="
          max-w-7xl mx-auto
          bg-white/10
          backdrop-blur-2xl
          border border-white/10
          rounded-2xl
          shadow-2xl
        "
      >
        <div className="flex items-center justify-between px-6 py-4">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Shivamagi Logo"
              className="w-14 h-14 rounded-full object-cover border-2 border-green-400"
            />

            <div>
              <h2 className="text-white font-black text-xl">
                SHIVAMAGI
              </h2>

              <p className="text-green-400 text-xs uppercase tracking-widest">
                Engineers & Contractors
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-white font-medium">
            <li>
              <a
                href="#home"
                className="hover:text-green-400 transition duration-300"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                className="hover:text-green-400 transition duration-300"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#services"
                className="hover:text-green-400 transition duration-300"
              >
                Services
              </a>
            </li>

            <li>
              <a
                href="#projects"
                className="hover:text-green-400 transition duration-300"
              >
                Projects
              </a>
            </li>
            <li>
  <a
    href="#site-works"
    className="hover:text-green-400 transition duration-300"
  >
    Site Works
  </a>
</li>

            <li>
              <a
                href="#contact"
                className="hover:text-green-400 transition duration-300"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Call Button */}
          <div className="hidden md:flex">
            <a
              href="tel:9894197412"
              className="
                flex items-center gap-2
                bg-green-600 hover:bg-green-700
                px-5 py-3
                rounded-xl
                text-white font-semibold
                transition duration-300
              "
            >
              <FaPhoneAlt />
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-2xl"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-white/10">
            <ul className="flex flex-col gap-4 p-6 text-white">

              <li>
                <a
                  href="#home"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  onClick={() => setMenuOpen(false)}
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  onClick={() => setMenuOpen(false)}
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="tel:9894197412"
                  className="
                    flex items-center justify-center gap-2
                    bg-green-600 hover:bg-green-700
                    px-5 py-3
                    rounded-xl
                    text-white font-semibold
                  "
                >
                  <FaPhoneAlt />
                  Call Now
                </a>
              </li>

            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;