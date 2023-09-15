import { BsFillTrashFill } from "react-icons/bs";
import Container from "@/components/Container";
import { type SearchParams } from "@/@types/SearchParams";
import { MdEditSquare } from "react-icons/md";
import NoInfo from "@/components/NoInfo";
import { type Page } from "@/@types/Page";
import React from "react";
import Wrapper from "@/components/Wrapper";
import { useGetData } from "@/hooks/useGetData";

const PageSettingsPage = async ({ searchParams }: { searchParams: SearchParams }) => {
  const pages = await useGetData(searchParams, "pages");

  return (
    <Wrapper position="center">
      <Container>
        <div className="bg-white p-4 rounded-md shadow-lg text-gray-500">
          <h3 className="font-bold text-blue-400">Настройка страниц</h3>
          <table className="mt-6">
            <thead>
              <tr className="flex items-center gap-10 p-2 rounded-md shadow-md">
                <th className="w-[340px] text-start">Дата</th>
                <th className="w-[500px] text-start">Заголовок</th>
                <th className="w-[600px] text-end">Действия</th>
              </tr>
            </thead>
            {!pages.length && <NoInfo />}
            {pages.map((page: Page) => (
              <tbody key={page.id}>
                <tr className="flex items-center justify-center gap-10 px-2 py-1 my-2 rounded-md border border-1 border-gray-200">
                  <td className="w-[340px]">{page.created_at}</td>
                  <td className="w-[500px]">{page.title}</td>
                  <td className="w-[600px] flex items-end justify-end gap-2 text-white text-xl">
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

export default PageSettingsPage;
