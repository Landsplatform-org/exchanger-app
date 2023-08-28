import { MdAddBox, MdEditSquare } from "react-icons/md";

import { BsFillTrashFill } from "react-icons/bs";
import Container from "@/hoc/Container";
import { IoMdSwap } from "react-icons/io";
import React from "react";
import Wrapper from "@/hoc/Wrapper";
import { directionsData } from "@/config/directions-data";

const page = () => {
  return (
    <Wrapper position="flex-end">
      <Container>
        <div className="flex flex-col gap-4 w-full bg-white p-4 rounded-md shadow-lg text-gray-500">
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
                <th className="w-[160px] text-start">Процесс</th>
                <th className="w-[360px] text-end">Действия</th>
              </tr>
            </thead>
            {directionsData.map((item: any) => (
              <tbody key={item.date}>
                <tr className="flex items-center justify-center gap-10 px-2 py-1 my-2 rounded-md border border-1 border-gray-200">
                  <td className="w-[165px]">{item.date}</td>
                  <td className="w-[260px]">
                    {item.direction_from} {item.currency_from} &rarr;{" "}
                    {item.direction_to} {item.currency_to}
                  </td>
                  {item.status ? (
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
                    {item.rate_from} {item.currency_from} &rarr; {item.rate_to}{" "}
                    {item.currency_to} {" "}
                    <span className="rounded-md p-1 bg-[#0cc6c9] text-white font-bold text-sm">
                      Bestchange
                    </span>
                  </td>
                  <td className="w-[160px]">
                    <span className="rounded-md p-1 bg-blue-600 text-white font-bold text-sm">
                      {item.process}
                    </span>
                  </td>
                  <td className="w-[360px] flex items-end justify-end gap-2 text-white text-xl">
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

export default page;
