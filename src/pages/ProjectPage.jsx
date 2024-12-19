import ProjectOpener from "../components/ProjectOpener";
import { useEffect } from "react";

const ProjectPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div>
      <h1 className="absolute z-50 top-10 text-black font-bold text-xs dark:text-white left-1/2  transform -translate-x-1/2 uppercase">
        scroll down
      </h1>
      <ProjectOpener showCaseName="mobile" />
      <ProjectOpener showCaseName="web" />

      <div className="h-[20vh] flex justify-center items-center bg-lightBg dark:bg-darkBg">
        <h1 className="text-xl font-bold text-lightSecondaryText dark:text-[#c9c9c9] tracking-wide font-montserrat">
          Thanks For Visiting
        </h1>
      </div>
    </div>
  );
};

export default ProjectPage;
