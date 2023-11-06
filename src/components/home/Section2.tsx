import * as React from "react";
import Page from "../layout/Page";
import MarkedText from "../shared/MarkedText";
import Button from "../shared/Button";
import ImageBg1 from "../../images/homeBg1.svg";
import ImageBg2 from "../../images/homeBg2.svg";
import ImageBg3 from "../../images/homeBg3.svg";
import ImageBg4 from "../../images/homeBg4.svg";

const Circle = ({ img = "", index }: { img?: string; index: number }) => {
  const style = img !== "" ? { backgroundImage: `url(${img})` } : {};
  return (
    <div
      className={`${
        img !== "" ? "bg-[size:97px] sm:bg-[size:135px]" : "bg-secundary"
      } w-[97px] xl:w-[135px] h-[97px] xl:h-[135px] rounded-full ${
        index > 11 ? "hidden xl:flex" : ""
      }`}
      style={style}
    ></div>
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
        <div className="md:w-1/2 md:order-2 flex justify-center items-center">
          <div className="flex flex-wrap w-[291px] xl:w-[540px]">
            {images.map((img, i) => (
              <Circle key={`${i}imgcirlce`} img={img} index={i} />
            ))}
          </div>
        </div>
        <div className="md:w-1/2 md:order-1 flex flex-col justify-center">
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
              Adaptamos el acompañamiento integral a las necesidades de
              fortalecimiento de cada organización. Brindamos opciones de
              capacitación, formación y consultoría para potenciar su impacto.
              Las apoyamos a vincularse con diferentes actores para generar
              oportunidades de colaboración a nivel global.
            </p>
            <p>
              En nuestra experiencia de más de 20 años, hemos tenido la
              posibilidad de acompañar a miles de organizaciones logrando que
              estén consolidadas en sus diferentes componentes organizativos, de
              gestión e institucionalidad, para que puedan entregar servicios de
              alta calidad, generando mayores beneficios para las personas y
              entornos en donde desarrollan sus modelos de intervención,
              convirtiéndose en agentes de transformaciones sociales.
            </p>
          </div>
          <div className="mb-12 md:mb-0">
            <Button variant="white">Nuestra oferta</Button>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Section2;
