export interface Exchange {
  ex_id?: number;
  user_id: number | undefined;
  direction_id: number;
  currency_id_send: string;
  currency_id_receive: string;
  hash?: string;
  send_sum_without_fee: string;
  send_sum_with_fee: string;
  send_sum_fee?: number;
  send_client_sum_with_ps_fee?: string;
  send_client_ps_fee: number;
  rate_out: number;
  rate_in: number;
  receive_sum_without_fee: string;
  receive_sum_with_fee: string;
  receive_sum_fee?: number;
  receive_client_sum_with_ps_fee?: string;
  receive_client_ps_fee: number;
  u_field_1?: string;
  process_type_id: number;
  status_id: number;
  expired?: string;
  referral_amount_rub?: number;
  referral_amount_usd?: number;
  created_at?: string;
  updated_at?: string;

  currency_send?: string;
  currency_receive?: string;
  ex_status_name?: string;
  process_name?: string;
  id?: number;
}