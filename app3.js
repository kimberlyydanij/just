const age = parseInt(prompt('how old are you?'));

if (isNaN(age)) {
  console.log('please write a number');
} else console.log('thank you for writing your age');
