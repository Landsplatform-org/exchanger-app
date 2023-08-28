import Container from "@/hoc/Container";
import Link from "next/link";
import React from "react";
import Wrapper from "@/hoc/Wrapper";

const page = () => {
  return (
    <Wrapper position="flex-end">
      <Container>
        <div className="flex flex-col gap-4 w-full bg-white p-4 rounded-md shadow-lg">
          <h3 className="font-bold text-blue-400">Проверить работу Bestchange</h3>
          <Link
            href="/bestchange/test"
            className="w-full rounded-md bg-[#0cc6c9] text-white  text-center px-4 py-2"
          >
            Проверить работу
          </Link>
        </div>
      </Container>
    </Wrapper>
  );
};

export default page;
