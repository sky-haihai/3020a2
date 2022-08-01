const find = (selector) => document.querySelector(selector);

const inputElement = find("#input");
const resultElement = find("#result");
const btnElement = find("#button");

let pos = 0;
let neg = 0;

inputElement.addEventListener('keyup', e => {
    if (e.key === 'Enter') {
        btnElement.click();
    }
});

btnElement.addEventListener('click', e => {
    const value = Number(inputElement.value);
    inputElement.value = '';
    if (typeof value !== 'number' || isNaN(value)) {
        resultElement.innerHTML = 'please enter a number';
        return;
    }
    if (value === 0) {
        resultElement.innerHTML = `Positive: ${pos}, Negative: ${neg}`;
        pos = 0;
        neg = 0;
    } else {
        value > 0 ? pos++ : neg++;
    }
});
