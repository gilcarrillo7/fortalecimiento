import * as React from "react";
import Page from "../layout/Page";

import Image1 from "../../images/articles/image1.svg";
import Image2 from "../../images/articles/image2.svg";
import Image3 from "../../images/articles/image3.svg";
import Article from "./Article";

const Articles = () => {
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
  return (
    <Page className="bg-secundary py-12">
      <h1
        className={`text-primary text-3xl sm:text-5xl font-semibold text-center mb-12`}
      >
        Artículos
      </h1>
      <div className="flex flex-col sm:flex-row mb-12 gap-6 sm:gap-20 lg:gap-40">
        {arts.map((art) => (
          <Article
            key={`${art.link}`}
            image={art.image}
            title={art.title}
            description={art.description}
            link={art.link}
          />
        ))}
      </div>
      <a
        className="text-primary font-light text-2xl sm:text-3xl hover:underline"
        href="#"
      >
        Ver todos
      </a>
    </Page>
  );
};

export default Articles;
