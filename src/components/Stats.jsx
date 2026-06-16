
import CountUp from "react-countup";
import {
  FaBuilding,
  FaSmile,
  FaMapMarkerAlt,
  FaAward,
} from "react-icons/fa";

function Stats() {
  const stats = [
    {
      icon: <FaBuilding />,
      number: 50,
      suffix: "+",
      title: "Projects Completed",
    },
    {
      icon: <FaSmile />,
      number: 100,
      suffix:"+",
      title: "Happy Clients",
    },
    {
      icon: <FaAward />,
      number: 20,
      suffix:"+",
      title: "Years Commitment",
    },
    {
      icon: <FaMapMarkerAlt />,
      number: 2,
      suffix:"+",
      title: "Cities Served",
    },
  ];

  return (
    <section
      id="stats"
      className="bg-[#02140A] py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

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
            Company Statistics
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-black text-white">
            Our Achievements
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <div
              key={index}
              className="
              bg-white/10
              backdrop-blur-xl
              border border-green-400/20
              rounded-3xl
              p-8
              text-center
              hover:border-green-400/50
              hover:-translate-y-2
              transition-all"
            >
              <div
                className="
                w-16 h-16
                mx-auto
                rounded-2xl
                bg-green-500/20
                flex
                items-center
                justify-center
                text-green-400
                text-3xl
                mb-5"
              >
                {item.icon}
              </div>

              <h3 className="text-5xl font-black text-green-400">
                {item.number}
              </h3>

              <p className="text-gray-300 mt-3">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Stats;