import React, { ReactNode } from "react";

interface SelectProps extends React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>, React.AriaAttributes {
  children: ReactNode;
};

const Select: React.FC<SelectProps> = ({ children, ...attributes }) => {
  return (
    <select 
      className="w-[400px] px-6 py-2 rounded-md outline-none bg-white border border-gray-300 focus:border-blue-300 focus:shadow-input" 
      {...attributes}
    >
      {children}
    </select>
  );
};

export default Select;
