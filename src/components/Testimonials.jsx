import { useEffect, useRef } from "react";
import {
  FaStar,
  FaQuoteRight,
  FaMapMarkerAlt,
} from "react-icons/fa";

const testimonials = [
  {
    name: "Ramesh Kumar",
    location: "Chennai",
    project: "Residential Construction",
    initials: "RK",
    rating: 5,
    review:
      "Excellent workmanship and timely project completion. The team maintained clear communication throughout the project.",
  },
  {
    name: "Suresh",
    location: "Coimbatore",
    project: "Villa Construction",
    initials: "S",
    rating: 5,
    review:
      "Professional team with great attention to detail. The quality of construction exceeded our expectations.",
  },
  {
    name: "Prakash",
    location: "Chennai",
    project: "Commercial Construction",
    initials: "P",
    rating: 5,
    review:
      "Very reliable contractors. Transparent communication and excellent project management from start to completion.",
  },
  {
    name: "Arun Kumar",
    location: "Coimbatore",
    project: "Residential Project",
    initials: "AK",
    rating: 5,
    review:
      "The team handled our project professionally and delivered excellent quality within the expected timeline.",
  },
  {
    name: "Vignesh",
    location: "Chennai",
    project: "Home Construction",
    initials: "V",
    rating: 5,
    review:
      "Great experience working with the team. Communication was clear and the overall construction quality was excellent.",
  },
  {
    name: "Senthil",
    location: "Coimbatore",
    project: "Commercial Project",
    initials: "S",
    rating: 5,
    review:
      "Professional service, good workmanship, and proper project coordination from planning to completion.",
  },
];

function Testimonials() {
  const sliderRef = useRef(null);

  const isPaused = useRef(false);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);

  // Duplicate cards for infinite scrolling
  const duplicatedTestimonials = [
    ...testimonials,
    ...testimonials,
  ];

  /* ==========================================
     AUTO SCROLL
  ========================================== */

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    let animationFrameId;

    const autoScroll = () => {
      if (!isPaused.current && !isDragging.current) {
        slider.scrollLeft += 0.5;

        const halfWidth = slider.scrollWidth / 2;

        if (slider.scrollLeft >= halfWidth) {
          slider.scrollLeft -= halfWidth;
        }
      }

      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  /* ==========================================
     MOUSE DRAG
  ========================================== */

  const handleMouseDown = (e) => {
    const slider = sliderRef.current;

    if (!slider) return;

    isDragging.current = true;
    isPaused.current = true;

    startX.current = e.pageX;
    startScrollLeft.current = slider.scrollLeft;
  };

  const handleMouseMove = (e) => {
    const slider = sliderRef.current;

    if (!slider || !isDragging.current) return;

    e.preventDefault();

    const moveX = e.pageX - startX.current;

    slider.scrollLeft =
      startScrollLeft.current - moveX;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    isPaused.current = false;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
    isPaused.current = false;
  };

  return (
    <section
      id="testimonials"
      className="
        relative
        bg-[#02140A]
        py-24
        overflow-hidden
      "
    >
      <div className="max-w-7xl mx-auto">

        {/* ==========================================
            HEADING
        ========================================== */}

        <div className="text-center mb-16 px-6">

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
              text-sm
              font-semibold
            "
          >
            Testimonials
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
            What Our{" "}

            <span className="text-green-400">
              Clients Say
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
            Customer satisfaction is at the heart of
            everything we build. See what our clients say
            about their experience with Shivamagi.
          </p>

        </div>

        {/* ==========================================
            SLIDER WRAPPER
        ========================================== */}

        <div className="relative">

          {/* LEFT FADE */}

          <div
            className="
              hidden
              md:block
              absolute
              left-0
              top-0
              bottom-0
              w-20
              bg-gradient-to-r
              from-[#02140A]
              to-transparent
              z-20
              pointer-events-none
            "
          />

          {/* RIGHT FADE */}

          <div
            className="
              hidden
              md:block
              absolute
              right-0
              top-0
              bottom-0
              w-20
              bg-gradient-to-l
              from-[#02140A]
              to-transparent
              z-20
              pointer-events-none
            "
          />

          {/* ==========================================
              AUTO SCROLL CONTAINER
          ========================================== */}

          <div
            ref={sliderRef}

            onMouseEnter={() => {
              isPaused.current = true;
            }}

            onMouseLeave={handleMouseLeave}

            onMouseDown={handleMouseDown}

            onMouseMove={handleMouseMove}

            onMouseUp={handleMouseUp}

            className="
              flex
              gap-6

              overflow-x-auto

              px-6
              pb-6

              cursor-grab
              active:cursor-grabbing

              select-none

              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >

            {duplicatedTestimonials.map(
              (item, index) => (

                /* ==========================================
                    TESTIMONIAL CARD
                ========================================== */

                <div
                  key={`${item.name}-${index}`}
                  className="
                    group
                    relative

                    flex-none

                    w-[85vw]
                    sm:w-[420px]
                    lg:w-[390px]

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

                    hover:bg-white/[0.12]
                    hover:border-green-400/50
                    hover:-translate-y-2

                    hover:shadow-2xl
                  "
                >

                  {/* Decorative Glow */}

                  <div
                    className="
                      absolute
                      -top-20
                      -right-20

                      w-40
                      h-40

                      bg-green-400/10
                      rounded-full
                      blur-3xl

                      transition-all
                      duration-500

                      group-hover:bg-green-400/20
                    "
                  />

                  {/* Quote Icon */}

                  <FaQuoteRight
                    className="
                      absolute
                      top-7
                      right-7

                      text-5xl
                      text-green-400/10

                      transition-all
                      duration-500

                      group-hover:text-green-400/20
                      group-hover:scale-110
                    "
                  />

                  {/* ==========================================
                      STARS
                  ========================================== */}

                  <div
                    className="
                      relative
                      z-10

                      flex
                      items-center
                      gap-1

                      text-yellow-400
                      mb-6
                    "
                  >
                    {[...Array(item.rating)].map(
                      (_, starIndex) => (
                        <FaStar key={starIndex} />
                      )
                    )}
                  </div>

                  {/* ==========================================
                      REVIEW
                  ========================================== */}

                  <p
                    className="
                      relative
                      z-10

                      text-gray-300
                      leading-relaxed

                      mb-8
                    "
                  >
                    &ldquo;{item.review}&rdquo;
                  </p>

                  {/* ==========================================
                      CLIENT INFORMATION
                  ========================================== */}

                  <div
                    className="
                      relative
                      z-10

                      flex
                      items-center
                      gap-4

                      mt-auto
                    "
                  >

                    {/* Avatar */}

                    <div
                      className="
                        w-14
                        h-14

                        shrink-0

                        rounded-full

                        bg-green-500/20

                        border
                        border-green-400/30

                        flex
                        items-center
                        justify-center

                        text-green-400
                        font-black
                        text-lg

                        transition-all
                        duration-300

                        group-hover:scale-110
                        group-hover:bg-green-500/30
                      "
                    >
                      {item.initials}
                    </div>

                    {/* Name */}

                    <div>

                      <h4
                        className="
                          text-white
                          font-bold
                          text-lg
                        "
                      >
                        {item.name}
                      </h4>

                      <p
                        className="
                          text-green-400
                          text-sm
                          font-medium
                          mt-1
                        "
                      >
                        {item.project}
                      </p>

                      <div
                        className="
                          flex
                          items-center
                          gap-1.5

                          text-gray-400
                          text-xs
                          mt-1
                        "
                      >
                        <FaMapMarkerAlt />

                        <span>
                          {item.location}
                        </span>
                      </div>

                    </div>

                  </div>

                </div>
              )
            )}

          </div>

        </div>

        {/* ==========================================
            BOTTOM TEXT
        ========================================== */}

        <div className="text-center mt-8">

          <p className="text-gray-500 text-sm">
            Hover to pause • Drag or swipe to explore
          </p>

        </div>

      </div>
    </section>
  );
}

export default Testimonials;