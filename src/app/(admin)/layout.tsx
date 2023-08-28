import React, { ReactNode } from "react";

import SideBar from "@/components/SideBar";

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex">
      <SideBar />
      {children}
    </div>
  );
};

export default AdminLayout;
