const getAllReadBooks = () => {
  const data = JSON.parse(localStorage.getItem('wannaRead'));
  const readBooks = (data) ? [...data] : [];
  return readBooks;
};

export default getAllReadBooks;
