import * as React from "react";
import { useInView } from "react-intersection-observer";

import Page from "../layout/Page";
import MarkedText from "../shared/MarkedText";
import Button from "../shared/Button";
import ImageBg1 from "../../images/homeBg1.png";
import ImageBg2 from "../../images/homeBg2.png";
import ImageBg3 from "../../images/homeBg3.png";
import ImageBg4 from "../../images/homeBg4.png";
import { navigate } from "gatsby";

const Circle = ({ img = "", index }: { img?: string; index: number }) => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const style = img !== "" ? { backgroundImage: `url(${img})` } : {};
  const delay = `delay-[${index * 100}ms]`;

  return (
    <div
      ref={ref}
      className={`group [perspective:1000px] w-[97px] xl:w-[135px] h-[97px] xl:h-[135px] transition-all duration-1000 ${delay} ${
        index > 11 ? "hidden xl:flex" : ""
      } ${inView ? "opacity-100" : "opacity-0"}`}
    >
      <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div
          className={`absolute rounded-full w-full h-full ${
            img !== "" ? "bg-[size:97px] sm:bg-[size:135px]" : "bg-secundary"
          }`}
          style={style}
        >
          {/* back content */}
        </div>
        <div
          className={`absolute rounded-full my-rotate-y-180 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] ${
            img !== "" ? "" : "bg-primary"
          }`}
        ></div>
      </div>
    </div>
  );
};

const Section2 = () => {
  const images = [
    "",
    "",
    ImageBg1,
    "",
    "",
    "",
    "",
    "",
    "",
    ImageBg2,
    "",
    ImageBg3,
    "",
    "",
    ImageBg4,
    "",
  ];
  return (
    <Page>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2 md:order-3 flex justify-center items-center">
          <div className="flex flex-wrap w-[291px] xl:w-[540px]">
            {images.map((img, i) => (
              <Circle key={`${i}imgcirlce`} img={img} index={i} />
            ))}
          </div>
        </div>
        <div className="w-0 md:w-[10%] md:order-2"></div>
        <div className="md:w-2/5 md:order-1 flex flex-col justify-center">
          <div className="flex flex-col gap-4 mb-8">
            <p>
              <MarkedText>
                Creemos en el poder transformador de la sociedad civil
                organizada
              </MarkedText>{" "}
              y reconocemos su invaluable aporte en la generación de mejores
              condiciones para todas las personas y en la construcción de la
              vida democrática de nuestro país.
            </p>
            <p>
              Adaptamos el{" "}
              <span className="text-primary font-bold">
                acompañamiento integral
              </span>{" "}
              a las necesidades de fortalecimiento de cada organización.
              Brindamos opciones de{" "}
              <span className="text-primary font-bold">
                capacitación, formación y consultoría para potenciar su impacto.
              </span>{" "}
              Las apoyamos a vincularse con diferentes actores para generar
              oportunidades de colaboración a nivel global.
            </p>
            <p>
              En nuestra <MarkedText>experiencia de más de 20 años,</MarkedText>{" "}
              hemos tenido la posibilidad de acompañar a miles de organizaciones
              logrando que estén consolidadas en sus diferentes componentes
              organizativos, de gestión e institucionalidad, para que puedan
              entregar servicios de alta calidad, generando mayores beneficios
              para las personas y entornos en donde desarrollan sus modelos de
              intervención, convirtiéndose en agentes de transformaciones
              sociales.
            </p>
          </div>
          <div className="mb-12 md:mb-0">
            <Button variant="white" onClick={() => navigate("/nuestra_oferta")}>
              Nuestra oferta
            </Button>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Section2;
