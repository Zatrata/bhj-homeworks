const valueBtn = document.querySelector('div.dropdown__value');
const list = document.querySelectorAll(...'a.dropdown__link');

function menu() {
    let menuAct = document.querySelector('ul.dropdown__list');
    menuAct.classList.toggle('dropdown__list_active');
}
valueBtn.addEventListener('click', menu);

list.forEach((link) => {
    link.onclick = function () {
      document.querySelector('div.dropdown__value').textContent = link.textContent;
      return false;
    };
    link.addEventListener('click', menu);
  })