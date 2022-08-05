const formEl = document.querySelector('.login-form')
const firstLabelEl = formEl.firstElementChild;
const emailInputEl = firstLabelEl.firstElementChild;
const secondLebelEl = firstLabelEl.nextElementSibling;
const passwordInputEl = secondLebelEl.firstElementChild
const buttonEl = formEl.lastElementChild;
console.log(String(emailInputEl.value))
const referral = event => {
    event.preventDefault();
    const objectInfo = {};
    if (emailInputEl.value === "" || passwordInputEl.value === "") {
        alert("Заповніть форму")
    } else {
        objectInfo.email = emailInputEl.value;
        objectInfo.password = passwordInputEl.value;
        console.log(objectInfo)
        event.currentTarget.reset();
    }
};

formEl.addEventListener('submit', referral)
