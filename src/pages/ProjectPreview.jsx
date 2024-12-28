import { useParams } from "react-router-dom";
import { IoMdImages } from "react-icons/io";
import { FaPlay } from "react-icons/fa";
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
    <div className="w-full bg-lightBg dark:bg-darkBg flex justify-center">
      <div className="w-full lg:w-[60vw] min-h-screen relative p-5 lg:py-8 font-montserrat">
        {/* Project Name */}
        <h1 className="text-2xl capitalize text-lightPrimaryText dark:text-darkPrimaryText font-bold tracking-wide">
          # {filterData?.name}{" "}
        </h1>

        {/* Horizontal Line */}
        <div className="mt-1 w-16 lg:w-20 h-1 bg-[#797979] dark:bg-gray-300 rounded-full"></div>

        {/* Watch and SS button */}
        <div className="flex gap-3 mt-5">
          <button
            onClick={() => setOpenSS(true)}
            className="w-32 dark:bg-darkBtnBg dark:text-black bg-lightBtnBg text-white p-2 rounded-md text-xs md:text-sm font-semibold flex items-center justify-center gap-2"
          >
            Screenshots <IoMdImages fontSize={16} />
          </button>

          <button
            onClick={() => setOpenVdo(true)}
            className="w-20 dark:bg-darkBtnBg dark:text-black bg-lightBtnBg text-white py-1 rounded-md text-xs md:text-sm font-semibold flex items-center justify-center gap-2"
          >
            Watch <FaPlay fontSize={10} color="#3b82f6" />
          </button>

          <button
            onClick={handleVisitClick}
            className="w-20 dark:bg-darkBtnBg dark:text-black bg-lightBtnBg text-white py-1 rounded-md text-xs md:text-sm font-semibold flex items-center justify-center gap-2"
          >
            Visite
          </button>

          {nonLink && (
            <div className="dark:bg-[#252525d4] bg-[#2a2a2ab9] w-full h-full flex justify-center items-center fixed top-0 left-0 px-5">
              <div className="">
                <button
                  onClick={() => setNonLink(false)}
                  className="top-0 right-5 text-red-500"
                >
                  <IoClose fontSize={36} />
                </button>
                <h1 className="text-white text-5xl font-medium">
                  Opps! No Screenshots
                </h1>
              </div>
            </div>
          )}
        </div>

        {/* Technology used */}
        <div className="flex flex-wrap gap-2 mt-3">
          {filterData?.technology.length > 0 && (
            <h5 className="text-[#000] dark:text-[#fff] text-xs md:text-sm capitalize font-medium">
              {filterData?.technology.join(" | ")}
            </h5>
          )}
        </div>

        {/* About */}
        <div className="w-full bg-[#d7d7d7] dark:bg-[#2d2d2d] mt-5 p-3 lg:p-6 rounded-xl">
          {/* Introduction */}
          <div className="">
            <h2 className="font-semibold text-base lg:text-lg capitalize text-lightPrimaryText dark:text-darkPrimaryText">
              Intoduction
            </h2>
            <p className="text-sm font-medium dark:text-[#d7d7d7] mt-1">
              {" "}
              {filterData?.introduction}{" "}
            </p>
          </div>

          {/* Features */}
          <div className="mt-4">
            <h2 className="font-semibold text-base lg:text-lg capitalize text-lightPrimaryText dark:text-darkPrimaryText">
              Features
            </h2>
            <div className="flex flex-col gap-3 mt-1">
              {filterData?.features.map((item, index) => (
                <div key={index}>
                  <h3 className="dark:text-darkPrimaryText text-sm font-semibold">
                    {" "}
                    {index + 1}. {item.featureTitle}
                  </h3>
                  <p className="text-sm dark:text-[#d7d7d7] ml-6">
                    {" "}
                    {item.description}{" "}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Conclusion */}
          <div className="mt-4">
            <h2 className="font-semibold text-base lg:text-lg capitalize text-lightPrimaryText dark:text-darkPrimaryText">
              {" "}
              Conclusion{" "}
            </h2>
            <p className="text-sm font-medium dark:text-[#d7d7d7] mt-1">
              {" "}
              {filterData?.conclusion}{" "}
            </p>
          </div>
        </div>

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
