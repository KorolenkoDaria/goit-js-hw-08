import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const emailInput = document.querySelector('input');
const messageTextarea = document.querySelector('textarea');

const LS_KEY = 'feedback-form-state';
let formData = {
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

const savedData = localStorage.getItem(LS_KEY);

function loadForm() {
    try {
        if (savedData) {
            formData = JSON.parse(savedData);
            Object.entries(formData).forEach(([key, value]) => {
                form.elements[key].value = value;
            });  
        }
    } catch ({ message }) {
            console.log(message);
        }
    }


loadForm();

function clearData(evt) {
    evt.preventDefault();  
    console.log(formData);
    formData = {};
    localStorage.removeItem(LS_KEY);
    evt.target.reset();
};


