import Container from "@/components/Container";
import LoginForm from "./_components/LoginForm";
import React from "react";
import Wrapper from "@/components/Wrapper";

export default function LoginPage() {
  return (
    <Wrapper position="center">
      <Container>
        <LoginForm />
      </Container>
    </Wrapper>
  );
}
