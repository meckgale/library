const openFormBtn = document.querySelector('.header-btn');
const closeFormBtn = document.querySelector('.book-form-close-btn');
const formFrame = document.querySelector('.form-frame');

openFormBtn.addEventListener('click', () => formFrame.classList.add('active'));

closeFormBtn.addEventListener('click', () => formFrame.classList.remove('active'));