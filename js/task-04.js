const decrement = document.querySelector('[data-action = "decrement"]')
const decrementClick = () => {
    value.textContent = counterValue;
    counterValue -= 1;
};
decrement.addEventListener("click", (decrementClick))
const increment = document.querySelector('[data-action = "increment"]')
const incrementClick = () => {
    value.textContent = counterValue;
    counterValue += 1;  
};
increment.addEventListener("click", incrementClick)
const value = document.querySelector('#value')
let counterValue = 0;