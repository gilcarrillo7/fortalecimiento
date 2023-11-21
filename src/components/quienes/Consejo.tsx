import * as React from "react";
import { navigate } from "gatsby";
import { useInView } from "react-intersection-observer";

import Button from "../../components/shared/Button";
import MarkedText from "../shared/MarkedText";

import Textura2 from "../../images/quienes/textura2.svg";
import Corner1 from "../../images/quienes/corner1.svg";
import Logo1 from "../../images/quienes/logo1.svg";
import Logo2 from "../../images/quienes/logo2.svg";
import Grupo from "../../images/quienes/grupo.svg";

const Consejo = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  return (
    <>
      <div className="relative" ref={ref}>
        <div className="relative sm:flex -z-10 sm:z-0">
          <img
            className={`w-full sm:w-[600px] -z-10 -mt-[100px] sm:-mt-[300px] transition-all duration-1000 delay-300 ${
              inView ? "opacity-100" : "opacity-0"
            }`}
            src={Textura2}
            alt=""
          />
          <img
            className={`w-full sm:w-auto sm:flex-grow -mt-[100px] sm:mt-0 z-10 transition-all duration-1000 delay-300 ${
              inView ? "opacity-100" : "opacity-0 translate-x-72"
            }`}
            src={Grupo}
            alt=""
          />
        </div>
        <div className="container pb-40 sm:pb-16 py-8 z-0">
          <p
            className={`text-primary text-3xl sm:text-5xl bg-white sm:-mt-[100px] sm:mb-[100px]`}
          >
            Consejo directivo
          </p>
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-5/12">
              <p className="mb-8">
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
        <img
          src={Corner1}
          className="absolute left-1/2 sm:left-[unset] -translate-x-1/2 sm:translate-x-0 -bottom-[115px] sm:-bottom-[222px] right-0 w-[125px] sm:w-[250px] z-10"
          alt="corner"
        />
      </div>
      <div className="relative bg-complementary pt-40 sm:py-12">
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
          <div className="sm:flex flex-col sm:flex-row gap-8 justify-center items-center py-12">
            <img src={Logo2} alt="logo 1" className="mx-auto mb-8 sm:mb-0" />
            <img src={Logo1} alt="logo 1" className="mx-auto" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Consejo;
