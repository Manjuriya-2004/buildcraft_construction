import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

function FAQ() {
  const faqs = [
    {
      question: "What types of construction services do you provide?",
      answer:
        "We provide residential construction, commercial construction, engineering works, renovation services, project planning, and contracting solutions.",
    },
    {
      question: "Do you undertake projects outside Chennai?",
      answer:
        "Yes. We have successfully completed projects in Chennai and Coimbatore and are open to projects across Tamil Nadu.",
    },
    {
      question: "How do I get a project quotation?",
      answer:
        "You can contact us through phone, email, or the contact form. We will analyze your requirements and provide a detailed quotation.",
    },
    {
      question: "Do you provide renovation services?",
      answer:
        "Yes. We undertake renovation, remodeling, and structural improvement projects.",
    },
    {
      question: "How long does a project usually take?",
      answer:
        "Project duration depends on the scope and size of the project. We always strive for timely delivery without compromising quality.",
    },
  ];

  const [active, setActive] = useState(null);

  return (
    <section
      id="faq"
      className="bg-[#02140A] py-24 px-6"
    >
      <div className="max-w-4xl mx-auto">

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
            FAQ
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-black text-white">
            Frequently Asked Questions
          </h2>

          <p className="mt-5 text-gray-300">
            Find answers to the most common questions about our services.
          </p>
        </div>

        <div className="space-y-5">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="
              bg-white/10
              backdrop-blur-xl
              border border-green-400/20
              rounded-3xl
              overflow-hidden"
            >
              <button
                onClick={() =>
                  setActive(active === index ? null : index)
                }
                className="
                w-full
                flex
                items-center
                justify-between
                p-6
                text-left"
              >
                <span className="text-white font-semibold">
                  {faq.question}
                </span>

                <FaChevronDown
                  className={`text-green-400 transition-transform ${
                    active === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {active === index && (
                <div className="px-6 pb-6 text-gray-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default FAQ;