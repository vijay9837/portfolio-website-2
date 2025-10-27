import { CiHome } from "react-icons/ci";
import { MdPerson } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import { FaNetworkWired } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { RiShapesFill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { GrProjects } from "react-icons/gr";
import { HashLink as Link } from "react-router-hash-link"

function Sidenavbar({ toggleSidenav }) {
    
    return (
        <div style={{transition:"all .3s linear"}} className="w-100 h-100 bg-black  d-flex flex-column justify-content-center align-items-center">
            <div className="w-50 h-75 d-flex flex-column gap-5  ">
                <div className="d-flex align-items-center justify-content-between w-100">
                    <h2 className="text-grey fs-5  ">Menu</h2>
                    <RxCross2 className="text-grey menubar-btn rounded-circle text-light " onClick={toggleSidenav} />
                </div>
                <div className="d-flex flex-column gap-3 ">
                    <Link to={"#"} onClick={toggleSidenav} className="text-decoration-none text-grey d-flex align-items-center gap-3 nav-link-custom " > <CiHome className="text-grey fs-5 " />Home</Link>
                    <Link to={"#About"} onClick={toggleSidenav} className="text-decoration-none text-grey d-flex align-items-center gap-3 nav-link-custom" >   <MdPerson className="text-grey fs-5 " />About</Link>
                    <Link to={"#Resume"} onClick={toggleSidenav} className="text-decoration-none text-grey d-flex align-items-center gap-3 nav-link-custom" >  <PiSuitcaseSimpleBold className="text-grey fs-5 " />Resume</Link>
                    <Link to={"#Services"} onClick={toggleSidenav} className="text-decoration-none text-grey d-flex align-items-center gap-3 nav-link-custom" >  <FaNetworkWired className="text-grey fs-5 " />Services</Link>
                    <Link to={"#Skills"} onClick={toggleSidenav} className="text-decoration-none text-grey d-flex align-items-center gap-3 nav-link-custom" >  <RiShapesFill className="text-grey fs-5 " />Skills</Link>
                    <Link to={"#Projects"} onClick={toggleSidenav} className="text-decoration-none text-grey d-flex align-items-center gap-3 nav-link-custom" >  <GrProjects className="text-grey fs-5 " />Projects</Link>
                    <Link to={"#Contact"} onClick={toggleSidenav} className="text-decoration-none text-grey d-flex align-items-center gap-3 nav-link-custom" >  <MdOutlineMailOutline className="text-grey fs-5 " />Contact</Link>
                </div>
                <div className="d-flex gap-3 flex-column">
                    <h2 className="text-grey fs-5 ">Social</h2>
                    <div className="d-flex= w-100  align-items-center">
                        <a onClick={toggleSidenav} target="_blank" href="https://www.facebook.com/profile.php?id=100050356692272"> <FaFacebookF className="hover-green fs-1 p-2  text-grey" /></a>
                        <a onClick={toggleSidenav} target="_blank" href="https://www.instagram.com/vijay_._000/" ><FaInstagram className=" hover-green  fs-1 p-2   text-grey" /></a>
                        <a onClick={toggleSidenav} target="_blank" href="https://www.linkedin.com/in/vijay-kumar-850813274?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "><FaLinkedinIn className=" hover-green   fs-1 p-2  text-grey" /></a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Sidenavbar