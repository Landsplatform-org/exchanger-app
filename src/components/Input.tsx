import React from "react";

interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, React.AriaAttributes {};

const Input: React.FC<InputProps> = ({ ...attributes }) => {
  return (
    <input
      className={`
        w-[400px] px-6 py-2 rounded-md outline-none bg-white border border-gray-300 
        focus:border-blue-300 focus:shadow-focus 
        read-only:focus:shadow-none read-only:bg-gray-200 read-only:border-none read-only:cursor-not-allowed
      `}
      type="text"
      { ...attributes }
    />
  );
};

export default Input;
