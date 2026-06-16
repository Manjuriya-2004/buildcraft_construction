import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black/30 border-t border-green-400/20">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-black text-white">
              SHIVAMAGI
            </h2>

            <p className="text-green-400 uppercase tracking-wider text-sm mt-1">
              Engineers & Contractors
            </p>

            <p className="text-gray-300 mt-5 leading-relaxed">
              Delivering quality construction solutions with
              trust, professionalism and excellence across
              Chennai and Coimbatore.
            </p>

            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="
                w-10 h-10
                rounded-full
                bg-green-500/20
                flex items-center justify-center
                text-green-400"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="
                w-10 h-10
                rounded-full
                bg-green-500/20
                flex items-center justify-center
                text-green-400"
              >
                <FaInstagram />
              </a>

              <a
                href="https://wa.me/919894197412"
                target="_blank"
                rel="noreferrer"
                className="
                w-10 h-10
                rounded-full
                bg-green-500/20
                flex items-center justify-center
                text-green-400"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-xl font-bold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-xl font-bold mb-5">
              Services
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>Residential Construction</li>
              <li>Commercial Construction</li>
              <li>Engineering Works</li>
              <li>Renovation Works</li>
              <li>Contracting Services</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-xl font-bold mb-5">
              Contact Info
            </h3>

            <div className="space-y-4">

              <div className="flex gap-3">
                <FaPhoneAlt className="text-green-400 mt-1" />
                <span className="text-gray-300">
                  +91 98941 97412
                </span>
              </div>

              <div className="flex gap-3">
                <FaEnvelope className="text-green-400 mt-1" />
                <span className="text-gray-300 break-all">
                  shivamagiconstruction@gmail.com
                </span>
              </div>

              <div className="flex gap-3">
                <FaMapMarkerAlt className="text-green-400 mt-1" />
                <span className="text-gray-300">
                  No.5/23, 4th Street,
                  Jyothi Nagar,
                  Chitlapakkam,
                  Chennai - 600064
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div
          className="
          border-t
          border-green-400/20
          mt-12
          pt-6
          text-center"
        >
          <p className="text-gray-400">
            © 2026 Shivamagi Constructions.
            All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;