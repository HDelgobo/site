import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Componente/PrimeiroComponente';
import Entrar from './Componente/SegundoComponente';
import ODC from './Componente/TerceiroComponente';
import CA from './Componente/QuartoComponente';
import CJ from './Componente/QuintoComponente';
import Pagamento from './Componente/SextoComponente';
import Noticia from './Componente/SetimoComponente';
import Perfil from './Componente/OitavoComponente';
import NE from './Componente/NonoComponente';


function App() {
  return (
    <>
    <Routes>
      <Route path = '/' element = {<Login/>} />
      <Route path = '/segundo' element = {<Entrar/>} />
      <Route path = '/terceiro' element = {<ODC/>} />
      <Route path = '/quarto' element = {<CA/>} />
      <Route path = '/quinto' element = {<CJ/>} />
      <Route path = '/sexto' element = {<Pagamento/>} />
      <Route path = '/setimo' element = {<Noticia/>} />
      <Route path = '/oitavo' element = {<Perfil/>} />
      <Route path = '/nono' element = {<NE/>} />

    </Routes>
    </>
  );
}

export default App;
