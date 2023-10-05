

import './App.css';
import React,{} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route,Routes, Switch } from 'react-router-dom';
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Product from "./Pages/Product"
import Cart from "./Pages/Cart"
import Singleproduct from "./Pages/Singleproduct"
import Errorpage from "./Pages/Errorpage"
import {GlobalStyle} from "./Gobalstyle"
import { ThemeProvider } from 'styled-components';

function App() {

  //creat one object for theme this theme we use in globalstyle fill style in bg color
  const theme={
    colors:{
      bg:"#1021"
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <Router >
        <GlobalStyle/>   {/* use css as componet using style-compont libariy */}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/singleproduct/:id" element={<Singleproduct/>}/>
          <Route path="/errorpage" element={<Errorpage/>}/>
        </Routes>
      </Router>
      </ThemeProvider>
  
  );
}

export default App;
