import Avatar from "./Avatar";
import BankAccounts from "./BankAccounts";
import Button from "@/components/Button";
import React from "react";

type Extra = {
  avatar: string;
  account?: string[];
};

const ExtraInfo: React.FC<Extra> = ({ avatar, account }) => {
  return (
    <div className="w-max flex flex-col gap-12 p-4 rounded-md bg-white border border-gray-300">
      <Avatar avatar={avatar} />
      <div className="flex flex-col gap-4">
        {account ? <BankAccounts account={account} /> : null}
        <Button type="button">Добавить счет</Button>
      </div>
    </div>
  );
};

export default ExtraInfo;
