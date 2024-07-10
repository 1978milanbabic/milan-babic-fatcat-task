import axios from 'axios';
import { useMutation, UseMutationResult } from 'react-query';

export const usePostData = <
  FormData extends Record<string, unknown>,
>(): UseMutationResult<FormData, Error, FormData> => {
  const url = import.meta.env.VITE_POSTS_API_URL;
  return useMutation(async (data: FormData): Promise<FormData> => {
    const response = await axios.post<FormData>(url, data);
    return response.data;
  });
};
