import { formulaCalories } from './formula.js';
import { validation } from './validation.js';

const Sex = {
    MALE: 5,
    FEMALE: -161,
}

const Activity = {
    MIN: 1.2,
    LOW: 1.375,
    MEDIUM: 1.55,
    HIGH: 1.725,
    MAX: 1.9,
};

const CaloriesMinMaxRatio = {
    MIN: 0.85,
    MAX: 1.15
};

const form = document.querySelector('.form');
const counter = document.querySelector('.counter__result');

const age = form.elements.age;
const height = form.elements.height;
const weight = form.elements.weight;
const sex = form.elements.gender;
const activity = form.elements.activity;
const submit = form.elements.submit;
const reset = form.elements.reset;

const caloriesNorm = document.querySelector('#calories-norm');
const caloriesMinimal = document.querySelector('#calories-minimal');
const caloriesMaximal = document.querySelector('#calories-maximal');

const showResult = (evt) => {
    evt.preventDefault();

    let formula = formulaCalories(+weight.value, +height.value, +age.value, Sex[sex.value.toUpperCase()]) * Activity[activity.value.toUpperCase()];

    caloriesNorm.textContent = Math.round(formula);
    caloriesMinimal.textContent = Math.round(formula * CaloriesMinMaxRatio.MIN);
    caloriesMaximal.textContent = Math.round(formula * CaloriesMinMaxRatio.MAX);

    counter.classList.remove('counter__result--hidden');
};

const show = () => {
    let weigthValidation = validation(+weight.value);
    let heightValidation = validation(+height.value);
    let ageValidation = validation(+age.value);

    if (weigthValidation && heightValidation && ageValidation) {

        submit.disabled = false;
        reset.disabled = false;
        return true;
    }

    if (weigthValidation || heightValidation || ageValidation) {

        reset.disabled = false;
        return true;
    }

    counter.classList.add('counter__result--hidden');
    submit.disabled = true;
    reset.disabled = true;
    return false
};

const resetForm = (evt) => {
    evt.preventDefault();

    counter.classList.add('counter__result--hidden');

    age.value = '';
    height.value = '';
    weight.value = '';

    caloriesNorm.textContent = 0;
    caloriesMinimal.textContent = 0;
    caloriesMaximal.textContent = 0;

    submit.disabled = true;
    reset.disabled = true;

    sex.value = 'male';
    activity.value = 'min';
};

form.addEventListener('change', show);
submit.addEventListener('click', showResult);
reset.addEventListener('click', resetForm);
