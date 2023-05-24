const searchBtn = document.getElementById('search-btn');
const navInput = document.getElementById('nav-input');


searchBtn.addEventListener('click', event => {
    navInput.classList.toggle('active');
});


const navBtn = document.getElementById('nav-btn');
const nav = document.getElementById('nav');


navBtn.addEventListener('click', event => {
    nav.classList.toggle('active');
});


