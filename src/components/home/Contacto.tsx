import React, { FormEvent, useState } from "react";
import { DotLoader } from "react-spinners";

import Image from "../../images/contacto.png";
import Textura from "../../images/contactoTextura.svg";
import Button from "../shared/Button";
import {
  selectSending,
  selectSent,
  sendContact,
} from "../../features/api/contactSlice";
import { useAppDispatch } from "../../hooks";
import { useSelector } from "react-redux";

const Contacto = () => {
  const dispatch = useAppDispatch();
  const sending = useSelector(selectSending);
  const sent = useSelector(selectSent);

  const [form, setForm] = useState({
    name: "",
    mail: "",
    msg: "",
  });

  const handleForm = (e: FormEvent) => {
    e.preventDefault();
    console.log("HPO");
    dispatch(sendContact(form));
    console.log("HPO");
  };
  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.currentTarget.name]: e.currentTarget.value });
  };

  return (
    <div id="contacto" className="relative">
      <div className="bg-primary w-[20px] h-[20px] sm:w-[32px] sm:h-[32px] rounded-full absolute left-8 sm:left-1/2 sm:-translate-x-1/2 top-8 sm:top-16 sm:-ml-48"></div>
      <img src={Textura} className="-z-10 mt-32 md:mt-72" alt="contacto" />
      <div className="bg-primary w-full h-[800px] md:h-48"></div>
      <img
        src={Image}
        className="absolute left-1/2 -translate-x-1/2 top-12 md:top-24 z-0 w-full sm:w-[477px]"
        alt="contacto"
      />
      <div className="absolute top-72 md:top-96 left-1/2 -translate-x-1/2 text-center bg-white py-12 px-4 md:px-16 xl:px-24 mx-auto w-[calc(100%-2rem)] lg:w-[992px]">
        <p className="text-primary text-xl sm:text-2xl">
          ¿Te interesa fortalecer a tu OSC?
        </p>
        <p className="text-primary text-xl sm:text-2xl">Contáctanos</p>
        <form className="" onSubmit={handleForm}>
          <div className="w-full flex flex-col md:flex-row gap-4 md:gap-16 pb-4 md:pb-8">
            <div className="w-full md:w-1/2">
              <input
                className="text-gray border-b border-primary w-full py-4 outline-none placeholder:text-gray"
                placeholder="Nombre"
                name="name"
                onChange={handleChange}
              />
            </div>
            <div className="w-full md:w-1/2">
              <input
                className="text-gray border-b border-primary w-full py-4 outline-none placeholder:text-gray"
                placeholder="Email"
                name="mail"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row gap-4 md:gap-16 items-center pb-8">
            <div className="w-full md:w-1/2">
              <input
                className="text-gray border-b border-primary w-full py-4 outline-none placeholder:text-gray"
                placeholder="Mensaje"
                name="msg"
                onChange={handleChange}
              />
            </div>
            <div className="w-full md:w-1/2 pt-4 md:pt-0">
              {sending ? (
                <DotLoader color="#6A2978" size={30} />
              ) : (
                <>
                  {sent ? (
                    <p className="text-primary font-lg">Mensaje enviado</p>
                  ) : (
                    <Button
                      variant={"white"}
                      className="md:float-left"
                      type="submit"
                    >
                      Enviar
                    </Button>
                  )}
                </>
              )}
            </div>
          </div>
        </form>
        <div className="flex flex-col md:flex-row text-primary mt-8 text-left gap-8">
          <div className="md:w-1/3">
            Av.Heroico Colegio Militar, No. 4700 Col. Nombre de Dios. C.P. 31156
            Chihuahua, Chihuahua, México.
          </div>
          <div className="md:w-1/3">
            <span className="font-bold">Horarios:</span>
            <br />
            Lunes a viernes
            <br />
            <span className="font-bold">8:00 A.M. - 5:00 P.M.</span>
          </div>
          <div className="md:w-1/3">
            <span className="font-bold">Contacto:</span>
            <br />
            <a href="mailto:contacto@fortalecimiento.org">
              contacto@fortalecimiento.org
            </a>
            <br />
            <span className="font-bold">(614) 4242238(614) · 4240305</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
