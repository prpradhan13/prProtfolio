import { FaArrowDownLong } from "react-icons/fa6";
import ProjectOpener from "../components/ProjectOpener";
import { useEffect } from "react";
import { useProject } from "../context/projectContext";

const ProjectPage = () => {
  const { projectData } = useProject();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filterWeb = projectData.filter((item) => item.category === "web");
  const mobileWeb = projectData.filter((item) => item.category === "mobile");

  return (
    <div className="">
      <div className="absolute z-50 top-10 text-black dark:text-white left-1/2 animate-bounce transform -translate-x-1/2">
        <FaArrowDownLong fontSize={25} />
      </div>
      <ProjectOpener showCaseName="web" showCaseProject={filterWeb} />
      <ProjectOpener
        showCaseName="mobile"
        showCaseProject={mobileWeb}
      />

      <div className="h-[20vh] flex justify-center items-center bg-lightBg dark:bg-darkBg">
        <h1 className="text-xl font-bold text-lightSecondaryText dark:text-[#c9c9c9] tracking-wide font-montserrat">Thanks For Visiting</h1>
      </div>
    </div>
  );
};

export default ProjectPage;
