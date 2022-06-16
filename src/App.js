import React, { Component } from 'react';
import Hamburger from './component/hamburger';
import { Routes , Navigate } from 'react-router-dom';
import Footer from './component/footer';
import LandingPage from './component/LandingPage';
import Products from './component/Products'
import { Route } from 'react-router-dom';
import DetailsPage from './component/DetailsPage';
import NotFound from './component/NotFound';
import AboutUs from './component/AboutUs';
import Sass from './component/Sass'
class App extends Component {
  state = {  } 
  render() { 
    return (
      <div >
        <Hamburger />
          <Routes>
            <Route path='/products' element={<Products />} />
            <Route path='/products/:id' element={<DetailsPage />} />
            <Route path='/notfound' element={<NotFound />} />
            <Route path='/*' element={<Navigate to='/notfound' />} />
            <Route path='/' element={<LandingPage />} />
            <Route path='/sass' element={<Sass />} />
            <Route path='/aboutus/*' element={< AboutUs/>} />

          </Routes>
        <Footer  />
      </div>
    );
  }
}
 
export default App;