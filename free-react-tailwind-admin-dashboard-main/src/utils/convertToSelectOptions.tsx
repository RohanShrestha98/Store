export const convertToSelectOptions = (lists: any) => {
  const options = lists?.map((item: any) => {
    return { value: item?.id, label: item?.title };
  });
  return options;
};
