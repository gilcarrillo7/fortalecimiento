import React, { useState } from "react";
import { type HeadFC, type PageProps } from "gatsby";
import { useInView } from "react-intersection-observer";
import ReactPlayer from "react-player";
import Layout from "../components/layout/Layout";
import Page from "../components/layout/Page";

import MarkedText from "../components/shared/MarkedText";
import Textura1 from "../images/quienes/textura1.svg";
import Preview from "../images/quienes/preview.svg";
import PlayIcon from "../images/quienes/playIcon.svg";
import Half from "../images/quienes/half.svg";
import Video from "../images/quienes/video.gif";
import Ico1 from "../images/quienes/ico_1.svg";
import Ico2 from "../images/quienes/ico_2.svg";
import Ico3 from "../images/quienes/ico_3.svg";
import Ico4 from "../images/quienes/ico_4.svg";
import Ico5 from "../images/quienes/ico_5.svg";
import Ico6 from "../images/quienes/ico_6.svg";
import Ico7 from "../images/quienes/ico_7.svg";
import Ico8 from "../images/quienes/ico_8.svg";
import IcoMapa from "../images/quienes/ico_mapa.svg";

import File from "../assets/2022.pdf";
import Consejo from "../components/quienes/Consejo";

const Historia = ({ item, index }: { item: any; index: number }) => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <div ref={ref} className="py-8 text-center">
      {item.anio === 0 ? (
        <span className="block w-4 h-4 bg-secundary rounded-full mx-auto mb-8"></span>
      ) : (
        <MarkedText className="text-3xl sm:text-5xl text-blacj font-bold text-center mb-8">
          {item.anio}
        </MarkedText>
      )}
      <div className="relative flex md:block">
        <p
          className={`text-left ${index % 2 === 0 ? "order-1" : "order-2"}`}
          dangerouslySetInnerHTML={{ __html: item.text }}
        />
        <img
          src={item.img}
          className={`md:absolute md:top-1/2 w-[100px] sm:w-[150px] ${
            index % 2 === 0
              ? "md:left-full ml-4 order-2"
              : "md:right-full mr-4 order-1"
          } transition-all duration-1000 delay-100 ${
            inView
              ? "opacity-100 md:-translate-y-1/2"
              : "opacity-0 translate-y-full"
          }`}
          alt={`${item.anio}`}
        />
      </div>
    </div>
  );
};

const QuienesSomos: React.FC<PageProps> = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  const historia = [
    {
      anio: 2005,
      text: "<span class='text-primary font-bold'><span class='text-xl'>1,857</span> integrantes de OSC de <span class='text-xl'>10</span> municipios</span> de Chihuahua se beneficiaron con servicios de capacitación.",
      img: Ico1,
    },
    {
      anio: 2010,
      text: "<span class='text-primary font-bold'>Aperturamos</span> el Centro para el Fortalecimiento en la ciudad de San Luis Potosí.",
      img: IcoMapa,
    },
    {
      anio: 2011,
      text: "<span class='text-primary font-bold'>Acompañamos la apertura</span> del Centro para el Fortalecimiento en Obregón, Sonora, como una <span class='text-primary font-bold'>alianza</span> entre la Fundación Tichi Muñoz y el Tec de Monterrey campus Obregón.",
      img: Ico2,
    },
    {
      anio: 2015,
      text: "La Junta de Asistencia Social Privada y la Fundación del Dr. Simi <span class='text-primary font-bold'>nos otorgaron el Premio Estatal a la Filantropía.</span>",
      img: Ico3,
    },
    {
      anio: 2018,
      text: "Acompañamos de forma directa a <span class='text-primary font-bold text-xl'>191</span> representantes de OSC y de forma indirecta a más de <span class='text-primary font-bold'>177,104</span> personas usuarias.",
      img: Ico4,
    },
    {
      anio: 2021,
      text: "<span class='text-primary font-bold'>Primer centro certificador de habla hispana en el mundo</span> para replicar la metodología para la gestión de proyectos de desarrollo (Project DPro). De la organización internacional Project Management for NGOs (<span class='text-primary font-bold'>PM4NGOs</span>).",
      img: Ico5,
    },
    {
      anio: 2022,
      text: "Tuvimos un alcance de <span class='text-primary font-bold text-xl'>17 estados</span> de México. Con el financiamiento de Rainforest Alliance, diseñamos e implementamos programas de capacitación para organizaciones de <span class='text-primary font-bold'>Guatemala, Nicaragua, Honduras y sur de México</span>.",
      img: Ico6,
    },
    {
      anio: 0,
      text: "En alianza con <span class='text-primary font-bold'>World Vision México, el DIF Municipal de Chihuahua y FECHAC</span>, iniciamos la Certificación Espacios Favorables para la Niñez que beneficiará a más de 1000 niñas, niños y adolescentes.",
      img: Ico7,
    },
    {
      anio: 2023,
      text: "<span class='text-primary font-bold'>Incrementamos</span> nuestra atención en un (%), incrementando así nuestra base de donantes e ingresos por servicios y proyectos.",
      img: Ico8,
    },
  ];

  const [playing, setPlaying] = useState(false);

  const download = () => {
    window.open(File);
  };

  return (
    <Layout headerPrimary>
      <Page className="bg-primary">
        <div ref={ref} className="flex flex-col">
          <div
            className={`pb-[150px] flex items-center justify-center transition-all duration-1000 delay-100 ${
              inView ? "opacity-100" : "opacity-0 translate-x-24"
            }`}
          >
            <div className="relative">
              {playing ? (
                <div className="h-[358px] w-[343px]">
                  <ReactPlayer
                    width="100%"
                    height="100%"
                    controls
                    url={`https://vimeo.com/843836810`}
                    playing={true}
                  ></ReactPlayer>
                </div>
              ) : (
                <>
                  <img
                    src={Preview}
                    className="max-w-[calc(100%-15px)] h-[358px]"
                    alt=""
                  />
                  <img
                    src={PlayIcon}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                    alt=""
                    onClick={() => setPlaying(true)}
                  />
                </>
              )}
            </div>
            <img
              src={Half}
              className={`sm:ml-16 absolute sm:relative -right-40 sm:right-0 transition-all duration-1000 delay-100 ${
                inView ? "opacity-100" : "opacity-0 -translate-x-24"
              }`}
              alt=""
            />
          </div>
          <div className="text-center -mt-[95px]">
            <p
              className={`text-secundary text-2xl sm:text-3xl font-light w-full sm:w-1/2 mx-auto transition-all duration-1000 delay-300 ${
                inView ? "opacity-100" : "opacity-0 translate-y-24"
              }`}
            >
              Conoce el impacto de nuestro trabajo a lo largo de nuestros{" "}
              <strong className="font-bold">20 años</strong> operando.
            </p>
          </div>
        </div>
      </Page>
      <div className="container">
        <div className="md:w-1/2 xl:w-1/3 mx-auto py-8 md:py-24">
          {historia.map((item, i) => (
            <Historia key={`item${i}`} item={item} index={i} />
          ))}
        </div>
        <p className="text-primary text-2xl text-center my-8">
          Selecciona el año y descarga el documento
        </p>
      </div>
      <div className="min-w-screen min-h-screen h-screen font-semibold text-4xl sm:text-6xl z-10">
        <div className="flex h-full flex-wrap">
          <div
            className="w-1/2 sm:w-1/3 h-auto sm:min-h-1/2 2xl:h-1/2 bg-complementary text-primary flex items-center justify-center cursor-pointer"
            onClick={() => download()}
          >
            2018
          </div>
          <div className="w-1/2 sm:w-1/3 h-auto sm:min-h-1/2 2xl:h-1/2 bg-secundary px-4 pb-4 flex flex-col">
            <div className="">
              <img
                src={Textura1}
                className="w-20 sm:w-auto mx-auto"
                alt="textura"
              />
              <p className="text-primary text-xl sm:text-2xl text-center sm:mt-8">
                Informes anuales
              </p>
            </div>
            <div className="flex-grow flex items-center">
              <p className="font-semibold mt-2 sm:mt-4 text-sm sm:text-base">
                Conoce más sobre los alcances del Centro para el Fortalecimiento
                de la Sociedad Civil a través de nuestros informes anuales.
              </p>
            </div>
          </div>
          <div
            className="w-1/2 sm:w-1/3 min-h-[250px] sm:min-h-1/2 2xl:h-1/2 bg-primary text-secundary flex items-center justify-center cursor-pointer"
            onClick={() => download()}
          >
            2019
          </div>
          <div
            className="w-1/2 sm:w-1/3 min-h-[250px] sm:h-1/2 bg-secundary text-primary flex items-center justify-center cursor-pointer"
            onClick={() => download()}
          >
            2020
          </div>
          <div
            className="w-1/2 sm:w-1/3 min-h-[250px] sm:h-1/2 bg-primary text-secundary flex items-center justify-center cursor-pointer"
            onClick={() => download()}
          >
            2021
          </div>
          <div
            className="w-1/2 sm:w-1/3 min-h-[250px] sm:h-1/2 bg-complementary text-primary flex items-center justify-center cursor-pointer"
            onClick={() => download()}
          >
            2022
          </div>
        </div>
      </div>
      <Consejo />
    </Layout>
  );
};

export default QuienesSomos;

export const Head: HeadFC = () => <title>Quiénes Somos</title>;
