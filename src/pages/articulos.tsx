import React, { useMemo, useState } from "react";
import Layout from "../components/layout/Layout";
import { HeadFC, PageProps } from "gatsby";
import Page from "../components/layout/Page";
import Image1 from "../images/articles/image1.svg";
import Image2 from "../images/articles/image2.svg";
import Image3 from "../images/articles/image3.svg";
import Article from "../components/home/Article";

const Articulos: React.FC<PageProps> = () => {
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

  const itemsPerPage = 12;

  const total = useMemo(() => arts.length, [arts]);
  const pages = useMemo(
    () =>
      Array.from(Array(Math.ceil(arts.length / itemsPerPage) + 1).keys()).slice(
        1
      ),
    [arts, itemsPerPage]
  );

  const [page, setPage] = useState(1);
  const min = useMemo(() => (page - 1) * itemsPerPage + 1, [page]);
  const max = useMemo(() => page * itemsPerPage, [page]);

  return (
    <Layout>
      <Page className="text-2xl sm:text-3xl">
        <h1 className="text-center mt-20">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          <br />
          <span className="font-bold text-primary">
            Aenean massa. Cum sociis natoque penatibu
          </span>
        </h1>
        <p className="font-bold text-primary mt-20">
          {itemsPerPage} artículos de {total}
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 mb-12 gap-6 sm:gap-20 lg:gap-40 mt-8 mb-20">
          {arts.map(
            (art, i) =>
              i >= min - 1 &&
              i < max && (
                <Article
                  key={`artindx${i}${art.link}`}
                  image={art.image}
                  title={art.title}
                  description={art.description}
                  link={art.link}
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
    </Layout>
  );
};

export default Articulos;

export const Head: HeadFC = () => <title>Artículos</title>;
