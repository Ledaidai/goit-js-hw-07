const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listEl = document.querySelector('#ingredients')
  
const makeListIngredients = (ingredients) => {
  return ingredients.map(ingredient => {
    const listItemEl = document.createElement('li');
    listItemEl.textContent = `${ingredient}`;

    return listItemEl;
  });
}

const list = makeListIngredients(ingredients);
listEl.append(...list);
