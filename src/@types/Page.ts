export interface Page {
  id?: number;
  title: string;
  alias: string;
  photo?: string;
  description: string;
  text?: string;
  views: number;
  status: number;
  created_at?: string;
  updated_at?: string;
}