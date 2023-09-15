"use client";

import React, { FormEvent, useState } from "react";

import { AiOutlineSearch } from "react-icons/ai";
import Row from "@/components/Row";
import { useRouter } from "next/navigation";

const FAQSearchInput = () => {
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const encodedSearchQuery = encodeURI(searchQuery);
    router.push(`/administration/users/?username=${encodedSearchQuery}`);
  };

  return (
    <Row>
      <form
        action="submit"
        onSubmit={handleSubmit}
        className="w-full flex items-center gap-10 bg-white text-gray-500"
      >
        <div className="w-max h-max flex flex-col py-3 bg-white rounded-md gap-2">
          <label htmlFor="statusSearch" className="font-normal text-md">
            Категория:
          </label>
          <select
            name="status"
            id="statusSearch"
            className="p-2 rounded-md border border-1 border-gray-200 focus:outline-blue-400 cursor-pointer"
          >
            <option value="">--Не выбрано--</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>

        <div className="w-max h-max flex flex-col py-3 bg-white rounded-md gap-2">
          <label htmlFor="statusSearch" className="font-normal text-md">
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

        <div className="w-max h-max flex flex-col py-3 bg-white rounded-md gap-2">
          <label htmlFor="statusSearch" className="font-normal text-md">
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
          </select>
        </div>
        <button
          type="submit"
          className="mt-8 w-[250px] py-2 bg-[#0cc6c9] rounded-md flex items-center justify-center gap-2 text-white hover:brightness-90 transition-all duration-200"
        >
          <i className="text-xl">
            <AiOutlineSearch />
          </i>
          <span className="text-md">Поиск</span>
        </button>
      </form>
    </Row>
  );
};

export default FAQSearchInput;
