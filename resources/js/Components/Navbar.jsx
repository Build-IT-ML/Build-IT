import { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
import ApplicationLogo from "./AplicationLogo";

export default function Navbar() {
    const [show, setIsShow] = useState(false);
    const [showNav, setIsShowNav] = useState(false);
    const [scrolled, setIsScrolled] = useState(false);

    function showDropDown() {
        setIsShow(!show);
    }

    function showNavbar() {
        setIsShowNav(!showNav);
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            scroll = window.scrollY;
            if (scroll > 30) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        });
    }, [scrolled]);


    return (
        <nav className={`bg-white w-full flex justify-between items-center px-24 py-4 sticky z-50 top-0 ${scrolled ? "shadow" : "shadow-md"}`}>
            <span>
                {/* <img src="../asset/images/navbar-logo.png" alt="logo Build-IT 2024" className="w-36"/> */}
                <ApplicationLogo />
            </span>
            <ul className={` ${!showNav ? "hidden" : "flex"} flex-col justify-center md:w-max-content rounded bg-white top-20 left-12 right-12 border border-gray-300 py-6 px-4 md:px-12 space-y-3 absolute shadow  text-primary z-10 md:flex md:relative md:flex-row md:items-center md:top-0 md:space-y-0 md:space-x-6 md:left-0 md:right-0 md:py-0 md:border-none md:shadow-none`}>
                <li className="">
                    <Link href={route('Welcome')}>Home</Link>
                </li>
                <li className="space-x-1 relative">
                    <div className="flex flex-row gap-1 cursor-pointer transition-all duration-300" onClick={showDropDown}>
                        <a href="#">Modul Pelatihan</a>
                        <i className={`pi  ${!show ? "pi-angle-down" : "pi-angle-up"} mt-1`}></i>
                    </div>
                    <li className={`md:absolute bg-white mt-3 p-3 min-w-max shadow-none md:shadow-md border-none md:border-[1px] border-gray-200 rounded flex-col space-y-2 transition-all duration-300 ${!show ? "hidden" : "flex"}`}>
                        <Link href={route('Modul.Alprog')}>Algoritma & Pemrograman</Link>
                        <Link href={route('Modul.BasisData')}>Basis Data</Link>
                        <Link href={route('Modul.Jarkom')}>Jaringan Komputer & Komunikasi</Link>
                    </li>
                </li>
                <li>
                    <a href="#">FAQ</a>
                </li>
                <li>
                    <a href="#">Merchandise</a>
                </li>
                <li>
                    <Link href={route('Login')} rel="noopener noreferrer" className="w-fit h-[52px] block md:hidden py-3 px-6 bg-primary hover:bg-secondary font-bold text-white rounded-md transition-all duration-300">
                        Login
                    </Link>
                </li>
            </ul>
            <div className="btn-cta">
                <Link href={route('Login')} rel="noopener noreferrer" className="hidden md:block py-3 px-6 bg-primary hover:bg-secondary font-bold text-white rounded-md transition-all duration-300">
                    Login
                </Link>

                <button onClick={showNavbar} className="md:hidden">
                    {!showNav ?
                        <i className="pi pi-align-justify"></i>
                        :
                        <i className="pi pi-times"></i>
                    }
                </button>
            </div>
        </nav>
    )
}