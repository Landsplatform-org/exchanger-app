import { MdAddBox, MdEditSquare } from "react-icons/md";

import { BsFillTrashFill } from "react-icons/bs";
import Container from "@/hoc/Container";
import React from "react";
import Wrapper from "@/hoc/Wrapper";
import { currenciesData } from "@/config/currencies-data";

const page = () => {
  return (
    <Wrapper position="flex-end">
      <Container>
        <div className="flex flex-col gap-4 w-full bg-white p-4 rounded-md shadow-lg text-gray-500">
          <h3 className="font-bold text-blue-400">Валюты</h3>
          <button className="w-max flex gap-2 items-center justify-center text-white bg-green-500 px-4 py-2 rounded-md hover:brightness-90 transition-all duration-200">
            <i className="text-xl"><MdAddBox /></i>
            <span>Добавить</span>
          </button>
          <table className="mt-6">
            <thead>
              <tr className="flex items-center gap-10 p-2 rounded-md shadow-md">
                <th className="w-[40px] text-start">ID</th>
                <th className="w-[120px] text-start">Шлюз</th>
                <th className="w-[100px] text-start">Валюта</th>
                <th className="w-[120px] text-start">Резерв</th>
                <th className="w-[200px] text-center">Отправка по умолчанию</th>
                <th className="w-[207px] text-center">Получение по умолчанию</th>
                <th className="w-[500px] text-end">Действия</th>
              </tr>
            </thead>
            {currenciesData.map((item: any) => (
              <tbody key={item.id}>
                <tr className="flex items-center justify-center gap-10 px-2 py-1 my-2 rounded-md border border-1 border-gray-200">
                  <td className="w-[40px]">{item.id}</td>
                  <td className="w-[120px]">{item.gateway}</td>
                  <td className="w-[100px]">{item.currency}</td>
                  <td className="w-[120px]">{item.reserve}</td>
                  {item.default_send ? (
                    <td className="flex items-center justify-center w-[200px]">
                      <div className="w-[25px] h-[25px] rounded-full bg-green-500"></div>
                    </td>
                  ) : (
                    <td className="flex items-center justify-center w-[200px]">
                      <div className="w-[25px] h-[25px] rounded-full bg-red-500"></div>
                    </td>
                  )}
                  {item.default_receive ? (
                    <td className="flex items-center justify-center w-[207px]">
                      <div className="w-[25px] h-[25px] rounded-full bg-green-500"></div>
                    </td>
                  ) : (
                    <td className="flex items-center justify-center w-[207px]">
                      <div className="w-[25px] h-[25px] rounded-full bg-red-500"></div>
                    </td>
                  )}
                  <td className="w-[500px] flex items-end justify-end gap-2 text-white text-xl">
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
