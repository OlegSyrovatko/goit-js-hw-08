import throttle from "lodash.throttle";

const STORAGE_KEY = "feedback-form-state";

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
}

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onInput, 500)); 

getItems(); 

function onFormSubmit(e) {
    e.preventDefault(); 
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(formItems);
}

const formItems = {};

function onInput() {
    formItems.email = refs.input.value;
    formItems.message = refs.textarea.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formItems));
}
 
function getItems() {
    const savedItems = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (savedItems) {
        refs.input.value = savedItems.email;
        refs.textarea.value = savedItems.message;
    }
}

