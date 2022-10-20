import { Link } from "react-scroll";
import MolduraFoto from "./MolduraFoto";

export function Sobre() {
  return (
    <div
      id="sobre"
      className="w-full max-w-[1245px] h-[497.44px] mx-auto mt-[100px] max-md:mt-[135px] flex flex-col-reverse md:flex-row justify-between max-md:items-center p-1"
    >
      <div className="w-full max-w-[558px] h-full max-h-[201px] mt-[148.22px] max-md:mt-[47px] flex-col">
        <h1 className="font-semibold text-3xl md text-navy dark:text-red max-md:text-center">
          Olá! Eu sou Rodrigo Linniker
        </h1>
        <h1 className="font-normal text-lg mt-[30px] text-justify max-md:text-center">
          &nbsp;&nbsp;&nbsp;Desenvolvedor de sofware, formado em Ciência da
          Computação. Aqui você conhecerá minha jornada como desenvolvedor de
          web.
        </h1>

        <Link
          to="contato"
          spy={true}
          smooth={true}
          offset={-175}
          duration={500}
        >
          <button className="py-2 px-4 rounded-[4px] bg-red hover:bg-red-600 shadow-custom mt-[30px] max-md:mx-auto max-md:flex">
            <h1 className="text-white">Contrate-me</h1>
          </button>
        </Link>
      </div>
      <div className="w-full max-w-[257px] md:max-w-[350px] lg:max-w-[441px] h-full">
        <MolduraFoto />
      </div>
    </div>
  );
}
