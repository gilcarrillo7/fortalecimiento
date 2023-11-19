import * as React from "react";
import Page from "../layout/Page";
import Section1 from "../../images/section4-1.svg";
import Section2 from "../../images/section4-2.svg";
import Section3 from "../../images/section4-3.svg";

const Column = ({
  title,
  img,
  children,
}: {
  title: string;
  img: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col jusitfy-center items-center">
      <img src={img} className="max-w-[172px] md:max-w-[200px]" alt={title} />
      <p className="mt-12 text-primary text-xl text-center my-12">{title}</p>
      <div className="">{children}</div>
    </div>
  );
};

const Section4 = () => {
  return (
    <Page className="py-8 sm:py-16">
      <p className="text-2xl sm:text-3xl font-light text-center mb-12 sm:mb-32">
        El eje rector de nuestro modelo de intervención es la{" "}
        <span className="font-bold text-primary">sostenibilidad</span> de las
        organizaciones, en al menos tres aspectos:
      </p>
      <div className="flex flex-col sm:flex-row gap-8">
        <Column title="1. Orgánica" img={Section1}>
          Se reﬁere a contar con todos los elementos estructurales que soportan
          a una organización, como la gobernanza, talento humano, rumbo
          estratégico y cumplimiento de la normativa.
        </Column>
        <Column title="2. Financiera" img={Section2}>
          Que la organización cuente con políticas y procedimientos
          administrativos y contables, así como buenas prácticas para la
          movilización de recursos y una sana gestión ﬁnanciera.
        </Column>
        <Column title="3. Metodológica" img={Section3}>
          Identiﬁcación de la problemática y soluciones pertinentes a través de
          la fundamentación, diseño, planeación, monitoreo y evaluación de
          proyectos, programas y modelos de intervención.
        </Column>
      </div>
    </Page>
  );
};

export default Section4;
