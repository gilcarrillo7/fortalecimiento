import React, { useMemo, useState, useEffect } from "react";
import Layout from "../components/layout/Layout";
import { HeadFC, PageProps } from "gatsby";
import Page from "../components/layout/Page";
import Article from "../components/home/Article";
import { useAppDispatch, useAppSelector } from "../hooks";
import { fetchArticles, selectArticles } from "../features/api/apiSlice";
import Loader from "../components/shared/Loader";

const Articulos: React.FC<PageProps> = () => {
  const articles = useAppSelector(selectArticles);

  const itemsPerPage = 12;
  const dispatch = useAppDispatch();

  const total = useMemo(() => articles.length, [articles]);
  const pages = useMemo(
    () =>
      Array.from(
        Array(Math.ceil(articles.length / itemsPerPage) + 1).keys()
      ).slice(1),
    [articles, itemsPerPage]
  );

  const [page, setPage] = useState(1);
  const min = useMemo(() => (page - 1) * itemsPerPage + 1, [page]);
  const max = useMemo(() => page * itemsPerPage, [page]);

  useEffect(() => {
    dispatch(fetchArticles());
  }, []);

  return (
    <Layout headerComplementary>
      {articles.length ? (
        <Page className="text-2xl sm:text-3xl">
          <h1 className="text-center mt-36">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            <br />
            <span className="font-bold text-primary">
              Aenean massa. Cum sociis natoque penatibu
            </span>
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
                    key={`artindx${i}${art.title}`}
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

export const Head: HeadFC = () => <title>Artículos</title>;
