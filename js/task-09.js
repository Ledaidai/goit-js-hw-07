const btnChangeColor = document.querySelector('.change-color');
const bodyEl = document.querySelector('body')
const spanEl = document.querySelector('.color')
// console.log(btnChangeColor)
btnChangeColor.addEventListener('click', onColorChange);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onColorChange() {
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = bodyEl.style.backgroundColor
}
