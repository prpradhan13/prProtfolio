import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const AboutMe = () => {
  const aboutDiv = useRef();

  useGSAP(
    () => {
      let tl = gsap.timeline();
      tl.from("#aboutH", {
        x: -50,
        duration: 0.5,
        stagger: 0.15,
        opacity: 0,
      }).from("#aboutP", {
        x: -80,
        duration: 0.5,
        stagger: 0.15,
        opacity: 0,
      });
    },
    { scope: aboutDiv }
  );

  return (
    <div
      ref={aboutDiv}
      className="w-full h-full bg-darkBtnBg dark:bg-lightSecondaryText rounded-xl p-4 font-montserrat shadow-xl dark:shadow-[#3f3f3f] lg:hover:scale-105 duration-300 ease-in-out overflow-hidden"
    >
      {/* Heading */}
      <h2
        id="aboutH"
        className="dark:text-darkPrimaryText text-lightPrimaryText font-bold text-xl tracking-wide"
      >
        About Me
      </h2>

      {/* Horizontal Line */}
      <div className="mt-1 w-16 h-1 bg-[#797979] dark:bg-gray-300 rounded-full"></div>

      {/* Description */}
      <div className="mt-4 text-sm md:text-base text-lightPrimaryText dark:text-darkBtnBg leading-relaxed overflow-hidden">
        <div id="aboutP" className="">
          <p className="">
            Hi, I’m Pritirnjan Pradhan! I began my journey in web development in
            2023, driven by a passion for technology despite my background in
            civil engineering. Through dedication and consistent learning, I’ve
            transitioned into the tech world by mastering the fundamentals of
            web development and building real-world projects to showcase my
            skills.
          </p>
          <p className="mt-3">
            I started by learning HTML, CSS, and JavaScript, creating
            interactive websites that laid the foundation of my expertise. As I
            advanced, I explored modern frameworks like React and styled my
            projects using Tailwind CSS, which further enhanced my UI
            development skills. My journey then expanded to backend development
            and database management, where I learned how to build and deploy
            full-stack applications.
          </p>
          <p className="mt-3">
            Currently, I am diving into mobile app development using React
            Native, aiming to create impactful mobile solutions. My continuous
            learning and project-building approach reflect my commitment to
            growing as a developer and contributing to the tech world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
