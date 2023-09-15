import Container from "@/components/Container";
import ExchangeWindow from "./_components/ExchangeWindow";
import { type SearchParams } from "@/@types/SearchParams";
import React from "react";
import Wrapper from "@/components/Wrapper";

const HomePage = async ({ searchParams }: { searchParams: SearchParams }) => {
  return (
    <Wrapper position="center">
      <Container>
        <ExchangeWindow searchParams={searchParams} />
      </Container>
    </Wrapper>
  );
};

export default HomePage;
