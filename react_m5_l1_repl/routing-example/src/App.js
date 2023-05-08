import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Posts from './components/posts/Posts';
import Products from './components/products/Products';
import ProductDetails from './components/productDetails/ProductDetails';
import AboutData from './components/aboutData/AboutData';
import NotFound from './pages/notFound/NotFound';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />}>
          <Route path='data' element={<AboutData />} />
        </Route>
        <Route path='/posts' element={<Posts />} />
        <Route path='/products' element={<Products />}/>
        <Route path='/products/product/:productId/:name' element={<ProductDetails />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
