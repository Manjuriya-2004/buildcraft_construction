import { useEffect, useRef, useState } from "react";
import {
  FaBuilding,
  FaSmile,
  FaMapMarkerAlt,
  FaAward,
} from "react-icons/fa";

function Counter({ end, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const counterRef = useRef(null);

  // Start animation when counter comes into screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Counter animation
  useEffect(() => {
    if (!started) return;

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
  }, [started, end, duration]);

  return (
    <span ref={counterRef}>
      {count}
      {suffix}
    </span>
  );
}

function Stats() {
  const stats = [
    {
      icon: <FaBuilding />,
      number: 50,
      suffix: "+",
      title: "Projects Delivered",
      description: "Residential & Commercial",
    },
    {
      icon: <FaSmile />,
      number: 100,
      suffix: "+",
      title: "Satisfied Clients",
      description: "Built on Trust & Quality",
    },
    {
      icon: <FaAward />,
      number: 20,
      suffix: "+",
      title: "Years of Excellence",
      description: "Experience You Can Trust",
    },
    {
      icon: <FaMapMarkerAlt />,
      number: 2,
      suffix: "",
      title: "Cities We Serve",
      description: "Chennai & Coimbatore",
    },
  ];

  return (
    <section
      id="stats"
      className="bg-[#02140A] py-24 px-6"
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
              font-medium
            "
          >
            Company Statistics
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
            Our Achievements
          </h2>

          <p
            className="
              mt-4
              text-gray-400
              max-w-2xl
              mx-auto
            "
          >
            Building trust through quality construction,
            professional craftsmanship, and years of industry
            experience.
          </p>
        </div>

        {/* Cards */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-8
          "
        >
          {stats.map((item, index) => (
            <div
              key={index}
              className="
                group
                bg-white/10
                backdrop-blur-xl
                border border-green-400/20
                rounded-3xl
                p-8
                text-center
                transition-all
                duration-500

                hover:-translate-y-2
                hover:border-green-400/50
                hover:bg-white/[0.13]
              "
            >

              {/* Icon */}
              <div
                className="
                  w-16 h-16
                  mx-auto
                  rounded-2xl
                  bg-green-500/20
                  border border-green-400/20

                  flex
                  items-center
                  justify-center

                  text-green-400
                  text-3xl

                  mb-6

                  transition-all
                  duration-500

                  group-hover:scale-110
                  group-hover:bg-green-500/30
                "
              >
                {item.icon}
              </div>

              {/* Counter */}
              <h3
                className="
                  text-5xl
                  font-black
                  text-green-400
                "
              >
                <Counter
                  end={item.number}
                  suffix={item.suffix}
                  duration={2000}
                />
              </h3>

              {/* Title */}
              <h4
                className="
                  text-white
                  text-lg
                  font-bold
                  mt-4
                "
              >
                {item.title}
              </h4>

              {/* Description */}
              <p
                className="
                  text-gray-400
                  text-sm
                  mt-2
                "
              >
                {item.description}
              </p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;