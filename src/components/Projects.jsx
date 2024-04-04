import mitchell from "../assets/Mitchell-and-associates-website.png";
import lavie from "../assets/lavie-juices-and-smoothies-website.png";
import countries from "../assets/the-countries-website.png";
import { LuExternalLink } from "react-icons/lu";

const projects = [
  {
    name: "Lavie Juices and Smoothies Website",
    description:
      "This is a website I created for a juice and smoothies startup called Lavie. I built it with React and some libraries like React Router Dom. I first designed it in Figma and then developed it afterwards. I used useContext and useReducer hooks to manage my states in one component.",
    link: "https://lavie-fruit-juices-and-smoothies-website.onrender.com/",
    image: lavie,
    techUsed: ["React", "CSS", "React Router Dom", "Figma", "React Icons"],
  },
  {
    name: "Mitchell And Associates Website",
    description:
      "I created this website for a fictional law firm called Mitchell and Associates. I used only HTML and CSS to develop this website. This project made me realize that a lot could be achieved using just HTML and CSS.",
    link: "https://kworlanyo.github.io/Mitchell-And-Associates-Law-Firm-Website/",
    image: mitchell,
    techUsed: ["HTML", "CSS"],
  },
  {
    name: "The Countries Website",
    description:
      "This website makes it possible to search for countries and see their flags and other details. I created this website in a way that the user can either scroll through a list of countries or input the name of the country in an input field and search for it. I built the website with react and styled with vanilla css.",
    link: "https://the-countries-website.onrender.com/",
    image: countries,
    techUsed: ["React", "CSS"],
  },
];

function Projects() {
  return (
    <section
      className="w-full py-16 md:py-20 2xl:py-24"
      id="projects"
      style={{
        background:
          "radial-gradient(farthest-corner at 1600px 1200px, rgb(39, 51, 83) 0%, rgb(3, 7, 18) 67%)",
      }}
    >
      <div className="flex flex-col w-full gap-6 px-4 mx-auto max-w-7xl md:gap-12 md:px-8">
        <div className="flex flex-col items-center gap-4">
          <div className="self-center">
            <div className="flex items-center justify-center px-5 py-1 bg-gray-200 rounded-xl">
              <h2 className="text-sm font-medium text-normal">Projects</h2>
            </div>
          </div>
          <p className="max-w-xl text-lg text-center text-gray-100 text-normal md:text-xl">
            Some of my projects are below:
          </p>
        </div>
        {projects.map((project, i) => {
          return (
            <div
              key={project.link}
              className="flex flex-col w-full max-w-6xl mx-auto overflow-hidden bg-[#1F2937] text-gray-100 shadow-md rounded-xl dark:shadow-2xl md:flex-row"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div
                className={
                  i % 2 === 0
                    ? "flex items-center justify-center p-8 border-gray-900 bg-[#374151] max-md:rounded-t-xl md:w-1/2 lg:p-12 md:rounded-1-xl md:border-r"
                    : "flex items-center justify-center p-8 border-gray-900 bg-[#374151] max-md:rounded-t-xl md:w-1/2 lg:p-12 md:rounded-1-xl md:border-r md:order-last"
                }
              >
                <a href={project.link} target="_blank">
                  <img
                    src={project.image}
                    alt={project.name}
                    loading="lazy"
                    className="transition-transform duration-500 shadow-lg rounded-xl md:hover:scale-105"
                  />
                </a>
              </div>
              <div className="flex flex-col gap-6 p-8 md:w-1/2 lg:p-12">
                <p className="text-lg font-semibold text-gray-300 md:text-xl">
                  {project.name}
                </p>
                <p className="text-base text-normal">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.techUsed.map((tech, i) => {
                    return (
                      <div
                        key={i}
                        className="flex items-center justify-center px-5 py-1 bg-gray-600 rounded-xl"
                      >
                        <p className="text-sm font-medium text-normal">
                          {tech}
                        </p>
                      </div>
                    );
                  })}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  className="flex items-center gap-2 text-blue-400 underline"
                >
                  Live demo
                  <LuExternalLink />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
