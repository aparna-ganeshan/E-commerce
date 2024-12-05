import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Cart from './pages/cart';
import Header from './component/header';

function App() {
  return (
    <div>
      <Header/>
     <Routes>
     <Route exact path='/' element={<Home/>}/>
      <Route  path='/' element={<Cart/>}/>
     </Routes>
    </div>
  );
}

export default App;
