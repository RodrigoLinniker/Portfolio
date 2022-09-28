import { AiFillHtml5 } from "react-icons/ai";
import Hexagono from "../../assets/polygon.svg";
import { ReactElement } from "react";

interface PropsSkillOptions {
  children: ReactElement;
  text: string;
}
export function SkillsOptions({ children, text }: PropsSkillOptions) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative rounded-lg overflow-hidden">
        <img src={Hexagono} alt="hexagono" className="w-[64.95px] h-[75px]" />

        <div className="w-full px-2 py-3 absolute bottom-0 left-0 right-0">
          {children}
        </div>
      </div>
      <strong className="text-black dark:text-white text-center">{text}</strong>
    </div>
  );
}
