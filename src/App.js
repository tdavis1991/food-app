import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import Search_page from './pages/Search_page';
import Landing_page from './pages/Landing_page';


const App = () => {
  return (
    <div className='App'>
      <Route exact path='/' component={Landing_page} />
      <Route path='/search' component={Search_page} />
    </div>
  )

}

export default App;
