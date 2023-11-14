const formatNumber = (number?: string) => {
  return number!.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export default formatNumber;
