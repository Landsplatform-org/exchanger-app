import Container from "@/hoc/Container";
import { MdAddBox } from "react-icons/md";
import UserSearchInput from "./_components/UserSearchInput";
import type { UserSearchParams } from "@/interfaces/UserSearchParams";
import Users from "./_components/Users";
import UsersHeader from "./_components/UsersHeader";
import Wrapper from "@/hoc/Wrapper";
import axios from "axios";
import queryString from "query-string";

const getUsers = async (searchParams: UserSearchParams) => {
  const urlParams = {
    username: searchParams.username,
    limit: searchParams.limit,
    page: searchParams.page,
  };
  
  const searchQuery = queryString.stringify(urlParams);

  const response = await axios.get(
    `http://localhost:5000/api/users/get?${searchQuery}`
  );
  const data = response.data.data;

  return data;
};

const UsersPage = async ({ searchParams }: { searchParams: UserSearchParams }) => {
  const users = await getUsers(searchParams);

  return (
    <Wrapper position="flex-end">
      <Container>
        <div className="flex flex-col gap-4 w-full bg-white p-4 rounded-md shadow-lg text-gray-500">
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
            <Users users={users} />
          </table>
        </div>
      </Container>
    </Wrapper>
  );
};

export default UsersPage;
