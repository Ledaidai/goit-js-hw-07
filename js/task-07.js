const fontChanger = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
text.style.fontSize = `${fontChanger.value}px`;

fontChanger.addEventListener('input', onFontChange);

function onFontChange(event) {
  text.style.fontSize = `${event.currentTarget.value}px`;
}
