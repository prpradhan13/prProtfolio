import { useParams } from "react-router-dom";
import { IoMdImages } from "react-icons/io";
import { FaPlay, FaExternalLinkAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import OpenVideoBox from "../components/OpenVideoBox";
import { useProject } from "../context/projectContext";
import OpenSSBox from "../components/OpenSSBox";
import { IoClose } from "react-icons/io5";

const ProjectPreview = () => {
  const [openVdo, setOpenVdo] = useState(false);
  const [openSS, setOpenSS] = useState(false);
  const [nonLink, setNonLink] = useState(false);

  const { projectData } = useProject();
  const { id } = useParams();
  const filterData = projectData.find((project) => project.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleVisitClick = () => {
    if (filterData.projectlink) {
      window.open(filterData.projectlink, "_blank");
    } else {
      setNonLink(true);
    }
  };

  return (
    <div className="w-full bg-lightBg dark:bg-darkBg min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-8 md:py-12 font-montserrat">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl capitalize text-lightPrimaryText dark:text-darkPrimaryText font-bold tracking-wide">
            {filterData?.name}
          </h1>
          <div className="mt-2 w-20 h-1 bg-blue-500 dark:bg-blue-400 rounded-full"></div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mb-8">
          <button
            onClick={() => setOpenSS(true)}
            className="px-6 py-2.5 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-semibold flex items-center gap-2 transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            <IoMdImages className="text-lg" />
            Screenshots
          </button>

          <button
            onClick={() => setOpenVdo(true)}
            className="px-6 py-2.5 bg-green-500 hover:bg-green-600 text-white rounded-lg text-sm font-semibold flex items-center gap-2 transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            <FaPlay className="text-sm" />
            Watch Demo
          </button>

          <button
            onClick={handleVisitClick}
            className="px-6 py-2.5 bg-purple-500 hover:bg-purple-600 text-white rounded-lg text-sm font-semibold flex items-center gap-2 transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            <FaExternalLinkAlt className="text-sm" />
            Visit Project
          </button>
        </div>

        {/* Technology Stack */}
        {filterData?.technology.length > 0 && (
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-lightPrimaryText dark:text-darkPrimaryText mb-3">
              Technology Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {filterData.technology.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-200 dark:bg-[#2f2f2f] text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Project Details */}
        <div className="bg-white dark:bg-[#2f2f2f] rounded-2xl shadow-lg p-6 md:p-8 space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-xl font-semibold text-lightPrimaryText dark:text-darkPrimaryText mb-4">
              Introduction
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {filterData?.introduction}
            </p>
          </section>

          {/* Features */}
          <section>
            <h2 className="text-xl font-semibold text-lightPrimaryText dark:text-darkPrimaryText mb-4">
              Features
            </h2>
            <div className="space-y-4">
              {filterData?.features.map((item, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lightPrimaryText dark:text-darkPrimaryText mb-2">
                    {index + 1}. {item.featureTitle}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Conclusion */}
          <section>
            <h2 className="text-xl font-semibold text-lightPrimaryText dark:text-darkPrimaryText mb-4">
              Conclusion
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {filterData?.conclusion}
            </p>
          </section>
        </div>

        {/* Modal for No Link */}
        {nonLink && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 max-w-md w-full mx-4 relative">
              <button
                onClick={() => setNonLink(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
              >
                <IoClose size={24} />
              </button>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Project Link Unavailable
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                This project is currently not available for external access.
              </p>
            </div>
          </div>
        )}

        {/* Video and Screenshot Modals */}
        {openVdo && (
          <OpenVideoBox
            videoPath={filterData.demovideo}
            category={filterData.category}
            setOpenVdo={setOpenVdo}
          />
        )}

        {openSS && (
          <OpenSSBox
            imgCategory={filterData?.category}
            imgPath={filterData?.screenshots}
            setOpenSS={setOpenSS}
          />
        )}
      </div>
    </div>
  );
};

export default ProjectPreview;
