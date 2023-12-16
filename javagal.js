document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector('.slider');
  const slides = document.querySelector('.slides');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  const pager = document.querySelector('.pager');

  const slideWidth = slides.clientWidth; // Ширина одного изображения

  let currentSlide = 0;


  function updatePager() {
    const currentPage = Math.floor(currentSlide / 1) + 1;
    const totalPages = Math.ceil(slides.childElementCount / 3);
    pager.textContent = `Page ${currentPage} of ${totalPages}`;
  }
  
  prevBtn.addEventListener('click', () => {
    if (currentSlide > 0) {
      slideTo(currentSlide - 1); // Перемещаемся на три изображения влево
      updatePager(); // Обновляем пейджер после перемещения
    }
  });
  
  nextBtn.addEventListener('click', () => {
    if (currentSlide < slides.childElementCount - 3) {
      slideTo(currentSlide + 1); // Перемещаемся на три изображения вправо
      updatePager(); // Обновляем пейджер после перемещения
    }
  });
  
  
  
  
  

  function updateButtons() {
    prevBtn.disabled = currentSlide === 0;
    nextBtn.disabled = currentSlide >= slides.childElementCount - 1;
  }

  function slideTo(index) {
    currentSlide = index;
    slider.scrollTo({
      left: slideWidth * currentSlide,
      behavior: 'smooth'
    });
    updatePager();
    updateButtons();
  }




  
 
  updatePager();
  updateButtons();
});
// Пример скрипта для активации пейджера для мобильных устройств
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelector('.slides');
  const mobilePager = document.querySelector('.mobile-pager'); // Изменено на .mobile-pager

  slides.addEventListener('scroll', function () {
    updateMobilePager(); // Вызываем функцию обновления пейджера для мобильных устройств
  });

  function updateMobilePager() {
    const slideWidth = slides.clientWidth;
    const currentPage = Math.round(slides.scrollLeft / slideWidth) + 1;

    const pages = Math.ceil(slides.scrollWidth / slideWidth);

    mobilePager.innerHTML = '';
    for (let i = 0; i < pages; i++) {
      const dot = document.createElement('span');
      dot.addEventListener('click', function () {
        slides.scrollLeft = i * slideWidth;
        updateMobilePager();
      });
      if (currentPage === i + 1) {
        dot.classList.add('active');
      }
      mobilePager.appendChild(dot);
    }
  }

  updateMobilePager();
});
