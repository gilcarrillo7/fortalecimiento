import * as React from "react";
import { HeadFC, type PageProps, Script } from "gatsby";
import Layout from "../components/layout/Layout";
import { Section2, Section3, Section4, Section5 } from "../components/home";

import Articulos from "../components/home/Articles";
import Alliances from "../components/home/Alliances";
import Testimonies from "../components/home/Testimonies";
import Contacto from "../components/home/Contacto";
import Home from "../components/home/Home";
import { SEO } from "../components/layout/SEO";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Script>{`observeElements()`}</Script>
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

export const Head: HeadFC = () => <SEO />;
