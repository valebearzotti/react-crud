import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Fragment>
    <Routes>
      <Route exact path='/' element={<Home />}> 
      </Route>
    </Routes>
    </Fragment>
  </Router>,
  document.getElementById('root')
);