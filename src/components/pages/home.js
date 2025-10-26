import { CiHome } from "react-icons/ci";
import { IoArrowDown } from "react-icons/io5";
import { HashLink as Link } from "react-router-hash-link";

function Home() {
    return (
        <div id="" className="w-100 py-3 h-auto  py-lg-5 d-flex gap-xl-5 align-items-center justify-content-center flex-column    ">
            <div className="horiz-navbar d-flex justify-content-between w-100 align-items-center">
                <p className=" text-light rounded-half border border-secondary  fw-light d-flex align-items-center justify-content-center fs-6 gap-2 px-3 py-1"><CiHome />INTRODUCE</p>
            </div>
            <h1 className=" w-100 xtrabig-heading-text text-light  fw-light lh-1">Say Hi from <span className="text-green">Vijay</span>, Webflow Designer and Developer</h1>
            <p className=" w-100 text-grey w-50">I design and code beautifully simple things and i love what i do. Just simple like that!</p>
            <div className="col-lg-10 col-12 my-3  d-flex justify-content-end align-items-center">
                <Link  to={"#Projects"} className=" my-project-rotate-img  border rounded-circle text-light border-secondary position-relative d-flex justify-content-center align-items-center " >
                   <img  alt="project-rotate-img" className="myproject-rotate h-90 w-90" src="https://wpriverthemes.com/drake/wp-content/uploads/2023/03/round-text.png "/>
                    <IoArrowDown  className="position-absolute fs-1 IoArrowDown "/>
                </Link>
            </div>
        </div>
    )
}

export default Home