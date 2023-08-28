import Container from "@/hoc/Container";
import React from "react";
import Wrapper from "@/hoc/Wrapper";

const page = () => {
  return (
    <Wrapper position="flex-end">
      <Container>
        <div className="flex flex-col gap-4 w-full bg-white p-4 rounded-md shadow-lg text-gray-500">
          <div className="card shadow mb-4">
            <div className="card-body">
              <table className="flex flex-col">
                <thead>
                  <th className="w-full p-2 rounded-md border border-1 border-gray-200">Статистика переходов по реферальной ссылке</th>
                  <tr className="flex items-center gap-10 px-2 py-1 my-2 rounded-md border border-1 border-gray-200">
                    <th>Всего</th>
                    <th>Уникальных</th>
                    <th>Регистраций</th>
                    <th>Конверсия (%)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="flex items-center gap-10 px-2 py-1 my-2 rounded-md border border-1 border-gray-200">
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>1</td>
                  </tr>
                  <tr className="flex items-center gap-10 px-2 py-1 my-2 rounded-md border border-1 border-gray-200">
                    <td colSpan={4} className="text-center">
                      Нет ни одного перехода!
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default page;
