import { users } from '../data/mockData';
import { User } from '../types/User';

const USERS_PER_PAGE = 10;

export const fetchUsers = async (page: number = 1): Promise<User[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const start = (page - 1) * USERS_PER_PAGE;
      const paginatedUsers = users.slice(start, start + USERS_PER_PAGE);
      resolve(paginatedUsers);
    }, 500);
  });
};
