const find = (selector) => document.querySelector(selector);

const inputElement = find("#input");
const resultElement = find("#result");
const btnElement = find("#button");

btnElement.addEventListener('click', e => {
    if (!inputElement.value) {
        resultElement.innerHTML = "Input Empty";
        return;
    }

    value = Number(inputElement.value);
    if (value === NaN) {
        resultElement.innerHTML = 'Input Invalid';
        return;
    }

    if (value % 1 !== 0) {
        resultElement.innerHTML = 'Input Invalid';
        return;
    }

    if (value < 0) {
        resultElement.innerHTML = 'Input Invalid';
        return;
    }

    resultElement.innerHTML = validateNumber(Number(inputElement.value)) || 'Input Invalid';
});

/**
 * @param {number} value
 * @returns {'yes'|'no'}
 */
function validateNumber(value) {
    temp = value;
    reverse = 0;
    return validateNumberRecursion(value, temp, reverse);
}

function validateNumberRecursion(initial, temp, reverse) {
    if (temp <= 0) {
        return initial === reverse ? 'yes' : 'no';
    }

    mod = temp % 10;
    reverse = reverse * 10 + mod;
    temp = Math.floor(temp / 10);
    return validateNumberRecursion(initial, temp, reverse);
}