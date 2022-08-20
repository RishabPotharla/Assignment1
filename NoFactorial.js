const prompt =require('prompt-sync')();
let n= prompt('Enter the no for factorial:')
let fact =1;
for(i=1;i<=n;i++){
 
 fact*=i;
}
console.log(fact)