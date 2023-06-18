export const formatPrice = (price: number) => {
  return price.toLocaleString("en-US", {
    minimumFractionDigits: 0,
  });
};
