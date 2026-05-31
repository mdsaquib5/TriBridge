import { RiLightbulbLine } from "react-icons/ri";
import { LuScanEye } from "react-icons/lu";
import { MdFingerprint } from "react-icons/md";
import { FiAward } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

const About = () => {
    return (
        <section>
            <div className="container">
                <div className="about-container">
                    <div className="about-content">
                        <div className="sub-title">About us</div>
                        <div className="main-title">Expert Indian Manpower For Gulf Jobs, Based In Muzaffarpur</div>
                        <p>TriBridge is India's premier international recruitment consultant, supplying skilled engineers and reliable Indian labour to the UAE, Saudi Arabia, Kuwait, and Qatar.</p>
                        <div className="text-stats">
                            <div className="marks-container">
                                <div className="marks">
                                    <div className="icon-bg">
                                        <RiLightbulbLine />
                                    </div>
                                    <div className="mark-texts">
                                        <div>Top-Tier Indian Labour</div>
                                        <p>Supplying reliable and hardworking manpower for major overseas infrastructure projects.</p>
                                    </div>
                                </div>
                                <div className="marks">
                                    <div className="icon-bg">
                                        <LuScanEye />
                                    </div>
                                    <div className="mark-texts">
                                        <div>Qualified Engineers</div>
                                        <p>Recruiting certified and experienced professionals to meet your exact Middle East project requirements.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="years">
                                <div className="years-main">
                                    <span>25+</span>
                                    <span>Years of Experience</span>
                                </div>
                            </div>
                        </div>
                        <div className="founder-cta">
                            <Link href={'/'} className="btn about-btn">Know more <span><GoArrowUpRight /></span></Link>
                            <div className="founder">
                                <Image src={'/author.jpg'} alt="" width={100} height={100} priority />
                                <div className="author">
                                    <div className="author-name">Founder Name</div>
                                    <p>Founder & CEO</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about-imagers">
                        <div className="about-image-bar">
                            <Image src={'/about-image-1.jpg'} alt={''} width={300} height={300} priority />
                            <div className="bar">
                                <div className="bar-icon">
                                    <MdFingerprint />
                                </div>
                                <div className="bar-text">Trusted HR Consultants</div>
                            </div>
                        </div>
                        <div className="about-image-bar">
                            <div className="bar">
                                <div className="bar-icon">
                                    <FiAward />
                                </div>
                                <div className="bar-text">Best Placement Agency</div>
                            </div>
                            <Image src={'/about-image-2.jpg'} alt={''} width={300} height={300} priority />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;