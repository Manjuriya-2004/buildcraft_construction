import { useEffect, useState } from "react";
import {
  FaArrowRight,
  FaPhoneAlt,
  FaBuilding,
  FaUsers,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

/* =========================
   COUNTER
========================= */

function Counter({ end, suffix = "", duration = 1800 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
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
  }, [end, duration]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

/* =========================
   HERO
========================= */

function Hero() {
  const stats = [
    {
      type: "number",
      icon: <FaBuilding />,
      value: 50,
      suffix: "+",
      label: "Projects Delivered",
    },
    {
      type: "number",
      icon: <FaUsers />,
      value: 100,
      suffix: "+",
      label: "Happy Clients",
    },
    {
      type: "text",
      icon: <FaMapMarkerAlt />,
      value: "Chennai",
      label: "Projects",
    },
    {
      type: "text",
      icon: <FaMapMarkerAlt />,
      value: "Coimbatore",
      label: "Projects",
    },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <section
        id="home"
        className="
          relative
          min-h-screen
          overflow-hidden
          flex
          items-center
          justify-center
        "
      >
        {/* ================= BACKGROUND ================= */}

        <div
          className="
            hero-background
            absolute
            inset-0
            bg-cover
            bg-center
            scale-110
          "
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg')",
          }}
        />

        {/* Dark Overlay */}

        <div className="absolute inset-0 bg-green-950/75" />

        {/* Gradient Overlay */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-green-950/40
            via-black/50
            to-[#02140A]
          "
        />

        {/* ================= FLOATING GLOWS ================= */}

        <div
          className="
            hero-glow-one
            absolute
            top-20
            left-[5%]
            w-72
            h-72
            bg-green-500/20
            blur-3xl
            rounded-full
          "
        />

        <div
          className="
            hero-glow-two
            absolute
            bottom-10
            right-[5%]
            w-96
            h-96
            bg-emerald-400/20
            blur-3xl
            rounded-full
          "
        />

        {/* ================= CONTENT ================= */}

        <div
          className="
            relative
            z-20
            w-full
            max-w-7xl
            mx-auto
            px-6
            pt-40
            pb-20
            md:pt-48
          "
        >
          <div className="text-center">

            {/* ================= BADGE ================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: -30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
              }}
              className="
                inline-flex
                items-center
                gap-3

                px-6
                py-3
                mb-8

                rounded-full

                bg-white/10
                backdrop-blur-xl

                border
                border-white/20

                shadow-xl
              "
            >
              {/* Pulse */}

              <span className="relative flex w-3 h-3">

                <span
                  className="
                    absolute
                    inline-flex
                    w-full
                    h-full
                    rounded-full
                    bg-green-400
                    opacity-70
                    animate-ping
                  "
                />

                <span
                  className="
                    relative
                    inline-flex
                    w-3
                    h-3
                    rounded-full
                    bg-green-400
                  "
                />

              </span>

              <span className="text-green-400 font-semibold">
                Engineers & Contractors
              </span>

            </motion.div>

            {/* ================= COMPANY NAME ================= */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 50,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 0.1,
              }}
              className="
                text-5xl
                md:text-7xl
                lg:text-8xl

                font-black
                uppercase

                leading-[0.95]

                text-white
              "
            >
              SHIVAMAGI

              <br />

              <span
                className="
                  text-transparent
                  bg-clip-text

                  bg-gradient-to-r
                  from-green-400
                  via-emerald-500
                  to-lime-300
                "
              >
                CONSTRUCTIONS
              </span>

            </motion.h1>

            {/* ================= TAGLINE ================= */}

            <motion.p
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.4,
              }}
              className="
                mt-7

                text-green-400

                text-base
                md:text-xl

                font-semibold

                tracking-[3px]
                md:tracking-[4px]

                uppercase
              "
            >
              Building Quality • Creating Trust
            </motion.p>

            {/* ================= DESCRIPTION ================= */}

            <motion.p
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.55,
              }}
              className="
                mt-8

                max-w-3xl
                mx-auto

                text-gray-300

                text-base
                md:text-xl

                leading-relaxed
              "
            >
              Shivamagi Constructions is committed to delivering
              high-quality residential and commercial construction
              projects across Chennai and Coimbatore with excellence,
              reliability, and professional craftsmanship.
            </motion.p>

            {/* ================= BUTTONS ================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.7,
              }}
              className="
                mt-10

                flex
                flex-col
                sm:flex-row

                justify-center
                items-center

                gap-5
              "
            >
              {/* Quote Button */}

              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                onClick={() => scrollToSection("contact")}
                className="
                  group
                  relative
                  overflow-hidden

                  px-8
                  py-4

                  rounded-2xl

                  bg-green-600
                  hover:bg-green-500

                  text-white
                  font-bold

                  shadow-lg
                  shadow-green-900/30

                  transition-colors
                  duration-300
                "
              >
                <span className="relative z-10">
                  Get Free Quote
                </span>

                <span
                  className="
                    absolute
                    inset-0

                    bg-gradient-to-r
                    from-transparent
                    via-white/20
                    to-transparent

                    -translate-x-full

                    group-hover:translate-x-full

                    transition-transform
                    duration-700
                  "
                />

              </motion.button>

              {/* Projects Button */}

              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                onClick={() => scrollToSection("projects")}
                className="
                  group

                  px-8
                  py-4

                  rounded-2xl

                  bg-white/10
                  backdrop-blur-xl

                  border
                  border-white/20

                  text-white

                  flex
                  items-center
                  justify-center
                  gap-3

                  hover:bg-white/20
                  hover:border-green-400/40

                  transition-all
                  duration-300
                "
              >
                View Projects

                <FaArrowRight
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-2
                  "
                />

              </motion.button>

            </motion.div>

            {/* ================= STATS ================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 50,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.9,
              }}
              className="
                mt-16

                grid
                grid-cols-2
                lg:grid-cols-4

                gap-5
              "
            >
              {stats.map((item, index) => (

                <div
                  key={index}
                  className={`
                    hero-stat
                    group
                    relative
                    overflow-hidden

                    bg-white/10
                    backdrop-blur-2xl

                    border
                    border-green-400/20

                    rounded-3xl
                    p-6

                    shadow-[0_8px_32px_rgba(34,197,94,0.15)]

                    transition-all
                    duration-500

                    hover:border-green-400/60
                    hover:bg-white/[0.15]

                    ${
                      index % 2 === 0
                        ? "hero-stat-up"
                        : "hero-stat-down"
                    }
                  `}
                  style={{
                    animationDelay: `${index * 0.3}s`,
                  }}
                >
                  {/* Card Glow */}

                  <div
                    className="
                      absolute
                      -top-16
                      -right-16

                      w-32
                      h-32

                      bg-green-400/10
                      rounded-full
                      blur-2xl

                      transition-all
                      duration-500

                      group-hover:scale-150
                      group-hover:bg-green-400/20
                    "
                  />

                  {/* Icon */}

                  <div
                    className="
                      relative
                      z-10

                      text-green-400
                      text-xl

                      flex
                      justify-center

                      mb-3

                      transition-transform
                      duration-300

                      group-hover:scale-125
                    "
                  >
                    {item.icon}
                  </div>

                  {/* Value */}

                  <h3
                    className="
                      relative
                      z-10

                      text-green-400

                      text-2xl
                      md:text-3xl

                      font-black
                    "
                  >
                    {item.type === "number" ? (
                      <Counter
                        end={item.value}
                        suffix={item.suffix}
                      />
                    ) : (
                      item.value
                    )}
                  </h3>

                  {/* Label */}

                  <p
                    className="
                      relative
                      z-10
                      text-gray-300
                      mt-2
                      text-sm
                    "
                  >
                    {item.label}
                  </p>

                </div>
              ))}
            </motion.div>

            {/* ================= CONTACT ================= */}

            <motion.a
              href="tel:+919894197412"
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.6,
                delay: 1.1,
              }}
              whileHover={{
                scale: 1.05,
              }}
              className="
                mt-12

                inline-flex
                items-center
                gap-4

                px-6
                py-4

                rounded-2xl

                bg-white/10
                backdrop-blur-xl

                border
                border-white/20

                hover:border-green-400/50
                hover:bg-white/[0.15]

                transition-all
                duration-300
              "
            >
              <span
                className="
                  phone-pulse

                  w-10
                  h-10

                  rounded-full

                  bg-green-500/20

                  flex
                  items-center
                  justify-center
                "
              >
                <FaPhoneAlt className="text-green-400" />
              </span>

              <div className="text-left">

                <p className="text-gray-400 text-xs">
                  Call Us Today
                </p>

                <span className="text-white font-bold">
                  +91 98941 97412
                </span>

              </div>

            </motion.a>

            {/* ================= SCROLL INDICATOR ================= */}

            <div className="mt-14 flex justify-center">

              <button
                onClick={() => scrollToSection("about")}
                aria-label="Scroll to About section"
                className="
                  flex
                  flex-col
                  items-center
                  gap-2

                  text-gray-400

                  hover:text-green-400

                  transition-colors
                "
              >
                <span
                  className="
                    text-[10px]
                    uppercase
                    tracking-[3px]
                  "
                >
                  Explore
                </span>

                <span
                  className="
                    relative

                    w-6
                    h-10

                    border
                    border-white/30

                    rounded-full
                  "
                >
                  <span
                    className="
                      scroll-dot

                      absolute
                      top-2
                      left-1/2

                      w-1
                      h-2

                      -translate-x-1/2

                      bg-green-400
                      rounded-full
                    "
                  />
                </span>

              </button>

            </div>

          </div>
        </div>
      </section>

      {/* ================= CUSTOM ANIMATIONS ================= */}

      <style>{`

        /* BACKGROUND SLOW ZOOM */

        .hero-background {
          animation: heroBackgroundZoom 18s ease-in-out infinite alternate;
        }

        @keyframes heroBackgroundZoom {
          from {
            transform: scale(1.08);
          }

          to {
            transform: scale(1.18);
          }
        }


        /* BACKGROUND GLOW */

        .hero-glow-one {
          animation: heroGlowOne 7s ease-in-out infinite;
        }

        .hero-glow-two {
          animation: heroGlowTwo 9s ease-in-out infinite;
        }

        @keyframes heroGlowOne {
          0%, 100% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(40px, 30px);
          }
        }

        @keyframes heroGlowTwo {
          0%, 100% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(-40px, -25px);
          }
        }


        /* STATS FLOAT */

        .hero-stat-up {
          animation: heroStatUp 5s ease-in-out infinite;
        }

        .hero-stat-down {
          animation: heroStatDown 5.5s ease-in-out infinite;
        }

        @keyframes heroStatUp {
          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes heroStatDown {
          0%, 100% {
            transform: translateY(-6px);
          }

          50% {
            transform: translateY(6px);
          }
        }


        /* PHONE */

        .phone-pulse {
          animation: phonePulse 2s ease-in-out infinite;
        }

        @keyframes phonePulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.25);
          }

          50% {
            transform: scale(1.08);
            box-shadow: 0 0 0 10px rgba(74, 222, 128, 0);
          }
        }


        /* SCROLL INDICATOR */

        .scroll-dot {
          animation: scrollDot 1.8s ease-in-out infinite;
        }

        @keyframes scrollDot {
          0% {
            opacity: 0;
            transform: translate(-50%, 0);
          }

          30% {
            opacity: 1;
          }

          100% {
            opacity: 0;
            transform: translate(-50%, 18px);
          }
        }


        /* REDUCED MOTION */

        @media (prefers-reduced-motion: reduce) {

          .hero-background,
          .hero-glow-one,
          .hero-glow-two,
          .hero-stat-up,
          .hero-stat-down,
          .phone-pulse,
          .scroll-dot {
            animation: none;
          }

        }

      `}</style>
    </>
  );
}

export default Hero;