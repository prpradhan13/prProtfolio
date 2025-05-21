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
        scale: 0,
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
    <div 
      ref={skillSection} 
      className="font-montserrat bg-darkBtnBg dark:bg-lightSecondaryText rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <h1 
        id="skillHead" 
        className="text-center text-black dark:text-slate-100 font-bold text-xl md:text-2xl tracking-wide"
      >
        {showCaseName}
      </h1>

      {/* Horizontal Line */}
      <div className="mt-3 mx-auto w-20 h-1 bg-gradient-to-r from-[#000] to-[#a3a3a3] rounded-full"></div>

      <div className="flex flex-wrap justify-center gap-8 mt-8">
        {skillData.map((item) => (
          <div 
            id="skillLogo" 
            key={item.id} 
            className="flex flex-col items-center group"
          >
            <div className="w-12 h-12 md:w-14 md:h-14 flex justify-center items-center bg-white/10 dark:bg-white/5 rounded-xl p-2 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
              <img 
                src={item.imgPath} 
                alt={item.name}
                className="w-full h-full object-contain" 
              />
            </div>
            <h2 className="mt-2 text-slate-500 dark:text-slate-300 capitalize font-medium text-sm md:text-base group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">
              {item.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillLogo;
