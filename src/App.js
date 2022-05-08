import './App.css';
import Menu from './componentes/Menu';
import ItemListContainer from './componentes/ItemListContainer';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import ItemDetailContainer from './componentes/ItemDetailContainer';
import { CartContexProvider } from './context/cartContext';


function App() {
  
  return (
    <div>
      <CartContexProvider >

        <BrowserRouter className="App">

          <Menu/>
          <Routes>
            <Route exact path="/" element={<ItemListContainer/>}/>
            <Route exact path="/categoria/:idCategoria" element={<ItemListContainer/>}/>
            <Route exact path="/detalle" element={<ItemDetailContainer/>}/>
            <Route exact path="/detalle/:idDetalle" element={<ItemDetailContainer/>}/>


          </Routes>

        
        </BrowserRouter>
      </CartContexProvider>



    </div>
    
    
    
  );
}

export default App;





