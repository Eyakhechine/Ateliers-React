
export const findLongestWord = (tab) => tab.reduce((accumulateur, valeurcourante) => accumulateur.length < valeurcourante.length ?console.log(`${valeurcourante} : ${valeurcourante.length}` ): console.log(`${accumulateur} : ${accumulateur.length}` ));

const input = [
 ["a", "b", "c"],
 ["c", "d", "f"],
 ["d", "f", "g"],
];
export const countArraysElements = (input) =>
input.flat().reduce((accumulator, currentValue) => {

 if (accumulator[currentValue]) {

 accumulator[currentValue] += 1;
 } else {
console.log(currentValue)
 accumulator[currentValue] = 1;
 }
 return accumulator;
 }, {});
