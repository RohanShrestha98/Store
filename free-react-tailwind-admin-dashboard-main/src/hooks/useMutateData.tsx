import { useMutation, useQueryClient } from '@tanstack/react-query';
import useAxiosPrivate from './useAxiosPrivate';
import { baseUrl } from '../config/config';

export const useMutate = (
  queryKey,
  basePath,
  contentType = 'application/json',
) => {
  const queryClient = useQueryClient();
  const axiosPrivate = useAxiosPrivate();

  const mutation = useMutation({
    mutationFn: async (params) => {
      const requestData = {
        method: params?.[0],
        url: baseUrl + basePath + params?.[1],
        data: params?.[2],
        headers: {
          'Content-Type': contentType,
        },
      };

      const response = await axiosPrivate(requestData);
      console.log('response', response);
      return response?.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(queryKey);
    },
    onError: (err) => {
      return err?.response?.data;
    },
  });
  return mutation;
};

export const useAuthMutation = () => useMutate(['auth'], 'api/users/login/');

export const useAuthSignupMutation = () =>
  useMutate(['auth'], 'api/users/register');

export const useRemoveEnrollCourseMutation = (currentModule) =>
  useMutate(['remove-enroll-course'], `${currentModule}/access/remove/`);

export const useFileMutation = () =>
  useMutate(['file-upload'], 'api/file/upload/', 'multipart/form-data');

export const useCategoryMutation = () =>
  useMutate(['category'], 'api/category/');
