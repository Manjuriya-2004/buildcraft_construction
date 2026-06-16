import { FaBullseye, FaEye, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="bg-[#02140A] py-24 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <span
            className="
            px-5 py-2
            rounded-full
            bg-white/10
            backdrop-blur-xl
            border border-green-400/20
            text-green-400"
          >
            About Us
          </span>

          <h2
            className="
            mt-6
            text-4xl
            md:text-5xl
            font-black
            text-white"
          >
            About Shivamagi
            <span className="text-green-400"> Constructions</span>
          </h2>

          <p
            className="
            mt-6
            text-gray-300
            max-w-3xl
            mx-auto
            text-lg"
          >
            Building strong foundations with quality,
            trust and professional excellence.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left Side Image */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg"
              alt="Construction"
              className="
              w-full
              h-[550px]
              object-cover
              rounded-3xl
              shadow-2xl"
            />

            {/* Floating Glass Card */}
            <div
              className="
              absolute
              bottom-6
              left-6
              bg-white/10
              backdrop-blur-2xl
              border border-green-400/20
              rounded-3xl
              px-8 py-6
              shadow-[0_8px_32px_rgba(34,197,94,0.25)]"
            >
              <h3 className="text-5xl font-black text-green-400">
                50+
              </h3>

              <p className="text-black font-medium">
                Projects Completed
              </p>
            </div>
          </motion.div>

          {/* Right Side Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3
              className="
              text-3xl
              md:text-4xl
              font-bold
              text-white
              leading-tight"
            >
              Trusted Engineering &
              <span className="text-green-400">
                {" "}Contracting Experts
              </span>
            </h3>

            <p
              className="
              mt-6
              text-gray-300
              leading-relaxed
              text-lg"
            >
              Shivamagi Constructions is a trusted engineering
              and contracting company dedicated to delivering
              high-quality residential and commercial construction
              solutions across Chennai and Coimbatore.
            </p>

            <p
              className="
              mt-4
              text-gray-400
              leading-relaxed"
            >
              We focus on quality workmanship, timely project
              delivery and customer satisfaction while creating
              durable and innovative structures that stand the
              test of time.
            </p>

            {/* Feature Cards */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {[
                "Quality Construction",
                "Professional Team",
                "Timely Delivery",
                "Customer Satisfaction",
              ].map((item, index) => (
                <div
                  key={index}
                  className="
                  flex items-center gap-3
                  bg-white/10
                  backdrop-blur-xl
                  border border-green-400/20
                  rounded-2xl
                  p-4
                  hover:border-green-400/50
                  transition-all"
                >
                  <FaCheckCircle className="text-green-400" />

                  <span className="text-white">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-5 mt-10">

              {/* Mission */}
              <div
                className="
                bg-white/10
                backdrop-blur-xl
                border border-green-400/20
                rounded-3xl
                p-6
                hover:border-green-400/50
                transition-all"
              >
                <FaBullseye className="text-green-400 text-3xl mb-4" />

                <h4 className="text-white text-xl font-bold mb-3">
                  Mission
                </h4>

                <p className="text-gray-300 leading-relaxed">
                  Deliver quality construction solutions
                  through innovation, professionalism,
                  and commitment.
                </p>
              </div>

              {/* Vision */}
              <div
                className="
                bg-white/10
                backdrop-blur-xl
                border border-green-400/20
                rounded-3xl
                p-6
                hover:border-green-400/50
                transition-all"
              >
                <FaEye className="text-green-400 text-3xl mb-4" />

                <h4 className="text-white text-xl font-bold mb-3">
                  Vision
                </h4>

                <p className="text-gray-300 leading-relaxed">
                  Become one of Tamil Nadu's most trusted
                  construction companies through quality,
                  integrity and customer satisfaction.
                </p>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default About;