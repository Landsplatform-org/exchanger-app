import React from "react";

const SuccessMessage = ({ message }: { message: string }) => {
  return (
    <div className="flex items-center max-w-[500px] w-max h-max px-4 py-3 rounded-md border-2 border-green-600 bg-green-200 text-green-600 font-bold text-sm">
      <p>{message}</p>
    </div>
  );
};

export default SuccessMessage;
