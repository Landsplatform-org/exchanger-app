import React, { FC, ReactNode } from "react";

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, React.AriaAttributes {
  children: string | ReactNode;
};

const Button: FC<ButtonProps> = ({ children, ...attributes }) => {
  return (
    <button
      type="button"
      className="max-w-[400px] px-6 py-2 rounded-md bg-blue-300 text-[#131313] outline-none enabled:hover:brightness-90 duration-200 transition-all disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
      {...attributes}
    >
      <span>{children}</span>
    </button>
  );
};

export default Button;
