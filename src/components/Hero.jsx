/* eslint-disable react/no-unescaped-entities */
import avatar from "../assets/avatar.png";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";

function Hero() {
  return (
    <section
      className="w-full py-16 text-gray-100 bg-gray-900 md:py-20 2xl:py-24"
      id="hero"
    >
      <div className="flex flex-col w-full gap-6 px-4 mx-auto max-w-7xl md:gap-12 md:px-8">
        <div className="flex flex-col items-center gap-12 md:flex-row">
          <div className="flex flex-col justify-center flex-grow max-w-3xl gap-8 md:order-first md:items-start md:justify-center 2xl:gap-12">
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl font-semibold md:font-bold md:text-5xl md:tracking-[-0.02em] lg:text-6xl lg:leading-[72px] text-gray-100">
                Hello, I'm Worlanyo 👋
              </h1>
              <p className="text-base text-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam architecto accusantium culpa eaque accusamus expedita
                animi voluptate amet, nesciunt iste.
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/worlanyo-kwabla-kporfeame-12925177/"
                target="_blank"
              >
                <FaLinkedin size={40} />
              </a>
              <a href="https://twitter.com/Worlanyo29" target="_blank">
                <FaSquareXTwitter size={40} />
              </a>
              <a href="https://www.instagram.com/worla_k/" target="_blank">
                <FaSquareInstagram size={40} />
              </a>
              <a
                href="https://www.facebook.com/worlanyo.kporfeame/"
                target="_blank"
              >
                <FaSquareFacebook size={40} />
              </a>
            </div>
          </div>
          <div className="order-first w-[150px] md:w-[350px]">
            <img src={avatar} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
