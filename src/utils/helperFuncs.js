export const formatDate = (timeString) => {
  const year = timeString.slice(0, 4);
  const month = timeString.slice(6, 7);
  const day = timeString.slice(9, 10);
  return `${day}/${month}/${year}`;
};
