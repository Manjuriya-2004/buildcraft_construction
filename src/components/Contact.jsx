import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
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
            Contact Us
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-black text-white">
            Get In Touch
          </h2>

          <p className="mt-5 text-gray-300">
            Let's discuss your next construction project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left Side */}
          <div
            className="
            bg-white/10
            backdrop-blur-xl
            border border-green-400/20
            rounded-3xl
            p-8"
          >
            <h3 className="text-3xl font-bold text-white mb-8">
              Contact Information
            </h3>

            <div className="space-y-8">

              <div className="flex gap-5">
                <FaPhoneAlt className="text-green-400 text-2xl mt-1" />

                <div>
                  <h4 className="text-white font-semibold">
                    Phone Number
                  </h4>

                  <p className="text-gray-300">
                    +91 98941 97412
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <FaEnvelope className="text-green-400 text-2xl mt-1" />

                <div>
                  <h4 className="text-white font-semibold">
                    Email Address
                  </h4>

                  <p className="text-gray-300 break-all">
                    shivamagiconstruction@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <FaMapMarkerAlt className="text-green-400 text-2xl mt-1" />

                <div>
                  <h4 className="text-white font-semibold">
                    Office Address
                  </h4>

                  <p className="text-gray-300">
                    No. 5/23, 4th Street,
                    <br />
                    Jyothi Nagar,
                    Chitlapakkam,
                    Chennai - 600064
                  </p>
                </div>
              </div>

            </div>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/919894197412"
              target="_blank"
              rel="noreferrer"
              className="
              mt-10
              inline-flex
              items-center
              gap-3
              bg-green-600
              hover:bg-green-700
              text-white
              px-6
              py-4
              rounded-2xl
              font-semibold
              transition-all"
            >
              <FaWhatsapp />
              WhatsApp Us
            </a>
          </div>

          {/* Right Side Form */}
          <div
            className="
            bg-white/10
            backdrop-blur-xl
            border border-green-400/20
            rounded-3xl
            p-8"
          >
            <h3 className="text-3xl font-bold text-white mb-8">
              Send Enquiry
            </h3>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="
                w-full
                p-4
                rounded-2xl
                bg-black/20
                border border-green-400/20
                text-white
                outline-none"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="
                w-full
                p-4
                rounded-2xl
                bg-black/20
                border border-green-400/20
                text-white
                outline-none"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="
                w-full
                p-4
                rounded-2xl
                bg-black/20
                border border-green-400/20
                text-white
                outline-none"
              />

              <textarea
                rows="5"
                placeholder="Project Details"
                className="
                w-full
                p-4
                rounded-2xl
                bg-black/20
                border border-green-400/20
                text-white
                outline-none"
              ></textarea>

              <button
                type="submit"
                className="
                w-full
                bg-green-600
                hover:bg-green-700
                text-white
                py-4
                rounded-2xl
                font-semibold
                transition-all"
              >
                Send Enquiry
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;