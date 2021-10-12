const categoriesEl = document.querySelector('#categories');
const childCategories = categoriesEl.children;
console.log(`В списке ${childCategories.length} категории.`);

const liItemsInUlEl = categoriesEl.querySelectorAll('.item');
console.log(`В списке ${liItemsInUlEl.length} категории.`);

const liItem = categoriesEl.querySelector('.item')
const titleEl = liItem.querySelector('h2');
console.log(`Категория: ${titleEl.textContent}`);

const ulEl = document.querySelectorAll('.item-list');
console.log(`Количество элементов: ${ulEl.length}`);
