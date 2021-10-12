let counterValue = 5;

const value = document.querySelector('#value');
const btnDecrement = document.querySelector('[data-action=decrement]');
const btnIncrement = document.querySelector('[data-action=increment]');

function renderValue() {
  value.textContent = counterValue;
}

renderValue();

btnDecrement.addEventListener('click', onMinusNumber);
btnIncrement.addEventListener('click', onPlusNumber);

function onMinusNumber(event) {
  counterValue -= 1;
  renderValue();
}

function onPlusNumber(event) {
  counterValue += 1;
  renderValue();
}
