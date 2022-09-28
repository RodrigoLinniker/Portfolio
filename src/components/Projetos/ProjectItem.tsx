import { AiOutlineGlobal } from "react-icons/ai";

interface ProjectItemProps {
  texto: string;
  image: string;
  linkSite: string;
  visitSite: string;
}
export function ProjectItem({
  texto,
  image,
  linkSite,
  visitSite,
}: ProjectItemProps) {
  return (
    <div className="h-[431px] w-[381px] max-md:h-[308px] max-md:w-[282px] max-xl:w-[320px] max-xl:h-[375px] bg-gradient-to-r from-gradient2 to-gradient1 p-1 m-auto">
      <div className="w-full h-full max-md:h-[300px] max-md:w-[274px] flex bg-white dark:bg-[#2A2634]">
        <div className="w-full max-w-[381px] h-full max-h-[431px]">
          <a href={linkSite}>
            <div>
              <img src={image} alt="Image Project" />
            </div>
          </a>
          <div>
            <h1
              className="text-gray-100 text-sm lg:text-[15px] dark:text-white font-normal
             mt-[20px] text-center"
            >
              {texto}
            </h1>
            <div className=" mt-[15px] flex flex-row justify-center gap-2">
              <AiOutlineGlobal size={24} color={"#0571AD"} />{" "}
              <a href={linkSite}>
                <h1 className="text-blue-200 font-normal">{visitSite}</h1>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
