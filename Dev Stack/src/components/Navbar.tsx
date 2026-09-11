import { useState } from "react";
import Logo from '../assets/logo-text.png';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    // console.log(menuOpen)

    return (
        <nav className="sticky top-0 z-50 bg-white shadow-md">

            <div className="container mx-auto px-4 py-3">
                <div className="flex items-center justify-between">

                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-2xl lg:hidden">
                        ☰
                    </button>

                    <div className="flex items-center">
                        <img
                            className="h-10 w-auto"
                            src={Logo}
                            alt="Dev Stack"
                        />
                    </div>

                    <div className="hidden lg:flex items-center gap-6">
                        <a className="text-[#DB2777] font-semibold" href="">
                            Home
                        </a>
                        <a className="text-[#475569] font-semibold" href="">
                            Technologies
                        </a>
                        <a className="text-[#475569] font-semibold" href="">
                            Projects
                        </a>
                        <a className="text-[#475569] font-semibold" href="">
                            About
                        </a>
                        <a className="text-[#475569] font-semibold" href="">
                            Contact
                        </a>
                    </div>

                    <div className="flex items-center gap-5">
                        <button className="sm:block cursor-pointer">
                            Sign In
                        </button>
                        <button className="rounded-3xl bg-[#D91B7E] px-4 py-2 text-white cursor-pointer">
                            Sign Up
                        </button>
                    </div>
                </div>

                {menuOpen && (
                    <div className="mt-4 flex flex-col gap-4 border-t pt-4 lg:hidden">
                        <a className="text-[#DB2777] font-semibold" href="">
                            Home
                        </a>
                        <a className="text-[#475569] font-semibold" href="">
                            Technologies
                        </a>
                        <a className="text-[#475569] font-semibold" href="">
                            Projects
                        </a>
                        <a className="text-[#475569] font-semibold" href="">
                            About
                        </a>
                        <a className="text-[#475569] font-semibold" href="">
                            Contact
                        </a>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;