export interface FAQ {
  id?: number;
  question: string;
  answer: string;
  category_id: number;
  status: number;
  created_at?: string;
  updated_at?: string;
}