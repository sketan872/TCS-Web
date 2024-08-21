import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Menu from "./components/Menu/Menu";
import Navbar from './components/Navbar/Navbar';

import DevelopersPage from "./views/DevelopersPage";
import HomePage from './views/HomePage';

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import FormSection from "./components/Sections/FormSection";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const menuItems = [
    {
      label: "Home",
      path: "/"
    }, {
      label: "Instagram",
      path: "https://www.instagram.com/tcs_society/",
      lowPriority: true
    }, {
      label: "GitHub",
      path: "https://github.com/",
      lowPriority: true
    }, {
      label: "Developers",
      path: "/developer",
    }/*, {
      label: "Registration",
      path: "#register",
      type: "a",
    }*/
  ];

  return (
    <>
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      {showMenu &&
        <Menu
          items={menuItems}
          close={() => setShowMenu(false)}
          />
      }
      <Navbar
        items={menuItems}
        openMenu={() => setShowMenu(true)}
        />
      <main>
        <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          <Route exact path="/test" element={<HomePage/>}/>
          <Route path="*" element={<h1>404</h1>}/>
          <Route exact path="/Developer" element={<DevelopersPage/>}/>
          <Route exact path="/register" element={<FormSection/>}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
