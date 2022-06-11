import saveReadBook from './helpers/saveReadBook.js';
import getAllReadBooks from './helpers/getAllReadBooks.js';
import removeReadBook from './helpers/removeReadBook.js';
import removeAllReadBooks from './helpers/removeAllReadBooks.js';
import booksList from './services/booksList.js';

function handleResponsiveness() {
  let OS = 'Linux';
  if (navigator.userAgent.indexOf('Win') !== -1) { OS = 'Windows'; }
  const width = window.innerWidth;
  if (OS === 'Windows' && width > 1200) { document.getElementsByTagName('html')[0].style.fontSize = '13px'; }
  else if (OS === 'Windows' && width > 700) { document.getElementsByTagName('html')[0].style.fontSize = '10px'; }
  else if (OS === 'Windows' && width <= 700) { document.getElementsByTagName('html')[0].style.fontSize = '6px'; }
}

window.addEventListener('resize', handleResponsiveness);

const message = document.querySelector('.message-container');

function showMessage() {
  message.style.display = 'block';
}

function hideMessage() {
  message.style.display = 'none';
}

const privacyNotice = document.querySelector('.privacy-notice');
privacyNotice.addEventListener('mouseover', showMessage);
privacyNotice.addEventListener('mouseout', hideMessage);

function creatImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'book-cover';
  img.src = imageSource;
  return img;
}

function createStandardElement(element, className, innerText) {
  const el = document.createElement(element);
  el.className = className;
  el.innerText = innerText;
  return el;
}

function createCardElement({ cover, title, author, releaseYear, description }) {
  const section = document.createElement('section');
  section.className = 'book';
  section.appendChild(creatImageElement(cover));
  section.appendChild(createStandardElement('span', 'book-info', `Título: ${title}`));
  section.appendChild(createStandardElement('span', 'book-info', `Autor(a): ${author}`));
  section.appendChild(createStandardElement('span', 'book-info', `Ano da 1ª edição: ${releaseYear}`));
  section.appendChild(createStandardElement('span', 'book-info', description));
  const readBooks = getAllReadBooks();
  const btnClass = readBooks.some((el) => el && el.includes(title)) ? 'add-btn add-btn-read' : 'add-btn';
  const btnText = readBooks.some((el) => el && el.includes(title)) ? 'Lido!' : 'Adicionar à lista de lidos!';
  section.appendChild(createStandardElement('button', btnClass, btnText));
  return section;
}

function getBooks() {
  const parentSection = document.querySelector('.books');
  parentSection.innerHTML = '<div class="loading">Carregando...</div>';
  const loadingMessage = document.querySelector('.loading');
  const books = [...booksList];
  loadingMessage.remove();
  books.forEach((el) => {
    const childSection = createCardElement(el);
    parentSection.appendChild(childSection);
  });
}

function setReadBooks() {
  const booksBtns = document.querySelectorAll('.add-btn');
  booksBtns.forEach((el) => el.addEventListener('click', async (event) => {
    const bookBtn = event.target;
    const bookTitle = bookBtn.parentNode.firstChild.nextSibling.innerText;
    if (bookBtn.innerText === 'Adicionar à lista de lidos!') {
      bookBtn.classList.add('add-btn-read');
      bookBtn.innerText = 'Lido!';
      saveReadBook(bookTitle);
    } else {
      bookBtn.classList.remove('add-btn-read');
      bookBtn.innerText = 'Adicionar à lista de lidos!';
      removeReadBook(bookTitle);
    }
  }));
}

function cleanReadBooks() {
  const booksBtns = document.querySelectorAll('.add-btn-read');
  booksBtns.forEach((el) => {
    el.classList.remove('add-btn-read');
    el.innerText = 'Adicionar à lista de lidos!';
  })
  removeAllReadBooks();
}

const removeAllBtn = document.querySelector('.clean-list-btn');
removeAllBtn.addEventListener('click', cleanReadBooks);

window.onload = () => {
  handleResponsiveness();
  getBooks();
  setReadBooks();
};
