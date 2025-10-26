import { CiHome } from "react-icons/ci";
import { MdPerson } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import { FaNetworkWired } from "react-icons/fa";
import { RiShapesFill } from "react-icons/ri";
import { HashLink as Link } from "react-router-hash-link"
import { GrProjects } from "react-icons/gr";


function Verticalnavbar() {
    return (
        <div className="h-100  my-auto border border-secondary px-3 py-4 b d-flex justify-content-between flex-column rounded-half py-2" style={{ right: "20px" }}>
            <Link  to={"#"} ><CiHome className="text-grey fs-5 icon-custom-btn border-0 " /></Link>
            <Link to={"#About"}>  <MdPerson className="text-grey fs-5 icon-custom-btn border-0" /></Link>
            <Link to={"#Resume"}>  <PiSuitcaseSimpleBold className="text-grey fs-5 icon-custom-btn border-0" /></Link>
            <Link to={"#Services"}>  <FaNetworkWired className="text-grey fs-5 icon-custom-btn border-0" /></Link>
            <Link to={"#Skills"}>  <RiShapesFill className="text-grey fs-5 icon-custom-btn border-0" /></Link>
            <Link to={"#Projects"}>  <GrProjects className="text-grey fs-5 icon-custom-btn border-0" /></Link>
            <Link to={"#Contact"}>  <MdOutlineMailOutline className="text-grey fs-5 icon-custom- border-0" /></Link>
        </div>
    )
}
export default Verticalnavbar