export const getUniqueArray = (data: any, key: any) => {
  return [...new Map(data?.map((item) => [key[item], item])).values()];
};
