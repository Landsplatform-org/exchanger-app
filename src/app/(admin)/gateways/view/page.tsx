import { BsFillPlayFill, BsFillTrashFill, BsStopFill } from "react-icons/bs";

import Container from "@/hoc/Container";
import { MdEditSquare } from "react-icons/md";
import React from "react";
import Wrapper from "@/hoc/Wrapper";
import { gatewaysData } from "@/config/gateways-data";

const page = () => {
  return (
    <Wrapper position="flex-end">
      <Container>
        <div className="w-full bg-white p-4 rounded-md shadow-lg text-gray-500">
          <h3 className="font-bold text-blue-400">Шлюзы</h3>
          <table className="mt-6">
            <thead>
              <tr className="flex items-center gap-10 p-2 rounded-md shadow-md">
                <th className="w-[300px] text-start">Alias</th>
                <th className="w-[315px] text-start">Название</th>
                <th className="w-[200px] text-center">Статус</th>
                <th className="w-[600px] text-end">Действия</th>
              </tr>
            </thead>
            {gatewaysData.map((item: any) => (
              <tbody key={item.id}>
                <tr className="flex items-center justify-center gap-10 px-2 py-1 my-2 rounded-md border border-1 border-gray-200">
                  <td className="w-[300px]">{item.alias}</td>
                  <td className="w-[315px]">{item.name}</td>
                  {item.status ? (
                    <>
                      <td className="flex items-center justify-center w-[200px]">
                        <div className="w-[25px] h-[25px] rounded-full bg-green-500"></div>
                      </td>
                      <td className="w-[600px] flex items-end justify-end gap-2 text-white text-xl">
                        <button className="bg-[#0cc6c9] p-2 hover:brightness-90 transition-all duration-200 rounded-md">
                          <i><MdEditSquare /></i>
                        </button>
                        <button className="bg-yellow-400 p-2 hover:brightness-90 transition-all duration-200 rounded-md">
                          <i><BsStopFill /></i>
                        </button>
                        <button className="bg-red-500 p-2 hover:brightness-90 transition-all duration-200 rounded-md">
                          <i><BsFillTrashFill /></i>
                        </button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="flex items-center justify-center w-[200px]">
                        <div className="w-[25px] h-[25px] rounded-full bg-red-500"></div>
                      </td>
                      <td className="w-[600px] flex items-center justify-end gap-2 text-white text-xl">
                        <button className="bg-green-400 p-2 hover:brightness-90 transition-all duration-200 rounded-md">
                            <i><BsFillPlayFill /></i>
                        </button>
                      </td>
                    </>
                  )}
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
