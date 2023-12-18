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
import ImageApi from "../shared/ImageApi";

const Contacto = ({
  title,
  address,
  schedule,
  contact,
  image,
}: {
  title: string;
  address: string;
  schedule: string;
  contact: string;
  image: number;
}) => {
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
      <ImageApi
        id={image}
        alt={""}
        className="absolute left-1/2 -translate-x-1/2 top-12 md:top-24 z-0 w-full sm:w-[477px]"
      />
      <div className="absolute top-72 md:top-96 left-1/2 -translate-x-1/2 text-center bg-white py-12 px-4 md:px-16 xl:px-24 mx-auto w-[calc(100%-2rem)] lg:w-[992px]">
        <p className="text-primary text-xl sm:text-2xl">
          {title.split("  ")[0]}
        </p>
        <p className="text-primary text-xl sm:text-2xl">
          {title.split("  ")[1]}
        </p>
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
          <div className="md:w-1/3">{address}</div>
          <div
            className="md:w-1/3"
            dangerouslySetInnerHTML={{ __html: schedule }}
          />
          <div
            className="md:w-1/3"
            dangerouslySetInnerHTML={{ __html: contact }}
          />
        </div>
      </div>
    </div>
  );
};

export default Contacto;
