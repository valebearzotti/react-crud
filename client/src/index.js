import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Fragment>
      <Routes>
        <Route exact path='/' element={<Home />} /> 
        <Route exact path='/login' element={<Login />} /> 
        <Route exact path='/signup' element={<SignUp />} /> 
      </Routes>
    </Fragment>
  </Router>,
  document.getElementById('root')
);