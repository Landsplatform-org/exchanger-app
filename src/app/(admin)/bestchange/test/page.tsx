import { AiOutlineSearch } from "react-icons/ai";
import Container from "@/components/Container";
import { type Currency } from "@/@types/Currency";
import { type SearchParams } from "@/@types/SearchParams";
import React from "react";
import Wrapper from "@/components/Wrapper";
import { useGetData } from "@/hooks/useGetData";

const BCTestPage = async ({ searchParams }: SearchParams) => {
  const currencies = await useGetData(searchParams, "currencies");

  return (
    <Wrapper position="flex-end">
      <Container>
        <div className="flex flex-col gap-4 w-full bg-white p-4 rounded-md shadow-lg text-gray-500">
          <h3 className="font-bold text-blue-400">Тест</h3>
          <form className="flex flex-col gap-4">
            <div className="flex gap-4">
              <div className="flex flex-col gap-2">
                <h3>Отдаю</h3>
                <select name="send" id="gateway-from" className="w-[770px] rounded-md p-2 border border-1 border-gray-200 focus:outline-blue-400">
                  {currencies.map((item: Currency) => (
                    <option key={item.id} value={item.id}>
                      {item.gateway_id} {item.currency}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <h3>Получаю</h3>
                <select name="reveive" id="gateway-to" className="w-[770px] rounded-md p-2 border border-1 border-gray-200 focus:outline-blue-400">
                  {currencies.map((item: Currency) => (
                    <option key={item.id} value={item.id}>
                      {item.gateway_id} {item.currency}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="w-max flex gap-2 items-center justify-center px-4 py-2 rounded-md bg-[#0cc6c9] text-white hover:brightness-90 transition-all duration-200"
            >
              <i className="text-xl">
                <AiOutlineSearch />
              </i>
              <span>Искать</span>
            </button>
          </form>
        </div>
      </Container>
    </Wrapper>
  );
};

export default BCTestPage;
