import mitchell from "../assets/Mitchell-and-associates-website.png";
import lavie from "../assets/lavie-juices-and-smoothies-website.png";
import countries from "../assets/the-countries-app.png";

const projects = [
  {
    name: "Lavie Juices and Smoothies Website",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet ea odit molestias magnam eligendi amet ipsam provident, ipsum labore vitae laboriosam dicta. Perspiciatis nisi quo accusantium. Quam dolorem officiis iure deserunt ducimus voluptatum quae,beatae, ipsa atque exercitationem nobis. Blanditiis.",
    link: "https://lavie-fruit-juices-and-smoothies-website.onrender.com/",
    image: lavie,
    techUsed: ["React", "CSS", "React Router Dom"],
  },
  {
    name: "Mitchell And Associates Website",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet ea odit molestias magnam eligendi amet ipsam provident, ipsum labore vitae laboriosam dicta. Perspiciatis nisi quo accusantium. Quam dolorem officiis iure deserunt ducimus voluptatum quae,beatae, ipsa atque exercitationem nobis. Blanditiis.",
    link: "https://kworlanyo.github.io/Mitchell-And-Associates-Law-Firm-Website/",
    image: mitchell,
    techUsed: ["HTML", "CSS"],
  },
  {
    name: "The Countries App",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet ea odit molestias magnam eligendi amet ipsam provident, ipsum labore vitae laboriosam dicta. Perspiciatis nisi quo accusantium. Quam dolorem officiis iure deserunt ducimus voluptatum quae,beatae, ipsa atque exercitationem nobis. Blanditiis.",
    link: "https://kworlanyo.github.io/The-Countries-App/",
    image: countries,
    techUsed: ["React", "CSS"],
  },
];

function Projects() {
  return (
    <section
      className="w-full py-16 bg-[#030712] md:py-20 2xl:py-24"
      id="projects"
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
        {/* <div className="flex flex-col w-full max-w-6xl mx-auto overflow-hidden shadow-md rounded-xl bg-gray dark:bg-gray-100 dark:shadow-2xl md:flex-row">
          <div className="flex items-center justify-center p-8 border-gray-100 bg-gray-50 dark:bg-gray-200 max-md:rounded-t-xl md:w-1/2 lg:p-12 md:rounded-1-xl md:border-r">
            <a
              href="https://kworlanyo.github.io/Mitchell-And-Associates-Law-Firm-Website/"
              target="_blank"
            >
              <img
                src={mitchell}
                alt="mitchell and associates website"
                loading="lazy"
                className="transition-transform duration-500 shadow-lg rounded-xl md:hover:scale-105"
              />
            </a>
          </div>
          <div className="flex flex-col gap-6 p-8 md:w-1/2 lg:p-12">
            <p className="text-lg font-semibold text-gray-900 md:text-xl">
              Mitchell And Associates Website
            </p>
            <p className="text-base text-normal">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              ea odit molestias magnam eligendi amet ipsam provident, ipsum
              labore vitae laboriosam dicta. Perspiciatis nisi quo accusantium.
              Quam dolorem officiis iure deserunt ducimus voluptatum quae,
              beatae, ipsa atque exercitationem nobis. Blanditiis.
            </p>
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center justify-center px-5 py-1 bg-gray-200 rounded-xl">
                <p className="text-sm font-medium text-normal">HTML</p>
              </div>
              <div className="flex items-center justify-center px-5 py-1 bg-gray-200 rounded-xl">
                <p className="text-sm font-medium text-normal">CSS</p>
              </div>
            </div>
            <a
              href="https://kworlanyo.github.io/Mitchell-And-Associates-Law-Firm-Website/"
              target="_blank"
            >
              live demo
            </a>
          </div>
        </div>
        <div className="flex flex-col w-full max-w-6xl mx-auto overflow-hidden shadow-md rounded-xl bg-gray dark:bg-gray-100 dark:shadow-2xl md:flex-row">
          <div className="flex items-center justify-center p-8 border-gray-100 bg-gray-50 dark:bg-gray-200 max-md:rounded-t-xl md:w-1/2 lg:p-12 md:rounded-1-xl md:border-r md:order-last">
            <a
              href="https://lavie-fruit-juices-and-smoothies-website.onrender.com/"
              target="_blank"
            >
              <img
                src={lavie}
                alt="lavie juices and smoothies website"
                loading="lazy"
                className="transition-transform duration-500 shadow-lg rounded-xl md:hover:scale-105"
              />
            </a>
          </div>
          <div className="flex flex-col gap-6 p-8 md:w-1/2 lg:p-12">
            <p className="text-lg font-semibold text-gray-900 md:text-xl">
              Lavie Juices and Smoothies Website
            </p>
            <p className="text-base text-normal">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              ea odit molestias magnam eligendi amet ipsam provident, ipsum
              labore vitae laboriosam dicta. Perspiciatis nisi quo accusantium.
              Quam dolorem officiis iure deserunt ducimus voluptatum quae,
              beatae, ipsa atque exercitationem nobis. Blanditiis.
            </p>
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center justify-center px-5 py-1 bg-gray-200 rounded-xl">
                <p className="text-sm font-medium text-normal">React</p>
              </div>
              <div className="flex items-center justify-center px-5 py-1 bg-gray-200 rounded-xl">
                <p className="text-sm font-medium text-normal">CSS</p>
              </div>
              <div className="flex items-center justify-center px-5 py-1 bg-gray-200 rounded-xl">
                <p className="text-sm font-medium text-normal">
                  React Router Dom
                </p>
              </div>
            </div>
            <a
              href="https://lavie-fruit-juices-and-smoothies-website.onrender.com/"
              target="_blank"
            >
              live demo
            </a>
          </div>
        </div>
        <div className="flex flex-col w-full max-w-6xl mx-auto overflow-hidden shadow-md rounded-xl bg-gray dark:bg-gray-100 dark:shadow-2xl md:flex-row">
          <div className="flex items-center justify-center p-8 border-gray-100 bg-gray-50 dark:bg-gray-200 max-md:rounded-t-xl md:w-1/2 lg:p-12 md:rounded-1-xl md:border-r">
            <a
              href="https://kworlanyo.github.io/The-Countries-App/"
              target="_blank"
            >
              <img
                src={countries}
                alt="The Countries App"
                loading="lazy"
                className="transition-transform duration-500 shadow-lg rounded-xl md:hover:scale-105"
              />
            </a>
          </div>
          <div className="flex flex-col gap-6 p-8 md:w-1/2 lg:p-12">
            <p className="text-lg font-semibold text-gray-900 md:text-xl">
              The Countries App
            </p>
            <p className="text-base text-normal">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              ea odit molestias magnam eligendi amet ipsam provident, ipsum
              labore vitae laboriosam dicta. Perspiciatis nisi quo accusantium.
              Quam dolorem officiis iure deserunt ducimus voluptatum quae,
              beatae, ipsa atque exercitationem nobis. Blanditiis.
            </p>
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center justify-center px-5 py-1 bg-gray-200 rounded-xl">
                <p className="text-sm font-medium text-normal">React</p>
              </div>
              <div className="flex items-center justify-center px-5 py-1 bg-gray-200 rounded-xl">
                <p className="text-sm font-medium text-normal">CSS</p>
              </div>
            </div>
            <a
              href="https://kworlanyo.github.io/The-Countries-App/"
              target="_blank"
            >
              live demo
            </a>
          </div>
        </div> */}
        {projects.map((project) => {
          return (
            <div
              key={project.link}
              className="flex flex-col w-full max-w-6xl mx-auto overflow-hidden bg-[#1F2937] text-gray-100 shadow-md rounded-xl dark:shadow-2xl md:flex-row"
            >
              <div className="flex items-center justify-center p-8 border-gray-900 bg-[#374151] max-md:rounded-t-xl md:w-1/2 lg:p-12 md:rounded-1-xl md:border-r">
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
                  {/* <div className="flex items-center justify-center px-5 py-1 bg-gray-200 rounded-xl">
                    <p className="text-sm font-medium text-normal">React</p>
                  </div>
                  <div className="flex items-center justify-center px-5 py-1 bg-gray-200 rounded-xl">
                    <p className="text-sm font-medium text-normal">CSS</p>
                  </div> */}
                </div>
                <a href={project.link} target="_blank">
                  live demo
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
