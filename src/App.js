import logo from './logo.svg';
import './App.css';
import Saludo from './Components/Saludos';
import ConHijos from './Components/ConHijos';
import NavBar from './Components/NavBar';

function App() {
  return (
    /*<div className="App">
      <ConHijos>
        <Saludo name="Marcelo" age="35"/>
      </ConHijos>
      <h1 style={{color:"red"}}>Hola Mundo</h1>

      <Saludo name="Juan" age="32"/>
    </div>*/
    <div>
      <NavBar/>
    </div>
  );
}

export default App;
