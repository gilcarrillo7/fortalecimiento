import React from "react";

interface IProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export const SEO = ({
  title = "Centro para el Fortalecimiento de la Sociedad Civil",
  description = "Centro para el Fortalecimiento de la Sociedad Civil, Fortalecemos capacidades. Acompañamos personas.",
  image = "https://fortalecimiento.org/imgs/cfosc.jpg",
  url = "https://fortalecimiento.org/",
}: IProps) => {
  return (
    <>
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      <meta property="og:url" content={`https://fortalecimiento.org${url}`} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:secure_url" content={image} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <title>{title}</title>
    </>
  );
};
