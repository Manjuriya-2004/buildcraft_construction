import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center justify-center"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg')",
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-green-950/75"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-green-950/40 via-black/50 to-green-950"></div>

      {/* Glass Blur Effects */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-green-500/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-400/20 blur-3xl rounded-full"></div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 pt-40 md:pt-48">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="
            inline-flex items-center gap-2
            px-6 py-3 mb-8
            rounded-full
            bg-white/10
            backdrop-blur-xl
            border border-white/20
            shadow-xl"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>

            <span className="text-green-400 font-medium">
              Engineers & Contractors
            </span>
          </motion.div>

          {/* Company Name */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="
            text-5xl
            md:text-7xl
            lg:text-8xl
            font-black
            uppercase
            leading-none
            text-white"
          >
            SHIVAMAGI
            <br />

            <span
              className="
              text-transparent
              bg-clip-text
              bg-linear-to-r
              from-green-400
              via-emerald-500
              to-lime-300"
            >
              CONSTRUCTIONS
            </span>
          </motion.h1>

          {/* Tagline */}
          <p className="mt-6 text-green-400 text-xl md:text-2xl font-semibold tracking-[4px] uppercase">
            Building Quality • Creating Trust
          </p>

          {/* Description */}
          <p
            className="
            mt-8
            max-w-3xl
            mx-auto
            text-gray-300
            text-lg
            md:text-xl
            leading-relaxed"
          >
            Shivamagai Constructions is committed to delivering
            high-quality residential and commercial construction
            projects across Chennai and Coimbatore with excellence,
            reliability, and professional craftsmanship.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">
            <button
              className="
              px-8 py-4
              rounded-2xl
              bg-green-600
              hover:bg-green-700
              text-white
              font-bold
              shadow-lg
              transition-all"
            >
              Get Free Quote
            </button>

            <button
              className="
              px-8 py-4
              rounded-2xl
              bg-white/10
              backdrop-blur-xl
              border border-white/20
              text-white
              flex items-center
              justify-center
              gap-3
              hover:bg-white/20
              transition-all"
            >
              View Projects
              <FaArrowRight />
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { value: "50+", label: "Projects" },
              { value: "100+", label: "Clients" },
              { value: "Chennai", label: "Projects" },
              { value: "Coimbatore", label: "Projects" },
            ].map((item, index) => (
              <div
                key={index}
                className="
                bg-white/10
                backdrop-blur-2xl
                border border-green-400/20
                rounded-3xl
                p-6
                shadow-[0_8px_32px_rgba(34,197,94,0.15)]"
              >
                <h3 className="text-green-400 text-2xl md:text-3xl font-bold">
                  {item.value}
                </h3>

                <p className="text-gray-300 mt-2">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* Contact Strip */}
          <div
            className="
            mt-12
            inline-flex
            items-center
            gap-3
            px-6 py-4
            rounded-2xl
            bg-white/10
            backdrop-blur-xl
            border border-white/20"
          >
            <FaPhoneAlt className="text-green-400" />

            <span className="text-white font-medium">
              +91 98941 97412
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;