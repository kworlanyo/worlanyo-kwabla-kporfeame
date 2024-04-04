import javascript from "../assets/icon-javascript.svg";
import react from "../assets/icon-react.svg";
import nodejs from "../assets/icon-nodejs.svg";
import sass from "../assets/icon-sass.svg";
import tailwind from "../assets/icon-tailwindcss.svg";
import figma from "../assets/icon-figma.svg";
import git from "../assets/icon-git.svg";
import html from "../assets/html5.svg";
import github from "../assets/icon-github.svg";
import css from "../assets/icon-css.svg";
import vscode from "../assets/icon-vscode.svg";
import markdown from "../assets/icon-markdown.svg";
import styled from "../assets/icon-styled-components.svg";
// import avatar from "../assets/avatar.png";
import aboutImg from "../assets/About-image.png";

const technologies = [
  {
    name: "JavaScript",
    image: javascript,
  },
  {
    name: "React",
    image: react,
  },
  {
    name: "Node.js",
    image: nodejs,
  },
  {
    name: "Sass/Scss",
    image: sass,
  },
  {
    name: "Tailwindcss",
    image: tailwind,
  },
  {
    name: "Figma",
    image: figma,
  },
  {
    name: "Git",
    image: git,
  },
  {
    name: "HTML",
    image: html,
  },
  {
    name: "Github",
    image: github,
  },
  {
    name: "CSS",
    image: css,
  },
  {
    name: "VS Code",
    image: vscode,
  },
  {
    name: "Markdown",
    image: markdown,
  },
  {
    name: "Styled Components",
    image: styled,
  },
];

function About() {
  return (
    <>
      <div
        className="w-full py-16 md:py-20 2xl:py24"
        id="about"
        style={{
          background:
            "radial-gradient(farthest-corner at 100px 600px, rgb(39, 51, 83) 0%, rgba(17,24,39,1) 37%)",
        }}
      >
        <div className="flex flex-col w-full gap-6 px-4 mx-auto max-w-7xl md:gap-12 md:px-8">
          <div className="self-center">
            <div className="flex items-center justify-center px-5 py-1 bg-gray-200 rounded-xl">
              <h2 className="text-sm font-medium text-normal">About Me</h2>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between w-full gap-12 md:flex-row">
            <div
              className="flex flex-col max-w-xl gap-6 md:max-w-md lg:max-w-2xl"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <h3 className="text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-gray-50">
                Lorem ipsum dolor sit amet.
              </h3>
              <p className="text-base text-gray-200 text-normal">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt,
                vel nemo culpa veniam, reiciendis itaque dignissimos dolorum ex
                a animi natus non, accusantium quod sed omnis autem dolor
                debitis asperiores ab. Voluptatum porro eum aspernatur
                perspiciatis sunt dolore quo cum molestias similique provident!
                Doloremque voluptates sunt error suscipit illum ut id, aliquam
                deserunt tempora ex animi adipisci doloribus in, neque maxime
                facere nisi voluptas molestias architecto? Veritatis, assumenda.
                Corporis quos eaque pariatur dignissimos possimus eligendi animi
                ratione aliquid? Consectetur, eligendi quod laboriosam animi
                minima beatae, fugiat laudantium voluptatum possimus
                perspiciatis at rem officia facere nulla consequatur
                necessitatibus? Porro, soluta dolorem!
              </p>
            </div>
            <div
              className="order-first md:order-last w-[150px] md:w-[400px]"
              // data-aos="fade-left"
              // data-aos-duration="1000"
            >
              <img src={aboutImg} alt="" className="object-cover" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-full py-16 bg-[#030712] md:py-20 2xl:py-24"
        style={{
          background:
            "radial-gradient(farthest-corner at 2000px 1000px, rgb(50, 66, 109) 0%, rgb(3, 7, 18) 67%)",
        }}
      >
        <div className="flex flex-col w-full gap-6 px-4 mx-auto max-w-7xl md:gap-12 md:px-8">
          <div className="flex flex-col items-center gap-4">
            <div className="self-center">
              <div className="flex items-center justify-center px-5 py-1 bg-gray-200 rounded-xl">
                <h2 className="text-sm font-medium text-normal">Skills</h2>
              </div>
            </div>
            <p className="max-w-2xl text-lg text-center text-gray-200 text-normal md:text-xl">
              The skills, tools and technologies I use to bring your products to
              life
            </p>
          </div>
          <div className="grid grid-cols-3 text-gray-200 gap-y-4 md:grid-cols-6 md:gap-y-8 lg:grid-cols-8 lg:gap-y-12">
            {technologies.map((tech, i) => {
              return (
                <div
                  key={i}
                  className="flex flex-col items-center gap-2"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                >
                  <img
                    src={tech.image}
                    alt={tech.name}
                    loading="lazy"
                    // width={65}
                    // height={64}
                    className="transition-transform duration-300 md:hover:scale-110"
                  />
                  <p className="text-base text-center text-normal md:text-lg">
                    {tech.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
