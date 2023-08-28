import React from "react";

const UsersHeader = () => {
  return (
    <>
      <thead>
        <tr className="flex items-center gap-10 p-2 rounded-md shadow-md">
          <th className="w-[70px] text-start">ID</th>
          <th className="w-[100px] text-center">Аватар</th>
          <th className="w-[200px] text-start">Логин</th>
          <th className="w-[250px] text-start">E-mail</th>
          <th className="w-[200px] text-start">Заработано</th>
          <th className="w-[70px] text-center">Статус</th>
          <th className="w-[400px] text-end">Действия</th>
        </tr>
      </thead>
    </>
  );
};

export default UsersHeader;
