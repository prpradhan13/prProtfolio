/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { MdKeyboardArrowLeft } from "react-icons/md";

const OpenSSBox = ({ imgCategory, imgPath, setOpenSS }) => {
  const [loading, setLoading] = useState(new Array(imgPath?.length).fill(true));

  useEffect(() => {
    // Prevent scrolling when the component is mounted
    document.body.style.overflow = "hidden";

    // Re-enable scrolling when the component is unmounted
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleImageLoad = (index) => {
    setLoading((prev) => {
      const updatedLoading = [...prev];
      updatedLoading[index] = false; // Mark the image as loaded
      return updatedLoading;
    });
  };

  console.log(imgPath);

  if (!imgPath || imgPath === null) {
    return (
      <div className="dark:bg-[#252525d4] bg-[#2a2a2ab9] w-full h-full flex justify-center items-center fixed top-0 left-0 px-5">
        <div className="">
          <button
            onClick={() => setOpenSS(false)}
            className="top-0 right-5 text-red-500"
          >
            <IoClose fontSize={36} />
          </button>
          <h1 className="text-white text-5xl font-medium">
            Opps! No Screenshots
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="dark:bg-[#252525d4] bg-[#2a2a2ab9] w-full h-full flex justify-center items-center fixed top-0 left-0 px-5">
      <div className="bg-[#000] w-full lg:w-[70vw] h-[91vh] rounded-xl p-5 md:px-5 md:py-10 overflow-auto relative">
        <button
          onClick={() => setOpenSS(false)}
          className="flex items-center gap-2 font-medium text-white"
        >
          <MdKeyboardArrowLeft fontSize={28} />
          Screenshots
        </button>

        <div
          className={`grid grid-cols-1 ${
            imgCategory === "web" ? "md:grid-cols-2 lg:grid-cols-2" : ""
          } md:grid-cols-2 lg:grid-cols-3 md:place-items-center gap-x-3 gap-y-6 mt-5`}
        >
          {imgPath.map((value, i) => (
            <div
              key={i}
              className={`${
                imgCategory === "web"
                  ? "w-full md:w-[350px] lg:w-[400px]"
                  : imgCategory === "mobile"
                  ? "h-[90vh] md:h-[70vh]"
                  : ""
              } bg-slate-300 rounded-lg overflow-hidden`}
            >
              {loading[i] && (
                <div className="absolute inset-0 bg-[#000] flex justify-center items-center text-white">
                  <div className="loader"></div>
                </div>
              )}
              <img
                src={value}
                alt="imgSS"
                className={`object-cover w-full h-full ${
                  loading[i] ? "hidden" : ""
                }`}
                onLoad={() => handleImageLoad(i)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OpenSSBox;
