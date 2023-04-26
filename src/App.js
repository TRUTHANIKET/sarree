import Home from './pages/Home';
import NotFound from './pages/404';
import AllProductPage from './pages/AllProductPage';
import ProductDetails from './pages/ProductDetails';

import {BrowserRouter as Router ,Routes ,Route} from 'react-router-dom'
import Contact from './pages/Contact';
import Lengha from './pages/Lengha';
import All from './pages/All';
import About from './pages/About';
import Acchu from './pages/Acchu'
import Khambat from './pages/Khambat'
function App() {
  return (
    <>
    <Router>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/saaree' element={<AllProductPage/>}></Route>
      <Route path='/lengha' element={<Lengha/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/all' element={<All/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/acchupatola' element={<Acchu/>}></Route>
      <Route path='/khambatpatola' element={<Khambat/>}></Route>
      <Route path='/special2' element={<ProductDetails/>}></Route>

      <Route path='*' element={<NotFound/>}></Route>
    </Routes>
    </Router>
    </>
  );
}

export default App;
