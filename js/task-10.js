const formEl = document.querySelector('.login-form');
const inputEmailEl = document.querySelector('.email');
const inputPasswordEl = document.querySelector('.password');
const btnEl = document.querySelector('button');
const dataObj = {};

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  if (inputEmailEl.value == '' || inputPasswordEl.value == '') {
    alert("Внимание! Все поля должны быть заполнены!");
  } else {
    const formData = new FormData(event.currentTarget);

    formData.forEach((value, name) => {
      dataObj[name] = value;
    });
    console.log(dataObj);

    event.currentTarget.reset();
  }
}
