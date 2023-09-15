import Container from "@/components/Container";
import ExchangesTable from "../../../components/ExchangesTable";
import { type SearchParams } from "@/@types/SearchParams";
import React from "react";
import Wrapper from "@/components/Wrapper";

const Exchanges = async ({ searchParams }: { searchParams: SearchParams }) => {
  return (
    <Wrapper position="center">
      <Container>
        <ExchangesTable searchParams={searchParams} />
      </Container>
    </Wrapper>
  );
};

export default Exchanges;
