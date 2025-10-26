import { FaNetworkWired } from "react-icons/fa";
import { CgIfDesign } from "react-icons/cg";
import { FaCode } from "react-icons/fa";
import { SiGoogledisplayandvideo360 } from "react-icons/si";
import AOS from "aos"
import "aos/dist/aos.css";


function Services() {
    AOS.init({
        duration: 1000,
        once: false,
        mirror: true
    })
    return (
        <div id="Services" className="w-100 h-auto  d-flex flex-column gap-lg-5 gap-2">
            <div
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
                className="horiz-navbar d-flex justify-content-between align-items-center">
                <p className="text-light rounded-half border border-secondary fs-6 fw-light d-flex align-items-center gap-2 px-3 py-1">
                    <FaNetworkWired /> SERVICES
                </p>
            </div>

            <section className="d-flex flex-column gap-4">
                <h1
                    style={{ letterSpacing: "1px" }}
                    className="w-100 component-heading-text fw-light text-light"
                >
                    My <span className="text-green">Specializations</span>
                </h1>
                <div className="d-flex flex-column  gap-2 ">
                    <div
                        data-aos="fade-up"
                        data-aos-anchor-placement="85%"
                        className=" d-flex flex-column gap-3 rounded-4  service-div p-4 w-100">
                        <div className="w-100  ">
                            <h2 className="text-light m-0 fs-4 fw-light d-flex w-100 justify-content-between align-items-center">Website Design <CgIfDesign className="text-green fs-1" /> </h2>
                            <p className="text-grey font-size-p">I created digital products with unique ideas use Figma & Framer</p>
                        </div>
                        <p className="text-light font-size-p">15 Projects</p>
                    </div>
                    <div
                        data-aos="fade-up"
                        data-aos-anchor-placement="85%" className=" d-flex flex-column gap-3 rounded-4  service-div p-4 w-100">
                        <div className="w-100 ">
                            <h2 className="text-light m-0 fs-4 fw-light d-flex w-100 justify-content-between align-items-center">Website Development <FaCode className="text-green fs-1" /> </h2>
                            <p className="text-grey font-size-p">I build website go live with Framer, Webflow or WordPress</p>
                        </div>
                        <p className="text-light font-size-p">7 Projects</p>
                    </div>
                    <div
                        data-aos="fade-up"
                        data-aos-anchor-placement="85%" className=" d-flex flex-column gap-3 rounded-4  service-div p-4 w-100">
                        <div className="w-100  ">
                            <h2 className="text-light m-0 fs-4 fw-light d-flex w-100 justify-content-between align-items-center">Video Editing <SiGoogledisplayandvideo360 className="text-green fs-1" /> </h2>
                            <p className="text-grey font-size-p">I make Videos and Content Using Capcut.</p>
                        </div>
                        <p className="text-light font-size-p">13 Projects</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Services;
