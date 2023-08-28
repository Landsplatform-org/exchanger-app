export interface User {
  id?: number;
  username: string;
  email: string;
  password: string;  
  token?: string;
  firstname?: string;
  lastname?: string;
  phone?: string;
  avatar?: string;
  profit: number;
  balance: number;
  paid: number;
  ref_id: number;
  ref_active: number;
  ref_fee_type: number;
  ref_fee: number;
  vk_account?: string;
  ok_account?: string;
  tg_account?: string;
  is_verified?: number;
  status_id: number;
  role_id: number;
  balance_updated?: string;
  created_at?: string;
  updated_at?: string;
}