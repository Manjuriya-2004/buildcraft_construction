import {
  FaHome,
  FaBuilding,
  FaHardHat,
  FaTools,
  FaDraftingCompass,
  FaHandshake,
  FaArrowRight,
} from "react-icons/fa";

const services = [
  {
    icon: <FaHome />,
    title: "Design-Build Solutions",
    desc: "Comprehensive design-build services from concept planning to project completion under one roof.",
  },
  {
    icon: <FaBuilding />,
    title: "Residential Construction",
    desc: "New residential construction and remodeling services tailored to your lifestyle and needs.",
  },
  {
    icon: <FaHardHat />,
    title: "Commercial Construction",
    desc: "Commercial, factory, and warehouse construction delivered with quality, efficiency, and safety.",
  },
  {
    icon: <FaTools />,
    title: "General Contracting",
    desc: "Expert general contracting services ensuring smooth execution and successful project delivery.",
  },
  {
    icon: <FaDraftingCompass />,
    title: "Construction Management",
    desc: "Strategic construction management for effective planning, coordination, and project control.",
  },
  {
    icon: <FaHandshake />,
    title: "Cost Analysis & Estimation",
    desc: "Detailed cost analysis and accurate project estimation to support informed decision-making.",
  },
];

function Services() {
  return (
    <>
      <section
        id="services"
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
            w-[600px]
            h-[600px]
            bg-green-500/[0.05]
            rounded-full
            blur-[120px]
            pointer-events-none
          "
        />

        <div className="relative z-10 max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-20">

            <span
              className="
                inline-block
                px-5 py-2
                rounded-full
                bg-white/10
                backdrop-blur-xl
                border border-green-400/20
                text-green-400
                text-sm
                font-semibold
              "
            >
              Our Services
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
              What We
              <span className="text-green-400">
                {" "}Offer
              </span>
            </h2>

            <p
              className="
                mt-5
                text-gray-300
                max-w-2xl
                mx-auto
                leading-relaxed
              "
            >
              Delivering comprehensive construction, engineering,
              and project management solutions with quality,
              efficiency, and professionalism.
            </p>
          </div>

          {/* Services Grid */}
          <div
            className="
              grid
              md:grid-cols-2
              lg:grid-cols-3
              gap-8
            "
          >
            {services.map((service, index) => (
              /*
                Outer wrapper handles floating animation.
                Inner card handles hover animation.
                Keeping these separate avoids transform conflicts.
              */
              <div
                key={index}
                className={`service-float ${
                  index % 2 === 0
                    ? "service-float-up"
                    : "service-float-down"
                }`}
                style={{
                  animationDelay: `${index * 0.35}s`,
                }}
              >

                <div
                  className="
                    service-card
                    group
                    relative
                    h-full
                    min-h-[330px]
                    bg-white/[0.08]
                    backdrop-blur-xl
                    border
                    border-green-400/20
                    rounded-3xl
                    p-8
                    overflow-hidden

                    transition-all
                    duration-500

                    hover:-translate-y-3
                    hover:border-green-400/60
                    hover:bg-white/[0.12]
                    hover:shadow-2xl
                  "
                >

                  {/* Top Line */}
                  <div
                    className="
                      absolute
                      top-0
                      left-1/2
                      -translate-x-1/2

                      w-0
                      h-[2px]

                      bg-green-400

                      transition-all
                      duration-500

                      group-hover:w-2/3
                    "
                  />

                  {/* Glow */}
                  <div
                    className="
                      absolute
                      -top-24
                      -right-24

                      w-48
                      h-48

                      rounded-full
                      bg-green-400/10
                      blur-3xl

                      transition-all
                      duration-500

                      group-hover:bg-green-400/20
                      group-hover:scale-150
                    "
                  />

                  {/* Service Number */}
                  <span
                    className="
                      absolute
                      top-4
                      right-6

                      text-7xl
                      font-black
                      text-white/[0.03]

                      transition-all
                      duration-500

                      group-hover:text-green-400/[0.08]
                      group-hover:scale-110
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Icon */}
                  <div
                    className="
                      relative
                      z-10

                      w-16
                      h-16

                      rounded-2xl

                      bg-green-500/20
                      border
                      border-green-400/20

                      flex
                      items-center
                      justify-center

                      text-green-400
                      text-3xl

                      mb-6

                      transition-all
                      duration-500

                      group-hover:scale-110
                      group-hover:-rotate-6
                      group-hover:bg-green-500/30
                      group-hover:border-green-400/50
                    "
                  >
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3
                    className="
                      relative
                      z-10

                      text-white
                      text-2xl
                      font-bold

                      mb-4

                      transition-colors
                      duration-300

                      group-hover:text-green-400
                    "
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      relative
                      z-10

                      text-gray-300
                      leading-relaxed
                    "
                  >
                    {service.desc}
                  </p>

                  {/* Bottom */}
                  <div
                    className="
                      relative
                      z-10

                      flex
                      items-center
                      gap-2

                      mt-7

                      text-green-400
                      text-sm
                      font-semibold

                      opacity-70

                      transition-all
                      duration-300

                      group-hover:opacity-100
                      group-hover:gap-4
                    "
                  >
                    <span>Learn More</span>

                    <FaArrowRight
                      className="
                        text-xs
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />
                  </div>

                  {/* Shine */}
                  <div
                    className="
                      service-shine
                      absolute
                      top-0
                      -left-[150%]

                      w-[80%]
                      h-full

                      pointer-events-none
                    "
                  />

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Animations */}
      <style>{`

        /* ==========================
           FLOATING
        ========================== */

        .service-float-up {
          animation: serviceFloatUp 5s ease-in-out infinite;
        }

        .service-float-down {
          animation: serviceFloatDown 5.5s ease-in-out infinite;
        }

        @keyframes serviceFloatUp {

          0%,
          100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-12px);
          }
        }

        @keyframes serviceFloatDown {

          0%,
          100% {
            transform: translateY(-8px);
          }

          50% {
            transform: translateY(8px);
          }
        }


        /* ==========================
           CARD SHINE
        ========================== */

        .service-shine {
          transform: skewX(-20deg);

          background: linear-gradient(
            90deg,
            transparent,
            rgba(74, 222, 128, 0.08),
            rgba(255, 255, 255, 0.12),
            transparent
          );

          transition: left 0.8s ease;
        }

        .service-card:hover .service-shine {
          left: 150%;
        }


        /* ==========================
           MOBILE
        ========================== */

        @media (max-width: 768px) {

          .service-float-up,
          .service-float-down {
            animation-duration: 6s;
          }

        }


        /* ==========================
           ACCESSIBILITY
        ========================== */

        @media (prefers-reduced-motion: reduce) {

          .service-float-up,
          .service-float-down {
            animation: none;
          }

          .service-shine {
            display: none;
          }

        }

      `}</style>
    </>
  );
}

export default Services;