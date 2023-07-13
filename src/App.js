import './App.css';
import NavBar from './components/NavBar';
import HomePage from './views/HomePage';
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route path="*" element={<h1>404</h1>}/>
      </Routes> 
    </>
  );
}

export default App;
