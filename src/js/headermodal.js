const burgerBtn = document.querySelector('.js-open-menu');
const closeBtn = document.querySelector('.js-close-menu');
const modal = document.querySelector('.js-modal');

burgerBtn.addEventListener('click', function() {
    modal.style.display = 'block';
   
});

closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
    
});


