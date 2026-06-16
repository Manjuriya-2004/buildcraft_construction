import {
  FaHardHat,
  FaClock,
  FaAward,
  FaUsers,
} from "react-icons/fa";

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
    <section
      id="whychooseus"
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
            Why Choose Us
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-black text-white">
            Why Clients Trust
            <span className="text-green-400">
              {" "}Shivamagi
            </span>
          </h2>

          <p className="mt-5 text-gray-300 max-w-3xl mx-auto">
            We combine engineering excellence, quality workmanship,
            and customer-focused solutions to deliver projects
            that exceed expectations.
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Image */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg"
              alt="Construction Team"
              className="
              w-full
              h-[550px]
              object-cover
              rounded-3xl
              border border-green-400/20"
            />

            {/* Floating Experience Card */}
            <div
              className="
              absolute
              top-6
              right-6
              bg-[#052e16]/80
              backdrop-blur-2xl
              border border-green-500/30
              rounded-3xl
              px-8 py-6"
            >
              <h3 className="text-4xl font-black text-green-400">
                10+
              </h3>

              <p className="text-white">
                Years of Commitment
              </p>
            </div>
          </div>

          {/* Right Cards */}
          <div className="grid gap-6">

            {features.map((item, index) => (
              <div
                key={index}
                className="
                bg-white/10
                backdrop-blur-xl
                border border-green-400/20
                rounded-3xl
                p-6
                hover:border-green-400/50
                transition-all"
              >
                <div className="flex gap-5">

                  <div
                    className="
                    w-16 h-16
                    rounded-2xl
                    bg-green-500/20
                    flex items-center
                    justify-center
                    text-green-400
                    text-2xl"
                  >
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="text-white text-xl font-bold mb-2">
                      {item.title}
                    </h3>

                    <p className="text-gray-300">
                      {item.desc}
                    </p>
                  </div>

                </div>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;