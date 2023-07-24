const bookForm = document.querySelector('#book-form');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const read = document.querySelector('#read');
const bookShelf = document.querySelector('.book-shelf');
const openFormBtn = document.querySelector('.header-btn');
const closeFormBtn = document.querySelector('.book-form-close-btn');
const formFrame = document.querySelector('.form-frame');

//The constructor...
class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

//Book samples
let ex1 = new Book('The Lord of the Rings', 'J.R.R. Tolkien', '1178', false);
let ex2 = new Book('A Game of Thrones', 'George R. R. Martin', '694', false);
let ex3 = new Book('Harry Potter and the Half-Blood Prince', 'J. K. Rowling', '607', true);

//Open form
openFormBtn.addEventListener('click', () => formFrame.classList.add('active'));

//Close form
closeFormBtn.addEventListener('click', () => formFrame.classList.remove('active'));

//Library
const myLibrary = [ex1, ex2, ex3];

//Add books to library
bookForm.addEventListener('submit', (e) => {
    formFrame.classList.remove('active');
    e.preventDefault();
    const book = new Book(title.value, author.value, pages.value, read.checked);
    myLibrary.push(book);
    clearInputs();
    render();
});

//Clear the form inputs
function clearInputs() {
    title.value = '';
    author.value = '';
    pages.value = '';
    read.checked = false;
}

function render() {
    bookShelf.textContent = '';
    myLibrary.forEach((book, index) => {
        createBookCard(book, index);
    });
    removeBook();
}

//Remove the book element
function removeBook() {
    const removeClick = document.querySelectorAll('.remove-btn');
    removeClick.forEach((btn) => {
        btn.addEventListener('click', () => {
            myLibrary.splice(btn.getAttribute('data'), 1);
            console.log(btn.getAttribute('data'));
            render();
        });
    });
}

//Create the Book elements for the page
function createBookCard(book, index) {

    //Create the card div
    const newCardDiv = document.createElement('div');
    newCardDiv.classList.add('card');

    //Add title to the div
    const cardTitle = document.createElement('h2');
    cardTitle.classList.add('card-title');
    cardTitle.innerText = book.title;
    newCardDiv.append(cardTitle);

    //Add the author name to the div
    const cardAuthor = document.createElement('p');
    cardAuthor.classList.add('card-author');
    cardAuthor.innerText = book.author;
    newCardDiv.append(cardAuthor);

    //Add the pages to the div
    const cardPages = document.createElement('p');
    cardPages.classList.add('card-pages');
    cardPages.innerText = book.pages;
    newCardDiv.append(cardPages);

    //Add checkbox for read value
    const checkBox = document.createElement('input');
    checkBox.setAttribute('data', index);
    checkBox.setAttribute('type', 'checkbox');
    checkBox.setAttribute('id', `checkbox${index}`);
    checkBox.setAttribute('name', `checkbox${index}`);
    checkBox.classList.add('check-box');
    checkBox.checked = book.read;
    newCardDiv.append(checkBox);

    // //Add label for checkbox
    const checkBoxLabel = document.createElement('label');
    checkBoxLabel.setAttribute('for',`checkbox${index}`);
    checkBoxLabel.classList.add('check-box-label');
    //Add icon for the label
    const checkBoxIcon = document.createElement('img');
    checkBoxIcon.setAttribute('src', './icon/R.svg');
    checkBoxIcon.classList.add('check-box-icon');
    checkBoxLabel.append(checkBoxIcon);
    newCardDiv.append(checkBoxLabel);


    //Add remove button for book card
    const removeBtn = document.createElement('button');
    removeBtn.setAttribute('data', index);
    removeBtn.classList.add('remove-btn');
    //Add remove icon for the button
    const removeBtnIcon = document.createElement('img');
    removeBtnIcon.setAttribute('src', './icon/delete.svg');
    removeBtnIcon.classList.add('remove-btn-icon');
    removeBtn.append(removeBtnIcon);
    newCardDiv.append(removeBtn);

    //Add the new book to book section of the page
    bookShelf.append(newCardDiv);
}

render();