import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Ramesh Kumar",
    location: "Chennai",
    review:
      "Excellent workmanship and timely project completion. Highly recommended for residential construction.",
  },
  {
    name: "Suresh",
    location: "Coimbatore",
    review:
      "Professional team with great attention to detail. The quality of construction exceeded our expectations.",
  },
  {
    name: "Prakash",
    location: "Chennai",
    review:
      "Very reliable contractors. Transparent communication and excellent project management.",
  },
];

function Testimonials() {
  return (
    <section
      id="testimonials"
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
            Testimonials
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-black text-white">
            What Our Clients Say
          </h2>

          <p className="mt-5 text-gray-300 max-w-2xl mx-auto">
            Customer satisfaction is at the heart of everything we build.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="
              bg-white/10
              backdrop-blur-xl
              border border-green-400/20
              rounded-3xl
              p-8
              hover:border-green-400/50
              hover:-translate-y-2
              transition-all"
            >
              {/* Stars */}
              <div className="flex gap-1 text-yellow-400 mb-5">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">
                "{item.review}"
              </p>

              <div>
                <h4 className="text-white font-bold text-lg">
                  {item.name}
                </h4>

                <p className="text-green-400 text-sm">
                  {item.location}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;