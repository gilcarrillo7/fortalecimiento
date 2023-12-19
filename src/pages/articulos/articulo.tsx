import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Layout from "../../components/layout/Layout";
import { HeadFC, Link, PageProps } from "gatsby";
import { FacebookShareButton, TwitterShareButton } from "react-share";

import Twitter from "../../images/articles/x.svg";
import Fb from "../../images/articles/fb.svg";
import Textura from "../../images/articles/textura.svg";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchPosts, selectArticle } from "../../features/api/apiSlice";
import Loader from "../../components/shared/Loader";
import ImageApi from "../../components/shared/ImageApi";
import { SEO } from "../../components/layout/SEO";
import { PostEnum } from "../../types/Enums";
import { ARTICLE } from "../../constants";

const Articulo: React.FC<PageProps> = ({ location }) => {
  const id = Number(location.search.split("=")[1]);
  const dispatch = useAppDispatch();
  const article = useAppSelector((state) => selectArticle(state, id));
  const { ref: refCircle, inView: inViewCircle } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const { ref: refText, inView: inViewText } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    dispatch(fetchPosts({ post: PostEnum.ARTICLES, id: ARTICLE }));
  }, [id]);

  return (
    <>
      {article ? (
        <Layout headerComplementary>
          <div className="relative pb-40">
            <div
              ref={refCircle}
              className={`hidden sm:block w-40 h-40 bg-primary rounded-full absolute top-[95px] right-0  transition-all duration-1000 ${
                inViewCircle ? "opacity-100" : "opacity-0 right-24"
              }`}
            ></div>
            <div className="container">
              <div className="sm:w-2/3 sm:mx-auto">
                <h1 className="text-3xl sm:text-4xl mt-32 sm:mt-64 text-primary font-bold mb-0">
                  {article.title}
                </h1>
                {article.date && (
                  <p className="font-light text-primary mt-2 text-xl sm:text-2xl">
                    {new Date(article.date).toLocaleDateString("es-ES", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                )}
                <ImageApi
                  id={article.image}
                  alt={article.title}
                  className={"mt-8 w-full"}
                />
                <div
                  className="my-12 flex flex-col gap-4 font-light text-lg sm:text-xl"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
                <div className="font-semibold text-primary text-xl">
                  Comparte esto:
                </div>
                <div className="flex my-8 gap-8">
                  <FacebookShareButton
                    url={`https://fortalecimiento.org/articulos/articulo/?id=${id}`}
                  >
                    <img src={Fb} alt="Facebook" className="w-12" />
                  </FacebookShareButton>
                  <TwitterShareButton
                    url={`https://fortalecimiento.org/articulos/articulo/?id=${id}`}
                  >
                    <img src={Twitter} alt="Twitter" className="w-12" />
                  </TwitterShareButton>
                </div>
                <div className="text-primary flex justify-between text-xl sm:text-2xl my-12">
                  <Link
                    to={`/articulos/articulo?id=${article.next}`}
                    className="hover:underline"
                  >
                    Siguiente
                  </Link>
                  <Link to={"/articulos"} className="hover:underline">
                    Ver todos
                  </Link>
                </div>
              </div>
            </div>
            <img
              ref={refText}
              className={`absolute left-0 bottom-0 w-full sm:w-[600px] transition-all duration-1000 ${
                inViewText ? "opacity-100" : "opacity-0 -translate-x-24"
              }`}
              src={Textura}
              alt=""
            />
          </div>
        </Layout>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Articulo;

export const Head: HeadFC = () => <SEO />;
