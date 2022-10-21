import { ProjectItem } from "./ProjectItem";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { useState } from "react";
import { BsChevronLeft, BsChevronRight, BsGear } from "react-icons/bs";
import NlwProject from "../../assets/nlw9-project.png";
import MoviesProject from "../../assets/movies-project.png";
import ConcursoProject from "../../assets/concurso-project.png";
import Tcc from "../../assets/tcc.png";

interface InterfaceProject {
  id: number;
  texto: string;
  image: string;
  linkSite: string;
  visitSite: string;
}

export function Projetos() {
  const [projectData] = useState<InterfaceProject[]>([
    {
      id: 1,
      texto:
        "Projeto Movies utilizando React, NextJS, API de filmes (TMDB), Prisma, Html, Typescript, PlanetScale, Tailwind.",
      image: `${MoviesProject}`,
      visitSite: "Visite o site",
      linkSite: "http://movies-next-react.vercel.app",
    },
    {
      id: 2,
      texto:
        "Projeto para criação de anúncio de jogos da twitch em busca de players utilizando React, Html5, Node, Typescript, Mysql, Tailwind.",
      image: `${NlwProject}`,
      visitSite: "Visite o código",
      linkSite: "https://github.com/RodrigoLinniker/nlw-esports-full-web",
    },
    {
      id: 3,
      texto:
        "Concurso de redação de escolas públicas e penintenciárias utilizando React, Html5, Laravel, Typescript, Mysql, Tailwind, Material UI.",
      image: `${ConcursoProject}`,
      visitSite: "Visite o site",
      linkSite: "https://concursoderedacao.dpu.def.br/",
    },
    {
      id: 4,
      texto:
        "Projeto para controle de produtos de Microempreendedores Designer utilizando React, Html5, Node, Typescript, Mysql, CSS3,Material UI.",
      image: `${Tcc}`,
      visitSite: "Visite o código",
      linkSite:
        "https://github.com/RodrigoLinniker/tcc-2021-api-reactjs-nodejs",
    },
  ]);

  return (
    <div
      className="flex w-full md:bg-blue-150/5 h-[662px] mt-[87px] p-1 max-md:mt-[240px]"
      id="projects"
    >
      <div
        className="w-full max-w-[1240px] h-[546px] m-auto flex flex-col"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="flex flex-row gap-2 items-center justify-center">
          <BsGear className="text-red" />
          <h1 className="text-red text-center text-xl font-medium">Projetos</h1>
        </div>
        <h1 className="text-gray-100 dark:text-white text-center text-lg mt-[30px]">
          Alguns dos projetos que fiz / participei:
        </h1>
        <div className="w-full flex max-sm:max-w-sm sm:max-w-sm md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] mx-auto items-center justify-center mt-[30px]">
          <div className="button-1-prev cursor-pointer">
            <BsChevronLeft size={40} className="text-gradient1" />
          </div>
          <Swiper
            slidesPerView={1}
            navigation={{
              nextEl: ".button-1-next",
              prevEl: ".button-1-prev",
            }}
            slidesPerGroup={1}
            spaceBetween={1}
            loopFillGroupWithBlank={true}
            breakpoints={{
              1280: {
                spaceBetween: 5,
                slidesPerView: 3,
                slidesPerGroup: 3,
              },
              1024: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
            }}
            modules={[Pagination, Navigation]}
          >
            {projectData.map((projectData: InterfaceProject) => (
              <SwiperSlide key={projectData.id}>
                <ProjectItem
                  image={projectData.image}
                  texto={`${projectData.texto}`}
                  visitSite={projectData.visitSite}
                  linkSite={projectData.linkSite}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="button-1-next cursor-pointer">
            {" "}
            <BsChevronRight size={40} className="text-gradient1" />
          </div>
        </div>
      </div>
    </div>
  );
}
