import { FaHandshake, FaRubleSign } from "react-icons/fa";

import AdminTable from "../../../components/AdminTable";
import { AiFillEye } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import Card from "../../../components/Card";
import Container from "@/hoc/Container";
import { GrTransaction } from "react-icons/gr";
import Row from "@/hoc/Row";
import Wrapper from "@/hoc/Wrapper";

const Dashboard = () => {
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
        <AdminTable />
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
