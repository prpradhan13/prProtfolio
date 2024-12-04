/* eslint-disable react/prop-types */
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const SkillLogo = ({ skillData, showCaseName }) => {
  const skillSection = useRef();

  useGSAP(
    () => {
      let tl = gsap.timeline();
      tl.from("#skillHead", {
        x: -50,
        duration: 0.5,
        stagger: 0.15,
        opacity: 0,
      }).from("#skillLogo", {
        y: -50,
        duration: 0.5,
        stagger: 0.15,
        opacity: 0,
      });
    },
    { scope: skillSection }
  );

  return (
    <div ref={skillSection} className="font-montserrat bg-darkBtnBg dark:bg-lightSecondaryText rounded-xl p-4">
      <h1 id="skillHead" className="dark:text-darkPrimaryText text-lightPrimaryText font-bold text-xl">
        {showCaseName}
      </h1>

      {/* Horizontal Line */}
      <div className="mt-1 w-16 h-1 bg-[#797979] dark:bg-gray-300 rounded-full"></div>

      <div className="flex flex-wrap gap-6 mt-4">
        {skillData.map((item) => (
          <div id="skillLogo" key={item.id} className="flex flex-col items-center">
            <div className="w-12 h-12 flex justify-center items-center">
              <img 
                src={item.imgPath} 
                alt={item.name} 
              />
            </div>
            <h2 className="dark:text-darkSecondaryText text-lightPrimaryText capitalize font-medium text-xs md:text-sm">
              
              {item.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillLogo;
