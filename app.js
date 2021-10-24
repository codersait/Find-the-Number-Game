/*
Whenever you assign to the innerHTML of a container (even if you're just concatenating with existing HTML), the container's contents will be removed, and the new innerHTML string will be parsed and then rendered by the browser. So, listeners that used to be attached to anything inside of the container will no longer work.
*/
const input = document.querySelector('input');
const btnCheck = document.querySelector('.check');
const btnStart = document.querySelector('.start');
const container = document.querySelector('.container');
const feedback = document.querySelector('.small');
const number = generateRandomNumber();

let guess = 1;
btnCheck.addEventListener('click', () => {
  let guessedNumber = Number(input.value);
  input.value = '';
  feedback.innerText = 'selam';
  if (guessedNumber === number) {
    feedback.innerText = `Number of attempt: ${guess} You win in ${guess}. attempt`;
  } else if (guessedNumber < number) {
    feedback.innerText = `Number of attempt: ${guess} Increase..`;
    guess++;
  } else {
    feedback.innerText = `Number of attempt: ${guess} Decrease...`;
    guess++;
  }
});

function generateRandomNumber() {
  return Math.floor(Math.random() * 101);
}
