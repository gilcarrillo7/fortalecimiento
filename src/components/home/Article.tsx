import * as React from "react";

const Article = ({
  image,
  title,
  description,
  link,
}: {
  image: string;
  title: string;
  description: string;
  link: string;
}) => {
  return (
    <div className={`flex flex-col`}>
      <img className="" alt="" src={image} />
      <h3 className="underline text-primary text-xl my-4">{title}</h3>
      <p className="text-sm mb-3">{description}</p>
      <a href={link} className="font-semibold text-sm font-bold text-primary text-xs">
        Seguir leyendo →
      </a>
    </div>
  );
};

export default Article;
