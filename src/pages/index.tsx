import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout/Layout";
import Button from "../components/shared/Button";
import Page from "../components/layout/Page";
import { Section2, Section3, Section4, Section5 } from "../components/home";
import MarkedText from "../components/shared/MarkedText";

import Image from "../images/home.png";
import ImageText1 from "../images/homeText1.svg";
import ImageText2 from "../images/homeText2.svg";
import Arrow from "../images/homeArrow.svg";
import Articulos from "../components/home/Articles";
import Alliances from "../components/home/Alliances";
import Testimonies from "../components/home/Testimonies";
import Contacto from "../components/home/Contacto";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Page>
        <img
          src={ImageText1}
          className={`absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 -z-10 -mt-[120px] -ml-[180px] hidden sm:block`}
          alt="home"
        />
        <img
          src={ImageText2}
          className={`absolute right-0 sm:top-1/2 sm:-translate-y-1/2`}
          alt="home"
        />
        <div className="relative flex flex-col sm:items-center text-center -mt-[50px]">
          <div className={`relative z-0 mb-12`}>
            <div
              className={`absolute -z-10 w-[352px] h-[352px] -left-[18px] -top-[18px] bg-secundary`}
            ></div>
            <img src={Image} className="z-10" alt="home" />
            <img
              src={Arrow}
              className={`z-10 absolute right-0 sm:-right-24 -top-12`}
              alt="home"
            />
          </div>
          <p className="text-2xl sm:text-3xl">
            Fortalecemos capacidades.
            <br />
            <MarkedText className="text-primary font-bold">
              Acompañamos personas.
            </MarkedText>
          </p>
          <Button variant="white" className="mt-8">
            Conoce más
          </Button>
        </div>
      </Page>
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Articulos />
      <Alliances />
      <Testimonies />
      <Contacto />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
