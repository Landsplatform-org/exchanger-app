import Container from "@/hoc/Container";
import React from "react";
import Wrapper from "@/hoc/Wrapper";

const page = () => {
  return (
    <Wrapper position="flex-end">
      <Container>
        <div className="flex flex-col gap-4 w-full bg-white p-4 rounded-md shadow-lg text-gray-500">
          <div className="flex gap-10">
            <div className="w-max h-max py-3 bg-white rounded-md flex flex-col gap-2">
              <label htmlFor="statusSearch">Статус</label>
              <select
                name="status"
                id="statusSearch"
                className="w-[250px] p-2 rounded-md border border-1 border-gray-200 focus:outline-blue-400 cursor-pointer"
              >
                <option value="">-- Не выбрано --</option>
                <option value="1">Активен</option>
                <option value="2">Заблокирован</option>
                <option value="3">Не активен</option>
              </select>
            </div>
            <div className="w-max h-max py-3 bg-white rounded-md flex flex-col gap-2">
              <label htmlFor="sort-date">Сортировка</label>
              <select
                name="sort_date"
                id="sort-date"
                className="w-[250px] p-2 rounded-md border border-1 border-gray-200 focus:outline-blue-400 cursor-pointer"
              >
                <option value="1">Дата ↑</option>
                <option value="2">Дата ↓</option>
              </select>
            </div>
          </div>

          <table className="flex flex-col items-center justify-center">
            <thead className="w-full flex">
              <tr className="w-full flex items-center justify-around gap-10 px-2 py-1">
                <th className="text-center">Фото</th>
                <th>Логин</th>
                <th>Дата</th>
                <th className="text-center">Статус</th>
              </tr>
            </thead>
            <tbody className="w-full flex justify-self-center">
              <tr className="w-full flex items-center justify-center gap-10 px-2 py-1 my-2 rounded-md border border-1 border-gray-200">
                <th>У вас нет партнера</th>
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
    </Wrapper>
  );
};

export default page;
