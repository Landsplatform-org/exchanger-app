"use client";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { TbHome2 } from "react-icons/tb";
import { FiLogIn } from "react-icons/fi";
import { GoPersonAdd } from "react-icons/go";
import { BiSupport } from "react-icons/bi";
import { HiOutlineChat } from "react-icons/hi";
import { useState, useEffect } from "react";
import axios from "axios";

export default function NavBar() {
  // useEffect(() => {
  //   getUser();
  // }, []);

  // const [isAdmin, setIsAdmin] = useState(false);

  // const getUser = () => {
  //   axios({
  //     method: "get",
  //     withCredentials: true,
  //     url: "http://localhost:3001/api/getUser",
  //   })
  //     .then((res) => {
  //       if (res.data.isAdmin == 0) {
  //         setIsAdmin(false);
  //       } else {
  //         setIsAdmin(true);
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  return (
    <div className="flex flex-row w-full z-100  top-1 px-20 py-3 justify-between text-[20px] bg-slate-300">
      <div className="flex flex-row gap-7">
        <Link href="/">
          <TbHome2 className="w-[30px] h-[30px] rounded-[5px] hover:bg-slate-400 transition-all duration-50" />
        </Link>
        <Link href="/dashboard">
          admin
        </Link>
        <Link href="/login">
          <FiLogIn className="w-[30px] h-[30px] rounded-[5px] hover:bg-slate-400 transition-all duration-50" />
        </Link>
        <Link href="/register">
          <GoPersonAdd className="w-[30px] h-[30px] rounded-[5px] hover:bg-slate-400 transition-all duration-50" />
        </Link>
      </div>
      <div className="flex flex-row gap-7">
        <Link href="/adminChat">
          <BiSupport className="w-[30px] h-[30px] rounded-full hover:bg-slate-400 transition-all duration-50" />
        </Link>

        <Link href="/userChat">
          <HiOutlineChat className="w-[30px] h-[30px] rounded-full hover:bg-slate-400 transition-all duration-50" />
        </Link>

        {/* {isAdmin ? (
          <Link href="/adminChat">
            <BiSupport className="w-[30px] h-[30px] rounded-full hover:bg-slate-400 transition-all duration-50" />
          </Link>
        ) : (
          <Link href="/userChat">
            <HiOutlineChat className="w-[30px] h-[30px] rounded-full hover:bg-slate-400 transition-all duration-50" />
          </Link>
        )} */}

        <div className="group-hover:visible group flex flex-row">
          <CgProfile className="w-[30px] h-[30px] rounded-full hover:bg-slate-400 transition-all duration-50 group" />
          <ul className="absolute group invisible  group-hover:visible bg-slate-300 text-[16px] w-[100px] top-14 right-11 flex flex-col justify-center items-center transition-all duration-250">
            <li className="hover:bg-slate-400 w-full flex justify-center group group-hover:visible ">
              <Link
                href="/profile"
                className="group group-hover:visible transition-all duration-250 "
              >
                профиль
              </Link>
            </li>
            <li className="hover:bg-slate-400 w-full flex justify-center group group-hover:visible ">
              <Link
                href="/billing"
                className="group group-hover:visible  transition-all duration-250"
              >
                ваши счета
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
