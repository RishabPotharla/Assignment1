
// Leap Year or Not


const prompt = require('prompt-sync' )();
let year= prompt('Enter the year to find out it is a Leap Year or Not:-')
if((year%4===0) && (year%100 !==0) && (year%400 ===0))
{
 let result =" It is a Leap Year"
 console.log(result)
}
else
{
 let result2="Its is Not a Leap Year"
 console.log(result2)
}
 