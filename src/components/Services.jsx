import {
  FaHome,
  FaBuilding,
  FaHardHat,
  FaTools,
  FaDraftingCompass,
  FaHandshake,
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
    <section
      id="services"
      className="bg-[#02140A] py-24 px-6"
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
            Our Services
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-black text-white">
            What We
            <span className="text-green-400"> Offer</span>
          </h2>

          <p className="mt-5 text-gray-300 max-w-2xl mx-auto">
            Delivering comprehensive construction, engineering, and project
            management solutions with quality, efficiency, and professionalism.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="
              group
              bg-white/10
              backdrop-blur-xl
              border border-green-400/20
              rounded-3xl
              p-8
              hover:border-green-400/50
              hover:-translate-y-2
              transition-all
              duration-300"
            >
              <div
                className="
                w-16 h-16
                rounded-2xl
                bg-green-500/20
                flex items-center justify-center
                text-green-400
                text-3xl
                mb-6"
              >
                {service.icon}
              </div>

              <h3 className="text-white text-2xl font-bold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-300 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;