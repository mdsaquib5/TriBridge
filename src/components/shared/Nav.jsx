import Link from "next/link";
import { BsChevronCompactDown } from "react-icons/bs";

const Nav = () => {
    return (
        <nav>
            <ul>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/'}>About Us</Link></li>
                <li className="dropdown"><Link href={'/'}>Employers<BsChevronCompactDown /></Link>
                    <ul className="dropdown-menu">
                        <li><Link href={'/'}>Overseas Recruitment</Link></li>
                        <li><Link href={'/'}>HR Consulting</Link></li>
                        <li><Link href={'/'}>Manpower Supply</Link></li>
                        <li><Link href={'/'}>Recruitment Process</Link></li>
                    </ul>
                </li>
                <li className="dropdown"><Link href={'/'}>Industries<BsChevronCompactDown /></Link>
                    <ul className="dropdown-menu">
                        <li><Link href={'/'}>Construction & Engineering</Link></li>
                        <li><Link href={'/'}>Oil & Gas</Link></li>
                        <li><Link href={'/'}>Healthcare</Link></li>
                        <li><Link href={'/'}>Hospitality</Link></li>
                    </ul>
                </li>
                <li className="dropdown"><Link href={'/'}>Job Seekers<BsChevronCompactDown /></Link>
                    <ul className="dropdown-menu">
                        <li><Link href={'/'}>Gulf Jobs</Link></li>
                        <li><Link href={'/'}>Current Openings</Link></li>
                        <li><Link href={'/'}>Submit Resume</Link></li>
                    </ul>
                </li>
                <li><Link href={'/'}>Contact Us</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;