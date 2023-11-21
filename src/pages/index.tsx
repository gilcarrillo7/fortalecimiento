import * as React from "react";
import { navigate, type HeadFC, type PageProps } from "gatsby";
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
import Home from "../components/home/Home";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Home />
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
