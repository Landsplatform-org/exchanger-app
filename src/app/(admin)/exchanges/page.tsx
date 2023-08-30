import Container from "@/hoc/Container";
import ExchangesTable from "../../../components/ExchangesTable";
import { MainSearchParams } from "@/interfaces/MainSearchParams";
import Nav from "./_components/Nav";
import React from "react";
import Wrapper from "@/hoc/Wrapper";
import { useGetAdminData } from "@/hooks/useGetAdminData";

const Exchanges = async ({ searchParams }: { searchParams: MainSearchParams }) => {
  const exchanges = await useGetAdminData(searchParams, "exchanges");
  
  return (
    <Wrapper position="flex-end">
      <Container>
        <Nav />
        <ExchangesTable exchanges={exchanges}/>
      </Container>
    </Wrapper>
  );
};

export default Exchanges;
