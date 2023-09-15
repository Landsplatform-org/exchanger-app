import React from "react";

const CurrenciesNotFound = () => {
  return (
    <div className="flex items-center max-w-[500px] w-max h-max px-4 py-3 rounded-md border-2 border-red-600 bg-red-200 text-red-600 font-bold text-sm">
      <p>Произошла ошибка при загрузке валют</p>
    </div>
  );
};

export default CurrenciesNotFound;