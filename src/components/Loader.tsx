import LoaderRing from "./LoaderRing/LoaderRing";
import React from "react";

const Loader = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-6 bg-gray-200">
      <LoaderRing />
      <span className="text-center text-[#131313]">
        Загрузка данных профиля, пожалуйста подождите
      </span>
    </div>
  );
};

export default Loader;
