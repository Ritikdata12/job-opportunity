import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css'
import Header from './components/Header';
import Jpbapi from './components/Jpbapi';
import Details from './components/Details';
import Imagegallery from './Imagegallary';

function App() {
  const [count, setCount] = useState(0)

  return (

    <>
      <Router>
        <Routes>
          <Route path='/' element={<Header/>}/>
          <Route path='/job' element={<Jpbapi/>}/>
          <Route path='/details/:id' element={<Details/>}/>
          <Route path='/Imagegallary' element={<Imagegallery/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
