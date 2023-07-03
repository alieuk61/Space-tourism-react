import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import MainContentHome from './components/Main-content-home';
import Destination from './components/Destination';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
     <Routes>
       <Route path="/Destination.jsx" element={<Destination />} />
      </Routes>

      <Header />
      <MainContentHome />
    </div>
  );
}

export default App;
