export interface User {
  id: number;
  name: string;
  email: string;
  status: 'Active' | 'Inactive';
  role: 'Admin' | 'User';
  createdAt: string;
}
