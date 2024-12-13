import { useState } from "react";
import DetailsPart from "../components/DetailsPart";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [selectedSection, setSelectedSection] = useState("aboutMe");

  const navigate = useNavigate();

  return (
      <div className="w-full min-h-screen bg-lightBg dark:bg-darkBg flex flex-col items-center p-5 md:p-8">
        {/* First Part */}
        <div className="w-full flex justify-center">
          <DetailsPart />
        </div>

        {/* Selected Section */}
        <div id="selectedSection" className="dark:bg-lightBg bg-darkBtnBg p-2 mt-8 rounded-xl space-x-2 font-montserrat font-semibold ">
          <button
            onClick={() => setSelectedSection("aboutMe")}
            className={`text-sm ${
              selectedSection === "aboutMe"
                ? "dark:text-lightPrimaryText text-darkPrimaryText bg-lightBtnBg dark:bg-darkBtnBg"
                : ""
            }  rounded-xl px-3 py-2 duration-300 ease-linear`}
          >
            About Me
          </button>

          <button
            onClick={() => setSelectedSection("skills")}
            className={`text-sm ${
              selectedSection === "skills"
                ? "dark:text-lightPrimaryText text-darkPrimaryText  bg-lightBtnBg dark:bg-darkBtnBg"
                : ""
            }  rounded-xl px-3 py-2 duration-500 ease-linear`}
          >
            Skills
          </button>

          <button
            onClick={() => {
              // setSelectedSection("projects")
              navigate("/projectPage")
            }}
            className={`text-sm ${
              selectedSection === "projects"
                ? "dark:text-lightPrimaryText text-darkPrimaryText  bg-lightBtnBg dark:bg-darkBtnBg"
                : ""
            }  rounded-xl px-3 py-2 duration-500 ease-linear`}
          >
            Projects
          </button>
        </div>

        {/* Second Part */}
        <div className="w-full md:w-[40vw] mt-4">
          {selectedSection === "aboutMe" && (
              <AboutMe />
          )}

          {selectedSection === "skills" && (
              <Skills />
          )}
        </div>
      </div>
  );
};

export default HomePage;
