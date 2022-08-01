const find = (selector) => document.querySelector(selector);

const inputElement = find("#input");
const resultElement = find("#result");
const btnElement = find("#button");

btnElement.addEventListener('click', e => {
    value = Number(inputElement.value);
    if (value === NaN) {
        resultElement.innerHTML = 'Only positive whole numbers are allowed';
        return;
    }

    if (value % 1 !== 0) {
        resultElement.innerHTML = 'Only positive whole numbers are allowed';
        return;
    }

    if (value < 0) {
        resultElement.innerHTML = 'Only positive whole numbers are allowed';
        return;
    }

    resultElement.innerHTML = validateNumber(Number(inputElement.value)) || 'please enter a number';
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

const cases = [
    { input: 121, output: "yes" },
    { input: 10, output: "no" },
    { input: 1, output: "yes" },
    { input: 22, output: "yes" },
];

for (const cas of cases) {
    const result = validateNumber(cas.input);
    if (result !== cas.output) {
        console.error(`When input ${cas.input} expected ${cas.output} but got ${result}`);
    } else {
        console.log("passed");

    }
}