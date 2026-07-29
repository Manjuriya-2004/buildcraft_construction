import { useEffect, useRef, useState } from "react";
import {
  FaBullseye,
  FaEye,
  FaCheckCircle,
} from "react-icons/fa";
import { motion } from "framer-motion";

/* ================= COUNTER ================= */

function Counter({ end, suffix = "+", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    let startTime = null;
    let frameId;

    const animate = (timestamp) => {
      if (!startTime) {
        startTime = timestamp;
      }

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      );

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, [started, end, duration]);

  return (
    <span ref={counterRef}>
      {count}
      {suffix}
    </span>
  );
}

/* ================= DATA ================= */

const features = [
  "Quality Construction",
  "Professional Team",
  "Timely Delivery",
  "Customer Satisfaction",
];

/* ================= ABOUT ================= */

function About() {
  return (
    <>
      <section
        id="about"
        className="
          relative
          bg-[#02140A]
          py-24
          px-6
          overflow-hidden
        "
      >
        {/* Background Glow */}
        <div
          className="
            absolute
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[700px]
            h-[700px]
            bg-green-500/[0.04]
            rounded-full
            blur-[130px]
            pointer-events-none
          "
        />

        <div className="relative z-10 max-w-7xl mx-auto">

          {/* ================= HEADING ================= */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span
              className="
                inline-block
                px-5
                py-2
                rounded-full
                bg-white/10
                backdrop-blur-xl
                border
                border-green-400/20
                text-green-400
                font-medium
              "
            >
              About Us
            </span>

            <h2
              className="
                mt-6
                text-4xl
                md:text-5xl
                font-black
                text-white
              "
            >
              About Shivamagi

              <span className="text-green-400">
                {" "}Constructions
              </span>
            </h2>

            <p
              className="
                mt-6
                text-gray-300
                max-w-3xl
                mx-auto
                text-lg
                leading-relaxed
              "
            >
              Building strong foundations with quality,
              trust, and professional excellence.
            </p>
          </motion.div>

          {/* ================= MAIN CONTENT ================= */}

          <div
            className="
              grid
              lg:grid-cols-2
              gap-14
              items-center
            "
          >

            {/* ================= LEFT IMAGE ================= */}

            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="about-image-wrapper relative"
            >
              {/* Image Glow */}
              <div
                className="
                  absolute
                  inset-5
                  bg-green-500/20
                  blur-3xl
                  rounded-3xl
                "
              />

              <div
                className="
                  relative
                  rounded-3xl
                  overflow-hidden
                  border
                  border-green-400/20
                  shadow-2xl
                "
              >
                <img
                  src="https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg"
                  alt="Shivamagi construction project"
                  className="
                    about-image
                    w-full
                    h-[450px]
                    md:h-[550px]
                    object-cover
                    transition-transform
                    duration-700
                  "
                />

                {/* Image Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#02140A]/60
                    via-transparent
                    to-transparent
                    pointer-events-none
                  "
                />
              </div>

              {/* ================= FLOATING PROJECT CARD ================= */}

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.5,
                }}
                viewport={{ once: true }}
                className="
                  project-floating-card
                  absolute
                  bottom-6
                  left-6

                  bg-[#052e16]/80
                  backdrop-blur-2xl

                  border
                  border-green-400/30

                  rounded-3xl
                  px-8
                  py-6

                  shadow-[0_8px_32px_rgba(34,197,94,0.25)]
                "
              >
                <h3
                  className="
                    text-4xl
                    md:text-5xl
                    font-black
                    text-green-400
                  "
                >
                  <Counter
                    end={50}
                    suffix="+"
                    duration={2200}
                  />
                </h3>

                <p className="text-white font-semibold mt-1">
                  Projects Completed
                </p>

                <p className="text-gray-400 text-xs mt-1">
                  Built with quality & trust
                </p>
              </motion.div>

            </motion.div>

            {/* ================= RIGHT CONTENT ================= */}

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >

              <h3
                className="
                  text-3xl
                  md:text-4xl
                  font-bold
                  text-white
                  leading-tight
                "
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
                  text-lg
                "
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
                  leading-relaxed
                "
              >
                We focus on quality workmanship, timely project
                delivery, and customer satisfaction while creating
                durable and innovative structures that stand the
                test of time.
              </p>

              {/* ================= FEATURE CARDS ================= */}

              <div
                className="
                  grid
                  sm:grid-cols-2
                  gap-4
                  mt-8
                "
              >
                {features.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{
                      opacity: 0,
                      y: 25,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.12,
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      y: -5,
                      scale: 1.02,
                    }}
                    className="
                      group
                      flex
                      items-center
                      gap-3

                      bg-white/[0.08]
                      backdrop-blur-xl

                      border
                      border-green-400/20

                      rounded-2xl
                      p-4

                      hover:border-green-400/50
                      hover:bg-white/[0.12]

                      transition-colors
                      duration-300
                    "
                  >
                    <FaCheckCircle
                      className="
                        text-green-400
                        shrink-0
                        transition-transform
                        duration-300
                        group-hover:scale-125
                      "
                    />

                    <span
                      className="
                        text-white
                        font-medium
                      "
                    >
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* ================= MISSION & VISION ================= */}

              <div
                className="
                  grid
                  md:grid-cols-2
                  gap-5
                  mt-10
                "
              >

                {/* Mission */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -8,
                  }}
                  className="
                    about-info-card
                    group
                    relative

                    bg-white/[0.08]
                    backdrop-blur-xl

                    border
                    border-green-400/20

                    rounded-3xl
                    p-6

                    overflow-hidden

                    hover:border-green-400/50
                    hover:bg-white/[0.12]

                    transition-colors
                    duration-300
                  "
                >
                  <div className="about-card-glow" />

                  <div
                    className="
                      relative
                      z-10

                      w-14
                      h-14
                      rounded-2xl

                      bg-green-500/20

                      flex
                      items-center
                      justify-center

                      mb-5

                      transition-transform
                      duration-300

                      group-hover:scale-110
                      group-hover:rotate-6
                    "
                  >
                    <FaBullseye
                      className="
                        text-green-400
                        text-3xl
                      "
                    />
                  </div>

                  <h4
                    className="
                      relative
                      z-10
                      text-white
                      text-xl
                      font-bold
                      mb-3
                    "
                  >
                    Our Mission
                  </h4>

                  <p
                    className="
                      relative
                      z-10
                      text-gray-300
                      leading-relaxed
                    "
                  >
                    Deliver quality construction solutions
                    through innovation, professionalism,
                    and commitment.
                  </p>
                </motion.div>

                {/* Vision */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.35,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -8,
                  }}
                  className="
                    about-info-card
                    group
                    relative

                    bg-white/[0.08]
                    backdrop-blur-xl

                    border
                    border-green-400/20

                    rounded-3xl
                    p-6

                    overflow-hidden

                    hover:border-green-400/50
                    hover:bg-white/[0.12]

                    transition-colors
                    duration-300
                  "
                >
                  <div className="about-card-glow" />

                  <div
                    className="
                      relative
                      z-10

                      w-14
                      h-14
                      rounded-2xl

                      bg-green-500/20

                      flex
                      items-center
                      justify-center

                      mb-5

                      transition-transform
                      duration-300

                      group-hover:scale-110
                      group-hover:-rotate-6
                    "
                  >
                    <FaEye
                      className="
                        text-green-400
                        text-3xl
                      "
                    />
                  </div>

                  <h4
                    className="
                      relative
                      z-10
                      text-white
                      text-xl
                      font-bold
                      mb-3
                    "
                  >
                    Our Vision
                  </h4>

                  <p
                    className="
                      relative
                      z-10
                      text-gray-300
                      leading-relaxed
                    "
                  >
                    Become one of Tamil Nadu&apos;s most trusted
                    construction companies through quality,
                    integrity, and customer satisfaction.
                  </p>
                </motion.div>

              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= CUSTOM ANIMATIONS ================= */}

      <style>{`

        /* IMAGE FLOAT */

        .about-image-wrapper {
          animation: aboutImageFloat 6s ease-in-out infinite;
        }

        @keyframes aboutImageFloat {
          0%, 100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-10px);
          }
        }


        /* IMAGE HOVER ZOOM */

        .about-image-wrapper:hover .about-image {
          transform: scale(1.04);
        }


        /* PROJECT CARD FLOAT */

        .project-floating-card {
          animation: projectCardFloat 3.5s ease-in-out infinite;
        }

        @keyframes projectCardFloat {
          0%, 100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-10px);
          }
        }


        /* MISSION / VISION GLOW */

        .about-card-glow {
          position: absolute;

          width: 150px;
          height: 150px;

          top: -80px;
          right: -80px;

          border-radius: 9999px;

          background: rgba(74, 222, 128, 0.10);

          filter: blur(40px);

          transition:
            transform 0.5s ease,
            background 0.5s ease;
        }

        .about-info-card:hover .about-card-glow {
          transform: scale(1.8);
          background: rgba(74, 222, 128, 0.18);
        }


        /* ACCESSIBILITY */

        @media (prefers-reduced-motion: reduce) {
          .about-image-wrapper,
          .project-floating-card {
            animation: none;
          }
        }

      `}</style>
    </>
  );
}

export default About;