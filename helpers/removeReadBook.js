const removeReadBook = (removedReadBook) => {
  const data = JSON.parse(localStorage.getItem('wannaRead'));
  let readBooks = (data) ? [...data] : [];
  readBooks = readBooks.filter((el) => el !== removedReadBook);
  localStorage.setItem('wannaRead', JSON.stringify(readBooks));
};

export default removeReadBook;
