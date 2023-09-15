import React from "react";

const BankAccounts = ({ account }: { account: string[] }) => {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <h2 className="font-bold text-lg text-[#131313]">Ваши счета</h2>
        <div className="bg-gray-200 rounded-md p-2">
          {!account ? (
            <span>У вас нет счетов</span>
          ) : (
            <>
              {account.map((account: string) => (
                <div className="flex flex-col" key={account}>
                  <span>{account}</span>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BankAccounts;
