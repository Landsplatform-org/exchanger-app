import { AiOutlineSearch } from "react-icons/ai";
import React from "react";
import Row from "@/components/Row";

const Nav = () => {
  return (
    <form className="w-full flex items-center justify-around bg-white shadow-lg rounded-md text-gray-500">
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
    </form>
  );
};

export default Nav;
