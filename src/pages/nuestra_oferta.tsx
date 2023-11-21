import * as React from "react";
import { useInView } from "react-intersection-observer";
import Layout from "../components/layout/Layout";
import { HeadFC, PageProps, navigate } from "gatsby";
import Page from "../components/layout/Page";
import MarkedText from "../components/shared/MarkedText";
import Button from "../components/shared/Button";

import Img from "../images/oferta/img.svg";
import Textura1 from "../images/oferta/textura1.svg";
import Textura2 from "../images/oferta/textura2.svg";
import Logo1 from "../images/oferta/logo1.svg";
import Logo2 from "../images/oferta/logo2.svg";
import Fortalecimiento from "../components/oferta/Fortalecimiento";

const Oferta: React.FC<PageProps> = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  return (
    <Layout>
      <Fortalecimiento />
      <Page className="py-6 sm:py-12">
        <h2 className="text-center text-2xl sm:text-3xl mt-16 sm:mt-0">
          Conoce nuestros servicios <br />
          <span className="font-bold text-primary">
            que ayudan a fortalecer tu organización:
          </span>
        </h2>
        <div className="mt-12 flex flex-col sm:flex-row gap-16">
          <div className="w-full sm:w-2/3 sm:order-2">
            <ul className="list-disc text-2xl sm:text-3xl font-light">
              <li className="mb-6">
                <MarkedText>Programa 360</MarkedText>
              </li>
              <li className="mb-6">
                <MarkedText>Estrategias de capacitación</MarkedText>
              </li>
              <li className="mb-6">
                <MarkedText>Asesoría y consultoría</MarkedText>
              </li>
              <li className="mb-6">
                <MarkedText>Certificaciones</MarkedText>
                <div className="flex flex-col sm:flex-row gap-8 py-4">
                  <img className="mx-auto sm:mx-0" src={Logo2} alt="" />
                  <img className="mx-auto sm:mx-0" src={Logo1} alt="" />
                </div>
              </li>
              <li className="mb-6">
                <MarkedText>Responsabilidad empresarial</MarkedText>
              </li>
            </ul>
            <p className="font-bold text-primary text-sm sm:text-base my-6">
              Descarga el documento si quieres conocer más acerca de nuestras
              opciones de membresía.
            </p>
            <div className="text-center sm:text-left">
              <Button variant="white" className="mt-4">
                Descárgalo aquí
              </Button>
            </div>
          </div>
          <div className="w-full sm:w-1/3 sm:order-1">
            <img className="mx-auto" src={Img} alt="" />
            <div ref={ref} className="relative mt-12 sm:mt-20">
              <img
                className={`mx-auto transition-all duration-1000 delay-100 ${
                  inView ? "opacity-100" : "opacity-0 translate-y-32"
                }`}
                src={Textura1}
                alt=""
              />
              <img
                className={`absolute top-[calc(100%-80px)] left-1/2 -translate-x-1/2 w-auto sm:w-24 md:w-32 lg:w-auto transition-all duration-1000 delay-300 ${
                  inView ? "opacity-100" : "opacity-0 translate-y-32"
                }`}
                src={Textura2}
                alt=""
              />
            </div>
          </div>
        </div>
      </Page>
      <div className="bg-complementary">
        <div className="container text-center pb-28 pt-36 sm:py-28">
          <p className="font-bold text-2xl sm:text-3xl text-primary">
            <MarkedText className="font-normal text-black">
              Acércate al CFOSC e impulsa tu causa
            </MarkedText>
            <br />
            más lejos de lo que nunca imaginaste.
          </p>
          <div className="text-center">
            <Button
              variant="complementary"
              className="mt-8"
              onClick={() => navigate("/#contacto")}
            >
              Contacto
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Oferta;

export const Head: HeadFC = () => <title>Nuestra Oferta</title>;
