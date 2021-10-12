const inputEl = document.querySelector('input');
let amount = 0;
const createBtn = document.querySelector('[data-action=render]');
const removeBtn = document.querySelector('[data-action=destroy]');
const collectionEl = document.querySelector('#boxes');

inputEl.addEventListener('input', onInputChange);
createBtn.addEventListener('click', createBoxes);
removeBtn.addEventListener('click', destroyBoxes);

function onInputChange(event) {
  amount = event.currentTarget.value;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomColor() {
  return `rgb(${getRandomInt(256)},${getRandomInt(256)},${getRandomInt(256)})`;
}

function createBoxes(event) {
  collectionEl.innerHTML = '';
  for (let index = 0; index < amount; index += 1) {
    const block = document.createElement('div');
    let width = 30 + index * 10;
    let height = 30 + index * 10;
    block.style.width = `${width}px`;
    block.style.height = `${height}px`;
    block.style.backgroundColor = getRandomColor();
    block.style.marginBottom = '5px';
    collectionEl.appendChild(block);
  }
}

function destroyBoxes(event) {
  collectionEl.innerHTML = '';
  inputEl.value = 0;
  amount = 0;
}

