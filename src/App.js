import Home from './pages/Home';
import NotFound from './pages/404';
import AllProductPage from './pages/AllProductPage';
import ProductDetails from './pages/ProductDetails';

import {BrowserRouter as Router ,Routes ,Route} from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/allproducts' element={<AllProductPage/>}></Route>
      <Route path='/special1' element={<ProductDetails/>}></Route>
      <Route path='/special2' element={<ProductDetails/>}></Route>

      <Route path='*' element={<NotFound/>}></Route>
    </Routes>
    </Router>
    </>
  );
}

export default App;
