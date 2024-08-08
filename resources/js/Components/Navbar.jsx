import { useState, useEffect, useRef } from "react";
import { Link, usePage } from "@inertiajs/react";
import ApplicationLogo from "./AplicationLogo";
import { IconUser } from "./Icons/LandingPage";

export default function Navbar() {
    const { auth } = usePage().props;  // Mendapatkan data auth dari Inertia props
    const [show, setIsShow] = useState(false);
    const [showNav, setIsShowNav] = useState(false);
    const [scrolled, setIsScrolled] = useState(false);
    const dropdownRef = useRef(null);

    function showDropDown() {
        setIsShow(!show);
    }

    function showNavbar() {
        setIsShowNav(!showNav);
    }

    useEffect(() => {
        const handleScroll = () => {
            const scroll = window.scrollY;
            setIsScrolled(scroll > 30);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsShow(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleDropdownItemClick = () => {
        setIsShow(false);
    };

    return (
        <nav className={`bg-white w-full flex justify-between items-center px-12 md:px-24 py-4 sticky z-50 top-0 ${scrolled ? "shadow" : "shadow-md"}`}>
            <span>
                <ApplicationLogo />
            </span>
            <ul className={` ${!showNav ? "hidden" : "flex"} flex-col justify-center md:w-max-content rounded bg-white top-20 left-12 right-12 border border-gray-300 py-6 px-4 md:px-12 space-y-3 absolute shadow text-primary z-10 md:flex md:relative md:flex-row md:items-center md:top-0 md:space-y-0 md:space-x-6 md:left-0 md:right-0 md:py-0 md:border-none md:shadow-none`}>
                <li className="p-3">
                    <Link href={route('Welcome')}>Home</Link>
                </li>
                <li className="space-x-1 relative" ref={dropdownRef}>
                    <div className="flex flex-row gap-1 cursor-pointer transition-all duration-300 hover:bg-gray-200 rounded-[10px] w-max p-3" onClick={showDropDown}>
                        <a href="#">Modul Pelatihan</a>
                        <i className={`pi ${!show ? "pi-angle-down" : "pi-angle-up"} mt-1`}></i>
                    </div>
                    <ul>
                        <li className={`md:absolute bg-white mt-3 p-3 min-w-max shadow-none md:shadow-md border-none md:border-[1px] border-gray-200 rounded flex-col space-y-2 transition-all duration-300 ${!show ? "hidden" : "flex"}`}>
                            <Link href={route('Modul.Alprog')} className="hover:bg-gray-200 rounded-[10px] w-full p-1.5" onClick={handleDropdownItemClick}>Algoritma & Pemrograman</Link>
                            <Link href={route('Modul.BasisData')} className="hover:bg-gray-200 rounded-[10px] w-full p-1.5" onClick={handleDropdownItemClick}>Basis Data</Link>
                            <Link href={route('Modul.Jarkom')} className="hover:bg-gray-200 rounded-[10px] w-full p-1.5" onClick={handleDropdownItemClick}>Jaringan Komputer & Komunikasi</Link>
                        </li>
                    </ul>
                </li>
                <li className="hover:bg-gray-200 rounded-[10px] w-max p-2">
                    <a href="/#About">About</a>
                </li>
                <li className="hover:bg-gray-200 rounded-[10px] w-max p-2">
                    <a href="/#Faq">FAQ</a>
                </li>
                <li className="hover:bg-gray-200 rounded-[10px] w-max p-2">
                    <a href="/#Contact">Contact Person</a>
                </li>
                <li className="hover:bg-gray-200 rounded-[10px] w-max p-2">
                    <a href="/#Merch">Merchandise</a>
                </li>
                <li>
                    {!auth.user ? (
                        <Link href="/login" rel="noopener noreferrer" className="w-fit h-[52px] block md:hidden py-3 px-6 bg-primary hover:bg-secondary font-bold text-white rounded-md transition-all duration-300">
                            Login
                        </Link>
                    ) : (
                        <Link href={route('dashboard')} className="w-fit h-[52px] block md:hidden py-3 px-6 bg-primary hover:bg-secondary font-bold text-white rounded-md transition-all duration-300">
                            <img src="/path/to/user-logo.png" alt="User" className="w-6 h-6 inline-block" />
                        </Link>
                    )}
                </li>
            </ul>
            <div className="btn-cta">
                {!auth.user ? (
                    <Link href={route('login')} rel="noopener noreferrer" className="hidden md:block py-3 px-6 bg-primary hover:bg-secondary font-bold text-white rounded-md transition-all duration-300">
                        Login
                    </Link>
                ) : (
                    <Link href={route('dashboard')} className="">
                        <IconUser />
                    </Link>
                )}
                <button onClick={showNavbar} className="md:hidden">
                    {!showNav ? (
                        <i className="pi pi-align-justify"></i>
                    ) : (
                        <i className="pi pi-times"></i>
                    )}
                </button>
            </div>
        </nav>
    );
}
