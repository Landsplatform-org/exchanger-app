"use client";

import { useEffect, useState } from "react";

import { AiFillEye } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { Exchange } from "@/@types/Exchange";
import NoInfo from "./NoInfo";
import { SearchParams } from "@/@types/SearchParams";
import { getNormalDate } from "@/utils/getNormalDate";
import { useGetData } from "@/hooks/useGetData";
import { useSession } from "next-auth/react";

const ExchangesTable = ({ searchParams }: { searchParams: SearchParams }) => {
  const { data: session } = useSession();

  const [exchanges, setExchanges] = useState<Exchange[]>([]);

  useEffect(() => {
    const getAndSetExchanges = async () => {
      try {
        const data = await useGetData(searchParams, "exchanges", session);
        setExchanges(data);
      } catch (error) {
        console.log(error);
      }
    };
    getAndSetExchanges();
  }, [session, searchParams]);

  return (
    <>
      {!exchanges.length ? (
        <NoInfo />
      ) : (
        <form className="bg-white p-4 rounded-md shadow-lg text-gray-500">
          <h3 className="font-bold text-blue-400">Ожидают подтверждения</h3>
          <div className="flex items-center gap-6">
            <div className="w-max h-max py-3 bg-white rounded-md flex items-center justify-center gap-2">
              <label htmlFor="statusSearch" className="font-bold text-md">
                Статус:
              </label>
              <select
                name="status"
                id="statusSearch"
                className="p-2 rounded-md border border-1 border-gray-200 focus:outline-blue-400 cursor-pointer"
              >
                <option value="">--Не выбрано--</option>
                <option value="1">Ожидает подтверждения</option>
                <option value="2">Ожидание платежа</option>
                <option value="3">Обработка</option>
                <option value="4">Обработано</option>
                <option value="5">Тайм-аут</option>
                <option value="6">Отклонено</option>
                <option value="7">Отменено</option>
              </select>
            </div>

            <div className="w-max h-max py-3 bg-white rounded-md flex items-center justify-center gap-2">
              <label htmlFor="sort-date" className="font-bold text-md">
                Сортировка:
              </label>
              <select
                name="date"
                id="sort-date"
                className="p-2 rounded-md border border-1 border-gray-200 focus:outline-blue-400 cursor-pointer"
              >
                <option value="1">Дата ↑</option>
                <option value="2">Дата ↓</option>
              </select>
            </div>

            <div className="w-max h-max py-3 bg-white rounded-md flex items-center justify-center gap-2">
              <label htmlFor="sort-hash" className="font-bold text-md">
                ID обмена:
              </label>
              <input
                type="text"
                name="hash"
                id="sort-hash"
                className="p-2 rounded-md border border-1 border-gray-200 focus:outline-blue-400 cursor-pointer"
              />
            </div>
            <button
              type="submit"
              className="w-[250px] py-2 bg-[#0cc6c9] rounded-md flex items-center justify-center gap-2 text-white hover:brightness-90 transition-all duration-200"
            >
              <i className="text-xl">
                <AiOutlineSearch />
              </i>
              <span className="text-md">Поиск</span>
            </button>
          </div>
          <table className="mt-6" id="table-exchanges">
            <thead>
              <tr className="flex items-center justify-start gap-10 p-2 rounded-md shadow-md">
                <th className="w-max text-start">
                  <input id="toggle-checkbox" type="checkbox" />
                </th>
                <th className="w-[40px] text-start">ID</th>
                <th className="w-[163px] text-start">Дата</th>
                <th className="w-[350px] text-start">Сумма обмена</th>
                <th className="w-[200px] text-start">Хэш Обмена</th>
                <th className="w-[200px] text-start">Статус</th>
                <th className="w-[200px] text-start">Процесс</th>
                <th className="w-[80px] text-start">Действия</th>
              </tr>
            </thead>
            {exchanges.map((exchange: Exchange) => (
              <tbody key={exchange.id}>
                <tr className="flex items-center justify-center gap-10 px-2 py-1 my-2 rounded-md border border-1 border-gray-200">
                  <td className="w-max">
                    <input type="checkbox" />
                  </td>
                  <td className="w-[40px]">{exchange.ex_id}</td>
                  <td className="w-[163px]">{getNormalDate(exchange.created_at)}</td>
                  <td className="w-[350px]">
                    <span className="font-bold">
                      {exchange.send_sum_with_fee}
                    </span>{" "}
                    {exchange.currency_send} &rarr;{" "}
                    <span className="font-bold">
                      {exchange.receive_sum_with_fee}
                    </span>{" "}
                    {exchange.currency_receive}
                  </td>
                  <td className="w-[200px]">
                    <span className="rounded-md p-1 bg-gray-400 text-white font-bold text-sm">
                      {exchange.hash}
                    </span>
                  </td>

                  <td className="w-[200px]">
                    <span className="rounded-md p-1 bg-green-500 text-white">
                      {exchange.ex_status_name}
                    </span>
                  </td>

                  <td className="w-[200px]">
                    <span className="rounded-md p-1 bg-blue-600 text-white font-bold text-sm">
                      {exchange.process_name}
                    </span>
                  </td>
                  <td className="w-max flex items-center justify-center gap-2 text-white">
                    <button className="p-2 bg-[#0cc6c9] hover:brightness-90 transition-all duration-200 rounded-md">
                      <i className="text-xl">
                        <AiFillEye />
                      </i>
                    </button>
                    <button className="p-2 bg-red-500 hover:brightness-[.8] transition-all duration-200 rounded-md">
                      <i className="text-xl">
                        <BsFillTrashFill />
                      </i>
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>

          <div className="flex gap-4">
            <select
              name="action"
              id="action"
              className="rounded-md p-2 border border-1 border-gray-200 focus:outline-blue-400"
            >
              <option value="">-- Действие --</option>
              <option value="1">Ожидает подтверждения</option>
              <option value="2">Ожидание платежа</option>
              <option value="3">Обработка</option>
              <option value="4">Обработано</option>
              <option value="5">Тайм-аут</option>
              <option value="6">Отклонить</option>
              <option value="7">Отменить</option>
              <option value="8">Обработать и выплатить</option>
              <option value="9">Удалить выбранное</option>
            </select>
            <button
              type="submit"
              className="flex gap-2 items-center justify-center px-4 py-2 rounded-md bg-[#0cc6c9] text-white hover:brightness-90 transition-all duration-200"
            >
              <i className="text-xl">
                <AiOutlineSearch />
              </i>
              <span>Выполнить</span>
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default ExchangesTable;
