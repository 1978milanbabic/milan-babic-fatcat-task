import axios from 'axios';
import { useQuery } from 'react-query';

import { User } from '@homework-task/interfaces/UserInterface';

const fetchUsers = async (): Promise<User[]> => {
  const url = import.meta.env.VITE_USERS_API_URL;
  const response: { data: User[] } = await axios.get(url);
  return response.data;
};

export const useUsersQuery = () => {
  return useQuery<User[], Error>({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });
};
