import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import MainContentHome from './components/Main-content-home';
import Destination from './components/Destinations/Destination';
import Crew from './components/Crewmen/Crew'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <div className="App">
    <Header />
     <Routes>
       <Route path="/" element={<MainContentHome/>} />
       <Route path="/Destination" element={<Destination />} />
       <Route path="/Crew" element={<Crew />} />
      </Routes>

    </div>
  );
}

export default App;
