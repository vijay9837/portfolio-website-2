import './App.css';
import Mainsection from './components/mainsection';
import Personalcard from './components/personalcard';
import Sidenavbar from './components/sidenavbar';
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AOS from 'aos';
import "aos/dist/aos.css";

function App() {
  const [isToggle, setIsToggle] = useState(false);

  const toggleSidenav = () => setIsToggle(prev => !prev);

  return (
    <BrowserRouter>
      <div className="App d-flex gap-5 py-3 py-lg-0 flex-column position-relative w-100 col-12 mx-auto  row  ">

        <div
          className="personalcard-div   col-lg-4 col-xl-3 col-sm-12  h-100  m-0 p-0 d-flex align-items-center justify-content-center" >
          <Personalcard />
        </div>

        <div className="main-content col-xl-8 col-lg-10   row  ms-lg-auto ms-lg-0 mx-xl-auto ms-0 " >
          <Mainsection toggleSidenav={toggleSidenav} />
        </div>

        <div className={`sidenavbar-container ${isToggle ? "active" : ""}`}>
          <Sidenavbar toggleSidenav={toggleSidenav} />
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
