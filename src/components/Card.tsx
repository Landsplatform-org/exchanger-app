import React, { ReactNode } from "react";

interface CardProps {
  name: string;
  data: string;
  color: string;
  children?: ReactNode;
}

const Card: React.FC<CardProps> = ({ name, data, color, children }) => {
  return (
    <div className="w-[340px] h-[100px] flex flex-row items-center rounded-md bg-white shadow-lg">
      <div style={{ background: color }} className="w-[4px] h-full rounded-l-md"></div>
      <div className="flex flex-col w-[330px] pl-4">
        <h3 style={{ color: color }} className="font-normal uppercase text-sm">{name}</h3>
        <p className="text-lg text-[#262626] font-bold">{data}</p>
      </div>
      <div className="flex w-max justify-end">
        <i className="text-[36px] text-gray-200">{children}</i>
      </div>
    </div>
  );
};

export default Card;
