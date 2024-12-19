/* eslint-disable react/prop-types */
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useProject } from "../context/projectContext";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const ProjectOpener = ({ showCaseName }) => {
  const { projectData } = useProject();

  const navigate = useNavigate();
  const serviceContainer = useRef();

  const showCaseProject = projectData
    .filter((item) => item.category === showCaseName)
    .sort((a, b) => new Date(String(b.created_at)).getTime() - new Date(String(a.created_at)).getTime())
    .slice(0, 3);

  useGSAP(
    () => {
      let serviceTl = gsap.timeline({
        scrollTrigger: {
          trigger: serviceContainer.current,
          // markers: true,
          start: "top top",
          end: "20% top",
          scrub: 1,
          pin: true,
        },
      });

      serviceTl
        .to(
          "#top",
          {
            top: "-50%",
          },
          "a"
        )
        .to(
          "#bottom",
          {
            bottom: "-50%",
          },
          "a"
        )
        .to(
          "#top-h",
          {
            top: "70%",
          },
          "a"
        )
        .to(
          "#bottom-h",
          {
            bottom: "-40%",
          },
          "a"
        )
        .to(
          "#content",
          {
            marginTop: "0%",
          },
          "a"
        );
    },
    { scope: serviceContainer }
  );

  const handleClickOnImg = (id) => {
    navigate(`/projectPreview/${id}`);
  }

  const handleClickOnViewAll = () => {
    navigate(`/viewall/${showCaseName}`)
  }

  return (
    <section
      ref={serviceContainer}
      id="services"
      className="relative w-full h-screen font-montserrat overflow-hidden bg-black dark:bg-[#2f2f2f]"
    >
      <div
        id="top"
        className="absolute w-full h-1/2 top-0 bg-lightBg dark:bg-darkBg overflow-hidden z-10"
      >
        <h1
          id="top-h"
          className="uppercase font-extrabold md:font-bold text-lightPrimaryText dark:text-darkPrimaryText text-[10vh] md:text-[33.3vh] absolute bottom-0 md:top-1/2 md:bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 md:-translate-y-1/2"
        >
          {showCaseName}
        </h1>
      </div>

      <div id="center" className="relative w-full h-full">
        <div
          id="content"
          className="absolute w-full h-full flex flex-col justify-center items-center mt-[80vh]"
        >
          <h1 className="text-3xl font-medium md:text-5xl text-white text-center">
            Projects
          </h1>
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            {showCaseProject.map(({ id, imgpath }) => (
              <div key={id} className="relative w-[300px] h-[170px]">
                <div
                  onClick={() => handleClickOnImg(id)}
                  className="w-full h-full bg-slate-300 rounded-xl overflow-hidden hover:scale-105 ease-linear duration-200"
                >
                  <img
                    src={imgpath}
                    alt="img"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
          <button 
            onClick={handleClickOnViewAll}
            className="text-lightPrimaryText bg-darkBtnBg p-2 font-semibold rounded-lg text-sm mt-4"
          >
            View all
          </button>
        </div>
      </div>

      <div
        id="bottom"
        className="absolute w-full h-1/2 bottom-0 bg-lightBg dark:bg-darkBg overflow-hidden"
      >
        <h1
          id="bottom-h"
          className="uppercase font-extrabold md:font-bold text-lightPrimaryText dark:text-darkPrimaryText text-[10vh] md:text-[33.3vh] absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          {showCaseName}
        </h1>
      </div>
    </section>
  );
};

export default ProjectOpener;
