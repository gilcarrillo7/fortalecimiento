import React, { useEffect, useState } from "react";
import { navigate, type HeadFC, type PageProps, Script } from "gatsby";
import { useInView } from "react-intersection-observer";
import ReactPlayer from "react-player";
import Layout from "../components/layout/Layout";
import Page from "../components/layout/Page";

import MarkedText from "../components/shared/MarkedText";
import Textura1 from "../images/quienes/textura1.svg";
import Preview from "../images/quienes/preview.svg";
import PlayIcon from "../images/quienes/playIcon.svg";
import Half from "../images/quienes/half.svg";
import Ico1 from "../images/quienes/ico_1.svg";
import Ico2 from "../images/quienes/ico_2.svg";
import Ico3 from "../images/quienes/ico_3.svg";
import Ico4 from "../images/quienes/ico_4.svg";
import Ico5 from "../images/quienes/ico_5.svg";
import Ico6 from "../images/quienes/ico_6.svg";
import Ico7 from "../images/quienes/ico_7.svg";
import Ico8 from "../images/quienes/ico_8.svg";
import IcoMapa from "../images/quienes/ico_mapa.svg";
import Textura2 from "../images/quienes/textura2.svg";
import Corner1 from "../images/quienes/corner1.svg";

import { SEO } from "../components/layout/SEO";
import { useAppDispatch, useAppSelector } from "../hooks";
import { PagesEnum, PostEnum } from "../types/Enums";
import {
  fetchPage,
  fetchPosts,
  selectPage,
  selectPosts,
} from "../features/api/apiSlice";
import { AcfQuienes, AcfTimeline } from "../types";
import Loader from "../components/shared/Loader";
import Button from "../components/shared/Button";
import ImageApi from "../components/shared/ImageApi";
import { TIMELINE } from "../constants";

const Historia = ({ item, index }: { item: AcfTimeline; index: number }) => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <div ref={ref} className="py-8 text-center">
      {item.year === "" ? (
        <span className="block w-4 h-4 bg-secundary rounded-full mx-auto mb-8"></span>
      ) : (
        <MarkedText className="text-3xl sm:text-5xl text-blacj font-bold text-center mb-8">
          {item.year}
        </MarkedText>
      )}
      <div className="relative flex md:block">
        <p
          className={`text-left ${index % 2 === 0 ? "order-1" : "order-2"}`}
          dangerouslySetInnerHTML={{ __html: item.description }}
        />
        <ImageApi
          id={item.image}
          alt={""}
          className={`md:absolute md:top-1/2 w-[100px] sm:w-[150px] min-w-[150px] max-h-[150px] ${
            index % 2 === 0
              ? "md:left-full ml-4 order-2"
              : "md:right-full mr-4 order-1"
          } transition-all duration-1000 delay-100 ${
            inView
              ? "opacity-100 md:-translate-y-1/2"
              : "opacity-0 translate-y-full"
          }`}
        />
      </div>
    </div>
  );
};

const QuienesSomos: React.FC<PageProps> = () => {
  const { ref: ref0, inView: inView0 } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const dispatch = useAppDispatch();
  const page = useAppSelector((state) =>
    selectPage(state, PagesEnum.QUIENES)
  ) as AcfQuienes;
  const timeline = useAppSelector((state) =>
    selectPosts(state, PostEnum.TIMELINE)
  ) as AcfTimeline[];

  const [playing, setPlaying] = useState(false);

  const download = (url: string) => {
    window.open(url);
  };

  useEffect(() => {
    dispatch(fetchPage({ page: PagesEnum.QUIENES, slug: PagesEnum.QUIENES }));
    dispatch(fetchPosts({ post: PostEnum.TIMELINE, id: TIMELINE }));
  }, []);

  return (
    <Layout headerPrimary>
      {page ? (
        <>
          <Page className="bg-primary">
            <Script>{`observeElements()`}</Script>
            <div ref={ref0} className="flex flex-col">
              <div
                className={`pb-[150px] flex items-center justify-center transition-all duration-1000 delay-100 ${
                  inView0 ? "opacity-100" : "opacity-0 translate-x-24"
                }`}
              >
                <div className="relative">
                  {playing ? (
                    <div className="h-[358px] w-[343px]">
                      <ReactPlayer
                        width="100%"
                        height="100%"
                        controls
                        url={page.video}
                        playing={true}
                      ></ReactPlayer>
                    </div>
                  ) : (
                    <>
                      <img
                        src={Preview}
                        className="max-w-[calc(100%-15px)] h-[358px]"
                        alt=""
                      />
                      <img
                        src={PlayIcon}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                        alt=""
                        onClick={() => setPlaying(true)}
                      />
                    </>
                  )}
                </div>
                <img
                  src={Half}
                  className={`sm:ml-16 absolute sm:relative -right-40 sm:right-0 transition-all duration-1000 delay-100 ${
                    inView0 ? "opacity-100" : "opacity-0 -translate-x-24"
                  }`}
                  alt=""
                />
              </div>
              <div className="text-center -mt-[95px]">
                <p
                  className={`text-secundary text-2xl sm:text-3xl font-light w-full sm:w-1/2 mx-auto transition-all duration-1000 delay-300 ${
                    inView0 ? "opacity-100" : "opacity-0 translate-y-24"
                  }`}
                  dangerouslySetInnerHTML={{ __html: page.title }}
                />
              </div>
            </div>
          </Page>
          <div className="container">
            {timeline && (
              <>
                <Script>{`observeElements()`}</Script>
                <div className="md:w-1/2 xl:w-1/3 mx-auto py-8 md:py-24">
                  {timeline.map((item, i) => (
                    <Historia key={`item${i}`} item={item} index={i} />
                  ))}
                </div>
              </>
            )}
            <p
              className="text-primary text-2xl text-center my-8"
              dangerouslySetInnerHTML={{ __html: page.docs_title }}
            />
          </div>
          <div className="min-w-screen min-h-screen h-screen font-semibold text-4xl sm:text-6xl z-10">
            <div className="flex h-full flex-wrap">
              <div
                className="w-1/2 sm:w-1/3 h-auto sm:min-h-1/2 2xl:h-1/2 bg-complementary text-primary flex items-center justify-center cursor-pointer"
                onClick={() => download(page.docs_1_url)}
                dangerouslySetInnerHTML={{ __html: page.docs_1 }}
              />
              <div className="w-1/2 sm:w-1/3 h-auto sm:min-h-1/2 2xl:h-1/2 bg-secundary px-4 pb-4 flex flex-col">
                <div className="">
                  <img
                    src={Textura1}
                    className="w-20 sm:w-auto mx-auto"
                    alt="textura"
                  />
                  <p className="text-primary text-xl sm:text-2xl text-center sm:mt-8">
                    {page.docs_informes}
                  </p>
                </div>
                <div className="flex-grow flex items-center">
                  <p className="font-semibold mt-2 sm:mt-4 text-sm sm:text-base">
                    {page.docs_informes_text}
                  </p>
                </div>
              </div>
              <div
                className="w-1/2 sm:w-1/3 min-h-[250px] sm:min-h-1/2 2xl:h-1/2 bg-primary text-secundary flex items-center justify-center cursor-pointer"
                onClick={() => download(page.docs_2_url)}
                dangerouslySetInnerHTML={{ __html: page.docs_2 }}
              />
              <div
                className="w-1/2 sm:w-1/3 min-h-[250px] sm:h-1/2 bg-secundary text-primary flex items-center justify-center cursor-pointer"
                onClick={() => download(page.docs_3_url)}
                dangerouslySetInnerHTML={{ __html: page.docs_3 }}
              />
              <div
                className="w-1/2 sm:w-1/3 min-h-[250px] sm:h-1/2 bg-primary text-secundary flex items-center justify-center cursor-pointer"
                onClick={() => download(page.docs_4_url)}
                dangerouslySetInnerHTML={{ __html: page.docs_4 }}
              />
              <div
                className="w-1/2 sm:w-1/3 min-h-[250px] sm:h-1/2 bg-complementary text-primary flex items-center justify-center cursor-pointer"
                onClick={() => download(page.docs_5_url)}
                dangerouslySetInnerHTML={{ __html: page.docs_5 }}
              />
            </div>
          </div>
          <div className="relative" ref={ref}>
            <div className="relative sm:flex -z-10 sm:z-0">
              <img
                className={`w-full sm:w-[600px] -z-10 -mt-[100px] sm:-mt-[300px] transition-all duration-1000 delay-300 ${
                  inView ? "opacity-100" : "opacity-0"
                }`}
                src={Textura2}
                alt=""
              />
              <ImageApi
                id={page.consejo_img}
                alt={""}
                className={`w-full sm:w-auto sm:flex-grow -mt-[100px] sm:mt-0 z-10 transition-all duration-1000 delay-300 ${
                  inView ? "opacity-100" : "opacity-0 translate-x-72"
                }`}
              />
            </div>
            <div className="container pb-40 sm:pb-16 py-8 z-0">
              <p
                className={`text-primary text-3xl sm:text-5xl bg-white sm:-mt-[100px] sm:mb-[100px]`}
              >
                {page.consejo_title}
              </p>
              <div className="flex flex-col md:flex-row">
                <div
                  className="w-full md:w-5/12"
                  dangerouslySetInnerHTML={{ __html: page.consejo_col_1 }}
                />
                <div className="md:w-1/12"></div>
                <div
                  className="w-full md:w-5/12"
                  dangerouslySetInnerHTML={{ __html: page.consejo_col_2 }}
                />
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
                <div
                  className=""
                  dangerouslySetInnerHTML={{ __html: page.footer_text }}
                />
                <Button
                  variant="complementary"
                  className="mt-8 w-full"
                  onClick={() => navigate("/#contacto")}
                >
                  Contacto
                </Button>
              </div>
              <div className="sm:flex flex-col sm:flex-row gap-8 justify-center items-center py-12">
                <ImageApi
                  id={page.footer_img1}
                  alt={"logo 2"}
                  className={"mx-auto mb-8 sm:mb-0"}
                />
                <ImageApi
                  id={page.footer_img_2}
                  alt={"logo 1"}
                  className={"mx-auto"}
                />
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

export default QuienesSomos;

export const Head: HeadFC = () => <SEO />;
