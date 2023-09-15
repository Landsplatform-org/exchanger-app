"use client";

import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { type Currency } from "@/@types/Currency";
import Input from "@/components/Input";
import Select from "@/components/Select";
import Button from "@/components/Button";
import { Exchange } from "@/@types/Exchange";
import axios from "axios";
import { checkCurrencies } from "@/utils/countSumWIthFee";
import { useSession } from "next-auth/react";
import { getRate } from "@/utils/getRate";
import SuccessMessage from "@/components/SuccessMessage";

type FormProps = {
  curDefaultSend: Currency[];
  curDefaultReceive: Currency[];
};

const initialValue: Exchange = {
  send_sum_without_fee: "",
  send_sum_with_fee: "",
  send_sum_fee: 0,
  send_client_sum_with_ps_fee: "",
  send_client_ps_fee: 0.005,
  u_field_1: "",
  user_id: 0,
  direction_id: 1,
  currency_id_send: "1",
  currency_id_receive: "2",
  rate_out: 0,
  rate_in: 1,
  receive_client_sum_with_ps_fee: "",
  receive_client_ps_fee: 0.005,
  receive_sum_without_fee: "",
  receive_sum_with_fee: "",
  receive_sum_fee: 0,
  process_type_id: 1,
  status_id: 1,
};

const Form: React.FC<FormProps> = ({ curDefaultSend, curDefaultReceive }) => {
  const { data: session } = useSession();

  const [exchange, setExchange] = useState<Exchange>(initialValue);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const handleChanges = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name !== "send_sum_without_fee") {
      return setExchange({
        ...exchange,
        [name]: value,
      });
    }

    setExchange({
      ...exchange,
      send_sum_without_fee: value,
      send_client_sum_with_ps_fee: checkCurrencies(
        exchange.currency_id_send,
        exchange.currency_id_receive,
        {
          type: "send",
          sum: value,
          sendfee: exchange.send_client_ps_fee,
          receiveFee: exchange.receive_client_ps_fee,
          rate: exchange.rate_out,
        }
      ),
      receive_client_sum_with_ps_fee: checkCurrencies(
        exchange.currency_id_send,
        exchange.currency_id_receive,
        {
          type: "receive",
          sum: value,
          sendfee: exchange.send_client_ps_fee,
          receivefee: exchange.receive_client_ps_fee,
          rate: exchange.rate_out,
        }
      ),
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!exchange) return;
    sendExchangeRequest(exchange);
  };

  const sendExchangeRequest = async (data: Exchange) => {
    console.log(data)
    const url = "http://localhost:5000/api/exchanges/add";
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data ),
        headers: {
          authorization: `Bearer ${session?.tokens.access}`,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false)
        }, 2000)
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (session) {
      setExchange({
        ...exchange,
        user_id: session.user.id,
      });
    }
  }, [session]);

  useEffect(() => {
    setExchange({
      ...exchange,
      send_sum_with_fee: exchange.send_sum_without_fee,
      receive_sum_with_fee: exchange.receive_client_sum_with_ps_fee || "",
      receive_sum_without_fee: exchange.receive_client_sum_with_ps_fee || "",
    });
  }, [exchange.send_sum_without_fee, exchange.receive_client_sum_with_ps_fee]);

  useEffect(() => {
    const getCurrentRate = async () => {
      const rate = await getRate();
      setExchange({
        ...exchange,
        rate_out: rate,
      });
    };
    getCurrentRate();
  }, []);

  //console.log(exchange);

  return (
    <>
      {isSuccess && (
        <div className="w-full flex justify-center">
          <SuccessMessage message="Заявка на обмен отправлена" />
        </div>
      )}
      <form
        action="submit"
        onSubmit={handleSubmit}
        className="flex flex-col  gap-4"
      >
        <div className="flex justify-between gap-10">
          <div className="flex flex-col justify-between gap-4">
            <Select name="currency_id_send" onChange={handleChanges}>
              {curDefaultSend.map((currency: Currency) => (
                <option
                  key={currency.id}
                  value={currency.id}
                  selected={currency.id === 1}
                >
                  {currency.name} {currency.currency}
                </option>
              ))}
            </Select>
            <>
              <span className="text-sm">
                Коммиссия ПС: <span className="font-bold">0.5%</span>
              </span>
            </>
            <Select name="currency_id_receive" onChange={handleChanges}>
              {curDefaultReceive.map((currency: Currency) => (
                <option
                  key={currency.id}
                  value={currency.id}
                  selected={currency.id === 2}
                >
                  {currency.name} {currency.currency}
                </option>
              ))}
            </Select>
          </div>
          <div className="flex flex-col gap-4">
            <Input
              name="send_sum_without_fee"
              type="text"
              placeholder="Введите сумму отправки"
              value={exchange.send_sum_without_fee}
              onChange={handleChanges}
            />
            <Input
              type="text"
              placeholder="Сумма получения с комиссией"
              value={exchange.send_client_sum_with_ps_fee}
              readOnly
            />
            <Input
              type="text"
              placeholder="Итоговая сумма получения"
              value={exchange.receive_client_sum_with_ps_fee}
              readOnly
            />
          </div>
        </div>
        <Input
          name="u_field_1"
          style={{ width: "100%" }}
          type="text"
          placeholder="Счет получения"
          value={exchange.u_field_1}
          onChange={handleChanges}
        />
        <Button type="submit" disabled={!session}>
          Обмен
        </Button>
      </form>
    </>
  );
};

export default Form;
