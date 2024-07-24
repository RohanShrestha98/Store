const calculateDiscountedAmount = (amount: any, discountPercentage: any) => {
  const discountAmount = Math.round(
    (Number(discountPercentage) * Number(amount)) / 100,
  );
  const discountedAmount = amount - discountAmount;
  return discountedAmount;
};

export default calculateDiscountedAmount;
