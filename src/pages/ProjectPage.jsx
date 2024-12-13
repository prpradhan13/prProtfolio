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
    <div>
      <h1 className="absolute z-50 top-10 text-black font-bold text-xs dark:text-white left-1/2  transform -translate-x-1/2 uppercase">
        scroll down
      </h1>
      <ProjectOpener showCaseName="web" showCaseProject={filterWeb} />
      <ProjectOpener showCaseName="mobile" showCaseProject={mobileWeb} />

      <div className="h-[20vh] flex justify-center items-center bg-lightBg dark:bg-darkBg">
        <h1 className="text-xl font-bold text-lightSecondaryText dark:text-[#c9c9c9] tracking-wide font-montserrat">
          Thanks For Visiting
        </h1>
      </div>
    </div>
  );
};

export default ProjectPage;
