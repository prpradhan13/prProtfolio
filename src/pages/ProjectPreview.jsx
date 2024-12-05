import { useParams } from "react-router-dom";
import { IoIosDesktop } from "react-icons/io";
import { CiMobile3 } from "react-icons/ci";
import { FaPlay } from "react-icons/fa";
import data from "../data.json";

const ProjectPreview = () => {
  const { id } = useParams();

  const filterData = data.projectData.find(project => project.id === id);

  return (
    <div className="w-full h-screen flex justify-center bg-lightBg dark:bg-darkBg">
        <div className="w-full md:w-[40vw] h-full px-5 font-montserrat flex flex-col justify-center gap-10">
        {/* Desktop Part */}
        <div className="w-full flex items-center gap-4">
            <div className="w-1/2 flex justify-center items-center text-black dark:text-darkBtnBg">
                <IoIosDesktop fontSize={180} />
            </div>
            <div className="w-1/2">
                <h1 className="text-base font-bold text-black dark:text-darkPrimaryText"> Desktop </h1>
                <p className="leading-4 text-sm font-medium text-lightSecondaryText dark:text-darkSecondaryText mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
                    voluptatum accusamus error laborum ipsam.
                </p>
                <button
                    className="mt-2 text-blue-500 dark:text-blue-500 text-xs font-semibold flex items-center gap-2"
                >
                    Watch <FaPlay fontSize={10} />
                </button>
            </div>
        </div>

        {/* Mobile Part */}
        <div className="w-full flex items-center gap-4">
            <div className="w-1/2 flex justify-center items-center text-black dark:text-darkBtnBg">
            <CiMobile3 fontSize={180} />
            </div>
            <div className="w-1/2">
                <h1 className="text-base font-bold text-black dark:text-darkPrimaryText">Mobile</h1>
                <p className="leading-4 text-sm font-medium text-lightSecondaryText dark:text-darkSecondaryText mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
                    voluptatum accusamus error laborum ipsam.
                </p>
                <button
                    className="mt-2 text-blue-500 dark:text-blue-500 text-xs font-semibold flex items-center gap-2"
                >
                    Watch <FaPlay fontSize={10} />
                </button>
            </div>
        </div>
        </div>
    </div>
  );
};

export default ProjectPreview;
