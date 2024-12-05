import { backendData, frontendData, toolsData } from "../data.json";
import SkillLogo from "./SkillLogo";

const Skills = () => {
  
  return (
    <div className="">
      <div className="w-full">
        <SkillLogo skillData={frontendData} showCaseName="Frontend" />
      </div>
      <div className="w-full mt-7">
        <SkillLogo skillData={backendData} showCaseName="Backend" />
      </div>
      <div className="w-full mt-7">
        <SkillLogo skillData={toolsData} showCaseName="Tools & Technology" />
      </div>
    </div>
  );
};

export default Skills;
