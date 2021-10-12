const input = document.querySelector('#validation-input');
input.addEventListener('blur', onBlurInput);

function onBlurInput(event) {
  const correctLength = event.currentTarget.dataset.length;
  const currentLength = event.currentTarget.value.length;
  console.log('Потерян фокус');
  if (currentLength == correctLength) {
    event.currentTarget.classList.add('valid');
    event.currentTarget.classList.remove('invalid');
  } else {
    event.currentTarget.classList.add('invalid');
    event.currentTarget.classList.remove('valid');
  }
}
