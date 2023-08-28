import Container from "@/hoc/Container";
import React from "react";
import SetttingsInput from "@/components/SetttingsInput";
import Wrapper from "@/hoc/Wrapper";

const page = () => {
  return (
    <Wrapper position="flex-end">
      <Container>
        <div className="w-full p-4 flex flex-col gap-8 justify-center bg-white shadow-lg rounded-md text-gray-500">
          <h3 className="font-bold text-blue-400">Общие настройки</h3>
          <form action="submit" className="flex flex-col gap-6">
            <SetttingsInput
              label="Название"
              value="Обменный пункт электронных валют"
            />
            <SetttingsInput
              label="Ключевые слова"
              value="Обменный пункт электронных валют"
            />
            <SetttingsInput
              label="E-mail-1"
              value="email1@mail.ru"
            />
            <SetttingsInput
              label="E-mail-2"
              value="email2@mail.ru"
            />
            <SetttingsInput
              label="Skype"
              value="shype"
            />
            <SetttingsInput
              label="Telegram"
              value="+79123564654"
            />
            <SetttingsInput
              label="WhatsApp"
              value="+79123564654"
            />
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
