
// ques1
export const findLongestWord = (tab) => tab.reduce((accumulateur, valeurcourante) => accumulateur.length < valeurcourante.length ?console.log(`${valeurcourante} : ${valeurcourante.length}` ): console.log(`${accumulateur} : ${accumulateur.length}` ));


//ques2
export const calculOccurence = (input) =>
input.flat().reduce((accumulator, currentValue) => {

 if (accumulator[currentValue]) {

 accumulator[currentValue] += 1;
 } else {
console.log(currentValue)
 accumulator[currentValue] = 1;
 }
 return accumulator;
 }, {});
 
//ques3

 export const calculNotes = (students) =>
 students.map((stu) => {
  if (stu.marks < 50) {
  stu.marks += 15;
  }

 return stu;
 }).filter(stu => stu.marks > 50).reduce((acc, curr) => acc + 
curr.marks, 0);

// ques4

export const push=(tab) =>{
    var ID =0;
 tab.push({name :'eya3' , fonction : "etudiant3"});
 return tab.map((obj)=>({
    ...obj,ID:ID++
 }))
};