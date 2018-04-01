'use strict';

var userName = prompt('Let\'s play a guessing game.  Enter your name to begin');
alert('Hello ' + userName);
console.log('User is ' + userName);

var numCorrect = 0
function questions(){
var homeTown = prompt('I was born in Wisconsin.  Please enter a "yes" or "no" response.').toUpperCase();
homeTown = homeTown.toUpperCase();

if (homeTown.toUpperCase() === 'YES' || homeTown.toUpperCase() === 'Y') {
  alert('Incorrect, I was born in Illinois.');
} else {
  alert('Correct!  I was born in Illinois');
  numCorrect ++;
}
console.log('User response to born in WI '+ homeTown);
console.log('Number Correct: ' + numCorrect);

var pets = prompt('I have a cat.  Please enter a "yes" or "no" response.').toUpperCase();
pets = pets.toUpperCase();

if (pets.toUpperCase() === 'YES' || pets.toUpperCase() === 'Y') {
  alert('Incorrect.  No pets at the momment.');
} else {
  alert('Correct! No pet at the momment.');
  numCorrect ++;
}
console.log('User response to cat '+ pets);
console.log('Number Correct: ' + numCorrect);

var liveAbroad = prompt('I have lived abroad.  Please enter a "yes" or "no" response.').toUpperCase();
liveAbroad  = liveAbroad.toUpperCase();

if (liveAbroad.toUpperCase() === 'YES' || liveAbroad.toUpperCase() === 'Y') {
  alert('Correct!  I have lived in Dublin, Ireland and Paris, France.');
  numCorrect ++;
} else {
  alert('Incorrect.  I have lived in Dublin, Ireland and Paris, France.');
}
console.log('User response to live abroad '+ liveAbroad);
console.log('Number Correct: ' + numCorrect);

var skyDive = prompt('I have been skydiving.  Please enter a "yes" or "no" response.').toUpperCase();
skyDive = skyDive.toUpperCase();

if (skyDive.toUpperCase() === 'YES' || skyDive.toUpperCase() === 'Y') {
  alert('Incorrect.  Never been skydiving but paragliding is fun!.');
} else {
  alert('Correct!  Never been skydiving but paragliding is fun!.');
  numCorrect ++;
}
console.log('User response to skydiving is '+ skyDive);
console.log('Number Correct: ' + numCorrect);

var champion = prompt('I attended a game where a professional sports team won a championship.  Please enter a "yes" or "no" response.').toUpperCase();

if (champion.toUpperCase() === 'YES' || champion.toUpperCase() === 'Y') {
  alert('Correct!  I attended the 1996 NBA finals game when the Chicago Bulls beat the Seattle SuperSonics.');
  numCorrect ++;
} else {
  alert('Incorrect.  I attended the 1996 NBA finals game when the Chicago Bulls beat the Seattle SuperSonics.');
}
console.log('User response to champion is '+ champion);
console.log('Number Correct: ' + numCorrect);

var numToGuess = Math.floor((Math.random() * 30) + 1);
console.log('Number to guess is ' + numToGuess);
var numUserGuess = parseInt(prompt('Enter a number between 1 and 30.  You have 4 attemps to guess the number.'));

var i = 0;
while (i < 3) {
  if (numUserGuess === numToGuess) {
  alert('Correct guess!!!');
  console.log('Guess is ' + numUserGuess);
  numCorrect ++;
  break;
} else if(numUserGuess > numToGuess) {
  console.log('Guess is ' + numUserGuess);
  alert('Try again, your guess is too high.');
  numUserGuess = parseInt(prompt('Enter a number between 1 and 30.'));
  i++;
} else {
  console.log('Guess is ' + numUserGuess);
  alert('Try again, your guess is too low.');
  numUserGuess = parseInt(prompt('Enter a number between 1 and 30.'));
  i++;
}
}
console.log('Number Correct: ' + numCorrect);

var countryVisitArray = ['mexico', 'guatemala', 'belize', 'honduras', 'peru', 'chile', 'argentina', 'uruguay']
console.log('Countries visited ' + countryVisitArray);

var countryUserGuess = prompt('Guess a country in Latin America that I have visited.').toLowerCase();
console.log(countryUserGuess);

var i = 0;
while (i < 5) {
if (countryVisitArray.includes(countryUserGuess)) {
  alert('Correct!  I have visited the following countries: Mexico, Guatemala,Belize, Honduras, Peru, Chile, Argentina and Uruguay.');
  console.log('Guess is ' + countryUserGuess);
  numCorrect ++;
  break;
 } else {
  console.log('Guess is ' + countryUserGuess);
  alert('Try again, I have not visited that country');
  countryUserGuess = prompt('Guess a country in Latin America that I have visited.').toLowerCase();
  i++;
}
}
}
questions();
console.log('Number Correct: ' + numCorrect);

alert('Thanks for playing '+ userName + ' you answered ' + numCorrect + ' of 7 questions correctly.' )
