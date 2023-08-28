import Link from "next/link";

const NavBar = () => {
  return (
    <div className="fixed flex flex-row justify-center w-screen shadow-md z-40 bg-white">
      <div className="flex w-[1600px] h-max py-4 justify-between items-center text-xl">
        <div className="flex flex-row gap-5">
          <Link href="/">Главная</Link>
          <Link href="/dashboard">ADMIN</Link>
        </div>
        <div className="flex flex-row gap-5">
          <Link href="/profile">Профиль</Link>
          <Link href="/login">Логин</Link>
          <Link href="/register">Регистрация</Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
