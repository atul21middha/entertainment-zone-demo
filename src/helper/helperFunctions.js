export const getSortedData = (data) => {
  let updatedData = data;
  if (updatedData.length > 0) {
    updatedData = updatedData.filter(item => item.releaseYear > 2010)
    updatedData.sort((a, b) => a.title > b.title ? 1 : -1);
    return updatedData.slice(0, 21)
  }
  return [];
};
