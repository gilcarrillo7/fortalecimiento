import * as React from "react";
import { type HeadFC, type PageProps } from "gatsby";
import Layout from "../components/layout/Layout";
import { Section2, Section3, Section4, Section5 } from "../components/home";

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
