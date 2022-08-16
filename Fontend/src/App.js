import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import AboutUs from './Pages/AboutUs/AboutUs';
import AllReviews from './Pages/AllReviews/AllReviews';
import ContactUs from './Pages/ContactUs/ContactUs';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Home from './Pages/Home/Home/Home';
import Loading from './Pages/Loading/Loading';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Register from './Pages/Login/Register/Register';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Products from './Pages/Products/Products';
import Footer from './Pages/Shared/Footer/Footer';
import ScrollToTop from './Pages/Shared/ScrollToTop/ScrollToTop';

function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000)
  }, [])


  return (
    <>
      {
        loading ? 
        <Loading></Loading>  
        :
        <AuthProvider>
        <Router>
        <ScrollToTop>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route path="/products">
              <Products />
            </Route>
            <PrivateRoute path="/productsDetails/:productId">
              <ProductDetails />
            </PrivateRoute>
            <Route path="/allReviews">
              <AllReviews />
            </Route>
            <Route path="/contact">
              <ContactUs />
            </Route>
            <Route path="/about">
              <AboutUs />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/*">
              <PageNotFound />
            </Route>
          </Switch>
          </ScrollToTop>
          <Footer />
        </Router>
      </AuthProvider>}
    </>
  );
}

export default App;
