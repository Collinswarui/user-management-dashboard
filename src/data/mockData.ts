import { User } from "../types/User";

export const users: User[] = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`,
  status: i % 2 === 0 ? 'Active' : 'Inactive', // Alternate status
  role: i % 3 === 0 ? 'Admin' : 'User', // Alternate roles
  createdAt: `2023-10-${i + 1 < 10 ? `0${i + 1}` : i + 1}`, // Sample created date
}));