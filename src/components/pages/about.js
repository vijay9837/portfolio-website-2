import { MdPerson } from "react-icons/md";
import AOS from 'aos'
import 'aos/dist/aos.css'

function About() {

    AOS.init({
        duration: 1000,
        once: false,
        mirror: true
    })
    return (
        <div id="About" className="w-100 h-auto py-lg-5 py-2 d-flex flex-column gap-lg-5 gap-2  ">
            <div 
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
                className="  horiz-navbar d-flex justify-content-between align-items-center">
                <p className="  text-light rounded-half border border-secondary fs-6 fw-light d-flex align-items-center gap-2 px-3 py-1"><MdPerson />ABOUT</p>
            </div>
            <section className="d-flex gap-lg-4 gap-2 flex-column" >
                <h1 data-aos="fade-up "
                    data-aos-anchor-placement="bottom-bottom"
                    data-aos-duration="200"
                     className="w-100 component-heading-text text-light  fw-light    ">
                    Every great design begin with
                    an even <span className="text-green">better story</span>
                </h1>
                <p data-aos="fade-up"
                    data-aos-duration="200"
                    data-aos-anchor-placement="80%" className=" w-100 text-grey w-75 about-section-p">
                    Since beginning my journey as a freelance designer nearly 8 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chopsone design problem at a time.
                </p>
            </section>
        </div>
    )
}

export default About