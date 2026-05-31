import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
        <Link href={'/'} className="logo-bg"><Image src="/logo.png" alt="Tribuild" width={128} height={97} /></Link>
    )
}

export default Logo;