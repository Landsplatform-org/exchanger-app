"use client";

import React, { useEffect, useState } from "react";

import Image from "next/image";
import { MdEditSquare } from "react-icons/md";
import NoInfo from "@/components/NoInfo";
import { SearchParams } from "@/@types/SearchParams";
import { User } from "@/@types/User";
import { useGetData } from "@/hooks/useGetData";
import { useSession } from "next-auth/react";

const Users = ({ searchParams }: { searchParams: SearchParams }) => {
  const { data: session } = useSession();

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const getAndSetUser = async () => {
      try {
        const data = await useGetData(searchParams, "users", session);
        setUsers(data);
      } catch (error) {
        console.error(error);
      }
    };
    getAndSetUser();
  }, [session, searchParams]);

  return (
    <tbody>
      {!users && <NoInfo />}
      {users.map((user: User) => (
        <tr
          key={user.id}
          className="flex items-center gap-10 px-2 py-1 my-2 rounded-md border border-1 border-gray-200"
        >
          <td className="w-[70px]">{user.id}</td>
          <td className="w-[100px] flex items-center justify-center">
            <Image
              className="w-[50px] h-[50px] rounded-full object-cover"
              width={50}
              height={50}
              src={"http://localhost:5000/uploads/" + user.avatar}
              alt={user.username}
              quality={50}
              priority
            />
          </td>
          <td className="w-[200px]">{user.username}</td>
          <td className="w-[250px]">{user.email}</td>
          <td className="w-[200px]">
            <span className="p-1 bg-red-400 text-white text-sm font-bold rounded-md">
              {user.paid}
            </span>
          </td>
          {user.status_id === 1 && (
            <td className="flex items-center justify-center w-[70px]">
              <div className="w-[25px] h-[25px] rounded-full bg-green-500"></div>
            </td>
          )}
          {user.status_id === 2 && (
            <td className="flex items-center justify-center w-[70px]">
              <div className="w-[25px] h-[25px] rounded-full bg-red-500"></div>
            </td>
          )}
          {user.status_id === 3 && (
            <td className="flex items-center justify-center w-[70px]">
              <div className="w-[25px] h-[25px] rounded-full bg-yellow-500"></div>
            </td>
          )}
          <td className="w-[400px] flex items-end justify-end gap-2 text-white text-xl">
            <button className="bg-[#0cc6c9] p-2 hover:brightness-90 transition-all duration-200 rounded-md">
              <i>
                <MdEditSquare />
              </i>
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default Users;
