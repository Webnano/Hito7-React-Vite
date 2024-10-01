
import Footer from './components/Footer'; 
import Home from './views/Home'; 
import NotFound from './views/NotFound'; 
import Navbar from './components/Navbar'; 
import Cart from './views/Cart'; 
import Register from './views/Register'; 
import Loggin from './views/Loggin'; 
import Profile from './views/Profile';
import Logout from './views/Logout'; 
import Pizza from './views/Pizza';
import { BrowserRouter, Route, Routes, } from 'react-router-dom'; 
import { CartProvider } from './context/CartContext';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

function App() { 
  const { token } = useContext(AuthContext) ;
  return ( 
    <> 
       <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Loggin" element={<Loggin />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/pizza/:id" element={<Pizza />} />
            <Route path="/Profile" element={token ? <Profile /> : <Loggin />}  />
            <Route path="/Logout" element={<Logout />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
      <Footer /> 
    </> 
  ); 
}

export default App;