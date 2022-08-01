const find = (selector) => document.querySelector(selector);

const inputElement = find("#input");
const resultElement = find("#result");
const btnElement = find("#button");

const grades = [
  { grade: "A+", point: 90 },
  { grade: "A", point: 80 },
  { grade: "B+", point: 75 },
  { grade: "B", point: 70 },
  { grade: "C+", point: 65 },
  { grade: "C", point: 60 },
  { grade: "D+", point: 55 },
  { grade: "D", point: 50 },
  { grade: "F", point: 0 },
];

function calculateGrade(point) {
  for (const grade of grades) {
    if (point >= grade.point) {
      return grade.grade;
    }
  }
}

btnElement.addEventListener('click', e => {
  resultElement.innerHTML = calculateGrade(Number(inputElement.value)) || 'please enter a number';
});
