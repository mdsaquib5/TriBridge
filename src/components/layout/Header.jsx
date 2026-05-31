"use client"
import { useState, useEffect } from "react";
import { TfiFacebook } from "react-icons/tfi";
import { FiInstagram } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";
import Nav from "../shared/Nav";
import Logo from "../shared/Logo";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header>
            <div className="header-container">
                <div className="header-top">
                    <div className="available">
                        <p>Leading Manpower & Recruitment Consultants in India. We are available at : <span>09:30 AM - 10:00 PM</span></p>
                    </div>
                    <div className="short-details">
                        <div className="info">
                            <Link href={'tel:+919090909090'}><FiPhone />+91 9090909090</Link>
                        </div>
                        <div className="info">
                            <Link href={'mailto:info@gmail.com'}><FiMail />info@gmail.com</Link>
                        </div>
                        <div className="social-media">
                            <Link href={'/'}><TfiFacebook /></Link>
                            <Link href={'/'}><FiInstagram /></Link>
                            <Link href={'/'}><FiLinkedin /></Link>
                        </div>
                    </div>
                </div>
                <div className={`main-header ${isScrolled ? "scrollto" : ""}`}>
                    <div className="header-menu">
                        <Nav />
                    </div>
                    <div className="logo">
                        <Logo />
                    </div>
                    <div className="cta-btn">
                        <Link href={'/'} className="btn header-btn">Hire Talent <span><GoArrowUpRight /></span></Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;