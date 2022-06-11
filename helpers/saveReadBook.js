const saveReadBook = (newReadBook) => {
  const data = JSON.parse(localStorage.getItem('wannaRead'));
  const readBooks = (data) ? [...data] : [];
  readBooks.push(newReadBook);
  localStorage.setItem('wannaRead', JSON.stringify(readBooks));
};

export default saveReadBook;
