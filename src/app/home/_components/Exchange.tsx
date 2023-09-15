import React, { useMemo } from "react";
import { filterReceive, filterSend } from "@/utils/filterCurrencies";

import { type Currency } from "@/@types/Currency";
import Form from "./Form";

const Exchange = ({ currencies }: { currencies: Currency[] }) => {
  const curDefaultSend = useMemo(() => filterSend(currencies), [currencies]);
  const curDefaultReceive = useMemo(() => filterReceive(currencies),[currencies]);

  return (
    <div className="max-w-[80%] h-[465px] flex flex-col gap-6 py-8 px-10 bg-white border border-gray-300 rounded-md">
      <h2 className="w-full text-lg text-center border border-transparent border-b-gray-300 py-2">
        Обмен
      </h2>
      <Form 
        curDefaultSend={curDefaultSend} 
        curDefaultReceive={curDefaultReceive} 
      />
    </div>
  );
};

export default Exchange;
