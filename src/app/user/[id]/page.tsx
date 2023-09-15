import Container from "@/components/Container";
import Profile from "./_components/Profile";
import React from "react";
import Wrapper from "@/components/Wrapper";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const ProfilePage = async () => {
  const session = await getServerSession()

  if(!session || !session.user) {
    redirect("/api/auth/signin");
  }

  return (
    <Wrapper position="center">
      <Container>
        <Profile />
      </Container>
    </Wrapper>
  );
};

export default ProfilePage;
