import * as React from "react";
import Page from "../layout/Page";

import Article from "./Article";
import { Link } from "gatsby";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchPosts, selectPosts } from "../../features/api/apiSlice";
import { useEffect } from "react";
import { PostEnum } from "../../types/Enums";
import { ARTICLE } from "../../constants";
import Loader from "../shared/Loader";

const Articles = () => {
  const articles = useAppSelector((state) =>
    selectPosts(state, PostEnum.ARTICLES)
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPosts({ post: PostEnum.ARTICLES, id: ARTICLE }));
  }, []);

  return (
    <>
      {articles ? (
        <Page className="bg-secundary py-12">
          <h1
            className={`text-primary text-3xl sm:text-5xl font-semibold text-center mb-12`}
          >
            Artículos
          </h1>
          <div className="grid sm:grid-cols-3 mb-12 gap-6 lg:gap-32">
            {articles.slice(0, 3).map((art, i) => (
              <Article
                key={`art${i}${art.title}`}
                image={art.image}
                title={art.title}
                description={art.preview}
                link={`/articulos/articulo?id=${art.id}`}
                linkText={art.preview_link}
              />
            ))}
          </div>
          <Link
            className="text-primary font-light text-2xl sm:text-3xl hover:underline"
            to="/articulos"
          >
            Ver todos
          </Link>
        </Page>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Articles;
