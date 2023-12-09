import React from "react";
import { DotLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <DotLoader color="#6A2978" />
    </div>
  );
};

export default Loader;
