import React, { ReactNode } from "react";

import SideBar from "@/components/SideBar";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const AdminLayout = async ({ children }: { children: ReactNode }) => {
  const session = await getServerSession()

  if(!session || !session.user) {
    redirect("/api/auth/signin");
  }

  return (
    <div className="flex">
      <SideBar />
      {children}
    </div>
  );
};

export default AdminLayout;
