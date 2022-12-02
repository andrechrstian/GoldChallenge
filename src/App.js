import React from 'react';
import LandingPage from './Page/LandingPage';
import SearchPage from './Page/SearchPage';
import {Routes, Route, Link} from 'react-router-dom';


const App = () => {
  return (
    <div> 
        <Routes>
                  <Route path='/' element={<LandingPage/>} />
                  <Route path='/searchPage' element={<SearchPage/>} />
        </Routes>
    
   
   
   
   </div>
  )
}

export default App

