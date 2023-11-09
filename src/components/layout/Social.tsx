import * as React from "react";
import SocialIcon from "../shared/SocialIcon";

const Social = () => {
  const social = [
    { name: "linkedin", url: "" },
    { name: "instagram", url: "" },
    { name: "facebook", url: "" },
  ];
  return (
    <div className="flex space-between gap-3">
      {social.map((item) => (
        <a key={item.name} href={item.url} target="_blank" rel="noreferrer">
          <SocialIcon variant={item.name} />
        </a>
      ))}
    </div>
  );
};

export default Social;
