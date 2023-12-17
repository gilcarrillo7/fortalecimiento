import React, { useMemo, useState, useEffect } from "react";
import Layout from "../components/layout/Layout";
import { HeadFC, PageProps } from "gatsby";
import Page from "../components/layout/Page";
import Article from "../components/home/Article";
import { useAppDispatch, useAppSelector } from "../hooks";
import { fetchPosts, selectPosts } from "../features/api/apiSlice";
import Loader from "../components/shared/Loader";
import { SEO } from "../components/layout/SEO";
import { PostEnum } from "../types/Enums";
import { ARTICLE } from "../constants";
import { AcfArticle } from "../types";

const Articulos: React.FC<PageProps> = () => {
  const articles = useAppSelector((state) =>
    selectPosts(state, PostEnum.ARTICLES)
  ) as AcfArticle[];

  const itemsPerPage = 12;
  const dispatch = useAppDispatch();

  const total = useMemo(() => (articles ? articles.length : 0), [articles]);
  const pages = useMemo(
    () =>
      Array.from(Array(Math.ceil(total / itemsPerPage) + 1).keys()).slice(1),
    [articles, itemsPerPage, total]
  );

  const [page, setPage] = useState(1);
  const min = useMemo(() => (page - 1) * itemsPerPage + 1, [page]);
  const max = useMemo(() => page * itemsPerPage, [page]);

  useEffect(() => {
    dispatch(fetchPosts({ post: PostEnum.ARTICLES, id: ARTICLE }));
  }, []);

  return (
    <Layout headerComplementary>
      {articles?.length ? (
        <Page className="text-2xl sm:text-3xl">
          <h1 className="text-center mt-36">
            Conoce más sobre las actividades y logros que en conjunto celebramos
            con las organizaciones que acompañamos.
          </h1>
          <p className="font-bold text-primary mt-20">
            {itemsPerPage <= total ? itemsPerPage : total} artículos de {total}
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 mb-12 gap-6 sm:gap-12 lg:gap-24 xl:gap-40 mt-8 mb-20">
            {articles.map(
              (art, i) =>
                i >= min - 1 &&
                i < max && (
                  <Article
                    key={`artindx${i}`}
                    image={art.image}
                    title={art.title}
                    description={art.preview}
                    link={`/articulos/articulo?id=${art.id}`}
                    linkText={art.preview_link}
                  />
                )
            )}
          </div>
          <div className="mb-32 text-primary text-2xl sm:text-3xl text-center">
            {page !== 1 && (
              <a href="#" className="mr-2" onClick={() => setPage(page - 1)}>
                {"<"}
              </a>
            )}
            {pages.map((pag) => (
              <a
                key={`page${pag}`}
                href="#"
                className={`mx-2 ${pag === page ? "font-bold" : ""}`}
                onClick={() => setPage(pag)}
              >
                {pag}
              </a>
            ))}
            {page < pages.length && (
              <a href="#" className="ml-2" onClick={() => setPage(page + 1)}>
                {">"}
              </a>
            )}
          </div>
        </Page>
      ) : (
        <Loader />
      )}
    </Layout>
  );
};

export default Articulos;

export const Head: HeadFC = () => <SEO />;
