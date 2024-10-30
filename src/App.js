
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/man' element={<shopcategory category="Men"/>}></Route>
        <Route path='/woman' element={<shopcategory category="Women"/>}></Route>
        <Route path='/teens' element={<shopcategory category="Teens"/>}></Route>
        <Route path='/product' element={<product/>}></Route>
          <Route path=':productId' element={<product/>}></Route>
        <Route path='/cart' element={<cart/>}/>
        <Route path='/login' element={<loginsignup/>}/>
      </Routes>


      </BrowserRouter>
    </div>
  );
}

export default App;
