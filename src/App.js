import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Product from './components/Product';
import ProductDetail from './pages/ProductDetail';
import BrandDetail from './pages/BrandDetail';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/products' element={<Product />} />
        <Route exact path='/products/:id' element={<ProductDetail />} />
        <Route exact path='/brand/:id"' element={<BrandDetail />} />

      </Routes>
    </div>
  );
}

export default App;
