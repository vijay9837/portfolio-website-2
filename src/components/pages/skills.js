import { useEffect } from "react";
import { RiShapesFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import AOS from "aos";
import "aos/dist/aos.css";

function Skills() {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
    });

  return (
    <div id="Skills" className="w-100 h-auto d-flex align-items-center justify-content-center gap-3 flex-column py-4">
      <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" className="w-100 horiz-navbar d-flex justify-content-between align-items-center">
        <p className="text-light rounded-half border border-secondary fs-6 fw-light d-flex align-items-center gap-2 px-3 py-1">
          <RiShapesFill /> Skills
        </p>
      </div>

      <section className="d-flex gap-3 flex-column w-100 align-items-center justify-content-center">
        <h1  className="text-light w-100 component-heading-text fw-light " data-aos="fade-up">
          My <span className="text-green">Advantages</span>
        </h1>

        <div className="d-flex flex-wrap gap-4 align-items-center">
          <div  data-aos="fade-right" className="skills-tabs ">
            <IoLogoJavascript className="fs-about-h1-text my-4 text-yellow" />
          </div>

          <div  data-aos="fade-down" className="skills-tabs ">
            <FaReact className="fs-about-h1-text my-4 text-skyblue" />
          </div>

          <div  data-aos="zoom-in" className="skills-tabs ">
            <SiMongodb className="fs-about-h1-text my-4 text-darkgreen" />
          </div>

          <div  data-aos="zoom-in-left" className="skills-tabs ">
            <IoLogoNodejs className="fs-about-h1-text my-4 text-nodejs" />
          </div>

          <div  data-aos="zoom-in-right" className="skills-tabs ">
            <RiTailwindCssFill className="fs-about-h1-text my-4 text-tailwind" />
          </div>

          <div  data-aos="fade-up" className="skills-tabs ">
            <SiExpress className="fs-about-h1-text my-4 text-express" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
