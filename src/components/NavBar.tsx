"use client";

import Link from "next/link";
import { authedLinks } from "@/config/authed-links";
import { navbarLinks } from "@/config/navbar-links";
import { useSession } from "next-auth/react";

type NavBarLink = {
  path: string;
  name: string;
};

export default function NavBar() {
  const { data: session } = useSession();

  return (
    <nav className="flex justify-center w-screen bg-slate-800">
      <div className="flex items-center w-[65%] justify-between py-3">
        <div>
          <h1 className="text-2xl font-bold text-white">Exchanger App</h1>
        </div>
        <div className="flex items-center gap-6 w-max">
          <Link
            href={`/`}
          >
            <span className="text-white hover:brightness-[85%] duration-200 transition-all">Главная</span>
          </Link>
          {session && session.user ? (
            <>
              {authedLinks.map((link: NavBarLink) => (
                <Link href={link.path} key={link.path}>
                  <span className="text-white hover:brightness-[85%] duration-200 transition-all">
                    {link.name}
                  </span>
                </Link>
              ))}
              <Link
                href={`/user/${session.user.id}`}
                className="bg-white px-4 py-1 rounded-md hover:brightness-90 duration-200 transition-all"
              >
                <span className="text-[#313131]">Профиль</span>
              </Link>
              <Link
                href={`/api/auth/signout`}
                className="bg-white px-4 py-1 rounded-md hover:brightness-90 duration-200 transition-all"
              >
                <span className="text-[#313131]">Выход</span>
              </Link>
            </>
          ) : (
            <>
              {navbarLinks.map((link: NavBarLink) => (
                <Link href={link.path} key={link.path}>
                  <span className="text-white hover:brightness-[85%] duration-200 transition-all">
                    {link.name}
                  </span>
                </Link>
              ))}
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
