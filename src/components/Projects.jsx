import { FaMapMarkerAlt } from "react-icons/fa";
import project1 from "../assets/projects/project1.png";
import project3 from "../assets/projects/project3.png";
import project4 from "../assets/projects/project4.png";
import project2 from "../assets/projects/project2.png";
import project5 from "../assets/projects/project5.png";
import project6 from "../assets/projects/project6.png";
import project7 from "../assets/projects/project7.png";
// import project8 from "../assets/projects/project8.png";
import project9 from "../assets/projects/project9.png";
const projects = [
  {
    image:project1,
    title: "Luxury Villa Project",
    location: "Madipakkam-Chennai",
  },
  {
    image:project2,
    title: "Commercial Building",
    location: "Annur-Coimbatore",
  },
  {
    image:project3,
    title: "Modern Housing Project",
    location: "Chennai",
  },
  {
    image:project4,
    title: "Residential Construction",
    location: "Kovilpalayam-Coimbatore",
  },
  {
    image:project5,
    title: "Modern Housing Project",
    location: "Chennai",
  },
  {
    image:project6,
    title: "Luxury Independent House",
    location: "Chittalapakkaam-Chennai",
  },
  {
    image:project7,
    title:"Independent House",
    location: "Chennai",
  },
  
  {
    image:project9,
    title: "Modern Housing Project",
    location: "Coimbatore",
    
  },
];

function Projects() {
  return (
    <section
      id="projects"
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
            Our Projects
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-black text-white">
            Featured
            <span className="text-green-400"> Projects</span>
          </h2>

          <p className="mt-5 text-gray-300 max-w-2xl mx-auto">
            Delivering excellence across Chennai and Coimbatore
            through innovative construction solutions.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border border-green-400/20
              bg-white/10
              backdrop-blur-xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="
                w-full
                h-[350px]
                object-cover
                transition-all
                duration-500
                group-hover:scale-110"
              />

              {/* Overlay */}
              <div
                className="
                absolute inset-0
                bg-gradient-to-t
                from-black
                via-black/40
                to-transparent"
              ></div>

              {/* Content */}
              <div className="absolute bottom-0 p-6">
                <h3 className="text-white text-2xl font-bold">
                  {project.title}
                </h3>

                <div className="flex items-center gap-2 mt-2">
                  <FaMapMarkerAlt className="text-green-400" />

                  <span className="text-gray-300">
                    {project.location}
                  </span>
                </div>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;