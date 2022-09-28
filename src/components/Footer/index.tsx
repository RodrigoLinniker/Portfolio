import { BsLinkedin, BsInstagram, BsFacebook, BsGithub } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

export function Footer() {
  return (
    <div
      data-testid="button"
      className="w-full flex flex-row bg-wave bg-cover mt-[113px] h-[444px] max-md:h-[293px] max-md:mt-[350px] p-3"
    >
      <div className="w-full m-auto max-w-[1240px] h-full max-h-[93px] flex flex-row justify-between mt-[176px] max-md:mt-[40px] items-center max-md:flex-col max-md:gap-[62px]">
        <div className="flex flex-col w-[315px] h-[93px]">
          <h1 className="text-white text-xl font-medium ">
            Links das minhas redes sociais:
          </h1>
          <div className="flex flex-row gap-[65px] mt-[34px]">
            <a href="https://www.linkedin.com/in/rodrigo-linniker-a34769163/">
              <BsLinkedin
                size={30}
                className="text-white hover:text-white/60"
              />
            </a>
            <a href="https://www.instagram.com/rodrigo_linniker">
              <BsInstagram
                size={30}
                className="text-white hover:text-white/60"
              />
            </a>
            <a href="mailto:rodrigo_linnik123@hotmail.com">
              <AiOutlineMail
                size={30}
                className="text-white hover:text-white/60"
              />
            </a>
            <a href="https://www.facebook.com/rodrigo.linniker/">
              <BsFacebook
                size={30}
                className="text-white hover:text-white/60"
              />
            </a>
          </div>
        </div>
        <div className="flex flex-col w-[283px] items-center h-[78px]">
          <h1 className="text-white text-xl font-medium text-center">
            Mais projetos no Github
          </h1>
          <a href="https://github.com/RodrigoLinniker">
            <div className="mt-[19px] flex flex-row gap-4">
              <BsGithub size={30} className="text-white hover:text-white/60" />

              <h1 className="text-white text-lg ">
                <span className="text-blue-100 hover:text-blue-150">
                  @RodrigoLinniker
                </span>
              </h1>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
