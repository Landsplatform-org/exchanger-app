import { BsFillTrashFill } from "react-icons/bs";
import Container from "@/hoc/Container";
import type { Feedback } from "@/interfaces/Feedback";
import type { MainSearchParams } from "@/interfaces/MainSearchParams";
import { MdEditSquare } from "react-icons/md";
import NoInfo from "@/components/NoInfo";
import React from "react";
import Wrapper from "@/hoc/Wrapper";
import { useGetAdminData } from "@/hooks/useGetAdminData";

const FeedbackPage = async ({ searchParams }: { searchParams: MainSearchParams }) => {
  const feedbacks = await useGetAdminData(searchParams, "reviews");

  return (
    <Wrapper position="flex-end">
      <Container>
        <form action="submit">
          <div className="w-full bg-white p-4 rounded-md shadow-lg text-gray-500">
            <h3 className="font-bold text-blue-400">Отзывы</h3>
            <table className="mt-6">
              <thead>
                <tr className="flex items-center gap-10 p-2 rounded-md shadow-md">
                  <th className="w-[50px] text-start">
                    <input type="checkbox" />
                  </th>
                  <th className="w-[200px] text-start">Дата</th>
                  <th className="w-[400px] text-start">Автор</th>
                  <th className="w-[100px] text-start">Статус</th>
                  <th className="w-[600px] text-end">Действия</th>
                </tr>
              </thead>
              {!feedbacks.length && <NoInfo />}
              {feedbacks.map((feedback: Feedback) => (
                <tbody key={feedback.id}>
                  <tr className="flex items-center justify-center gap-10 px-2 py-1 my-2 rounded-md border border-1 border-gray-200">
                    <td className="w-[50px]">
                      <input type="checkbox" />
                    </td>
                    <td className="w-[340px]">{feedback.created_at}</td>
                    <td className="w-[500px]">{feedback.user_id}</td>
                    <td className="w-[340px]">{feedback.review_status}</td>
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

            <div className="flex gap-4">
              <select
                name="action"
                id="action"
                className="rounded-md p-2 border border-1 border-gray-200 focus:outline-blue-400"
              >
                <option value="">-- Действие --</option>
                <option value="1">Одобрить</option>
                <option value="2">Снять с публикации</option>
                <option value="3">Удалить</option>
              </select>
              <button
                type="submit"
                className="flex gap-2 items-center justify-center px-4 py-2 rounded-md bg-[#0cc6c9] text-white hover:brightness-90 transition-all duration-200"
              >
                <span>Выполнить</span>
              </button>
            </div>
          </div>
        </form>
      </Container>
    </Wrapper>
  );
};

export default FeedbackPage;
