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
import { useAppDispatch, useAppSelector } from "../hooks";
import { PagesEnum } from "../types/Enums";
import { fetchPage, selectPage } from "../features/api/apiSlice";
import { AcfHome } from "../types";
import { useEffect } from "react";
import Loader from "../components/shared/Loader";

const IndexPage: React.FC<PageProps> = () => {
  const dispatch = useAppDispatch();
  const page = useAppSelector((state) =>
    selectPage(state, PagesEnum.HOME)
  ) as AcfHome;

  useEffect(() => {
    dispatch(fetchPage({ page: PagesEnum.HOME, slug: PagesEnum.HOME }));
  }, []);

  return (
    <Layout>
      {page ? (
        <>
          <Script>{`observeElements()`}</Script>
          <Home
            image={page.home_image}
            title={page.home_title}
            btntext={page.home_button}
            btnurl={page.home_button_url}
          />
          <Section2
            content={page.home_content}
            image1={page.circle_image_1}
            image2={page.circle_image_2}
            image3={page.circle_image_3}
            image4={page.circle_image_4}
            btntext={page.oferta_button}
            btnurl={page.oferta_url}
          />
          <Section3 content={page.quote_content} image={page.quote_image} />
          <Section4
            title={page.ejes_title}
            title1={page.eje_title_1}
            image1={page.eje_image_1}
            text1={page.eje_text_1}
            title2={page.eje_title_2}
            image2={page.eje_image_2}
            text2={page.eje_text_2}
            title3={page.eje_title_3}
            image3={page.eje_image_3}
            text3={page.eje_text_3}
          />
          <Section5 content={page.fortalecimiento_content} />
          <Articulos title={page.articulos_title} link={page.articulos_all} />
          <Alliances title={page.alianzas_title} image={page.alianzas_image} />
          <Testimonies title={page.testimonios_title} />
          <Contacto
            title={page.contacto_title}
            address={page.contacto_address}
            schedule={page.contacto_schedule}
            contact={page.contacto_contacto}
            image={page.contacto_image}
          />
        </>
      ) : (
        <Loader />
      )}
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <SEO />;
