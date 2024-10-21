/* eslint-disable react/no-unescaped-entities */
import aboutImg from "../assets/About-image.png";

function About() {
  return (
    <div
      className="w-full py-16 md:py-20 2xl:py24 bg-[#030712]"
      id="about"
      style={{
        background:
          "radial-gradient(farthest-corner at 100px 600px, rgb(50, 66, 109) 0%, rgb(3, 7, 18) 37%)",
      }}
    >
      <div className="flex flex-col w-full gap-6 px-4 mx-auto max-w-7xl md:gap-12 md:px-8">
        <div className="self-center">
          <div className="flex items-center justify-center px-5 py-1 bg-gray-200 rounded-xl">
            <h2 className="text-sm font-medium text-normal">About Me</h2>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between w-full gap-12 lg:flex-row">
          <div
            className="flex flex-col max-w-xl gap-6 md:max-w-3xl lg:max-w-xl xl:max-w-2xl lg:order-first"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h3 className="text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-gray-50">
              Who is Worlanyo?
            </h3>
            <p className="text-base text-gray-200 text-normal">
              I am a UI designer turned web developer. Originally from Ghana, I
              live in Germany with my family. Solving problems and helping
              others really matter to me. <br />
              <br /> Before diving into web development, I gained experience
              working with various organizations in Ghana, from working at a
              Geomatic firm as a field surveyor, to working as a Project Manager
              at a child development center. <br />
              <br />
              After moving to Germany in 2021, I shifted my focus to UI design
              and completed the Google UX Design Course on Coursera, which
              deepened my understanding of the design process and user-centered
              interfaces. My growing interest in website functionality motivated
              me to pursue web development, so I enrolled in the Full Stack Web
              Development program at the{" "}
              <a
                href="https://digitalcareerinstitute.org/"
                className="text-blue-400 underline"
                target="_blank"
              >
                Digital Career Institute
              </a>
              , which I have since successfully completed. During my time there,
              I also worked part-time as a student tutor, further enhancing my
              skills and knowledge. <br />
              <br />I enjoy playing the drums and piano, creating music with
              Ableton Live, and watching football.
            </p>
          </div>
          <div className="order-first w-[150px] md:w-[200px] lg:w-[400px]">
            <img src={aboutImg} alt="" className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
