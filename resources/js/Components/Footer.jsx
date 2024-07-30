import React, { useState, useEffect } from "react";
import { Button } from 'primereact/button';
import { IconFacebook, IconYoutube, IconTiktok, IconInstagram, ArrowUp } from "./Icons/LandingPage";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false); // State untuk menampilkan overlay

  const toggleVisibility = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    setScrolling(true);
    setShowOverlay(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setTimeout(() => {
      setScrolling(false);
      setShowOverlay(false);
    }, 800);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      <footer className="p-12 px-24 space-y-10 md:space-y-0 text-white bg-primary flex flex-wrap justify-between">
        <aside className="w-full md:w-2/4">
          <img src="../asset/images/footer-logo.png" className="" alt="Build-IT 2024" />
          <p className="capitalize mt-5 w-[450px] my-4">
            empowering students to shape the next generation of information technology
          </p>
          <div className="social-media mt-10 flex items-center space-x-3 relative bottom-0">
            <a className="flex items-center" href="https://www.instagram.com/hmtiudayana?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
              <IconInstagram />
            </a>
            <a className="flex items-center" href="https://www.tiktok.com/@hmtiudayana?_t=8oS3HHpAO92&_r=1" target="_blank" rel="noopener noreferrer">
              <IconTiktok />
            </a>
            <a className="flex items-center" href="https://www.facebook.com/HMTIUdayana/?locale=id_ID" target="_blank" rel="noopener noreferrer">
              <IconFacebook />
            </a>
            <a className="flex items-center" href="https://www.youtube.com/@hmtiuniversitasudayana2028" target="_blank" rel="noopener noreferrer">
              <IconYoutube />
            </a>
          </div>
        </aside>
        <nav className="w-full md:w-1/4">
          <h5 className="font-bold text-2xl mb-4">Quick Links</h5>
          <div className="quick-links">
            <a className="group mb-3 flex items-center" href="#About"  rel="noopener noreferrer">
              Tentang Kami
              <i className="pi pi-angle-right ml-1 group-hover:ml-2 transition-all duration-300"></i>
            </a>
            <a className="group mb-3 flex items-center" href="#Timeline" rel="noopener noreferrer">
              Timeline
              <i className="pi pi-angle-right ml-1 group-hover:ml-2 transition-all duration-300"></i>
            </a>
            <a className="group mb-3 flex items-center" href="#Faq" rel="noopener noreferrer">
              FAQ
              <i className="pi pi-angle-right ml-1 group-hover:ml-2 transition-all duration-300"></i>
            </a>
            <a className="group mb-3 flex items-center" href="#Merch" rel="noopener noreferrer">
              Merchandise
              <i className="pi pi-angle-right ml-1 group-hover:ml-2 transition-all duration-300"></i>
            </a>
          </div>
        </nav>
        <nav className="w-full md:w-1/5 items-end">
          <h5 className="font-bold text-2xl mb-4">Modul Pelatihan</h5>
          <a className="group mb-3 flex items-center" href="/modul/alprog" rel="noopener noreferrer">
            Algoritma dan Pemrograman
            <i className="pi pi-angle-right ml-1 group-hover:ml-2 transition-all duration-300"></i>
          </a>
          <a className="group mb-3 flex items-center" href="/modul/basisdata" rel="noopener noreferrer">
            Basis Data
            <i className="pi pi-angle-right ml-1 group-hover:ml-2 transition-all duration-300"></i>
          </a>
          <a className="group mb-3 flex items-center" href="/modul/jarkom" rel="noopener noreferrer">
            Jaringan Komputer
            <i className="pi pi-angle-right ml-1 group-hover:ml-2 transition-all duration-300"></i>
          </a>
        </nav>
      </footer>
      <footer className="px-24 bg-primary text-white">
        <div className="divider h-[1px] w-full bg-white mb-4"></div>
        <div className="flex justify-between">
          <p className="my-4">Copyright © 2024 All rights reserved. </p>
          <Button
            className={`w-[61px] h-[48px] px-4 my-4 bg-white rounded-[5px] scrollToTop hover:mt-2 transition-all duration-300 ${scrolling ? "hide" : "show"}`}
            onClick={scrollToTop}
            style={{ display: isVisible ? "block" : "none" }}
          >
            <ArrowUp />
          </Button>
        </div>
      </footer>
    </>
  );
}
