import mitchell from "../assets/Mitchell-and-associates-website.png";
import lavie from "../assets/lavie-juices-and-smoothies-website.png";
// import countries from "../assets/the-countries-website.png";
// import calculator from "../assets/calculator.png";
import employeeMgtApp from "../assets/employee-management-app.png";
import deliveEats from "../assets/deliveats-food-delivery-app.png";
import livingWater from "../assets/living-water-gemeinde-website.png";
import growBlog from "../assets/grow-blog-website.png";
import { LuExternalLink } from "react-icons/lu";
import { LuGithub } from "react-icons/lu";

const projects = [
  {
    name: "The Grow Website",
    description:
      "I developed a full-stack blog website for a client, enabling her to publish and manage her own blog content. I also provided a backend functionality for creating, editing, and deleting blog posts, as well as approving reader comments before they are published on the site.",
    link: "https://my-blog-website-gztd.onrender.com/",
    image: growBlog,
    techUsed: [
      "React",
      "CSS",
      "React Router Dom",
      "Express",
      "MongoDB",
      "Node",
    ],
    github: "",
  },
  {
    name: "Living Water Gemeinde Website",
    description:
      "I developed a website for a religious organization using Wix Studio, creating a user-friendly platform that showcases who they are, their events, and their resources. The site design highlights accessibility and clear navigation, enabling visitors to easily engage with the organization’s content and services.",
    link: "https://www.livingwatergemeinde.com/",
    image: livingWater,
    techUsed: ["Wix Studio"],
    github: "",
  },
  {
    name: "DelivEats Food Delivery App",
    description:
      "DelivEats is a food delivery application designed to facilitate seamless communication between users and restaurants, offering real-time order tracking, secure payment processing, and comprehensive authentication features. This project was developed as part of the DCI Full Stack Web Development Course by a team of four developers.",
    link: "https://deliveats-food-delivery-app.onrender.com/",
    image: deliveEats,
    techUsed: [
      "React",
      "CSS",
      "React Router Dom",
      "Express",
      "MongoDB",
      "Node",
      "Socket.io",
      "Stripe",
    ],
    github: "https://github.com/Food-Delivery-App-DCI/Food-Delivery-Project",
  },
  {
    name: "AdminHub Employee Management App",
    description:
      "This is a comprehensive MERN (MongoDB, Express.js, React, Node.js) stack employee management application that I created to streamline HR operations within a company. On the frontend, I utilized React alongside libraries such as React Router Dom for seamless navigation.The backend was built with Node.js and Express.js, interfacing with a MongoDB database. The application features user authentication and role-based access control to differentiate between admin and employee functionalities. Overall, this project highlights my proficiency in full-stack development, from frontend design and development to backend architecture and database management.",
    link: "https://employee-management-app-3mri.onrender.com",
    image: employeeMgtApp,
    techUsed: [
      "React",
      "CSS",
      "React Router Dom",
      "Express",
      "MongoDB",
      "Node",
    ],
    github: "https://github.com/kworlanyo/Employee-Management-App",
  },
  {
    name: "Lavie Juices and Smoothies Website",
    description:
      "This is a website I created for a juice and smoothies startup called Lavie. I built it with React and some libraries like React Router Dom. I first designed it in Figma and then developed it afterwards. I used useContext and useReducer hooks to manage my states in one component.",
    link: "https://lavie-fruit-juices-and-smoothies-website.onrender.com/",
    image: lavie,
    techUsed: ["React", "CSS", "React Router Dom", "Figma", "React Icons"],
    github:
      "https://github.com/kworlanyo/Lavie-Fruit-Juices-And-Smoothies-Website",
  },
  {
    name: "Mitchell And Associates Website",
    description:
      "I created this website for a fictional law firm called Mitchell and Associates. I used only HTML and CSS to develop this website. This project made me realize that a lot could be achieved using just HTML and CSS.",
    link: "https://kworlanyo.github.io/Mitchell-And-Associates-Law-Firm-Website/",
    image: mitchell,
    techUsed: ["HTML", "CSS"],
    github:
      "https://github.com/kworlanyo/Mitchell-And-Associates-Law-Firm-Website",
  },

  // {
  //   name: "The Countries Website",
  //   description:
  //     "This website makes it possible to search for countries and see their flags and other details. I created this website in a way that the user can either scroll through a list of countries or input the name of the country in an input field and search for it. I built the website with react and styled with vanilla css. I got the list of the countries using the fetch Api",
  //   link: "https://the-countries-website.onrender.com/",
  //   image: countries,
  //   techUsed: ["React", "CSS", "Fetch API"],
  //   github: "https://github.com/kworlanyo/The-Countries-Website",
  // },
  // {
  //   name: "Simple Calculator",
  //   description:
  //     "This is a simple calculator created with HTML, CSS and JavaScript. This project helped me to understand how I can use the DOM to manipulate elements in HTML.",
  //   link: "https://kworlanyo.github.io/Calculator/",
  //   image: calculator,
  //   techUsed: ["HTML", "CSS", "JavaScript"],
  //   github: "https://github.com/kworlanyo/Calculator",
  // },
];

function Projects() {
  return (
    <section
      className="w-full py-16 md:py-20 2xl:py-24"
      id="projects"
      style={{
        background:
          "radial-gradient(farthest-corner at 1600px 1200px, rgb(39, 51, 83) 0%, rgba(17,24,39,1) 67%)",
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
                <div className="flex gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    className="flex items-center gap-2 text-blue-400 underline"
                  >
                    Visit Site
                    <LuExternalLink />
                  </a>
                  {project.github !== "" && (
                    <a
                      href={project.github}
                      target="_blank"
                      className="flex items-center gap-2 text-blue-400 underline"
                    >
                      Github Repo <LuGithub />
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
