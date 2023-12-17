import * as React from "react";
import { useInView } from "react-intersection-observer";
import Layout from "../components/layout/Layout";
import { HeadFC, PageProps, Script, navigate, withPrefix } from "gatsby";
import { useAppDispatch, useAppSelector } from "../hooks";
import Page from "../components/layout/Page";
import Button from "../components/shared/Button";

import Textura1 from "../images/oferta/textura1.svg";
import Textura2 from "../images/oferta/textura2.svg";

import { SEO } from "../components/layout/SEO";
import { fetchPage, selectPage } from "../features/api/apiSlice";
import { OFERTA } from "../constants";
import { useEffect } from "react";
import { PagesEnum } from "../types/Enums";
import Loader from "../components/shared/Loader";
import ImageApi from "../components/shared/ImageApi";
import { Helmet } from "react-helmet";

const Oferta: React.FC<PageProps> = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const dispatch = useAppDispatch();
  const page = useAppSelector((state) => selectPage(state, PagesEnum.OFERTA));

  useEffect(() => {
    dispatch(fetchPage({ page: PagesEnum.OFERTA, id: OFERTA }));
  }, []);

  return (
    <Layout>
      {page ? (
        <>
          <Script>{`observeElements()`}</Script>
          <Page>
            <div className="flex flex-col sm:flex-row items-center">
              <div className="sm:order-3 w-full sm:w-1/2">
                <ImageApi
                  id={page.main_img}
                  myRef={ref}
                  alt={""}
                  className={`mt-16 sm:mt-0 transition-all duration-1000 delay-100 ${
                    inView ? "opacity-100" : "opacity-0 translate-x-32"
                  }`}
                />
              </div>
              <div className="sm:w-[10%] sm:order-2"></div>
              <div className="sm:order-1 w-full sm:w-2/5">
                <div
                  className=""
                  dangerouslySetInnerHTML={{ __html: page.main }}
                />
                <div className="text-center sm:text-left">
                  <Button
                    variant="white"
                    className=""
                    onClick={() => window.open(page.main_url)}
                  >
                    {page.main_button}
                  </Button>
                </div>
              </div>
            </div>
          </Page>
          <Page className="py-6 sm:py-12">
            <h2
              className="text-center text-2xl sm:text-3xl mt-16 sm:mt-0"
              dangerouslySetInnerHTML={{ __html: page.services_title }}
            />
            <div className="mt-12 flex flex-col sm:flex-row gap-16">
              <div className="w-full sm:w-2/3 sm:order-2">
                <div
                  className=""
                  dangerouslySetInnerHTML={{ __html: page.services_content }}
                />
                <div className="text-center sm:text-left">
                  <Button
                    variant="white"
                    className="mt-4"
                    onClick={() => window.open(page.services_url)}
                  >
                    {page.services_button}
                  </Button>
                </div>
              </div>
              <div className="w-full sm:w-1/3 sm:order-1">
                <ImageApi
                  className="mx-auto"
                  id={page.services_image}
                  alt={""}
                />
                <div ref={ref} className="relative mt-12 sm:mt-20">
                  <img
                    className={`mx-auto transition-all duration-1000 delay-100 ${
                      inView ? "opacity-100" : "opacity-0 translate-y-32"
                    }`}
                    src={Textura1}
                    alt=""
                  />
                  <img
                    className={`absolute top-[calc(100%-80px)] left-1/2 -translate-x-1/2 w-auto sm:w-24 md:w-32 lg:w-auto transition-all duration-1000 delay-300 ${
                      inView ? "opacity-100" : "opacity-0 translate-y-32"
                    }`}
                    src={Textura2}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </Page>
          <div className="bg-complementary">
            <div className="container text-center pb-28 pt-36 sm:py-28">
              <p
                className="font-bold text-2xl sm:text-3xl text-primary"
                dangerouslySetInnerHTML={{ __html: page.acercate_title }}
              />
              <div className="text-center">
                <Button
                  variant="complementary"
                  className="mt-8"
                  onClick={() => navigate("/#contacto")}
                >
                  {page.acercate_button}
                </Button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </Layout>
  );
};

export default Oferta;

export const Head: HeadFC = () => <SEO />;
