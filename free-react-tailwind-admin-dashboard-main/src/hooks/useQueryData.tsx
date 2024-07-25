import { useQuery } from '@tanstack/react-query';
import useAxiosPrivate from './useAxiosPrivate';

export const useQueryData = (key, path, params = '', enabled = true) => {
  const axiosPrivate = useAxiosPrivate();

  return useQuery({
    queryKey: [key, params],
    refetchOnWindowFocus: false,
    queryFn: () =>
      axiosPrivate
        .get(path, {
          params,
        })
        .then((res) => res.data),
    enabled,
  });
};

export const useCheck = () => useQueryData(['check'], 'check');

export const useSubjectDetails = (subjectID) =>
  useQueryData(['subject-details', subjectID], `subject/details/${subjectID}/`);
export const useCategoryData = () =>
  useQueryData(['category'], `api/category/list/`);

export const useProductData = () =>
  useQueryData(['product'], `api/product/list/`);
export const useProductDataByBarCode = (id) =>
  useQueryData(['product', id], `api/product/list/barcode/${id}`, '', !!id);
