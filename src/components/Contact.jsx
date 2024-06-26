/* eslint-disable react/no-unescaped-entities */
import { IoIosMail } from "react-icons/io";
// import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
// import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";

function Contact() {
  return (
    <section
      className="w-full py-16 bg-gray-900 md:py-20 2xl:py-24"
      id="contact"
      style={{
        background: "radial-gradient(farthest-corner at 700px 700px, rgb(39, 51, 83)0%, rgba(17,24,39,1) 57%)",
      }}
    >
      <div
        className="flex flex-col w-full gap-6 px-4 mx-auto max-w-7xl md:gap-12 md:px-8"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="flex flex-col items-center gap-4">
          <div className="self-center">
            <div className="flex items-center justify-center px-5 py-1 bg-gray-200 rounded-xl">
              <h2 className="text-sm font-medium text-normal">Get in touch</h2>
            </div>
          </div>
          <p className="max-w-xl text-lg text-center text-gray-200 text-normal md:text-xl">
            Feel free to reach out to me if you are looking for a developer, have a query, or simply want to connect.
          </p>
        </div>
        <div className="flex flex-col items-center gap-6 text-gray-200 md:gap-12">
          <div className="flex flex-col items-center md:gap-4">
            <div className="flex items-center gap-4 md:gap-3">
              <IoIosMail className="w-6 h-6 md:h-8 md:w-8" />
              <a href="mailto:kworlanyo@gmail.com">
                <p className="text-lg md:text-4xl font-semibold tracking-[-0.02em] text-gray-200 hover:underline">
                  kworlanyo@gmail.com
                </p>
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-base text-center text-normal">You can contact me on these platforms as well!</p>
            <div className="flex gap-3">
              <a href="https://www.linkedin.com/in/worlanyo-kwabla-kporfeame-12925177/" target="_blank">
                <FaLinkedin size={40} />
              </a>
              <a href="https://github.com/kworlanyo" target="_blank">
                <FaGithubSquare size={40} />
              </a>
              {/* <a href="https://twitter.com/Worlanyo29" target="_blank">
                <FaSquareXTwitter size={40} />
              </a> */}
              {/* <a href="https://www.instagram.com/worla_k/" target="_blank">
                <FaSquareInstagram size={40} />
              </a> */}
              <a href="https://www.facebook.com/worlanyo.kporfeame/" target="_blank">
                <FaSquareFacebook size={40} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
