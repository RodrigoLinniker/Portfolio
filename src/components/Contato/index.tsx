import Contact from "../../assets/contato.svg";
import { IoIosPaperPlane } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { useState } from "react";
import { FadeLoader } from "react-spinners";

interface ContateMe {
  name: string;
  email: string;
  message: string;
}

const schema = yup
  .object()
  .shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    message: yup.string().required("Mensagem obrigatória"),
  })
  .required();

export function Contato() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ContateMe>({
    resolver: yupResolver(schema),
  });

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: ContateMe) => {
    const templateParams = {
      from_name: data.name,
      message: data.message,
      email: data.email,
    };

    try {
      setLoading(true);
      await emailjs.send(
        import.meta.env.VITE_API_SERVICE_ID,
        import.meta.env.VITE_API_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_API_PUBLIC_KEY
      );
      setLoading(false);

      toast.success("Mensagem Enviada com sucesso");
      setValue("name", "");
      setValue("email", "");
      setValue("message", "");
    } catch (error) {
      setLoading(false);
      toast.error(`Error ${error}, mensagem não enviada`);
    }
  };

  return (
    <div
      id="contato"
      className="w-full max-w-[1240px] h-[471px] mt-[77px] mx-auto flex flex-col p-1 max-md:-mt-20"
    >
      <div className="flex flex-row gap-2 items-center justify-center">
        <AiOutlineMail className="text-red" />
        <h1 className="text-red text-center text-xl font-medium">Contate-me</h1>
      </div>
      <div className="flex flex-row justify-between mt-[30px] max-md:flex-col items-center ">
        <div>
          {" "}
          <img
            src={Contact}
            className="max-md:w-[250px] max-md:h-[250px]"
            alt="Contate-me"
          />
        </div>
        <div className="w-full max-w-[613px] h-[348px] max-md:w-[323px] max-md:h-[300px] ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-1">
              <input
                {...register("name")}
                name="name"
                type="text"
                placeholder="Digite o seu nome"
                className="w-full max-w-[613px] px-5 h-[53px] rounded-[8px] border-[1px] text-black  box-border shadow-custom2 dark:shadow-custom3 focus:border-purple dark:focus:border-blue-150 focus:outline-none"
              />
              <span className="text-red p-1">{errors.name?.message}</span>
            </div>
            <div className="flex flex-col gap-1">
              <input
                {...register("email")}
                name="email"
                type="email"
                placeholder="Digite o seu email"
                className="w-full max-w-[613px] px-5 h-[53px] rounded-[8px] border-[1px] text-black  box-border shadow-custom2 dark:shadow-custom3 focus:border-purple dark:focus:border-blue-150 focus:outline-none"
              />
              <span className="text-red p-1">{errors.email?.message}</span>
            </div>

            <div className="flex flex-col gap-1">
              <textarea
                {...register("message")}
                name="message"
                placeholder="Digite a mensagem..."
                className="w-full max-w-[613px] px-5 py-3 h-[158px] rounded-[8px] border-[1px] text-black  box-border mt-[43px] shadow-custom2 dark:shadow-custom3 focus:border-purple dark:focus:border-blue-150 focus:outline-none resize-none"
              />
              <span className="text-red px-1">{errors.message?.message}</span>
            </div>
            <div className="flex flex-row mt-[43px] items-center justify-center gap-3">
              <div>
                <button className="bg-purple hover:bg-navy rounded-[4px] justify-center items-center w-[168px] h-[51px] flex flex-row m-auto shadow-custom gap-4">
                  <h1 className="text-white text-lg text-center font-normal">
                    Enviar
                  </h1>
                  <IoIosPaperPlane size={24} />
                </button>
              </div>
              <div>
                <FadeLoader
                  color="#4F47C8"
                  loading={loading}
                  speedMultiplier={1}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
