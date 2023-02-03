import logo from './logo.svg';
import './App.css';

import {findLongestWord} from './Ecmascript.js'
import {calculOccurence} from './Ecmascript.js'
import {calculNotes} from './Ecmascript.js'
import { push } from './Ecmascript.js';


function App() {

//declaration 

 let tableau =['eya','eyaa'];

 //question 1
 console.log(findLongestWord(tableau));


// declaration
const input = [
 ["a", "b", "c"],
 ["c", "d", "f"],
 ["d", "f", "g"],
];

// question 2
//console.log(calculOccurence(input));



let students = [{ name: 'John', id: 123, marks: 98 },
{ name: 'Baba', id: 101, marks: 23 },
{ name: 'John', id: 200, marks: 45 },
{ name: 'Wick', id: 115, marks: 75 },];

// question 3
//console.log(calculNotes(students));

  let tab=[{name :'eya' , fonction : "etudiant"},
  {name :'eya2' , fonction : "etudiant1"},
  {name :'eya3' , fonction :"etudiant2 "},];


  //question 4
  console.log(push(tab));




  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
     
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
     
    </div>
   
  );
}

export default App;
