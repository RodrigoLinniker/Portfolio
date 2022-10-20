import LogoSkill from "../../assets/skills.svg";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiMysql } from "react-icons/di";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SkillsOptions } from "./SkillsOptions";
import { BsListCheck } from "react-icons/bs";

export function Skills() {
  return (
    <div
      id="skills"
      className="w-full max-w-[1240px] h-[408px] mt-[117.56px] md:max-lg:mt-[40px]   mx-auto"
    >
      <div className="flex flex-row gap-2 items-center justify-center">
        <BsListCheck className="text-red" />
        <h1 className="text-red text-center text-xl font-medium">Skills</h1>
      </div>
      <div className="flex md:flex-row justify-between mt-[30px] flex-col-reverse max-md:items-center">
        <div>
          <h1 className="text-gray-100 dark:text-white text-lg text-start max-md:text-center ">
            Tenho experiência profissional nas seguintes tecnologias web
          </h1>
          <div className="mt-10 grid grid-cols-4 max-md:grid-cols-3">
            <SkillsOptions text="Html 5">
              <AiFillHtml5 size={49} color={"#E44D26"} />
            </SkillsOptions>
            <SkillsOptions text="CSS3">
              <DiCss3 size={49} color={"#2062AF"} />
            </SkillsOptions>
            <SkillsOptions text="ReactJS">
              <FaReact size={49} color={"#61DBFB"} />
            </SkillsOptions>
            <SkillsOptions text="NodeJS">
              <FaNodeJs size={49} color={"#3C873A"} />
            </SkillsOptions>
            <SkillsOptions text="Typescript">
              <SiTypescript size={49} className="px-1" color={"#2F74C0"} />
            </SkillsOptions>
            <SkillsOptions text="Javascript">
              <TbBrandJavascript size={49} color={"#EFD81D"} />
            </SkillsOptions>
            <SkillsOptions text="MySQL">
              <DiMysql size={49} color={"#1D4A65"} />
            </SkillsOptions>
            <SkillsOptions text="Tailwindcss">
              <SiTailwindcss size={49} color={"#42A4AD"} />
            </SkillsOptions>
          </div>
        </div>

        <div>
          {" "}
          <img
            src={LogoSkill}
            alt="Skill logo"
            className="w-full h-full max-md:max-w-[280px] max-md:max-h-[200px] max-lg:max-w-[350px] max-lg:max-h-[315px]"
          />
        </div>
      </div>
    </div>
  );
}
