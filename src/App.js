import './App.css';
import Navbar from './components/Navbar/Navbar';
import HomePage from './views/HomePage';
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route exact path="/test" element={<HomePage/>}/>
        <Route path="*" element={<h1>404</h1>}/>
      </Routes> 
    </>
  );
}

export default App;
