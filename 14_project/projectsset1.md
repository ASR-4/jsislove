# Projects releted to DOM

## project link

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code 

## Project 1

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button) => {
  console.log(buttons);
  button.addEventListener("click", (e) =>{
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'purple') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```

## project 2
```javascript
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`
  }else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight${weight}`
  }else{
   const bmi = (weight/ ((height*height)/10000)).toFixed(2)
   results.innerHTML = `<span>${bmi}</span>`
  }
});

```

## project 3
```javascript
const clock = document.querySelector('#clock');

setInterval(() => {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
  // const time = console.log(date.toLocaleTimeString());
}, 1000);
```
## project 4
```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userinput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const guess = parseInt(userinput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('please enter a valid number');
  } else if (guess < 1) {
    alert('please enter a number more than 1');
  } else if (guess > 100) {
    alert('please enter a number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMesaage(`Game Over. Ramdom number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMesaage('you guess it right');
    endGame();
  } else if (guess < randomNumber) {
    displayMesaage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMesaage(`Number is TOOO high`);
  }
}
function displayGuess(guess) {
  userinput.value = '';
  guessSlot.innerHTML += `${guess},  `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}
function displayMesaage(message) {
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}
function endGame() {
  userinput.value = '';
  userinput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h1 id = "newGame">Start new Game</h1>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', (e) => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userinput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}
```