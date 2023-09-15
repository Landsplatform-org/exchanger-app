import Container from "@/components/Container";
import React from "react";
import SetttingsInput from "@/components/SetttingsInput";
import Wrapper from "@/components/Wrapper";

const page = () => {
  return (
    <Wrapper position="center">
      <Container>
        <div className="w-full p-4 flex flex-col gap-8 justify-center bg-white shadow-lg rounded-md text-gray-500">
          <h3 className="font-bold text-blue-400">
            Настройки партнерской программы
          </h3>
          <form action="submit" className="flex flex-col gap-6">
            <SetttingsInput label="Минимальная выплата (USD)" value="1" />
            <SetttingsInput label="Максимальная выплата (USD)" value="9999" />
            <div className="w-full h-max py-3 bg-white rounded-md flex flex-col gap-2">
              <label htmlFor="statusSearch" className="font-bold text-md">
                Начислять партнерское вознаграждение
              </label>
              <select
                name="status"
                id="statusSearch"
                className="w-full p-2 rounded-md border border-1 border-gray-200 focus:outline-blue-400 cursor-pointer"
              >
                <option value="1">От комиссии обменника</option>
                <option value="2">От суммы обмена</option>
              </select>
            </div>
            <SetttingsInput
              label="Партнерский процент по умолчанию"
              value="0.1"
            />
            <span className="text-sm text-gray-400">
              Данные настройки вознаграждения не имеют приоритета перед
              настройками в направлении и персональными настройками для
              пользователя. Данные настройки указываются по умолчанию.
            </span>
            <button
              type="submit"
              className="w-max px-4 py-2 bg-[#0cc6c9] rounded-md flex items-center justify-center text-white hover:brightness-90 transition-all duration-200"
            >
              Изменить
            </button>
          </form>
        </div>
      </Container>
    </Wrapper>
  );
};

export default page;
