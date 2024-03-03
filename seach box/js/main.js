var seachboxBtn = document.querySelector('.search-box__btn');

seachboxBtn.addEventListener('click', function(){
 this.parentElement.classList.toggle('open');
 this.previousElementSibling.focus();
});