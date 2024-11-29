export interface User {
  id: string;
  name: string;
  password: string;
  email: string;
  isAdmin: boolean;
  createdAt: string;
  active?: string; 
  role?: string; 
}

export interface UsersResponse {
  users: User[];
  pagination: {
    totalPages: number;
  };
}