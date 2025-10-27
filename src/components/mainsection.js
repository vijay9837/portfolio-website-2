import Verticalnavbar from "./verticallnavbar";
import { TbMenu } from "react-icons/tb";
import Home from "./pages/home";
import About from "./pages/about";
import Resume from "./pages/resume";
import Services from "./pages/services";
import Skills from "./pages/skills";
import Contact from "./pages/contact";

function Mainsection({ toggleSidenav }) {

    return (

        <div className="flex-column d-flex gap-lg-5 gap-2  col-lg-8 col-12 col-xl-9 mx-lg-auto mx-xl-0  ms-xl-auto ms-0 ">
            <TbMenu  className=" menubar-btn tbmenu position-absolute  rounded-circle  text-light" onClick={toggleSidenav} />
            <Home />
            <About />
            <Resume />
            <Services />
            <Skills />
            <Contact />
            <div className=" h-50 position-fixed d-none d-lg-block" style={{ top: "25%", right: "5%" }}>
                <Verticalnavbar />
            </div>

        </div>
    )
}

export default Mainsection