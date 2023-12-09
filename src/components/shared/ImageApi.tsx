import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../constants";

const ImageApi = ({
  id,
  alt,
  className,
  onClick,
  myRef,
}: {
  id: number;
  alt: string;
  className: string;
  onClick?: () => void;
  myRef?: (node?: Element | null | undefined) => void;
}) => {
  const [url, setUrl] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${BASE_URL}/media/${id}`);
      const data = await response.json();
      return data;
    };

    if (id && id !== 0) {
      fetchData()
        .then((res) => setUrl(res.guid.rendered))
        .catch(console.error);
    }
  }, [id]);
  return (
    <>
      {url !== "" && (
        <img
          ref={myRef}
          src={url}
          alt={alt}
          className={className}
          onClick={onClick}
        />
      )}
    </>
  );
};

export default ImageApi;
