import React from 'react';
import './App.css';
import Home from './components/Home/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './components/NoMatch/NoMatch';
import PostDetail from './components/PostDetail/PostDetail';




function App() {
  return (
    <Router>
       <Switch>
         <Route path='/home'>
           <Home></Home>
         </Route>
         <Route path='/Post/:postId'>
           <PostDetail/>
         </Route>
         <Route exact path='/'>
           <Home/>
         </Route>
         <Route path='*'>
           <NoMatch/>
         </Route>
       </Switch>
    </Router>
    
    
    
  );
}

export default App;
