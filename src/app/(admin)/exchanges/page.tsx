import Container from "@/hoc/Container";
import Nav from "./_components/Nav";
import React from "react";
import Table from "../../../components/AdminTable";
import Wrapper from "@/hoc/Wrapper";
import axios from "axios";

const getExchanges = async () => {
  //searchParams: any
  // const urlParams = {
  //   username: searchParams.username,
  //   limit: searchParams.limit,
  //   page: searchParams.page,
  // };
  
  // const searchQuery = queryString.stringify(urlParams);

  const response = await axios.get(
    `http://localhost:5000/api/exchanges/get`
  );
  const data = response.data.data;

  return data;
};

const page = async () => {
  const exchanges = await getExchanges();
  
  return (
    <Wrapper position="flex-end">
      <Container>
        <Nav />
        <Table exchanges={exchanges}/>
      </Container>
    </Wrapper>
  );
};

export default page;
