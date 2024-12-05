/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import { IoIosDesktop } from "react-icons/io";
import { CiMobile3 } from "react-icons/ci";
import { FaPlay } from "react-icons/fa";
import data from "../data.json";
import { useState } from "react";
import OpenVideoBox from "../components/OpenVideoBox";

const ProjectPreviewDetails = ({ name, icon }) => {
  const [openVdo, setOpenVdo] = useState(false);
  const { id } = useParams();
  const filterData = data.projectData.find((project) => project.id === id);

  return (
    <>
      <div className="w-full flex items-center gap-4">
        <div className="w-1/2 flex text-[180px] justify-center items-center text-black dark:text-darkBtnBg">
          {icon}
        </div>
        <div className="w-1/2">
          <h1 className="text-base font-bold text-black dark:text-darkPrimaryText">
            {name}
          </h1>
          <p className="leading-4 text-sm font-medium text-lightSecondaryText dark:text-darkSecondaryText mt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
            voluptatum accusamus error laborum ipsam.
          </p>
          <button
            onClick={() => setOpenVdo(true)}
            className="mt-2 text-blue-500 dark:text-blue-500 text-xs font-semibold flex items-center gap-2"
          >
            Watch <FaPlay fontSize={10} />
          </button>
        </div>
      </div>

        {openVdo && <OpenVideoBox videoPath={filterData.demoVideo} category={filterData.category} setOpenVdo={setOpenVdo} />}
        
    </>
  );
};

const ProjectPreview = () => {
    const { id } = useParams();
    const filterData = data.projectData.find((project) => project.id === id);

  return (
    <div className="w-full h-screen flex justify-center bg-lightBg dark:bg-darkBg relative">
      <div className="w-full md:w-[40vw] h-full px-5 font-montserrat flex flex-col justify-center gap-10">
        {filterData.category === "mobile" ? (
            <ProjectPreviewDetails name="Mobile" icon={<CiMobile3 />} />
        ) : (
            <ProjectPreviewDetails name="Desktop" icon={<IoIosDesktop />} />
        )}
        
      </div>
    </div>
  );
};

export default ProjectPreview;
