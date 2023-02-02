import logo from './logo.svg';
import './App.css';



const num =90;
const person ={

  nom:"eya",
  prenom:"khechine",}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p> {num}</p>
        <p> {nom} {prenom}</p>
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
