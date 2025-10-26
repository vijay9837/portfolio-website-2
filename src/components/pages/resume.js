import { PiSuitcaseSimpleBold } from "react-icons/pi";
import { GoDotFill } from "react-icons/go";
import AOS from 'aos'
import 'aos/dist/aos.css'

function Resume() {


    AOS.init({
        duration: 1000,
        one: false,
        mirror: true
    })
    return (
        <div id="Resume" className="w-100 min-vh-100 py-lg-5 py-3 gap-4 d-flex flex-column  ">
            <div
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
                 className="horiz-navbar d-flex justify-content-between align-items-center">
                <p className="text-light rounded-half border border-secondary fs-6 fw-light d-flex align-items-center gap-2 px-3 py-1"><PiSuitcaseSimpleBold />Resume</p>
            </div>
            <section className="d-flex flex-column position-relative  ">
                <h1
                    data-aos="fade-up"
                    data-aos-anchor-placement="70%" style={{ letterSpacing: "2px" }} className="text-light fs-about-h1-text fw-light ">
                    Education & <span className="text-green">Experience</span>
                </h1>
                <div className="py-4">
                    <div
                        data-aos="fade-left"
                        data-aos-anchor-placement="80%"
                        className="border-start border-secondary fw-light  px-5   position-relative hover-green ">
                        <div className="text-grey d-flex flex-column gap-4 px-4 hover-green ">
                            <div className="">
                                <GoDotFill style={{ left: "-2%", top: "-5%" }} className="position-absolute fs-3 " />
                                <h2 className=" fs-6">2025 - Present</h2>
                            </div>
                            <div>
                                <h2 style={{ letterSpacing: "1px" }} className=" fw-light text-light fs-4">Master Of Computer Application</h2>
                                <p className="font-size-p fw-normal text-grey">AKTU, Lucknow.</p>
                            </div>
                        </div>
                    </div>
                    <div
                        data-aos="fade-left"
                        data-aos-anchor-placement="80%" className="border-start border-secondary fw-light  px-5 pt-5  position-relative ">
                        <div className="text-grey d-flex flex-column gap-4 px-4 hover-green ">
                            <div className="">
                                <GoDotFill style={{ left: "-2%", top: "23%" }} className="position-absolute fs-3 " />
                                <h2 className="font-size-p ">2021 - 2024</h2>
                            </div>
                            <div>
                                <h2 style={{ letterSpacing: "1px" }} className=" fw-light text-light fs-4">Bachelor Of Computer Application</h2>
                                <p className="font-size-p fw-normal text-grey ">Maa Shakumbhari Universty (MSU), Saharanpur.</p>
                            </div>
                        </div>
                    </div>
                    <div
                        data-aos="fade-left"
                        data-aos-anchor-placement="80%" className="border-start border-secondary fw-light  px-5 pt-5 position-relative ">
                        <div className="text-grey d-flex flex-column gap-4 px-4  hover-green">
                            <div className="">
                                <GoDotFill style={{ left: "-2%", top: "23%" }} className="position-absolute fs-3 " />
                                <h2 className=" font-size-p  ">Apr-2025 - Aug-2025</h2>
                            </div>

                            <div>
                                <h2 style={{ letterSpacing: "1px" }} className=" fw-light text-light fs-4">Backend Web Development Course</h2>
                                <p className="font-size-p fw-normal  text-grey">SilverWink Institute, Muzaffarnagar, U.P.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Resume