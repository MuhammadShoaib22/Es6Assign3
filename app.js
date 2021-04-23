console.log("its work  ok");

// 1- How to unique, sort an array in ascending order?
// const arr = [1,40,2,10,10,40,2,2,5,3,54,2,42,5,5,5]


// Array sort method use for sorting element one by one
const arr = [1,40,2,10,10,40,2,2,5,3,54,2,42,5,5,5];
console.log(arr.sort());

// 2- Print values using for loop in the following sequence
// 1
// 123
// 1234
// 12345

// For loop
let numbers= [1,123,1234,12345];
for(i=0; i<numbers.length; i++){
    console.log(numbers[i]);
}

// For loop with sum
let sumNumbers = [1,2,3,4,5];
let total = 0;
for (i=0; i<sumNumbers.length; i++){
     result = total+=parseInt(sumNumbers[i]);
}

console.log(result);

// 4- Find the third highest number in array using Set, sort and reverse
// const arr = [1,210,5,7,65,5,20,8,210,65];

// Reverse method reverse all values
let myarr = [1,210,5,7,65,5,20,8,210,65];
myarr.reverse();
console.log(myarr);

// Sort method sort all values
myarr.sort();
console.log(myarr);

// Set is used for uniq values
let myset = new Set();
console.log(myset);

let mysetArray = new Set([1,2,"Shoaib",{a:"a",b:"b"}]);
console.log('myset',mysetArray);

myset.add(10);
console.log(myset);

for (i of mysetArray){
    console.log(i);
}
