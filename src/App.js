import './App.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import Contador from './Components/Contador';
import ItemList from './Components/ItemList';

function App() {
  return (

    <div>
      <NavBar/>
      <ItemListContainer>
        <ItemList/>
      </ItemListContainer>
      
    </div>
  );
}

export default App;
