const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');
console.log(spanEl.textContent);
const onInput = e => {e.target.value !== '' ? spanEl.textContent = e.target.value : spanEl.textContent = "Anonymous"}
inputEl.addEventListener('input', onInput);