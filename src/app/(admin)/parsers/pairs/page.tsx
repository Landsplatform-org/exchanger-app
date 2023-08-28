import { BsFillTrashFill } from "react-icons/bs";
import Container from "@/hoc/Container";
import { IoMdSwap } from "react-icons/io";
import { MdAddBox } from "react-icons/md";
import React from "react";
import Wrapper from "@/hoc/Wrapper";
import { pairsData } from "@/config/pairs-data";

const page = () => {
  return (
    <Wrapper position="flex-end">
      <Container>
        <div className="flex flex-col gap-4 w-full bg-white p-4 rounded-md shadow-lg text-gray-500">
          <h3 className="font-bold text-blue-400">Пары</h3>
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
            <button className="w-max flex gap-2 items-center justify-center text-white bg-red-500 px-4 py-2 rounded-md hover:brightness-[.8] transition-all duration-200">
              <i className="text-xl">
                <BsFillTrashFill />
              </i>
              <span>Удалить</span>
            </button>
          </div>
          <table className="mt-6">
            <thead>
              <tr className="flex items-center gap-10 p-2 rounded-md shadow-md">
                <th className="w-[100px] text-start">ID</th>
                <th className="w-[120px] text-start">Источник</th>
                <th className="w-[200px] text-start">Заголовок</th>
                <th className="w-[200px] text-start">Пара</th>
                <th className="w-[100px] text-start">Номинал</th>
                <th className="w-[250px] text-start">Курс</th>
                <th className="w-[150px] text-start">Код</th>
              </tr>
            </thead>
            {pairsData.map((item: any) => (
              <tbody key={item.id}>
                <tr className="flex items-center gap-10 px-2 py-1 my-2 rounded-md border border-1 border-gray-200">
                  <td className="w-[100px]">{item.source_id}</td>
                  <td className="w-[120px]">{item.source}</td>
                  <td className="w-[200px]">{item.title}</td>
                  <td className="w-[200px]">{item.pair}</td>
                  <td className="w-[100px]">{item.nominal}</td>
                  <td className="w-[250px]">{item.rate}</td>
                  <td className="w-[150px]">{item.code}</td>
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
