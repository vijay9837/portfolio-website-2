import { MdOutlineMailOutline } from "react-icons/md";
import AOS from 'aos'
import "aos/dist/aos.css";
import emailjs from '@emailjs/browser'
import { useRef, useState } from "react";
import Emailsent from "../Alerts/emailsent";

function Contact() {
    let [emailsent, setEmailsent] = useState(false)
  
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        setEmailsent(true)
        setTimeout(() => {
            setEmailsent(false)
        }, 1500);
        emailjs
            .sendForm('service_w45zfl5', 'template_t6cnplp', form.current, {
                publicKey: 'evj6ZbRYrnbBzY5nG',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    AOS.init({
        duration: 1000,
        once: false,
        mirror: true

    });

    return (
        <div id="Contact" className="w-100 h-auto   d-flex gap-lg-5 gap-2 flex-column py-lg-5 py-3  position-relative">
            <div data-aos="fade-up "
                data-aos-anchor-placement="bottom-bottom" className="horiz-navbar position-relative d-flex justify-content-between align-items-center">
                <p className="text-light rounded-half border border-secondary fs-6 fw-light d-flex align-items-center gap-2 px-3 py-1"><MdOutlineMailOutline />CONTACT</p>
                {emailsent ? <Emailsent /> : ""}

            </div>
            <section className="d-flex flex-column gap-lg-4 gap-2 w-100 ">
                <h1
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom" className="text-light fw-light w-100 component-heading-text">Let's Work <span className="text-green">Together!</span> </h1>
                <h2
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                    className="text-light fw-light fs-4"
                >
                    vijayyt2003@gmail.com
                </h2>

                <form ref={form} onSubmit={sendEmail} className="d-flex flex-row flex-wrap gap-4 w-100">
                    <div className="d-flex flex-column col-5 mb-2 contact-input-text">
                        <label className="text-light ">
                            Full Name <span className="text-danger ">*</span>
                        </label>
                        <input
                            name="username"
                            className="bg-transparent border-0  text-light py-2 outline-0"
                            placeholder="Your Full Name"
                            type="text"
                            required
                        />
                    </div>
                    <div className="d-flex flex-column w-45  mb-2 contact-input-text">
                        <label className="text-light">
                            Email Address <span className="text-danger">*</span>
                        </label>
                        <input
                            name="useremail"
                            className="bg-transparent border-0  text-light py-2 outline-0"
                            placeholder="Your Email"
                            type="email"
                            required
                        />
                    </div>
                    <div className="d-flex flex-column w-45  mb-2 contact-input-text">
                        <label className="text-light">
                            Phone Number <span className="text-danger">*</span>
                        </label>
                        <input
                            name="userphoneno"
                            className="bg-transparent border-0  text-light py-2 outline-0"
                            placeholder="Your Phone"
                            type="number"
                            required
                        />
                    </div>
                    <div className="d-flex flex-column w-100  mb-2 contact-input-text">
                        <label className="text-light">
                            Message
                        </label>
                        <textarea
                            name="usermessage"
                            className="bg-transparent border-0  text-light py-2 outline-0"
                            placeholder="Your Message"
                            rows="3"
                        />
                    </div>

                    <div className="w-100">
                        <button  className="btn  bg-green border-green  py-2 my-button rounded-half col-6 contact-send-btn ">Send Messages</button>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default Contact