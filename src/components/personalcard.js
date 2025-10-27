import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { HashLink as Link } from "react-router-hash-link";

function Personalcard() {
    return (
        <div className=" h-90 col-lg-10 col-xl-11 gap-3 col-md-9 rounded-5  border-grey  d-flex flex-column align-items-center justify-content-between    p-4 m-lg-0 m-1">
            <div className="w-100 d-flex justify-content-between align-items-center">
                <h1 className="text-light name col-xl-4 col-sm-3  ">Vijay</h1>
                <p className="text-light profession col-xl-4 col-4 col-sm-2 col-lg-5  text-end lh-1">Mern Stack Developer</p>
            </div>
            <div className="w-80 d-flex align-items-center justify-content-center">
                <img alt="" src="/vijay.jpg" className="img-fluid rounded-5" />
            </div>
            <h3 className="text-light text-center fw-light">vijayyt2003@gmail.com Based in India</h3>
            <p className=" text-grey">2025 Vijay. All Rights Reserved</p>
            <div className="d-flex gap-4 w-100 justify-content-center align-items-center">
                <a target="_blank" href="https://www.facebook.com/profile.php?id=100050356692272"> <FaFacebookF className=" icon-custom-btn fs-1 p-2 rounded-circle text-grey" /> </a>
                <a target="_blank" href="https://www.instagram.com/vijay_._000/" ><FaInstagram className=" icon-custom-btn  fs-1 p-2 rounded-circle  text-grey" /></a>
                <a target="_blank" href="https://www.linkedin.com/in/vijay-kumar-850813274?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "><FaLinkedinIn className=" icon-custom-btn  btn fs-1 p-2 rounded-circle text-grey" /></a>
            </div>
          <Link to={"#Contact"} className="text-decoration-none w-100" ><button className="btn  bg-green border-green  my-button rounded-half w-100 d-flex justify-content-center align-items-center gap-2 "> <MdOutlineMailOutline />HireMe</button></Link>  
        </div>
    )
}

export default Personalcard