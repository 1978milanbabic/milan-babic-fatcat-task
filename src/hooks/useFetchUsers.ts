import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { User } from '@homework-task/interfaces/UserInterface';

const fetchUsers = async (): Promise<User[]> => {
  const url = 'https://jsonplaceholder.typicode.com/users';
  const response: { data: User[] } = await axios.get(url);
  return response.data;
};

export const useUsersQuery = () => {
  return useQuery<User[], Error>({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });
};
