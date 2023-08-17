import './App.css';
import React from 'react'
import { Route, Routes} from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import DetailDogs from './components/DetailDogs/DetailDogs'
import { CreateDog } from './components/CreateDog/CreateDog'

function App() {
  return (
    <div>
    <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dogs/:id" element={<DetailDogs />} />
          <Route path="/createDog" element={<CreateDog />} />
    </Routes>
    </div>
  );
}

export default App;
