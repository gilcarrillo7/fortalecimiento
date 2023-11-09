import * as React from "react";
import { navigate, type HeadFC, type PageProps } from "gatsby";
import Layout from "../components/layout/Layout";
import Page from "../components/layout/Page";
import Button from "../components/shared/Button";

import MarkedText from "../components/shared/MarkedText";
import Img1 from "../images/quienes/1.svg";
import Grupo from "../images/quienes/grupo.svg";
import Textura1 from "../images/quienes/textura1.svg";
import Textura2 from "../images/quienes/textura2.svg";
import Corner1 from "../images/quienes/corner1.svg";
import Corner2 from "../images/quienes/corner2.svg";
import Logo1 from "../images/quienes/logo1.svg";
import Logo2 from "../images/quienes/logo2.svg";

const QuienesSomos: React.FC<PageProps> = () => {
  const historia = [
    {
      anio: 2005,
      text: "<span class='text-primary font-semibold'><span class='text-xl'>1,857</span> integrantes de OSC de <span class='text-xl'>10</span> municipios</span> de Chihuahua se beneficiaron con servicios de capacitación.",
      img: Img1,
    },
    {
      anio: 2010,
      text: "<span class='text-primary font-semibold'>Aperturamos</span> el Centro para el Fortalecimiento en la ciudad de San Luis Potosí.",
      img: Img1,
    },
    {
      anio: 2011,
      text: "<span class='text-primary font-semibold'>Acompañamos la apertura</span> del Centro para el Fortalecimiento en Obregón, Sonora, como una <span class='text-primary font-semibold'>alianza</span> entre la Fundación Tichi Muñoz y el Tec de Monterrey campus Obregón.",
      img: Img1,
    },
    {
      anio: 2015,
      text: "La Junta de Asistencia Social Privada y la Fundación del Dr. Simi <span class='text-primary font-semibold'>nos otorgaron el Premio Estatal a la Filantropía.</span>",
      img: Img1,
    },
    {
      anio: 2018,
      text: "Acompañamos de forma directa a <span class='text-primary font-semibold text-xl'>191</span> representantes de OSC y de forma indirecta a más de <span class='text-primary font-semibold'>177,104</span> personas usuarias.",
      img: Img1,
    },
    {
      anio: 2021,
      text: "<span class='text-primary font-semibold'>Primer centro certificador de habla hispana en el mundo</span> para replicar la metodología para la gestión de proyectos de desarrollo (Project DPro). De la organización internacional Project Management for NGOs (<span class='text-primary font-semibold'>PM4NGOs</span>).",
      img: Img1,
    },
    {
      anio: 2022,
      text: "Tuvimos un alcance de <span class='text-primary font-semibold text-xl'>17 estados</span> de México. Con el financiamiento de Rainforest Alliance, diseñamos e implementamos programas de capacitación para organizaciones de <span class='text-primary font-semibold'>Guatemala, Nicaragua, Honduras y sur de México</span>.",
      img: Img1,
    },
    {
      anio: 0,
      text: "En alianza con <span class='text-primary font-semibold'>World Vision México, el DIF Municipal de Chihuahua y FECHAC</span>, iniciamos la Certificación Espacios Favorables para la Niñez que beneficiará a más de 1000 niñas, niños y adolescentes.",
      img: Img1,
    },
    {
      anio: 2023,
      text: "<span class='text-primary font-semibold'>Incrementamos</span> nuestra atención en un (%), incrementando así nuestra base de donantes e ingresos por servicios y proyectos.",
      img: Img1,
    },
  ];

  return (
    <Layout headerPrimary>
      <Page className="bg-primary">
        <div className="text-center -mt-[95px]">
          <p className="text-secundary text-2xl sm:text-3xl font-light">
            Conoce el impacto de nuestro trabajo a lo largo de nuestros{" "}
            <strong className="font-bold">20 años</strong> operando.
          </p>
        </div>
      </Page>
      <div className="container">
        <div className="md:w-1/2 xl:w-1/3 mx-auto py-8 md:py-24">
          {historia.map((item, i) => (
            <div key={`${i}${item.anio}`} className="py-8 text-center">
              {item.anio === 0 ? (
                <span className="block w-4 h-4 bg-secundary rounded-full mx-auto mb-8"></span>
              ) : (
                <MarkedText className="text-3xl sm:text-5xl text-blacj font-bold text-center mb-8">
                  {item.anio}
                </MarkedText>
              )}
              <div className="relative flex md:block">
                <p
                  className={`text-left ${i % 2 === 0 ? "order-1" : "order-2"}`}
                  dangerouslySetInnerHTML={{ __html: item.text }}
                />
                <img
                  src={item.img}
                  className={`md:absolute md:top-1/2 md:-translate-y-1/2 ${
                    i % 2 === 0
                      ? "md:left-full ml-4 order-2"
                      : "md:right-full mr-4 order-1"
                  }`}
                  alt={`${item.anio}`}
                />
              </div>
            </div>
          ))}
        </div>
        <p className="text-primary text-2xl text-center my-8">
          Selecciona el año y descarga el documento
        </p>
      </div>
      <div className="min-w-screen min-h-screen h-screen font-semibold text-4xl sm:text-6xl">
        <div className="flex h-full flex-wrap">
          <div className="w-1/2 sm:w-1/3 h-auto sm:h-1/2 bg-complementary text-primary flex items-center justify-center">
            2018
          </div>
          <div className="w-1/2 sm:w-1/3 h-auto sm:h-1/2 bg-secundary px-4 pb-4">
            <img src={Textura1} className="mx-auto" alt="textura" />
            <p className="text-primary text-xl sm:text-2xl text-center mt-8">
              Informes anuales
            </p>
            <p className="font-semibold mt-4 text-sm sm:text-base">
              Conoce más sobre los alcances del Centro para el Fortalecimiento
              de la Sociedad Civil a través de nuestros informes anuales.
            </p>
          </div>
          <div className="w-1/2 sm:w-1/3 min-h-[250px] sm:h-1/2 bg-primary text-secundary flex items-center justify-center">
            2019
          </div>
          <div className="w-1/2 sm:w-1/3 min-h-[250px] sm:h-1/2 bg-secundary text-primary flex items-center justify-center">
            2020
          </div>
          <div className="w-1/2 sm:w-1/3 min-h-[250px] sm:h-1/2 bg-primary text-secundary flex items-center justify-center">
            2021
          </div>
          <div className="w-1/2 sm:w-1/3 min-h-[250px] sm:h-1/2 bg-complementary text-primary flex items-center justify-center">
            2022
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="flex">
          <img className="-mt-64" src={Textura2} alt="" />
          <img className="flex-grow" src={Grupo} alt="" />
        </div>
        <div className="container pb-16">
          <p className="text-primary text-3xl sm:text-5xl bg-white">
            Consejo directivo
          </p>
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-5/12">
              <p className="my-8">
                <span className="font-bold text-primary">
                  El CFOSC es guiado por un grupo de 15 ciudadanas y ciudadanos
                  visionarios comprometidos con las causas sociales y de un
                  perfil intachable
                </span>
                , quienes han mantenido una constante evolución de nuestra
                institución. Cuentan con experiencia en el ámbito legal,
                financiero, educativo, administrativo, empresarial y de
                innovación e investigación. Además, participan en organizaciones
                sin fines de lucro, empresas, cámaras empresariales,
                investigaciones sociales, entre otros.
              </p>
              <MarkedText className="mb-4">
                El rol de los consejos directivos en la sociedad civil tiene una
                relevancia a destacar en su vida y trascendencia, misma que nos
                hace estar siempre buscando ser mejores, más efectivos y un
                ejemplo a seguir para nuestros usuarios.
              </MarkedText>
            </div>
            <div className="md:w-1/12"></div>
            <div className="w-full md:w-5/12">
              <MarkedText className="mb-4">
                Actualmente el Consejo Directivo y la dirección ejecutiva está
                integrado por:
              </MarkedText>
              <p className="text-xl mb-4">
                Presidencia
                <br />
                <span className="text-primary font-bold text-base">
                  Carla María Herrera Guerrero
                </span>
              </p>
              <p className="text-xl mb-4">
                Vicepresidencia
                <br />
                <span className="text-primary font-bold text-base">
                  Ismael Rodríguez Durán
                </span>
                <br />
                <span className="text-primary font-bold text-base">
                  Vicente David Vivó Prieto
                </span>
              </p>
              <p className="text-xl mb-4">
                Dirección ejecutiva
                <br />
                <span className="text-primary font-bold text-base">
                  María Eloísa Solís Terrazas
                </span>
              </p>
              <p className="text-xl mb-4">
                Vocales
                <br />
                <span className="text-primary font-bold text-base">
                  Armando Bahena Vigna
                </span>
                <br />
                <span className="text-primary font-bold text-base">
                  Federico Baeza Mares
                </span>
                <br />
                <span className="text-primary font-bold text-base">
                  Florencia Valdés García
                </span>
                <br />
                <span className="text-primary font-bold text-base">
                  Francisco Santini Ramos
                </span>
                <br />
                <span className="text-primary font-bold text-base">
                  Gonzalo Reyes Ibarra
                </span>
                <br />
                <span className="text-primary font-bold text-base">
                  Jaime Fernández Horcasitas
                </span>
                <br />
                <span className="text-primary font-bold text-base">
                  Laura Margarita Ayub Touché
                </span>
                <br />
                <span className="text-primary font-bold text-base">
                  Mario Adolfo Schmal Hernández
                </span>
                <br />
                <span className="text-primary font-bold text-base">
                  Miguel Ángel Laporta De Caso
                </span>
                <br />
                <span className="text-primary font-bold text-base">
                  Miriam Liceaga Muñoz
                </span>
                <br />
                <span className="text-primary font-bold text-base">
                  Verónica Grajeda Villalobos
                </span>
                <br />
                <span className="text-primary font-bold text-base">
                  Víctor Ramos Arras
                </span>
                <br />
              </p>
            </div>
          </div>
        </div>
        <img src={Corner1} className="absolute bottom-0 right-0" alt="corner" />
        <img
          src={Corner2}
          className="absolute bottom-32 right-24"
          alt="corner"
        />
      </div>
      <div className="relative bg-complementary py-12">
        <div className="container text-xl font-light">
          <div className="w-full sm:w-2/3 mb-8">
            <p className="">
              En el Centro para el Fortalecimiento de la Sociedad Civil queremos
              ayudarte a fortalecer tu organización.
            </p>
            <p className="my-4">
              Nuestra intención es crear OSC cada vez más fortalecidas.
            </p>
            <MarkedText className="text-primary font-bold">
              ¡Contáctanos! ¡Nos dará mucho gusto apoyarte!
            </MarkedText>
            <br />
            <Button
              variant="complementary"
              className="mt-8 w-full"
              onClick={() => navigate("/#contacto")}
            >
              Contacto
            </Button>
          </div>
          <div className="sm:flex flex-col sm:flex-row gap-8 justify-center">
            <img src={Logo1} alt="logo 1" className="mx-auto" />
            <img src={Logo2} alt="logo 1" className="mx-auto" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default QuienesSomos;

export const Head: HeadFC = () => <title>Quiénes Somos</title>;
