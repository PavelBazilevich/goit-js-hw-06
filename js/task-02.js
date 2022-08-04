const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const elements = [];

for (let i = 0; i < ingredients.length; i++) {
  const liEl = document.createElement('li');
  liEl.textContent = `${ingredients[i]}`;
  elements.push(liEl);
}
const ulEl = document.querySelector('#ingredients');
ulEl.append(...elements);


//----------------------------------------------
// const ulEl = document.querySelector('#ingredients');


// const list = ingredients.reduce((str, item) => str + `<li>${item}</li>`, '');

// ulEl.innerHTML = list;
