function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonEl = document.querySelector('.change-color')
const bodyEl = document.querySelector('body')
const spanEl = document.querySelector('.color')

const changeColor = event => {
  spanEl.textContent = getRandomHexColor();
  bodyEl.style.backgroundColor = spanEl.textContent;
}

buttonEl.addEventListener('click', changeColor)

