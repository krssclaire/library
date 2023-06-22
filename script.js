const DEFAULT_BOOK = new Book('Atomic Habits', 'James Clear', 250, 'read', crypto.randomUUID());
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
let newBook = DEFAULT_BOOK;

addBtn.addEventListener('click', showForm);
cancelBtn.addEventListener('click', hideForm);
saveBtn.addEventListener('click', (e) => {
  addBookToLibrary(e);
  displayLibrary();
  resetForm();
  hideForm();
});

function Book(title, author, pages, read, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = id;
}

function showForm() {
    newBookForm.classList.remove('invisible');
    resetForm();
}

function hideForm() {
    newBookForm.classList.add('invisible');
}

function resetForm() {
    inputTitle.value = '';
    inputAuthor.value = '';
    inputPages.value = '';
    inputRead.value = 'read';
}

function addBookToLibrary(e) {
    newBook = new Book(inputTitle.value, inputAuthor.value, inputPages.value, inputRead.value, crypto.randomUUID());
    library.push(newBook);
    e.preventDefault();
}

// Display library 
function displayLibrary() {
    console.log(`Library length: ${library.length}`);
    console.log(library);
    
    let newBookValues = Object.values(newBook);

    let card = document.createElement('div');
    let title = document.createElement('p');
    let author = document.createElement('p');
    let pages = document.createElement('p');
    let readingStatus = document.createElement('select');
    let read = document.createElement('option');
    let notRead = document.createElement('option');
    let currentlyReading = document.createElement('option');
    let deleteBtn = document.createElement('button');
    
    card.classList.add('book-card');
    card.setAttribute('data-id', `${newBookValues[4]}`)
    title.classList.add('title');
    author.classList.add('author');
    pages.classList.add('pages');
    readingStatus.classList.add('input-reading-status');
    read.value = 'read';
    notRead.value = 'not-read';
    currentlyReading.value = 'reading';
    deleteBtn.classList.add('delete');
    deleteBtn.setAttribute('data-id', `${newBookValues[4]}`);
    
    card.append(title);
    card.append(author);
    card.append(pages);
    card.append(readingStatus);
    card.append(deleteBtn);
    readingStatus.appendChild(read);
    readingStatus.appendChild(notRead);
    readingStatus.appendChild(currentlyReading);
    dashboard.append(card);

    title.textContent = newBookValues[0];
    author.textContent = `by ${newBookValues[1]}`;
    pages.textContent = ` ${newBookValues[2]} pages`;
    read.textContent = 'Read';
    notRead.textContent = 'Not read';
    currentlyReading.text = 'Reading';
    deleteBtn.textContent = 'Delete';
    readingStatus.value = newBookValues[3];

    readingStatus.addEventListener('change', (e) => updateReadingStatus(e));

    deleteBtn.addEventListener('click', (e) => deleteBook(e));
}

function updateReadingStatus(e) {
    newBook['read'] = e.target.value;
    console.log(library);
}

function deleteBook(e) {
    let objIndex = library.findIndex(object => object['id'] == e.target.dataset['id']);
    let trash = library.splice(objIndex, 1);

    e.target.parentElement.remove(); 
    
    console.log('------------');
    console.log(`Object index: ${objIndex}`);
    console.log(trash);
    console.log(library);
}

window.onload = () => {
    library.push(DEFAULT_BOOK);
    displayLibrary();
}