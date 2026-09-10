import { useState } from "react";
import Logo from '../assets/logo-text.png';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    // console.log(menuOpen)

    return (
        <nav className="sticky top-0 z-50 bg-white shadow-md">
            {/* Main Navbar */}
            <div className="container mx-auto px-4 py-3">
                <div className="flex items-center justify-between">
                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-2xl lg:hidden">
                        ☰
                    </button>
                    {/* Logo */}
                    <div className="flex items-center">
                        <img
                            className="h-10 w-auto"
                            src={Logo}
                            alt="Dev Stack"
                        />
                    </div>

                    {/* Desktop Navigation */}
                    <ul className="hidden lg:flex items-center gap-6">
                        <li className="text-[#DB2777] font-semibold">
                            Home
                        </li>
                        <li className="text-[#475569] font-semibold">
                            Technologies
                        </li>
                        <li className="text-[#475569] font-semibold">
                            Projects
                        </li>
                        <li className="text-[#475569] font-semibold">
                            About
                        </li>
                        <li className="text-[#475569] font-semibold">
                            Contact
                        </li>
                    </ul>
                    {/* Auth Buttons */}
                    <div className="flex items-center gap-3">
                        <button className="sm:block">
                            Sign In
                        </button>
                        <button className="rounded-3xl bg-[#D91B7E] px-4 py-2 text-white">
                            Sign Up
                        </button>
                    </div>
                </div>
                {/* Mobile Menu */}
                {menuOpen && (
                    <ul className="mt-4 flex flex-col gap-4 border-t pt-4 lg:hidden">
                        <li className="text-[#DB2777] font-semibold">
                            Home
                        </li>
                        <li className="text-[#475569] font-semibold">
                            Technologies
                        </li>
                        <li className="text-[#475569] font-semibold">
                            Projects
                        </li>
                        <li className="text-[#475569] font-semibold">
                            About
                        </li>
                        <li className="text-[#475569] font-semibold">
                            Contact
                        </li>
                    </ul>
                )}
            </div>
        </nav>
    );
};

export default Navbar;