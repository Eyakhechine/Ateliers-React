import logo from './logo.svg';
import './App.css';

import {findLongestWord} from './Ecmascript.js'



function App() {

//declaration 

 let tab =['eya','eyaa'];

 //question 1
 console.log(findLongestWord(['eya','eyaa']));




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
