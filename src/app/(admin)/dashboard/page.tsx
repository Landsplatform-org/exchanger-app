import { FaHandshake, FaRubleSign } from "react-icons/fa";

import { AiFillEye } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import Card from "../../../components/Card";
import Container from "@/components/Container";
import ExchangesTable from "../../../components/ExchangesTable";
import { GrTransaction } from "react-icons/gr";
import { type SearchParams } from "@/@types/SearchParams";
import Row from "@/components/Row";
import Wrapper from "@/components/Wrapper";
import { useGetData } from "@/hooks/useGetData";

const Dashboard = async ({ searchParams }: { searchParams: SearchParams }) => {
  const exchanges = await useGetData(searchParams, "exchanges");

  return (
    <Wrapper position="center">
      <Container>
        <div className="flex flex-col gap-12">
          <div className="flex items-center justify-between">
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
          </div>
          <ExchangesTable exchanges={exchanges} />
          {/* <Row>
          <Card 
            name="Ожидают подтверждения" 
            data="0"
          >
            <GrTransaction />
          </Card>
        </Row> */}
        </div>
      </Container>
    </Wrapper>
  );
};

export default Dashboard;
