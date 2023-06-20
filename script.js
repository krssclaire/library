const DEFAULT_BOOK = new Book('Atomic Habits', 'James Clear', 250, 'read');
const addBtn = document.querySelector('#add-book');
const newBookForm = document.querySelector('.add-new-book');
const inputTitle = document.querySelector('#input-title');
const inputAuthor = document.querySelector('#input-author');
const inputPages = document.querySelector('#input-pages');
const inputRead = document.querySelector('#input-reading-status');
const saveBtn = document.querySelector('.save');
const cancelBtn = document.querySelector('.cancel');
const dashboard = document.querySelector('.cards-container');

// Created

let library = [];
let newBook = DEFAULT_BOOK;

console.log(library.length);

addBtn.addEventListener('click', showNewBookForm);
cancelBtn.addEventListener('click', hideNewBookForm);
saveBtn.addEventListener('click', (e) => {
  createLibraryNewBook(e);
  displayLibrary,
  hideNewBookForm,
  resetForm
});


function Book(title, author, pages, read, index) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.index = index;
}

function deleteBook(e) {
    console.log('Hello');
    console.log(e.target);
    //library.splice(index, 1);
    
    //displayLibrary();*/
}

function showNewBookForm() {
    newBookForm.classList.remove('invisible');
    resetForm();
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

function createLibraryNewBook(e) {
    newBook = new Book(inputTitle.value, inputAuthor.value, inputPages.value, inputRead.value, bookIndex);
    library.push(newBook);
    e.preventDefault();
    // Other functions associated with Save btn
    displayLibrary();
    hideNewBookForm();
    resetForm();
}

// Display library 
function displayLibrary() {
    for (let book of library) {
        library = [];
        let newBookValues = Object.values(book);
        console.log(book);

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
        //card.setAttribute('data', '')
        title.classList.add('title');
        author.classList.add('author');
        pages.classList.add('pages');
        status.classList.add('input-reading-status');
        read.value = 'read';
        notRead.value = 'not-read';
        currentlyReading.value = 'reading';
        deleteBtn.classList.add('delete');

        card.append(title);
        card.append(author);
        card.append(pages);
        card.append(status);
        card.append(deleteBtn);
        status.appendChild(read);
        status.appendChild(notRead);
        status.appendChild(currentlyReading);

    
        title.textContent = newBookValues[0];
        author.textContent = `by ${newBookValues[1]}`;
        pages.textContent = ` ${newBookValues[2]} pages`;
        read.textContent = 'Read';
        notRead.textContent = 'Not read';
        currentlyReading.text = 'Reading';
        deleteBtn.textContent = 'Delete';
        status.value = newBookValues[3];
        dashboard.append(card);
    }
    
    const deleteBookBtn = document.querySelectorAll('.delete');
    deleteBookBtn.forEach(btn => {
        btn.addEventListener('click', deleteBook);
    })

}


window.onload = () => {
    library.push(DEFAULT_BOOK);
    displayLibrary();
}