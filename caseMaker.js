
// this solution will capitalize every first letter of the element in the array
const camelCase = (str) => {
  return str.split(' ').map(word => {
    return word[0].toUpperCase() + word.slice(1)
  }).join('')
}

const lowerFirst = (str) => {
  return str[0].toLowerCase() + str.slice(1)
}

console.log(lowerFirst(camelCase("this is a string")))
console.log(lowerFirst(camelCase("loopy lighthouse")))
console.log(lowerFirst(camelCase("supercalifragalisticexpialidocious")))


// let camelCase = function(input) {
//   var length = input.length;
//   var output = '';
//   if(input[0].toLowerCase()) {
//     output += input[0].toLowerCase();
//   } else {
//     output += input[0];
//   }
//   for(i = 1; i < length; i++) {
//     if(input[i - 1] === ' ') {// if precedding char is a space…
//       output = output.slice(0, -1);// remove said space
//       output += input[i].toUpperCase();// add next letter as capital
//     } else {
//     output += input[i];// otherwise just and next letter
//     }
//   }
//   return output;
// }
