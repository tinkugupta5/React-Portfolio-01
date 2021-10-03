import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';



const App = () => {
    return (
        <div>
            <BrowserRouter>
            <Route path='/' component={Home} /> 
            <Route path='/about' component={About} />
            <Route path='/projects' component={Projects} />
            <Route path='/skills' component={Skills} />
            <Route path='/contacts' component={Contact} />         
            </BrowserRouter>
        </div>        
    );
};

export default App;