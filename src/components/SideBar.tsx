"use client";

import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";

import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import { sidebarLinks } from "@/config/sidebar-links";

const SideBar = () => {
  return (
    <div className="flex flex-col px-4 py-2 gap-2 w-max h-screen bg-gradient-to-b from-indigo-400 to-blue-600 text-white font-medium z-20">
      <h1 className="my-4 font-bold text-md text-center">NEXTJS</h1>

      <hr className="opacity-[0.6] rounded-md" />

      <Link
        href="/dashboard"
        className="rounded-md px-4 py-2 hover:bg-white/25 transition-colors duration-200"
      >
        Главная
      </Link>
      <Link
        href="/exchanges"
        className="rounded-md px-4 py-2 hover:bg-white/25 transition-colors duration-200"
      >
        Все обмены
      </Link>
      <Link
        href="/directions"
        className="rounded-md px-4 py-2 hover:bg-white/25 transition-colors duration-200"
      >
        Направления
      </Link>

      {sidebarLinks.map((section) => (
        <Disclosure key={section.id}>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex flex-row w-[250px] items-center rounded-md px-4 py-2 hover:bg-white/25 transition-colors duration-200">
                <span className="text-white">{section.name}</span>
                <span className="flex items-center">
                  {open ? (
                    <MinusIcon className="h-5 w-5" aria-hidden="true" />
                  ) : (
                    <PlusIcon className="h-5 w-5" aria-hidden="true" />
                  )}
                </span>
              </Disclosure.Button>
              <Disclosure.Panel>
                <div className="flex flex-col ml-3">
                  {section.options.map((option) => (
                    <Link
                      key={option.name}
                      href={option.href}
                      className="px-4 py-2 bg-white text-sm text-gray-500 hover:brightness-90 transition-all duration-200 sidebar-links-list"
                    >
                      {option.name}
                    </Link>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}

      <Link
        href="/bestchange"
        className="rounded-md px-4 py-2 hover:bg-white/25 transition-colors duration-200"
      >
        Bestchange
      </Link>
      <Link
        href="/promo"
        className="rounded-md px-4 py-2 hover:bg-white/25 transition-colors duration-200"
      >
        Промо
      </Link>
      <button onClick={() => alert("Скопировано")} className="w-full text-start rounded-md px-4 py-2 hover:bg-white/25 transition-colors duration-200">
        Ссылка для партнеров
      </button>
    </div>
  );
};

export default SideBar;
