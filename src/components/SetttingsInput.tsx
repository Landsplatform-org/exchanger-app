import React from "react";

const SetttingsInput = ({
  label,
  value,
}: {
  label: string;
  value: string;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="settings-input" className="font-bold text-md">
        {label}
      </label>
      <input
        type="text"
        value={value}
        className="p-2 rounded-md border border-1 border-gray-200 focus:outline-blue-400 cursor-pointer"
      />
    </div>
  );
};

export default SetttingsInput;
