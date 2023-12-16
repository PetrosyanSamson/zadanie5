const slider = document.querySelector('.gallery-slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const pager = document.querySelector('.pager');

let currentPage = 1;
const slidesPerPage = window.innerWidth > 768 ? 3 : 1;
const totalPages = Math.ceil(slides.length / slidesPerPage);

function showSlides(page) {
const startIndex = (page - 1) * slidesPerPage;
const endIndex = startIndex + slidesPerPage;
slides.forEach((slide, index) => {
slide.style.display = (index >= startIndex && index < endIndex) ? 'block' : 'none';
});
pager.innerHTML = `${currentPage}/${totalPages}`;
}

showSlides(currentPage);

prevBtn.addEventListener('click', () => {
currentPage = currentPage > 1 ? currentPage - 1 : totalPages;
showSlides(currentPage);
});

nextBtn.addEventListener('click', () => {
currentPage = currentPage < totalPages ? currentPage + 1 : 1;
showSlides(currentPage);
});