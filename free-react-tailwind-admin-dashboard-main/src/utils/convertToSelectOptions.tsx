import { capitalizeFirstLetter } from './capitalizeFirstLetter';

export const convertToSelectOptions = (lists: any) => {
  const options = lists?.map((item: any) => {
    return {
      value: item?.id,
      label: capitalizeFirstLetter(item?.title || item),
    };
  });
  return options;
};
