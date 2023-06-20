const addBtn = document.querySelector('#add-book');
const newBookForm = document.querySelector('.add-new-book');
const inputTitle = document.querySelector('#input-title');
const inputAuthor = document.querySelector('#input-author');
const inputPages = document.querySelector('#input-pages');
const inputRead = document.querySelector('#input-reading-status');
const saveBtn = document.querySelector('.save');
const cancelBtn = document.querySelector('.cancel');
const dashboard = document.querySelector('.cards-container');

let library = [];
let newBook;

addBtn.addEventListener('click', showNewBookForm);
cancelBtn.addEventListener('click', hideNewBookForm);
saveBtn.addEventListener('click', (e) => {
  createNewBook(e);
  createBookCard,
  hideNewBookForm,
  resetForm
});

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function showNewBookForm() {
    newBookForm.classList.remove('invisible');
}

function hideNewBookForm() {
    newBookForm.classList.add('invisible');
}

function resetForm() {
    inputTitle.value = '';
    inputAuthor.value = '';
    inputPages.value = '';
    inputRead.value = 'Read';
}

function createNewBook(e) {
    newBook = new Book(inputTitle.value, inputAuthor.value, inputPages.value, inputRead.value);
    library.push(newBook);
    e.preventDefault();
    console.log(library);
    createBookCard();
    hideNewBookForm();
    resetForm();
}

/* Create book based on user form input */
function createBookCard() {
    let card = document.createElement('div');
    let title = document.createElement('p');
    let author = document.createElement('p');
    let pages = document.createElement('p');
    let status = document.createElement('select');
    let read = document.createElement('option');
    let notRead = document.createElement('option');
    let currentlyReading = document.createElement('option');
    let deleteBtn = document.createElement('button');

    card.classList.add('book-card');
    title.classList.add('title');
    author.classList.add('author');
    pages.classList.add('pages');
    status.classList.add('input-reading-status');
    deleteBtn.classList.add('delete');

    card.append(title);
    card.append(author);
    card.append(pages);
    card.append(status);
    card.append(deleteBtn);
    status.append(read);
    status.append(notRead);
    status.append(currentlyReading);

    title.textContent = inputTitle.value;
    author.textContent = `by ${inputAuthor.value}`;
    pages.textContent = `${inputPages.value} pages`;
    read.textContent = 'Read';
    notRead.textContent = 'Not read';
    currentlyReading.text = 'Reading';
    deleteBtn.textContent = 'Delete';
    dashboard.append(card);
    if (inputRead.value == 'not-read') {
        status.textContent = 'Not read';
    } else if (inputRead.value == 'reading') {
        status.textContent == 'Reading';
    } else {
        status.textContent == 'Read';
    }
}


window.onload = () => {
    let defaultBook = new Book('Atomic Habits', 'James Clear', 250, 'read');
    library.push(defaultBook);
    // function that displays the book
}

