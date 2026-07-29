import { useEffect, useRef, useState } from "react";

import {
  FaHardHat,
  FaClock,
  FaAward,
  FaUsers,
} from "react-icons/fa";

/* ================= COUNTER ================= */

function Counter({ end, suffix = "+", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [startCounter, setStartCounter] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounter(true);
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
    if (!startCounter) return;

    let startTime = null;
    let animationFrame;

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
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [startCounter, end, duration]);

  return (
    <span ref={counterRef}>
      {count}
      {suffix}
    </span>
  );
}

/* ================= WHY CHOOSE US ================= */

function WhyChooseUs() {
  const features = [
    {
      icon: <FaHardHat />,
      title: "Expert Team",
      desc: "Experienced engineers and skilled professionals dedicated to quality construction.",
    },
    {
      icon: <FaClock />,
      title: "On-Time Delivery",
      desc: "Projects completed within the committed timeline without compromising quality.",
    },
    {
      icon: <FaAward />,
      title: "Quality Assurance",
      desc: "We use premium materials and industry standards to ensure lasting results.",
    },
    {
      icon: <FaUsers />,
      title: "Client Satisfaction",
      desc: "Building trust through transparency, reliability, and exceptional service.",
    },
  ];

  return (
    <>
      <section
        id="whychooseus"
        className="bg-[#02140A] py-24 px-6 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-16">
            <span
              className="
                inline-block
                px-5 py-2
                rounded-full
                bg-white/10
                backdrop-blur-xl
                border border-green-400/20
                text-green-400
              "
            >
              Why Choose Us
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl font-black text-white">
              Why Clients Trust{" "}
              <span className="text-green-400">
                Shivamagi
              </span>
            </h2>

            <p className="mt-5 text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We combine engineering excellence, quality workmanship,
              and customer-focused solutions to deliver projects that
              exceed expectations.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Image */}
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg"
                alt="Construction Team"
                className="
                  w-full
                  h-[450px]
                  md:h-[550px]
                  object-cover
                  rounded-3xl
                  border border-green-400/20
                "
              />

              {/* Experience Card */}
              <div
                className="
                  absolute
                  top-6
                  right-6
                  bg-[#052e16]/80
                  backdrop-blur-2xl
                  border border-green-500/30
                  rounded-3xl
                  px-8 py-6
                  shadow-2xl
                "
              >
                <h3 className="text-4xl md:text-5xl font-black text-green-400">
                  <Counter
                    end={10}
                    suffix="+"
                    duration={2000}
                  />
                </h3>

                <p className="text-white mt-2 font-medium">
                  Years of Excellence
                </p>
              </div>
            </div>

            {/* Right Side */}
            <div className="grid gap-6">

              {features.map((item, index) => (
                <div
                  key={index}
                  className="feature-dance"
                  style={{
                    animationDelay: `${index * 0.25}s`,
                  }}
                >
                  <div
                    className="
                      group
                      bg-white/10
                      backdrop-blur-xl
                      border border-green-400/20
                      rounded-3xl
                      p-6

                      hover:border-green-400/60
                      hover:bg-white/[0.14]
                      hover:scale-[1.02]

                      transition-all
                      duration-300
                    "
                  >
                    <div className="flex gap-5 items-start">

                      {/* Icon */}
                      <div
                        className="
                          w-16 h-16
                          shrink-0
                          rounded-2xl
                          bg-green-500/20

                          flex
                          items-center
                          justify-center

                          text-green-400
                          text-2xl

                          transition-all
                          duration-300

                          group-hover:scale-110
                          group-hover:rotate-6
                          group-hover:bg-green-500/30
                        "
                      >
                        {item.icon}
                      </div>

                      {/* Text */}
                      <div>
                        <h3 className="text-white text-xl font-bold mb-2">
                          {item.title}
                        </h3>

                        <p className="text-gray-300 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>

                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </section>

      {/* ================= ANIMATION CSS ================= */}

      <style>{`

        .feature-dance {
          animation:
            cardEntry 0.8s ease-out both,
            cardDance 4s ease-in-out infinite;
        }

        @keyframes cardEntry {
          0% {
            opacity: 0;
            transform: translateX(80px) scale(0.9);
          }

          70% {
            opacity: 1;
            transform: translateX(-8px) scale(1.02);
          }

          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes cardDance {
          0%, 100% {
            transform: translateY(0);
          }

          25% {
            transform: translateY(-7px) rotate(0.3deg);
          }

          50% {
            transform: translateY(2px);
          }

          75% {
            transform: translateY(-4px) rotate(-0.3deg);
          }
        }

      `}</style>
    </>
  );
}

export default WhyChooseUs;