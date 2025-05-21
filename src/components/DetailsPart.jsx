import DarkModeToggle from "./buttons/DarkModeToggle";
import profileImage from "./../assets/profileImage.jpeg";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const DetailsPart = () => {
  const personal = useRef();

  const handleDownloadCV = () => {
    const cvPath =
      "https://www.dropbox.com/scl/fi/j2kequr79xp6fazxspnvv/PRPRADHAN-new-resume.pdf?rlkey=ed94ibg4k3wfp491xzi52ysjh&st=qzrxkuvw&raw=1";
    window.open(cvPath, "_blank");
  };

  const handleContactMe = () => {
    const email = "ppritiranjan7@gmail.com"; // Replace with your email
    window.location.href = `mailto:${email}`;
  };

  useGSAP(() => {
    let tl = gsap.timeline()
    tl.from("#profileImg", {
      scale: 0,
      duration: 0.3,
      stagger: 0.15,
      opacity: 0,
    }).from("#personalDetails", {
      y: -20,
      duration: 0.3,
      stagger: 0.15,
      opacity: 0,
    }).from("#logoSocial", {
      scale: 0,
      duration: 0.3,
      stagger: 0.15,
    })
  }, {scope: personal})

  return (
    <div ref={personal} className="w-full md:w-1/3 flex flex-col">
      {/* Dark or Light Button */}
      <div className="">
        <DarkModeToggle />
      </div>

      {/* Profile Photo */}
      <div className="flex justify-center mt-5">
        <div id="profileImg" className="w-[130px] h-[130px] bg-neutral-400 rounded-full overflow-hidden flex items-center justify-center border-2 dark:border-neutral-200">
          <img src={profileImage} alt="Profile" className="object-cover" />
        </div>
      </div>

      {/* Personal Details */}
      <div className="flex flex-col items-center mt-5 font-montserrat">
        <h1 id="personalDetails" className="text-2xl font-semibold text-lightPrimaryText dark:text-darkPrimaryText">
          Pritiranjan Pradhan
        </h1>

        <h2 id="personalDetails" className="text-base text-lightSecondaryText dark:text-[#c8c8c8]">
          Web & Mobile App Developer
        </h2>
      </div>

      {/* Social Logos */}
      <div className="flex justify-center gap-3 mt-5">
        <Link
          id="logoSocial"
          to={"https://github.com/prpradhan13"}
          className="dark:bg-lightBg dark:text-black bg-darkBg text-white w-10 h-10 flex justify-center items-center rounded-full"
        >
          <FaGithub fontSize={21} />
        </Link>
        <Link
          id="logoSocial"
          to={"https://www.linkedin.com/in/prpradhan13"}
          className="dark:bg-lightBg dark:text-black bg-darkBg text-white w-10 h-10 flex justify-center items-center rounded-full"
        >
          <FaLinkedin fontSize={20} />
        </Link>

        <button
          id="logoSocial"
          onClick={handleDownloadCV}
          title="Download my CV"
          className="dark:bg-lightBg dark:text-black bg-darkBg text-white w-10 h-10 flex justify-center items-center rounded-full"
        >
          <span className="font-montserrat font-semibold">CV</span>
        </button>
        <button
          id="logoSocial"
          onClick={handleContactMe}
          title="Send me an email"
          className="dark:bg-lightBg dark:text-black bg-darkBg text-white w-10 h-10 flex justify-center items-center rounded-full"
        >
          <FaEnvelope fontSize={20} />
        </button>
      </div>
    </div>
  );
};

export default DetailsPart;
