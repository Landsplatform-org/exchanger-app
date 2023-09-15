import Container from "@/components/Container";
import { type SearchParams } from "@/@types/SearchParams";
import { MdAddBox } from "react-icons/md";
import UserSearchInput from "./_components/UserSearchInput";
import Users from "./_components/Users";
import UsersHeader from "./_components/UsersHeader";
import Wrapper from "@/components/Wrapper";

const UsersPage = ({ searchParams }: { searchParams: SearchParams }) => {
  return (
    <Wrapper position="center">
      <Container>
        <div className="flex flex-col gap-4 bg-white p-4 rounded-md shadow-lg text-gray-500">
          <h3 className="font-bold text-blue-400">Список пользователей</h3>
          <div className="flex gap-2">
            <button className="w-max flex gap-2 items-center justify-center text-white bg-green-500 px-4 py-2 rounded-md hover:brightness-90 transition-all duration-200">
              <i className="text-xl">
                <MdAddBox />
              </i>
              <span>Добавить</span>
            </button>
          </div>
          <UserSearchInput />
          <table className="mt-6">
            <UsersHeader />
            <Users searchParams={searchParams} />
          </table>
        </div>
      </Container>
    </Wrapper>
  );
};

export default UsersPage;
