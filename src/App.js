import './App.css';
import Navbar from './components/Navbar/Navbar';
import HomePage from './views/HomePage';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar/>
      <main>
        <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          <Route exact path="/test" element={<HomePage/>}/>
          <Route path="*" element={<h1>404</h1>}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
