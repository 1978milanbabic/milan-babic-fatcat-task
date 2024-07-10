import { useMutation, UseMutationResult } from '@tanstack/react-query';
import axios from 'axios';

interface PostData {
  title: string;
  body: string;
}

const postNewPost = async (newPost: PostData): Promise<PostData> => {
  const response = await axios.post<PostData>(
    'https://jsonplaceholder.typicode.com/posts',
    newPost
  );
  return response.data;
};

export const usePostData = (): UseMutationResult<PostData, Error, PostData> => {
  return useMutation<PostData, Error, PostData>({
    mutationFn: postNewPost,
  });
};
