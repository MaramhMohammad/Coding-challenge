//Create a program that takes 5 numeric values from user input and alerts back the minimum and maximum of the 5 provided numbers. 

const arr = [1, 2 , 3 , 4 , 5];
let input1 = prompt('first, pick a number between 1 and 5');

let input2 = prompt('second , pick a number between 1 and 5');
let input3 = prompt('third ,pick a number between 1 and 5');
let input4 = prompt('four ,pick a number between 1 and 5');
let input5 = prompt('five , a number between 1 and 5');

alert('min number is'+ Math.min(input1,input2, input3,input4, input5 ));
alert('and max number is'+ Math.max(input1,input2, input3,input4, input5 ));

