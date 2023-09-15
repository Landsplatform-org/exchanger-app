export interface Gateway {
  id?: number;
  alias: string;
  name: string;
  value: string;
  keywords?: string;
  image?: string;
  is_crypto: number;
  status: number;
  created_at?: string;
  updated_at?: string;
}