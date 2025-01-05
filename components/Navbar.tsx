import Link from "next/link"
import Image  from "next/image"
import { NAV_LINKS } from "@/constants"
import Button from "./Button"


const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
        <Link href="/">
            <Image src="/wotwlogo.svg" alt="logo" width={200} height={20}/>
            </Link>
        <ul className="hidden h-full gap-12 lg:flex">
            {NAV_LINKS.map((link)=>(
                <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                    {link.label}
                </Link>
            ))}
        </ul>
        <div className="hidden lg:flex">
            <Button 
            type="button"
            title="Login"
            icon="/user.svg"
            variant="btn_dark_green"
            />
        </div>
        <Image
        src="/hamburger.svg"
        alt="menu"
        width={40}
        height={40}
        className="lg:hidden inline-block cursor-pointer" />
        
    </nav>
  )
}

export default Navbar