import React, { useState, useEffect } from "react"; 
import './footer.css';
import { FaLinkedin, FaGithub, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <section className="footer">
            <h1>Mahmadul Hasan</h1>
            <div className="footer-link">
                <a href="#about">About</a>
                <a href="#experience">Experience</a>
                <a href="#skills">Skills</a>
                <a href="#project">Projects</a>
                <a href="#reviews">Testimonial</a>
                <a href="#contact">Contact</a>
            </div>
            <div className="footer_socials">
                <a href='#' target='_blank'><FaLinkedin className="footer-icon" /></a>
                <a href='#' target='_blank'><FaGithub className="footer-icon" /></a>
                <a href='#' target='_blank'><FaTwitterSquare className="footer-icon" /></a>
            </div>
            {isVisible && (
                <button className="back-to-top" onClick={scrollToTop}>↑</button>
            )}
        </section>
    );
};

export default Footer;
