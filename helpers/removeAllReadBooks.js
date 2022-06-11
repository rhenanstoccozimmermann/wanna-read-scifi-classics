const removeAllReadBooks = () => {
  const emptyList = [];
  localStorage.setItem('wannaRead', JSON.stringify(emptyList));
};

export default removeAllReadBooks;
