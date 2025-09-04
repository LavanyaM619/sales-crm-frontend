export interface User {
  _id: string;
  userId: string;
  name: string;
  lastname: string;
  email: string;
  role: 'admin' | 'user';
  createdAt?: string;
  updatedAt?: string;
}

export interface Category {
  _id: string;
  categoryId: string;
  name: string;
  slug: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Order {
  _id: string;
  orderId: string;
  customer: string;
  category: string | Category;
  date: string;
  source: string;
  geo: string;
  amount: number;
  viewedAt?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Counter {
  _id: string;
  id: string;
  seq: number;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export interface ApiResponse<T> {
  data: T;
  page?: number;
  pageSize?: number;
  total?: number;
}

export interface OrderFilters {
  startDate?: string;
  endDate?: string;
  source?: string;
  geo?: string;
  category?: string;
  page?: number;
  pageSize?: number;
  search?: string;
}

export interface NewOrder {
  customer: string;
  category: string;
  date: string;
  source: string;
  geo: string;
  amount: number;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  lastname: string;
  email: string;
  password: string;
  role: string;
}
