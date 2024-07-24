export const capitalizeFirstLetter = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export const smallFirstLetter = (word: string) => {
  return word.charAt(0).toLowerCase() + word.slice(1);
};
