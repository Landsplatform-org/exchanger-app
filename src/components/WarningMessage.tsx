import React from "react";

const WarningMessage = ({ message }: { message: string }) => {
  return (
    <div className="flex items-center max-w-[500px] w-max h-max px-4 py-3 rounded-md border-2 border-yellow-600 bg-yellow-200 text-yellow-600 font-bold text-sm">
      <p>{message}</p>
    </div>
  );
};

export default WarningMessage;
