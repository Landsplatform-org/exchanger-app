import { AiFillEye } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { Exchange } from "@/interfaces/Exchange";
import NoInfo from "./NoInfo";
import Row from "@/hoc/Row";

const ExchangesTable = ({ exchanges }: { exchanges: Exchange[] }) => {
  return (
    <Row>
      <form className="w-full bg-white p-4 rounded-md shadow-lg text-gray-500">
        <h3 className="font-bold text-blue-400">Ожидают подтверждения</h3>
        <table className="mt-6" id="table-exchanges">
          <thead>
            <tr className="flex items-center justify-start gap-10 p-2 rounded-md shadow-md">
              <th className="w-max text-start">
                <input id="toggle-checkbox" type="checkbox" />
              </th>
              <th className="w-[40px] text-start">ID</th>
              <th className="w-[163px] text-start">Дата</th>
              <th className="w-[350px] text-start">Сумма обмена</th>
              <th className="w-[200px] text-start">Хэш Обмена</th>
              <th className="w-[200px] text-start">Статус</th>
              <th className="w-[200px] text-start">Процесс</th>
              <th className="w-[80px] text-start">Действия</th>
            </tr>
          </thead>
          {!exchanges.length && <NoInfo />}
          {exchanges.map((exchange: Exchange) => (
            <tbody key={exchange.id}>
              <tr className="flex items-center justify-center gap-10 px-2 py-1 my-2 rounded-md border border-1 border-gray-200">
                <td className="w-max">
                  <input type="checkbox" />
                </td>
                <td className="w-[40px]">{exchange.id}</td>
                <td className="w-[163px]">{exchange.created_at}</td>
                <td className="w-[350px]">
                  <span className="font-bold">
                    {exchange.send_sum_with_fee}
                  </span>{" "}
                  {exchange.currency_id_send} &rarr;{" "}
                  <span className="font-bold">
                    {exchange.receive_sum_with_fee}
                  </span>{" "}
                  {exchange.currency_id_receive}
                </td>
                <td className="w-[200px]">
                  <span className="rounded-md p-1 bg-gray-400 text-white font-bold text-sm">
                    {exchange.hash}
                  </span>
                </td>

                {exchange.status_id === 1 && (
                  <td className="w-[200px]">
                    <span className="rounded-md p-1 bg-yellow-400 text-white font-bold text-sm">
                      Ожидает подтверждения
                    </span>
                  </td>
                )}
                {exchange.status_id === 2 && (
                  <td className="w-[200px]">
                    <span className="rounded-md p-1 bg-yellow-400 text-white font-bold text-sm">
                      Ожидание платежа
                    </span>
                  </td>
                )}
                {exchange.status_id === 3 && (
                  <td className="w-[200px]">
                    <span className="rounded-md p-1 bg-cyan-400 text-white font-bold text-sm">
                      Оплачено
                    </span>
                  </td>
                )}
                {exchange.status_id === 4 && (
                  <td className="w-[200px]">
                    <span className="rounded-md p-1 bg-green-400 text-white font-bold text-sm">
                      Обработано
                    </span>
                  </td>
                )}
                {exchange.status_id === 5 && (
                  <td className="w-[200px]">
                    <span className="rounded-md p-1 bg-red-400 text-white font-bold text-sm">
                      Тайм-аут
                    </span>
                  </td>
                )}
                {exchange.status_id === 6 && (
                  <td className="w-[200px]">
                    <span className="rounded-md p-1 bg-red-400 text-white font-bold text-sm">
                      Отклонено
                    </span>
                  </td>
                )}
                {exchange.status_id === 7 && (
                  <td className="w-[200px]">
                    <span className="rounded-md p-1 bg-red-400 text-white font-bold text-sm">
                      Отменено
                    </span>
                  </td>
                )}

                <td className="w-[200px]">
                  <span className="rounded-md p-1 bg-blue-600 text-white font-bold text-sm">
                    {exchange.process_type_id}
                  </span>
                </td>
                <td className="w-max flex items-center justify-center gap-2 text-white">
                  <button className="p-2 bg-[#0cc6c9] hover:brightness-90 transition-all duration-200 rounded-md">
                    <i className="text-xl">
                      <AiFillEye />
                    </i>
                  </button>
                  <button className="p-2 bg-red-500 hover:brightness-[.8] transition-all duration-200 rounded-md">
                    <i className="text-xl">
                      <BsFillTrashFill />
                    </i>
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>

        <div className="flex gap-4">
          <select
            name="action"
            id="action"
            className="rounded-md p-2 border border-1 border-gray-200 focus:outline-blue-400"
          >
            <option value="">-- Действие --</option>
            <option value="1">Ожидает подтверждения</option>
            <option value="2">Ожидание платежа</option>
            <option value="3">Обработка</option>
            <option value="4">Обработано</option>
            <option value="5">Тайм-аут</option>
            <option value="6">Отклонить</option>
            <option value="7">Отменить</option>
            <option value="8">Обработать и выплатить</option>
            <option value="9">Удалить выбранное</option>
          </select>
          <button
            type="submit"
            className="flex gap-2 items-center justify-center px-4 py-2 rounded-md bg-[#0cc6c9] text-white hover:brightness-90 transition-all duration-200"
          >
            <i className="text-xl">
              <AiOutlineSearch />
            </i>
            <span>Выполнить</span>
          </button>
        </div>
      </form>
    </Row>
  );
};

export default ExchangesTable;
