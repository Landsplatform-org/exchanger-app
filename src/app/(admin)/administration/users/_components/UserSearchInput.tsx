"use client";

import React, { FormEvent, useState } from "react";

import { AiOutlineSearch } from "react-icons/ai";
import Link from "next/link";
import { MdOutlineClear } from "react-icons/md";
import { useRouter } from "next/navigation";

const UserSearchInput = () => {
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const encodedSearchQuery = encodeURI(searchQuery);
    router.push(`/administration/users/?username=${encodedSearchQuery}`);
  };

  return (
    <>
      <form
        action="submit"
        onSubmit={handleSubmit}
        className="flex items-center gap-4 h-max"
      >
        <div className="bg-white rounded-md flex items-center justify-center border border-1 border-gray-200">
          <input
            type="text"
            name="username"
            className="w-[900px] p-2 rounded-l-md focus:outline-blue-400 cursor-pointer"
            placeholder="Введите логин"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={() => setSearchQuery("")}>
            <Link
              href="/administration/users"
              className="w-[40px] h-[40px] bg-[#0BB2B5] rounded-r-md flex items-center justify-center gap-2 text-white enabled:hover:brightness-90 transition-all duration-200 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-400"
            >
              <i className="text-xl">
                <MdOutlineClear />
              </i>
            </Link>
          </button>
        </div>
        <button
          type="submit"
          disabled={!searchQuery}
          className="px-4 py-2 bg-[#0cc6c9] rounded-md flex items-center justify-center gap-2 text-white enabled:hover:brightness-90 transition-all duration-200 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-400"
        >
          <i className="text-xl">
            <AiOutlineSearch />
          </i>
          <span>Поиск</span>
        </button>
      </form>
    </>
  );
};

export default UserSearchInput;
