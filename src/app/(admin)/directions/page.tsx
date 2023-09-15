import { MdAddBox, MdEditSquare } from "react-icons/md";

import { BsFillTrashFill } from "react-icons/bs";
import Container from "@/components/Container";
import { type Direction } from "@/@types/Direction";
import { IoMdSwap } from "react-icons/io";
import { type SearchParams } from "@/@types/SearchParams";
import NoInfo from "@/components/NoInfo";
import React from "react";
import Wrapper from "@/components/Wrapper";
import { useGetData } from "@/hooks/useGetData";

const Directions = async ({ searchParams }: { searchParams: SearchParams }) => {
  const directions = await useGetData(searchParams, "directions");

  return (
    <Wrapper position="center">
      <Container>
        <div className="flex flex-col gap-4 bg-white p-4 rounded-md shadow-lg text-gray-500">
          <h3 className="font-bold text-blue-400">Направления обмена</h3>
          <div className="flex gap-2">
            <button className="w-max flex gap-2 items-center justify-center text-white bg-green-500 px-4 py-2 rounded-md hover:brightness-90 transition-all duration-200">
              <i className="text-xl">
                <MdAddBox />
              </i>
              <span>Добавить</span>
            </button>
            <button className="w-max flex gap-2 items-center justify-center text-white bg-green-500 px-4 py-2 rounded-md hover:brightness-90 transition-all duration-200">
              <i className="text-xl">
                <IoMdSwap />
              </i>
              <span>Обновить курсы</span>
            </button>
          </div>
          <table className="mt-6">
            <thead>
              <tr className="flex items-center gap-10 p-2 rounded-md shadow-md">
                <th className="w-[165px] text-start">Дата</th>
                <th className="w-[260px] text-start">Направление</th>
                <th className="w-[70px] text-center">Статус</th>
                <th className="w-[320px] text-start">Курс</th>
                <th className="w-[130px] text-start">Процесс</th>
                <th className="w-[330px] text-end">Действия</th>
              </tr>
            </thead>
            {!directions.length && <NoInfo />}
            {directions.map((direction: Direction) => (
              <tbody key={direction.id}>
                <tr className="flex items-center justify-center gap-10 px-2 py-1 my-2 rounded-md border border-1 border-gray-200">
                  <td className="w-[165px]">{direction.created_at}</td>
                  <td className="w-[260px]">
                    {direction.currency_id_send} &rarr;{" "}
                    {direction.currency_id_receive}
                  </td>
                  {direction.is_active ? (
                    <>
                      <td className="flex items-center justify-center w-[70px]">
                        <div className="w-[25px] h-[25px] rounded-full bg-green-500"></div>
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="flex items-center justify-center w-[70px]">
                        <div className="w-[25px] h-[25px] rounded-full bg-red-500"></div>
                      </td>
                    </>
                  )}
                  <td className="w-[320px]">
                    {direction.rate_out} {direction.currency_id_send} &rarr;{" "}
                    {direction.rate_in} {direction.currency_id_receive}{" "}
                    <span className="rounded-md p-1 bg-[#0cc6c9] text-white font-bold text-sm">
                      Bestchange
                    </span>
                  </td>
                  <td className="w-[130px]">
                    <span className="rounded-md p-1 bg-blue-600 text-white font-bold text-sm">
                      {direction.process_type_id}
                    </span>
                  </td>
                  <td className="w-[330px] flex items-end justify-end gap-2 text-white text-xl">
                    <button className="bg-[#0cc6c9] p-2 hover:brightness-90 transition-all duration-200 rounded-md">
                      <i>
                        <MdEditSquare />
                      </i>
                    </button>
                    <button className="bg-red-500 p-2 hover:brightness-90 transition-all duration-200 rounded-md">
                      <i>
                        <BsFillTrashFill />
                      </i>
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Directions;
