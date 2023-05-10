import {useState} from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import About from './components/about/About';
import Posts from './components/posts/Posts';
import ProtectedRoute from './routes/ProtectedRoute';
import Products from './components/products/Products';
import ProductDetails from './components/productDetails/ProductDetails';
import AboutData from './components/aboutData/AboutData';
import Login from './pages/login/Login';
import NotFound from './pages/notFound/NotFound';
import DetailsFooter from './components/detailsFooter/DetailsFooter';

function App() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loginHandler = (success, path) => {
    if (success) {
      setIsLoggedIn(true);
      navigate(path ?? '/', {replace: true});
    }
  }

  // if (!isLoggedIn) {
  //   return <Login loginHandler={loginHandler} />
  // }

  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login loginHandler={loginHandler} path={'/'} />} />
        <Route path='about' element={<About />}>
          <Route path='data' element={<AboutData />} />
        </Route>
        {/* <Route path='/' element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
                 <Home />
            </ProtectedRoute>
         }/> */}
        <Route path='/posts' element={
          <ProtectedRoute isLoggedIn={isLoggedIn} loginHandler={loginHandler} path='/posts'>
            <Posts />
          </ProtectedRoute>
        }/>
        <Route path='/products' element={<Products />}/>
        <Route path='/footer' element={<DetailsFooter />} />
        <Route path='/products/product/:productId/:name' element={<ProductDetails />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
