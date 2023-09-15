import { Currency } from "@/@types/Currency";
import Image from "next/image";
import React from "react";

const Reserve = ({ currencies }: { currencies: Currency[] }) => {
  return (
    <div className="flex flex-col h-[465px] gap-4 items-center justify-center pb-14 px-10 rounded-md bg-white border border-gray-300">
      <h2 className="w-full text-lg text-center border border-transparent border-b-gray-300 py-2">
        Резервы
      </h2>
      {currencies.map((currency: Currency) => (
        <div key={currency.id} className="flex w-full items-center gap-4">
          <Image
            className="w-[35px] h-[35px]"
            src={"http://localhost:5000/uploads/logos/" + currency.image}
            width={35}
            height={35}
            priority
            alt={currency.name + "logo"}
          />
          <div className="flex flex-col">
            <span className="font-bold">
              {currency.name} {currency.currency}
            </span>
            <span className="text-sm">
              {currency.reserve} {currency.currency}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reserve;
