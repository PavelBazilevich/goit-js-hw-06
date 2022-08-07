function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxControlEl = document.querySelector('#controls');
const inputEl = boxControlEl.firstElementChild
const createButtonEl = document.querySelector('[data-create]')
const destroyButtonEl = document.querySelector('[data-destroy]')
const divBoxes = document.querySelector('#boxes')


createButtonEl.addEventListener('click', getAmount)

destroyButtonEl.addEventListener('click', destroyBoxes) 

function getAmount() {
  var amount = inputEl.value;
  createBoxes(amount);
}

function destroyBoxes() {
  divBoxes.innerHTML = ' ';
}
  

function createBoxes(amount) {
  const basicSize = 30;
  for (let i = 0; i < amount; i++){
    const size = basicSize + i * 10;
    const divEl = document.createElement('div')

  divEl.style.background = getRandomHexColor();
  divEl.style.width = size + "px"
    divEl.style.height = size + "px"
  divBoxes.append(divEl)
    
  }
}






