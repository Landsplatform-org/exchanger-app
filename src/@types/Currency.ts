import { Gateway } from "./Gateway";

export interface Currency extends Gateway {
  id?: number;
  gateway_id: number;
  prefix: string;
  currency: string;
  min_amount: number;
  max_amount: number;
  reserve: number;
  default_send: number;
  default_receive: number;
  status: number;
  position?: number;
  success_text?: string;
  fail_text?: string;
  created_at?: string;
  updated_at?: string;
}