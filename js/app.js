
//Prompt with the first question.  Takes user input, converts to upper case and sets variable.
var homeTown = prompt('I was born in the midwest.  Please enter "yes" or "no"').toUpperCase();
homeTown = homeTown.toUpperCase();

if(homeTown.toUpperCase() === 'YES') {
alert('That is correct!');
} else {
alert('Incorrect, I was born in Illinois');
}