import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const emailInput = document.querySelector('input');
const messageTextarea = document.querySelector('textarea');

const LS_KEY = 'feedback-form-state';
const formData = {
    email: '',
    message: '',
};

form.addEventListener("input", throttle(saveData, 500));
form.addEventListener("submit", clearData);

function saveData(evt) {
    const { value, name } = evt.target;
    const inputValue = value.trim();
    formData[name] = inputValue;
    localStorage.setItem(LS_KEY, JSON.stringify(formData));
};

const savedData = JSON.parse(localStorage.getItem(LS_KEY));

if (savedData) {
    console.log(savedData);
     const { email, message } = savedData;
     emailInput.value = email;
     messageTextarea.value = message;
};

function clearData(evt) {
    evt.preventDefault();
    const savedData = JSON.parse(localStorage.getItem(LS_KEY));
    console.log(savedData);
    localStorage.removeItem(LS_KEY);
    form.reset();
};
