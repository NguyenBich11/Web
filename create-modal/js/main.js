var btnOpen = document.querySelector('.modal-opne-btn');
var btnClose = document.querySelector('.icon-close');
var modal = document.querySelector('.modal');

function toggleModal() {
      modal.classList.toggle('hide');
}

btnOpen.addEventListener('click', toggleModal);
btnClose.addEventListener('click', function() {
      console.log(123);
});
modal.addEventListener('click', toggleModal);

console.log(btnClose);

