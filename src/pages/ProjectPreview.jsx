import { useParams } from "react-router-dom";
import { IoIosDesktop } from "react-icons/io";
import { CiMobile3 } from "react-icons/ci";

const ProjectPreview = () => {
  const { id } = useParams();

  return (
    <div className="w-full h-screen flex justify-center bg-lightBg dark:bg-darkBg">
        <div className="w-full md:w-[40vw] h-full px-5 font-montserrat flex flex-col justify-center gap-10">
        {/* Desktop Part */}
        <div className="w-full flex items-center gap-4">
            <div className="flex justify-center items-center text-black dark:text-darkBtnBg">
            <IoIosDesktop fontSize={200} />
            </div>
            <div className="">
            <h1 className="text-base font-bold text-black dark:text-darkPrimaryText">Desktop View</h1>
            <p className="leading-4 text-sm font-medium text-lightSecondaryText dark:text-darkSecondaryText mt-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
                voluptatum accusamus error laborum ipsam.
            </p>
            </div>
        </div>

        {/* Mobile Part */}
        <div className="w-full flex items-center gap-4">
            <div className="flex justify-center items-center text-black dark:text-darkBtnBg">
            <CiMobile3 fontSize={180} />
            </div>
            <div className="">
            <h1 className="text-base font-bold text-black dark:text-darkPrimaryText">Mobile View</h1>
            <p className="leading-4 text-sm font-medium text-lightSecondaryText dark:text-darkSecondaryText mt-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
                voluptatum accusamus error laborum ipsam.
            </p>
            </div>
        </div>
        </div>
    </div>
  );
};

export default ProjectPreview;
