export interface Direction {
  id?: number;
  currency_id_send: number;
  currency_id_receive: number;
  currency_rate_source: string;
  rate_out: number;
  rate_in: number;
  rate_out_correction: number;
  rate_in_correction: number;
  sender_fee?: number;
  sender_fee_type: number;
  receiver_fee?: number;
  receiver_fee_type: number;
  sender_ps_fee?: number;
  receiver_ps_fee?: number;
  ref_fee_type_id: number;
  ref_fee_sum?: number;
  process_type_id: number;
  is_active: number;
  created_at?: string;
  updated_at?: string;
}