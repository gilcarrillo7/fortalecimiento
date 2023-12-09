import * as React from "react";
import Page from "../layout/Page";

import Image1 from "../../images/articles/image1.svg";
import Image2 from "../../images/articles/image2.svg";
import Image3 from "../../images/articles/image3.svg";
import Article from "./Article";
import { Link } from "gatsby";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchArticles, selectArticles } from "../../features/api/apiSlice";
import { useEffect } from "react";

const Articles = () => {
  const articles = useAppSelector(selectArticles);
  const dispatch = useAppDispatch();
  const arts = [
    {
      image: Image1,
      title: "Impulsamos la inclusión y la toma de decisiones conjuntas",
      description:
        "Realizamos nuestro decimotercero Foro de Redes y Organizaciones, un evento insignia que realizamos de manera anual y que tiene por objetivo ser un espacio socializador para el...",
      link: "/a",
    },
    {
      image: Image2,
      title: "Impulsamos la inclusión y la toma de decisiones conjuntas",
      description:
        "Realizamos nuestro decimotercero Foro de Redes y Organizaciones, un evento insignia que realizamos de manera anual y que tiene por objetivo ser un espacio socializador para el...",
      link: "/b",
    },
    {
      image: Image3,
      title: "Impulsamos la inclusión y la toma de decisiones conjuntas",
      description:
        "Realizamos nuestro decimotercero Foro de Redes y Organizaciones, un evento insignia que realizamos de manera anual y que tiene por objetivo ser un espacio socializador para el...",
      link: "/c",
    },
  ];

  useEffect(() => {
    dispatch(fetchArticles());
  }, []);

  return (
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
  );
};

export default Articles;
