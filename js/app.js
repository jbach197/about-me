'use strict';
function question1(){
//Prompt with the first question.  Takes user input, converts to upper case and sets variable.
var homeTown = prompt('I was born in Wisconsin.  Please enter a "yes" or "no" response.').toUpperCase();
homeTown = homeTown.toUpperCase();

//Shows approprate alert based on yes/no response.
if (homeTown.toUpperCase() === 'YES' || homeTown.toUpperCase() === 'Y') {
    alert('Incorrect.  I was born in Illinois.');
} else {
  alert('Correct.  I was born in Illinois');
}

//logs user respone in the console
console.log('User response to born in WI '+ homeTown);

//Repeat for questions 2-5.
var pets = prompt('I have a cat.  Please enter a "yes" or "no" response.').toUpperCase();
pets = pets.toUpperCase();

if (pets.toUpperCase() === 'YES' || pets.toUpperCase() === 'Y') {
  alert('Incorrect.  No pet at the momment, but pets have always been dogs.');
} else {
  alert('Correct.  No pet at the momment, but pets have always been dogs.');
}

console.log('User response to cat '+ pets);


var liveAbroad = prompt('I have lived abroad.  Please enter a "yes" or "no" response.').toUpperCase();
liveAbroad  = liveAbroad.toUpperCase();

if (liveAbroad.toUpperCase() === 'YES' || liveAbroad.toUpperCase() === 'Y') {
  alert('Correct.  I have lived in Dublin, Ireland and Paris, France.');
} else {
  alert('Incorrect.  I have lived in Dublin, Ireland and Paris, France.');
}

console.log('User response to live abroad '+ liveAbroad);


var skyDive = prompt('I have been skydiving.  Please enter a "yes" or "no" response.').toUpperCase();
skyDive = skyDive.toUpperCase();

if (skyDive.toUpperCase() === 'YES' || skyDive.toUpperCase() === 'Y') {
  alert('Incorrect.  Never gone skydiving but I have been paragliding.');
} else {
  alert('Incorrect.  Never gone skydiving but I have been paragliding.');
}

console.log('User response to skydiving is '+ skyDive);


var champion = prompt('I attended a NBA champoinship game.  Please enter a "yes" or "no" response.').toUpperCase();
champion = champion.toUpperCase();

if (champion.toUpperCase() === 'YES' || champion.toUpperCase() === 'Y') {
  alert('Correct.  I attended the 1996 NBA finals game when the Chicago Bulls beat the Seattle SuperSonics.');
} else {
  alert('Incorrect.  I attended the 1996 NBA finals game when the Chicago Bulls beat the Seattle SuperSonics.');
}


console.log('User response to champion is '+ champion);
}
question1();
function question7(){
//Question 7 prompting user to guess an item in the array.
var countryNotVisitedArray = ['norway', 'scotland', 'poland', 'finland', 'hungry', 'croatia'];
var countryGuess = prompt('Can you guess European countries I have NOT visited').toLowerCase();


for(var i = 0; i<5;  i++){
if(countryNotVisitedArray[i] === countryGuess) {
  alert('Correct!');
  break;
} else {
  alert('incorrect, try again');
  prompt('Can you guess European countries I have NOT visited').toLowerCase();
}
}
}
question2();