import { useState } from "react";
import {
  FaHardHat,
  FaDraftingCompass,
  FaBuilding,
  FaLayerGroup,
  FaPaintRoller,
} from "react-icons/fa";

import sitework1 from "../assets/siteworks/sitework1.png";
import sitework2 from "../assets/siteworks/sitework2.png";
import sitework3 from "../assets/siteworks/sitework3.png";
import sitework4 from "../assets/siteworks/sitework4.png";
import sitework5 from "../assets/siteworks/sitework5.png";
import sitework6 from "../assets/siteworks/sitework6.png";

const siteworks = [
  {
    image: sitework1,
    number: "01",
    title: "Brick Work in Progress",
    description: "Wall construction with quality materials",
    category: "Brick Work",
  },
  {
    image: sitework2,
    number: "02",
    title: "Foundation Work",
    description: "Strong foundation for a solid structure",
    category: "Foundation",
  },
  {
    image: sitework3,
    number: "03",
    title: "Concrete Work",
    description: "High quality concrete for durability",
    category: "Foundation",
  },
  {
    image: sitework4,
    number: "04",
    title: "Concrete Work",
    description: "High quality concrete for durability",
    category: "Foundation",
  },
  {
    image: sitework5,
    number: "05",
    title: "Basement Work",
    description: "Strong base for structural stability",
    category: "Foundation",
  },
  {
    image: sitework6,
    number: "06",
    title: "Industrial Structure Work",
description: "Steel structure construction for industrial buildings",
category: "Structural Work",
  }
];

const filters = [
  {
    name: "All Works",
    icon: <FaBuilding />,
  },
//   {
//     name: "Foundation",
//     icon: <FaDraftingCompass />,
//   },
//   {
//     name: "RCC Work",
//     icon: <FaLayerGroup />,
//   },
//   {
//     name: "Brick Work",
//     icon: <FaBuilding />,
//   },
//   {
//     name: "Finishing",
//     icon: <FaPaintRoller />,
//   },
];

function SiteWorks() {
  const [activeFilter, setActiveFilter] = useState("All Works");

  const filteredWorks =
    activeFilter === "All Works"
      ? siteworks
      : siteworks.filter(
          (work) => work.category === activeFilter
        );

  return (
    <section
      id="site-works"
      className="
        relative
        scroll-mt-28
        bg-[#02140A]
        py-24
        px-5
        overflow-hidden
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[700px]
          h-[400px]
          bg-green-400/5
          blur-[140px]
          rounded-full
          pointer-events-none
        "
      />

      <div className="relative max-w-[1400px] mx-auto">

        {/* =========================
            HEADING
        ========================== */}

        <div className="text-center mb-10">

          {/* Badge */}
          <span
            className="
              inline-flex
              items-center
              gap-3
              px-6
              py-2.5
              rounded-full
              border
              border-green-400/60
              bg-green-400/5
              text-green-400
              font-bold
              uppercase
              tracking-wider
            "
          >
            <FaHardHat />

            Site Works
          </span>

          {/* Title */}
          <h2
            className="
              mt-5
              text-4xl
              md:text-5xl
              lg:text-6xl
              font-black
              text-white
              leading-tight
            "
          >
            Building With{" "}
            <span className="text-green-400">
              Precision
            </span>
          </h2>

          {/* Small line */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="w-10 h-[2px] bg-green-400" />
            <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
          </div>

          {/* Description */}
          <p
            className="
              mt-4
              text-gray-400
              text-base
              md:text-lg
              max-w-xl
              mx-auto
              leading-7
            "
          >
            A glimpse of our on-site construction activities
            <br className="hidden md:block" />
            from foundation to finish.
          </p>

        </div>

        {/* =========================
            FILTER BUTTONS
        ========================== */}

        <div
          className="
            grid
            grid-cols-2
            md:grid-cols-3
            lg:grid-cols-5
            gap-4
            mb-8
          "
        >
          {filters.map((filter) => (

            <button
              key={filter.name}
              onClick={() => setActiveFilter(filter.name)}
              className={`
                flex
                items-center
                justify-center
                gap-3
                py-4
                px-4
                rounded-xl
                border
                font-semibold
                transition-all
                duration-300

                ${
                  activeFilter === filter.name
                    ? `
                      border-green-400
                      bg-green-400/10
                      text-green-400
                    `
                    : `
                      border-white/20
                      bg-white/[0.02]
                      text-white
                      hover:border-green-400/50
                      hover:text-green-400
                    `
                }
              `}
            >

              <span className="text-xl">
                {filter.icon}
              </span>

              <span>
                {filter.name}
              </span>

            </button>

          ))}
        </div>

        {/* =========================
            GALLERY
        ========================== */}

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-3
          "
        >

          {filteredWorks.map((work) => (

            <div
              key={work.number}
              className="
                group
                relative
                h-[320px]
                overflow-hidden
                rounded-2xl
                border
                border-green-400/30
                bg-[#071A10]
              "
            >

              {/* Image */}

              <img
                src={work.image}
                alt={work.title}
                className="
                  w-full
                  h-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />

              {/* Image gradient */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/90
                  via-black/10
                  to-transparent
                "
              />

              {/* Bottom Glass Content */}

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  flex
                  items-center
                  gap-4
                  p-4
                  bg-black/65
                  backdrop-blur-md
                  border-t
                  border-white/10
                "
              >

                {/* Number */}

                <div
                  className="
                    flex
                    items-center
                    justify-center
                    min-w-[52px]
                    h-[52px]
                    rounded-xl
                    bg-green-400/5
                    border
                    border-green-400/30
                    text-green-400
                    text-xl
                    font-black
                  "
                >
                  {work.number}
                </div>

                {/* Content */}

                <div>

                  <h3
                    className="
                      text-white
                      text-lg
                      font-bold
                      group-hover:text-green-400
                      transition-colors
                      duration-300
                    "
                  >
                    {work.title}
                  </h3>

                  <p
                    className="
                      mt-1
                      text-gray-400
                      text-sm
                    "
                  >
                    {work.description}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* Empty Filter */}

        {filteredWorks.length === 0 && (

          <div
            className="
              text-center
              py-20
              rounded-2xl
              border
              border-green-400/20
              bg-white/[0.02]
            "
          >

            <FaHardHat
              className="
                mx-auto
                text-4xl
                text-green-400/40
              "
            />

            <p className="mt-4 text-gray-400">
              More site work images coming soon.
            </p>

          </div>

        )}

      </div>
    </section>
  );
}

export default SiteWorks;