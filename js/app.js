'use strict';

var userName = prompt('Let\'s play a guessing game.  Enter your name to begin');
alert('Hello ' + userName);
console.log('User is ' + userName);

var homeTown = prompt('I was born in Wisconsin.  Please enter a "yes" or "no" response.').toUpperCase();
homeTown = homeTown.toUpperCase();

if (homeTown.toUpperCase() === 'YES' || homeTown.toUpperCase() === 'Y') {
  alert('Incorrect, I was born in Illinois.');
} else {
  alert('Correct!  I was born in Illinois');
}
console.log('User response to born in WI '+ homeTown);

var pets = prompt('I have a cat.  Please enter a "yes" or "no" response.').toUpperCase();
pets = pets.toUpperCase();

if (pets.toUpperCase() === 'YES' || pets.toUpperCase() === 'Y') {
  alert('Incorrect.  No pets at the momment.');
} else {
  alert('Correct! No pet at the momment.');
}
console.log('User response to cat '+ pets);

var liveAbroad = prompt('I have lived abroad.  Please enter a "yes" or "no" response.').toUpperCase();
liveAbroad  = liveAbroad.toUpperCase();

if (liveAbroad.toUpperCase() === 'YES' || liveAbroad.toUpperCase() === 'Y') {
  alert('Correct!  I have lived in Dublin, Ireland and Paris, France.');
} else {
  alert('Incorrect.  I have lived in Dublin, Ireland and Paris, France.');
}
console.log('User response to live abroad '+ liveAbroad);

var skyDive = prompt('I have been skydiving.  Please enter a "yes" or "no" response.').toUpperCase();
skyDive = skyDive.toUpperCase();

if (skyDive.toUpperCase() === 'YES' || skyDive.toUpperCase() === 'Y') {
  alert('Incorrect.  Never been skydiving but paragliding is fun!.');
} else {
  alert('Correct!  Never been skydiving but paragliding is fun!.');
}
console.log('User response to skydiving is '+ skyDive);

var champion = prompt('I attended a game where a professional sports team won a championship.  Please enter a "yes" or "no" response.').toUpperCase();

if (champion.toUpperCase() === 'YES' || champion.toUpperCase() === 'Y') {
  alert('Correct!  I attended the 1996 NBA finals game when the Chicago Bulls beat the Seattle SuperSonics.');
} else {
  alert('Incorrect.  I attended the 1996 NBA finals game when the Chicago Bulls beat the Seattle SuperSonics.');
}
console.log('User response to champion is '+ champion);

var numToGuess = Math.floor(Math.random() * 30);
console.log('Number to guess is ' + numToGuess);
var numUserGuess = parseInt(prompt('Enter a number between 1 and 30.  You have 4 attemps to guess the number.'));

for (var i = 0; i <= 3; i++) {
if (numUserGuess === numToGuess) {
  alert('Correct guess!!!');
  console.log('Guess is ' + numUserGuess);
  break;
} else if(numUserGuess > numToGuess) {
  console.log('Guess is ' + numUserGuess);
  alert('Try again, your guess is too high.');
  numUserGuess = parseInt(prompt('Enter a number between 1 and 30.'));
} else {
  console.log('Guess is ' + numUserGuess);
  alert('Try again, your guess is too low.');
  numUserGuess = parseInt(prompt('Enter a number between 1 and 30.'));
}
}

var countryNotVisitArray = ['norway','poland', 'romania', 'monaco', 'scotland', 'hungary', 'croatia', 'ukraine', 'turkey'];
console.log('Countries not visited ' + countryNotVisitArray);
var countryUserGuess = prompt('Guess a country in Europe I have NOT visited.').toLowerCase();
console.log(countryUserGuess);

for (var i = 0; i < countryNotVisitArray.length ; i++) {
if (countryNotVisitArray[i] === countryUserGuess) {
   alert('Correct!  I have not visited the following countries: Norway, Poland, Romania,  Monaco, Scotland, Hungary, Croatia, Ukraine, Turkey');
  console.log('Guess is ' + countryUserGuess);
  break;
  } else {
    console.log('Guess is ' + countryUserGuess);
    alert('Try again, I have visited that country');
    prompt('Guess a country in Europe I have NOT visited.').toLowerCase();
}
}

