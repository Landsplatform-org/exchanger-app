import Container from "@/components/Container";
import LogoutForm from "./_components/LogoutForm";
import React from "react";
import Wrapper from "@/components/Wrapper";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const LogoutPage = async () => {
  const session = await getServerSession()

  if(!session || !session.user) {
    redirect("/api/auth/signin");
  }
  
  return (
    <Wrapper position="center">
      <Container>
        <LogoutForm />
      </Container>
    </Wrapper>
  );
};

export default LogoutPage;
