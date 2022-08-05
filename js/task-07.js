const inputEl = document.querySelector('#font-size-control')

const spanEl = document.querySelector('#text')

const onInputChange = event => {
    spanEl.style.fontSize = `${inputEl.value}px`;
}

inputEl.addEventListener('input', onInputChange)