//js_026_Number.js
let data = 10;
let fData = Number(data);
let nObj = new Number(data);
console.log(`data=${typeof data}`); //number
console.log(`fData=${typeof fData}`); //number
console.log(`nObj=${typeof nObj}`); //object

console.log(typeof nObj.toString()); //string
console.log(typeof data.toString()); //string

console.log(data + fData); // number + number = 20
console.log(data + nObj); //number + object = 20

//Number -> number
//object -> primitive
console.log(typeof nObj.valueOf()); // number
console.log(typeof new String (nObj.valueOf())); // string

let val = '10.3';
console.log(val+val); //10.310.3
console.log(parseInt(val)+parseInt(val)); //20
console.log(parseFloat(val)+parseFloat(val)); //20.6
//Number(), parsInt()