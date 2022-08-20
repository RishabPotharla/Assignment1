
// Convert Calsius scale to Fahrenheit scale


const prompt = require('prompt-sync')();
let Calsius = prompt('Enter the temparature in Calsius:-')
let Fahrenheit = (9*Calsius/5) + 32 
console.log(Fahrenheit)