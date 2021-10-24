const input = document.querySelector('input');
const btnCheck = document.querySelector('.check')
const btnStart = document.querySelector('.start')
// const number = localStorage.getItem('number')
let number;
console.log(number);
window.addEventListener('DOMContentLoaded', () => {
  number = localStorage.getItem('number')
})
btnStart.addEventListener('click', () => {
  localStorage.setItem('number', generateRandomNumber());
})


function generateRandomNumber() {
  return Math.floor(Math.random() * 101)
}

