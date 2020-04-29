let currentValue = 0;
let newValue = 0;
let total = 0;

const values = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

document.querySelector('.container').addEventListener('click', function (event) {
  if (event.target.tagName === 'button') {
    console.log(event);
  }
});