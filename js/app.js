
//Prompt with the first question.  Takes user input, converts to upper case and sets variable.
var homeTown = prompt('I was born in the midwest.  Please enter a "yes" or "no" response.').toUpperCase();
homeTown = homeTown.toUpperCase();

//Shows approprate alert based on yes/no response.
if (homeTown.toUpperCase() === 'YES' || homeTown.toUpperCase() === 'Y') {
alert('Correct!  I was born in Illinois');
} else {
alert('Incorrect, I was born in Illinois');
}

//Repeast process with second quesiton.
var favHobby = prompt('My favorite hobby is photography.  Please enter a "yes" or "no" response.').toUpperCase();
favHobby = favHobby.toUpperCase();

if (favHobby.toUpperCase() === 'YES' || favHobby.toUpperCase() === 'Y') {
alert('Incorrect.  Travel is my favorite hobby but photography is a close second.');
} else {
alert('Correct.  Travel is my favorite hobby but photography is a close second.');
}

//Repeast process with third quesiton.
var liveAbroad = prompt('I have lived abroad.  Please enter a "yes" or "no" response.').toUpperCase();
liveAbroad  = liveAbroad.toUpperCase();

if (liveAbroad.toUpperCase() === 'YES' || liveAbroad.toUpperCase() === 'Y') {
alert('Correct!  I have lived in Ireland and France');
} else {
alert('Incorrect.  I have lived in Ireland and France.');
}

//Repeast process with fourth quesiton.
var favCity = prompt('My favorite city is Chicago.  Please enter a "yes" or "no" response.').toUpperCase();
favCity = favCity.toUpperCase();

if (favCity.toUpperCase() === 'YES' || favCity.toUpperCase() === 'Y') {
alert('Incorrect.  My favorite city is Paris, I lived in Chicago for most of my life.');
} else {
alert('Correct.  Paris is my favorite city, I lived in Chicago for most of my life');
}

//Repeast process with fifth quesiton.
var funFact = prompt('I have been paragliding.  Please enter a "yes" or "no" response.').toUpperCase();
funFact = funFact.toUpperCase();

if (funFact.toUpperCase() === 'YES' || funFact.toUpperCase() === 'Y') {
alert('Correct!  I have been paragliding twice.');
} else {
alert('Incorrect.  I have been paragliding twice.');
}

