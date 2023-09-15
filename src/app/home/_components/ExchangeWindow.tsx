"use client";

import React, { useEffect, useState } from "react";

import type { Currency } from "@/@types/Currency";
import Exchange from "./Exchange";
import Reserve from "./Reserve";
import { SearchParams } from "@/@types/SearchParams";
import { useGetData } from "@/hooks/useGetData";
import { useSession } from "next-auth/react";

const ExchangeWindow = ({ searchParams }: { searchParams: SearchParams }) => {
  const { data: session } = useSession();

  const [currencies, setCurrencies] = useState<Currency[]>([])

  useEffect(() => {
    const getAndSetUser = async () => {
      try {
        const data = await useGetData(searchParams, "currencies", session);
        setCurrencies(data);
      } catch (error) {
        console.log(error);
      }
    };
    getAndSetUser();
  }, [session]);

  return (
    <div className="w-full h-[50vh] flex items-start justify-between">
      <Exchange currencies={currencies} />
      <Reserve currencies={currencies} />
    </div>
  );
};

export default ExchangeWindow;
