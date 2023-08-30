import { FaHandshake, FaRubleSign } from "react-icons/fa";

import { AiFillEye } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import Card from "../../../components/Card";
import Container from "@/hoc/Container";
import ExchangesTable from "../../../components/ExchangesTable";
import { GrTransaction } from "react-icons/gr";
import { MainSearchParams } from "@/interfaces/MainSearchParams";
import Row from "@/hoc/Row";
import Wrapper from "@/hoc/Wrapper";
import { useGetAdminData } from "@/hooks/useGetAdminData";

const Dashboard = async ({ searchParams }: { searchParams: MainSearchParams }) => {
  const exchanges = await useGetAdminData(searchParams, "exchanges");

  return (
    <Wrapper position="flex-end">
      <Container>
        <Row>
          <Card name="Переходов по ссылке" color="blue" data="0">
            <AiFillEye />
          </Card>
          <Card name="Всего рефералов" color="red" data="0">
            <FaHandshake />
          </Card>
          <Card name="Дивиденды" color="#0cc6c9" data="0">
            <BsFillPlayFill />
          </Card>
          <Card name="Вы заработали" color="#1e990b" data="0.00">
            <FaRubleSign />
          </Card>
        </Row>
        <ExchangesTable exchanges={exchanges} />
        {/* <Row>
          <Card 
            name="Ожидают подтверждения" 
            data="0"
          >
            <GrTransaction />
          </Card>
        </Row> */}
      </Container>
    </Wrapper>
  );
};

export default Dashboard;
