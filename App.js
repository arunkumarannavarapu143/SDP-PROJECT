import React, { Component, useState } from 'react'
import{BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom'
import Home from './home'
import Contact from './Contact'
import modules from './modules'
import About from './About'

import './App.css'

function App(){
  return(
       <Router>
         <div className="menu"> 
           <ul>
           <li><Link to='/'>Home</Link></li>
           <li><Link to='/modules'>modules</Link></li>
           <li><Link to='/About'>About</Link></li>
           <li><Link to='/Contact'>Contact</Link></li>
           </ul>

         </div>
     <div >
     <Switch>
    <Route path ='/' exact component={Home}/>
    <Route path ='/modules' exact component={modules}/>
    <Route path ='/Contact' exact component={Contact}/>
    <Route path ='/About' exact component={About}/>
    </Switch>
    </div>
    
    </Router>
    
  );
}
export default App;