import imagen from '../src/imagenes/dreanNEXT.jpg'
import './App.css';
import ProductoDetalle from './components/ProductoDetalle';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={imagen}  alt='Lavarropa Dream'/> 
         <ProductoDetalle />
      </header>
    </div>
  );
}

export default App;
