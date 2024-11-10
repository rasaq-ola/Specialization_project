
import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop';
import Shopcategory from './Pages/Shopcategory';
import Product from'./Pages/Product';
import Cart from './Pages/Cart'
import Loginsignup from './Pages/Loginsignup'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Alldata from './Components/Assets/Datalog/Alldata';

const menbanner = Alldata.find(item => item.id === 14).image;
const womenbanner = Alldata.find(item => item.id === 15).image;
const kidbanner = Alldata.find(item => item.id === 13).image;

console.log("Men Banner:", menbanner); // Check if the path is correct
console.log("Women Banner:", womenbanner); // Check if the path is correct
console.log("Kid Banner:", kidbanner); // Check if the path is correct

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/men' element={<Shopcategory banner={menbanner} category="Men"/>}></Route>
        <Route path='/women' element={<Shopcategory banner={womenbanner} category="Women"/>}></Route>
        <Route path='/teens' element={<Shopcategory banner={kidbanner} category="Teens"/>}></Route>
        <Route path='/product' element={<Product/>}></Route>
          <Route path=':productId' element={<Product/>}></Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Loginsignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
