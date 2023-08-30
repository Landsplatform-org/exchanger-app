import { MdAddBox, MdEditSquare } from "react-icons/md";

import { BsFillTrashFill } from "react-icons/bs";
import Container from "@/hoc/Container";
import type { FAQ } from "@/interfaces/FAQ";
import FAQSearchInput from "./_components/FAQSearchInput";
import type { MainSearchParams } from "@/interfaces/MainSearchParams";
import NoInfo from "@/components/NoInfo";
import React from "react";
import Wrapper from "@/hoc/Wrapper";
import { useGetAdminData } from "@/hooks/useGetAdminData";

const FAQPage = async ({
  searchParams,
}: {
  searchParams: MainSearchParams;
}) => {
  const faqs = await useGetAdminData(searchParams, "faq");

  return (
    <Wrapper position="flex-end">
      <Container>
        <form action="submit">
          <div className="w-full flex flex-col gap-2 bg-white p-4 rounded-md shadow-lg text-gray-500">
            <h3 className="font-bold text-blue-400">FAQ категории</h3>
            <div className="flex gap-2">
              <button className="w-max flex gap-2 items-center justify-center text-white bg-green-500 px-4 py-2 rounded-md hover:brightness-90 transition-all duration-200">
                <i className="text-xl">
                  <MdAddBox />
                </i>
                <span>Добавить</span>
              </button>
            </div>
            <FAQSearchInput />
            <table className="mt-6">
              <thead>
                <tr className="flex items-center gap-10 p-2 rounded-md shadow-md">
                  <th className="w-[340px] text-start">Дата</th>
                  <th className="w-[500px] text-start">Заголовок</th>
                  <th className="w-[600px] text-end">Действия</th>
                </tr>
              </thead>
              {!faqs.length && <NoInfo />}
              {faqs.map((faq: FAQ) => (
                <tbody key={faq.id}>
                  <tr className="flex items-center justify-center gap-10 px-2 py-1 my-2 rounded-md border border-1 border-gray-200">
                    <td className="w-[340px]">{faq.created_at}</td>
                    <td className="w-[300px]">{faq.question}</td>
                    <td className="w-[300px]">{faq.category_id}</td>
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
        </form>
      </Container>
    </Wrapper>
  );
};

export default FAQPage;
