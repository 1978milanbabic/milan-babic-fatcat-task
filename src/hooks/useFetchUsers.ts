import axios from 'axios';
import { useQuery } from 'react-query';

import { UserInterface } from '@homework-task/interfaces/UserInterface';

const fetchUsers = async (): Promise<UserInterface[]> => {
  const url = import.meta.env.VITE_USERS_API_URL;
  const response: { data: UserInterface[] } = await axios.get(url);
  return response.data;
};

export const useUsersQuery = () => {
  return useQuery<UserInterface[], Error>({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });
};
