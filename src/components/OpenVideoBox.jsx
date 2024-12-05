/* eslint-disable react/prop-types */
import { IoClose } from "react-icons/io5";

const OpenVideoBox = ({ videoPath, category, setOpenVdo }) => {
  return (
    <div className="dark:bg-[#2a2a2ab9] bg-[#2a2a2ab9] w-full h-full flex flex-col justify-center items-center absolute top-0 left-0">
      <div className="relative p-5">
        <button
          onClick={() => setOpenVdo(false)}
          className="absolute top-0 right-5 text-white"
        >
          <IoClose fontSize={30} />
        </button>
        <div
          className={`rounded-lg w-full ${
            category === "mobile"
              ? "h-[85vh]"
              : category === "web"
              ? "h-[40vh]"
              : ""
          } overflow-hidden mt-5 flex`}
        >
          <video src={videoPath} controls className="w-full h-full object-cover"></video>
        </div>
      </div>
    </div>
  );
};

export default OpenVideoBox;
