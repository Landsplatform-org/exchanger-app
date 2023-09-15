import { Currency } from "@/@types/Currency";

export const filterSend = (data: Currency[]) => {
  return data.filter(
    (currency: Currency) =>
      currency.default_send ||
      (currency.default_send && currency.default_receive)
  );
};

export const filterReceive = (data: Currency[]) => {
  return data.filter(
    (currency: Currency) =>
      currency.default_receive ||
      (currency.default_send && currency.default_receive)
  );
};
