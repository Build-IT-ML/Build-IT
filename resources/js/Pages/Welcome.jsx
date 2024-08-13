import { Head, Link } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import { Button } from 'primereact/button';
import DisableInspect from '@/Utils/disableInspect';
import { Dialog } from 'primereact/dialog';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'primereact/resources/themes/saga-blue/theme.css'; 
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import { IconBuiltIT, IconKotakTop, IconKotakCenter, IconKotakBottom,IconHouseOffline, IconBookSharing, IconHumanSharing, ArrowRight, IconKotakTimeLine, IconFaq, IconContactCard, IconContactBanner } from "../Components/Icons/LandingPage";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Loading from "./Loading";

import UserGuest from "@/Components/Layouts/User/UserGuest";

export default function Welcome() {
    const [modalVisible, setModalVisible] = useState(false);
    // accordion faq
    const [openIndex, setOpenIndex] = useState(null);
    // usestate change merch
    const [imageSrc, setImageSrc] = useState('asset/images/landing-page/merch-black.png');
    // usestate modal pop up
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const [visible, setVisible] = useState(false);

    const [batchInfo, setBatchInfo] = useState({
        batchName: 'Pre-Order',
        batchDate: '14 Agustus 2024 - 28 Agustus 2024'
    });

    useEffect(() => {
        const currentDate = new Date();
        const batch1End = new Date('2024-08-28');
        const batch2Start = new Date('2024-09-01');
        const batch2End = new Date('2024-09-15');
    
        if (currentDate >= batch2Start && currentDate <= batch2End) {
            setBatchInfo({
                batchName: 'Extended Pre-Order',
                batchDate: '1 September 2024 - 15 September 2024'
            });
        }
    }, []);

    const handleAccordionClick = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };


    useEffect(() => {
        AOS.init({
          duration: 800,
        });
      }, []);

    // modal pop up merch
      useEffect(() => {
        setIsPopupOpen(true);

        const timer = setTimeout(() => {
            setIsPopupOpen(false);
        }, 10000); 

    }, []);


    // useEffect(() => {
    //     const cleanup = DisableInspect();
    //     return () => cleanup();
    // }, []);

      useEffect(() => {
        document.documentElement.classList.add('smooth-scroll');
      }, []);

    const showModal = () => {
        setModalVisible(true);
    };

    const hideModal = () => {
        setModalVisible(false);
    };

    return (
        <>
            <Head title="Landing Page" />
            {/* <Loading/> */}
            <UserGuest>
                <div className="w-full overflow-hidden">
                    <img
                        src="asset/images/banner-landing.png"
                        alt="banner"
                        className="absolute z-0 w-screen object-center rounded-none h-[620px] object-cover opacity-20 hidden md:block"
                    />

                    {/* Content Awal */}
                    <div className="h-max w-full px-6 md:px-24 z-20">
                        <MerchPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
                        <div className="flex justify-between mb-5   ">
                            <div className="flex flex-col mt-20 mb-5 w-full items-center md:items-start" data-aos="fade-up">
                                <p className="font-semibold text-[20px] text-primary leading-[24px] tracking-[0.01em] mb-3" >TEKNOLOGI INFORMASI</p>
                                    <IconBuiltIT />
                                <p className="font-normal text-[20px] text-primary w-full md:w-[494px] mt-5 text-center md:text-start">
                                    Basic Understanding in Learning and Developing Information Technology merupakan kegiatan yang bertujuan mewadahi mahasiswa untuk menerima pemahaman lebih tentang materi dasar perkuliahan dan lomba serta penjurusan dilingkup TI.
                                </p>
                                <div className="w-full md:w-auto flex flex-col md:flex-row gap-2 md:gap-12 items-center">
                                    <a href="/register" className="w-full md:w-auto">
                                        <button className="mt-4 bg-primary hover:bg-secondary w-full p-4 text-white font-medium rounded-[10px] tracking-0 md:tracking-[0.05em]">
                                            Daftar Sekarang
                                        </button>
                                    </a>
                                    <div className="flex flex-row gap-5">
                                        <div className="bg-primary w-[60px] h-[60px] rounded-full mt-4 flex justify-center items-center hover:bg-secondary cursor-pointer shadow-lg" onClick={() => setVisible(true)}>
                                            <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.5342 7.0735L1.21875 0.106835C1.08988 0.0286161 0.946941 -0.00786758 0.803431 0.000832147C0.65992 0.00953187 0.520581 0.0631276 0.398585 0.156554C0.276588 0.249981 0.175963 0.380152 0.10622 0.534765C0.0364761 0.689378 -8.21365e-05 0.863326 1.38564e-07 1.04017V14.9602C-8.21365e-05 15.137 0.0364761 15.311 0.10622 15.4656C0.175963 15.6202 0.276588 15.7504 0.398585 15.8438C0.520581 15.9372 0.65992 15.9908 0.803431 15.9995C0.946941 16.0082 1.08988 15.9717 1.21875 15.8935L12.5342 8.92684C12.6747 8.84151 12.793 8.7095 12.8757 8.54574C12.9584 8.38198 13.0022 8.193 13.0022 8.00017C13.0022 7.80734 12.9584 7.61836 12.8757 7.4546C12.793 7.29084 12.6747 7.15883 12.5342 7.0735Z" fill="white"/>
                                            </svg>
                                        </div>
                                        <Dialog   
                                        header="How to join" 
                                        variant="ghost"
                                        visible={visible} modal={false} 
                                        onHide={() => {if (!visible) return; setVisible(false); }}
                                        className="w-auto md:w-9/12 md:h-[564px] h-auto rounded-[10px] !px-0 py-0">
                                            <div className="w-full h-full max-[580px]">
                                                <iframe
                                                    width="100%"
                                                    height="100%"
                                                    src="https://www.youtube.com/embed/4nxZfBvYG3I?si=xID1y4LLk2uhT6Sv"
                                                    frameBorder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                ></iframe>
                                            </div>
                                        </Dialog>
                                        <p className="text-primary text-[16px] font-medium flex justify-center items-center mt-4">How to Join</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full right-side mt-16 hidden md:block">
                                <div className="static">
                                    <div
                                    className="relative left-[80px] top-[0] animate-bounce-custom"
                                    alt="gambar"
                                    data-aos="fade-up"
                                    >
                                        <IconKotakTop />
                                    </div>
                                    <div className="relative">
                                        {/* image1.png */}
                                        <img
                                            src="asset/images/landing-page/image-1.png"
                                            alt="gambar"
                                            className="max-w-full h-[240px] rounded-[10px] object-cover absolute top-[-30px] left-[150px] z-[2] hover:bg-gray-500"
                                            data-aos="fade-left"
                                        />
                                        {/* image2.png */}
                                        <img
                                            src="asset/images/landing-page/image-2.png"
                                            alt="gambar"
                                            className="max-w-full h-[175px] rounded-[10px] object-cover absolute bottom-[80px] left-[40px] z-[4]"
                                            data-aos="fade-up"
                                        />
                                        {/* image3.png */}
                                        <img
                                            src="asset/images/landing-page/image-3.png"
                                            alt="gambar"
                                            className="max-w-full h-[175px] rounded-[10px] object-cover absolute bottom-[80px] left-[395px] z-[4]"
                                            data-aos="fade-right"
                                        />
                                        <div
                                            alt="gambar"
                                            className="max-w-full h-[445px] relative bottom-[80px] left-[380px] animate-bounce-custom"
                                            data-aos="fade-up"
                                        >
                                            <IconKotakCenter />
                                        </div>
                                    </div>
                                    <div
                                        className="flex relative bottom-[50px] left-[200px] animate-bounce-custom"
                                        width={40}
                                        height={40}
                                        data-aos="fade-up"
                                    >
                                        <IconKotakBottom />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 3 card */}
                    <div className="px-6 md:px-24 py-10 bg-gradient-to-t from-secondary to-primary flex flex-col md:flex-row justify-between gap-5 h-full md:h-max z-50">
                        <div className="bg-white w-full h-max md:w-[420px] md:h-[288px] rounded-[10px] p-10 flex flex-col transition-transform transform hover:scale-105 active:scale-110" data-aos="fade-right">
                            <IconHouseOffline />
                            <div className="divider h-[2px] w-[50px] bg-primary mt-3"></div>
                            <p className="mt-3 font-bold text-[16px] leading-[24px] tracking-[0.01em]">
                                3 Pelatihan Tatap Muka
                            </p>
                            <p className="text-[#737373] mt-3 font-normal text-[14px] leading-[20px] tracking-[0.02em] w-full">
                                Membantu mahasiswa baru memahami mata kuliah dasar di perkuliahan seperti Algoritma & Pemrograman, Basis Data, dan Jaringan Komputer & Komunikasi
                            </p>
                        </div>
                        <div className="bg-white w-full h-max md:w-[420px] md:h-[288px] rounded-[10px] p-10 flex flex-col transition-transform transform hover:scale-105 active:scale-110" data-aos="fade-up">
                            <IconBookSharing />
                            <div className="divider h-[2px] w-[50px] bg-primary mt-3"></div>
                            <p className="mt-3 font-bold text-[16px] leading-[24px] tracking-[0.01em]">
                                Sosialisasi Lomba & Penjurusan
                            </p>
                            <p className="text-[#737373] mt-3 font-normal text-[14px] leading-[20px] tracking-[0.02em]">
                                Sosialisasi ini akan dipandu oleh dosen dan mahasiswa Teknologi Informasi 
                            </p>
                        </div>
                        <div className="bg-white w-full h-max md:w-[420px] md:h-[288px] rounded-[10px] p-10 flex flex-col transition-transform transform hover:scale-105 active:scale-110" data-aos="fade-left">
                            <IconHumanSharing />
                            <div className="divider h-[2px] w-[50px] bg-primary mt-3"></div>
                            <p className="mt-3 font-bold text-[16px] leading-[24px] tracking-[0.01em]">Sharing Session Hacktiv8</p>
                            <p className="text-[#737373] mt-3 font-normal text-[14px] leading-[20px] tracking-[0.02em]">
                                Akan ada sharing session bersama Hacktiv8 yang merupakan pelatihan coding bootcamp terbaik di Indonesia.
                            </p>
                        </div>
                    </div>

                    {/* about built it */}
                    <div className="px-6 md:px-24 md:mt-20 mt-10 flex flex-col md:flex-row gap-20 justify-between md:justify-center items-center" id="About">
                        <img src="asset/images/landing-page/icon-build-it.png" alt="" className="mx-12 w-[390px] h-[410px] animate-bounce-custom"/>
                        <div className="mt-12 flex flex-col items-center md:items-start">
                            <p className="text-[24px] md:text-[36px] text-primary font-bold tracking-[0.16em]" data-aos="fade-left">
                                TENTANG BUILD IT
                            </p>
                            <div className="divider h-[2px] w-full md:w-[420px] bg-primary mt-2"></div>
                            <p className="mt-3 text-[18px] md:text-[24px] leading-[28px] tracking-[0.2px]" data-aos="fade-right">
                                Apa itu BUILD IT 2024?
                            </p>
                            <p className="mt-10 font-normal text-[14px] md:text-[20px] w-full md:w-[724px] text-center md:text-justify" data-aos="fade-up">
                                <span className="font-extrabold">Basic Understanding in Learning and Developing Information Technology</span> atau yang disingkat “BUILD IT” merupakan kegiatan yang bertujuan mewadahi mahasiswa untuk menerima pemahaman lebih tentang materi dasar perkuliahan di luar kegiatan belajar mengajar serta mempersiapkan diri untuk mengikuti perlombaan di bidang Teknologi Informasi melalui Sosialisasi Lomba & Penjurusan.
                            </p>
                        </div>
                    </div>
                    <div
                        className="flex relative mt-20 left-[800px] animate-pulse animate-bounce-custom"
                        width={40}
                        height={40}
                        data-aos="fade-up"
                    >
                        <IconKotakBottom />
                    </div>

                    {/* mata kuliah dasar build it */}
                    <div className="px-6 md:px-24 md:mt-36 mt-18 flex flex-col justify-center">
                        <div className="flex flex-col justify-center items-center">
                            <p className="text-center text-primary font-bold text-[24px] md:text-[36px] leading-[50px] tracking-[0.16em]" data-aos="fade-left">MATA KULIAH DASAR</p>
                            <div className="divider h-[2px] w-full md:w-[706px] bg-primary mt-2"></div>
                            <p className="w-full md:w-[700px] text-center mt-3 text-[18px] md:text-[20px] leading-[28px] tracking-[0.2px]" data-aos="fade-right">
                                Mewadahi mahasiswa baru untuk menerima pemahaman lebih
                                tentang materi dasar perkuliahan di luar kegiatan belajar mengajar
                            </p>
                        </div>

                        <div className="mt-10 flex flex-col md:flex-row justify-around gap-5 items-center md:items-start">
                            <CardMatkul
                                heading="Algoritma dan Pemrograman"
                                description="Matakuliah Algoritma dan Pemrograman adalah mata kuliah dasar yang memperkenalkan konsep-konsep fundamental dalam pemrograman komputer dan pemecahan masalah menggunakan algoritma. Dalam mata kuliah ini, mahasiswa akan mempelajari cara merancang, mengembangkan, dan menganalisis algoritma yang efisien untuk menyelesaikan berbagai jenis masalah komputasional."
                                button="Lebih lanjut"
                                image="asset/images/landing-page/icon-alprog.png"
                                url="/modul/alprog"
                            />
                            <CardMatkul
                                heading="Basis Data"
                                description="Matakuliah Basis Data merupakan mata kuliah yang berfokus pada konsep, desain, implementasi, dan manajemen sistem basis data. Mahasiswa akan mempelajari bagaimana data diorganisasikan, disimpan, dan diakses secara efisien. Selain itu, mahasiswa akan belajar tentang penggunaan SQL (Structured Query Language) untuk mengelola dan memanipulasi data dalam basis data."
                                button="Lebih lanjut"
                                image="asset/images/landing-page/icon-basis-data.png"
                                url="/modul/basisdata"
                            />
                            <CardMatkul 
                                heading="Jaringan Komputer dan Komunikasi"
                                description="Matakuliah Jaringan Komputer dan Komunikasi merupakan matakuliah yang mempelajari konsep, arsitektur, dan teknologi yang mendasari sistem jaringan komputer serta proses komunikasi data antar perangkat. Mahasiswa akan memahami cara kerja jaringan mulai dari lapisan fisik hingga aplikasi, termasuk protokol-protokol jaringan seperti TCP/IP, routing, switching, serta keamanan jaringan."
                                button="Lebih lanjut"
                                image="asset/images/landing-page/icon-jaringan-komputer.png"
                                url="/modul/jarkom"
                            />
                        </div>
                    </div>

                    {/* Timeline Build IT */}
                    <div className="px-6 md:px-24 mt-36" id="Timeline">
                        <div className="flex flex-col justify-center items-center z-10">
                            <h1 className="font-sans text-center font-bold text-primary text-[24px] md:text-[36px] tracking-widest" data-aos="fade-left">
                                TIMELINE BUILD-IT 2024
                            </h1>
                            <div className="divider h-[2px] w-full md:w-[692px] bg-primary mt-2"></div>
                            <p className="w-full md:w-[700px] text-center mt-3 text-[18px] md:text-[20px] leading-[28px] tracking-[0.2px] z-20" data-aos="fade-right">
                                Setiap detik adalah kesempatan untuk belajar, berbagi, dan terhubung dengan komunitas kreatif. Catat tanggalnya dan pastikan Anda tidak melewatkan momen di BUILD-IT 2024.
                            </p>
                        </div>
                            <div
                                className="z-0 flex relative left-[170px] top-[50px] animate-bounce-custom animate-pulse"
                                width={40}
                                height={40}
                                data-aos="fade-up"
                            >
                                <IconKotakBottom />
                            </div>
                        <div className="flex flex-col z-10 mt-3 md:mt-10">
                            <div className="flex flex-col gap-[130px] left-4 items-center pt-16 absolute w-1 bg-primary h-max md:left-1/2 transform md:-translate-x-1/2 z-10">
                                <div className="w-5 h-5 md:w-9 md:h-9 bg-primary rounded-full relative z-20">
                                    <div className="items-center w-full h-full bg-primary rounded-full animate-ping"></div>
                                </div>
                                <div className="w-5 h-5 md:w-9 md:h-9 bg-primary rounded-full relative z-20">
                                    <div className="items-center w-full h-full bg-primary rounded-full animate-ping"></div>
                                </div>
                                <div className="w-5 h-5 md:w-9 md:h-9 bg-primary rounded-full relative z-20">
                                    <div className="items-center w-full h-full bg-primary rounded-full animate-ping"></div>
                                </div>
                                <div className="w-5 h-5 md:w-9 md:h-9 bg-primary rounded-full relative z-20">
                                    <div className="items-center w-full h-full bg-primary rounded-full animate-ping"></div>
                                </div>
                                <div className="w-5 h-5 md:w-9 md:h-9 bg-primary rounded-full relative z-20">
                                    <div className="items-center w-full h-full bg-primary rounded-full animate-ping"></div>
                                </div>
                                <div className="w-5 h-5 md:w-9 md:h-9 bg-primary rounded-full relative z-20">
                                    <div className="items-center w-full h-full bg-primary rounded-full animate-ping"></div>
                                </div>
                                <div className="w-5 h-5 md:w-9 md:h-9 bg-primary rounded-full relative z-20">
                                    <div className="items-center w-full h-full bg-primary rounded-full animate-ping"></div>
                                </div>
                            </div>
                            <div className="font-sans my-3 md:my-5 flex w-full justify-end z-10 md:pl-20" data-aos="fade-up">
                                <div className="w-full md:w-[466px] ml-5 md:ml-0 mr-0 md:mr-20 p-4 bg-white border shadow-lg rounded-md ">
                                    <h3 className="text-[16px] md:text-[20px] font-bold">Open Registration Peserta</h3>
                                    <p className="text-[14px] md:text-[16px] font-medium mb-1"> Batch I : 14 Agustus - 19 Agustus 2024
                                    </p>
                                    <p className="text-[14px] md:text-[16px] font-medium mb-1"> Batch II : 21 Agustus - 28 Agustus 2024
                                    </p>
                                    <p className="text-[14px] md:text-[16px]">Melalui website resmi BUILD IT https://buildit.hmtiudayana.id/</p>
                                </div>
                            </div>
                            <div className="font-sans my-3 md:my-5 flex w-full justify-end md:justify-start z-10 pr-0 md:pr-24" data-aos="fade-up">
                                <div className="w-full md:w-[466px] ml-5 md:ml-20 p-4 bg-white border shadow-lg rounded-md">
                                    <h3 className="text-[16px] md:text-[20px] font-bold">Pembukaan dan Pelatihan Jaringan Komputer & Komunikasi</h3>
                                    <p className="text-[14px] md:text-[16px] font-medium mb-1">
                                        Jumat, 6 September 2024
                                    </p>
                                    <p className="text-[14px]">Gedung TI, Fakultas Teknik, Jimbaran</p>
                                </div>
                            </div>
                            <div className="font-sans my-3 md:my-5 flex w-full justify-end z-10 pl-0 md:pl-20" data-aos="fade-up">
                                <div className="w-full md:w-[466px] ml-5 md:ml-0 mr-0 md:mr-20 p-4 bg-white border shadow-lg rounded-md">
                                    <h3 className="text-[16px] md:text-[20px] font-bold">Pelatihan Algoritma & Pemrograman</h3>
                                    <p className="text-[14px] md:text-[16px] font-medium mb-1">
                                    Senin, 9 September 2024
                                    </p>
                                    <p className="text-[14px]">Gedung TI, Fakultas Teknik, Jimbaran</p>
                                </div>
                            </div>
                            <div className="font-sans my-3 md:my-5 flex w-full justify-end md:justify-start z-10 pr-0 md:pr-24" data-aos="fade-up">
                                <div className="w-full md:w-[466px] ml-5 md:ml-20 p-4 bg-white border shadow-lg rounded-md">
                                    <h3 className="text-[16px] md:text-[20px] font-bold">Pelatihan Basis Data</h3>
                                    <p className="text-[14px] md:text-[16px] font-medium mb-1">
                                        Selasa, 10 September 2024
                                    </p>
                                    <p className="text-[14px]">Gedung TI, Fakultas Teknik, Jimbaran</p>
                                </div>
                            </div>
                            <div
                                alt="gambar"
                                className="max-w-[570px] h-[445px] absolute right-0 top-[6000px] md:top-[3200px] animate-bounce-custom"
                                data-aos="fade-up"
                            >
                                <IconKotakTimeLine />
                            </div>
                            <div className="font-sans my-3 md:my-5 flex w-full justify-end z-10 pl-0 md:pl-20" data-aos="fade-up">
                                <div className="w-full md:w-[466px] ml-5 md:ml-0 mr-0 md:mr-20 p-4 bg-white border shadow-lg rounded-md">
                                    <h3 className="text-[16px] md:text-[20px] font-bold">Deadline Pengumpulan Tugas</h3>
                                    <p className="text-[14px] md:text-[16px] font-medium mb-1">
                                        Kamis, 12 September 2024
                                    </p>
                                    <p className="text-[14px]">Melalui website resmi BUILD IT https://buildit.hmtiudayana.id/</p>
                                </div>
                            </div>
                            <div className="font-sans my-3 md:my-5 flex w-full justify-end md:justify-start z-10 pr-0 md:pr-24" data-aos="fade-up">
                                <div className="w-full md:w-[466px] ml-5 md:ml-20 p-4 bg-white border shadow-lg rounded-md">
                                    <h3 className="text-[16px] md:text-[20px] font-bold">Sosialisasi Penjurusan & Lomba-lomba</h3>
                                    <p className="text-[14px] md:text-[16px] font-medium mb-1">
                                        Jumat, 13 September 2024
                                    </p>
                                    <p className="text-[14px]">Gedung TI, Fakultas Teknik, Jimbaran</p>
                                </div>
                            </div>
                            <div className="font-sans my-3 md:my-5 flex w-full justify-end z-10 pl-0 md:pl-20" data-aos="fade-up">
                                <div className="w-full md:w-[466px] ml-5 md:ml-0 mr-0 md:mr-20 p-4 bg-white border shadow-lg rounded-md">
                                    <h3 className="text-[16px] md:text-[20px] font-bold">Sharing Session Hacktiv8</h3>
                                    <p className="text-[14px] md:text-[16px] font-medium mb-1">
                                        Senin, 16 September 2024
                                    </p>
                                    {/* <p className="text-[14px]">On Webex https://webex</p> */}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Faq */}
                    <div className="px-6 md:px-24 md:mt-36 mt-20" id="Faq">
                        <div className="flex flex-col justify-center items-center mb-2">
                            <h1 className="font-sans font-bold text-primary text-[24px] md:text-[36px] tracking-widest" data-aos="fade-left">
                                FAQ
                            </h1>
                            <div className="divider h-[2px] w-1/2 md:w-[300px] bg-primary mt-2"></div>
                            <p className="w-full md:w-[700px] text-center mt-3 md:text-[20px] leading-[28px] tracking-[0.2px] text-gray-500" data-aos="fade-right">
                                Pertanyaan umum yang sering ditanyakan terkait BUILD IT 2024. Jika masih ada yang ingin ditanyakan lebih lanjut, kalian bisa hubungi narahubung dibawah ini.
                            </p>
                        </div>
                        <div className="flex flex-col md:flex-row justify-around md:justify-between">
                            <div className="w-full flex md:justify-start justify-center animate-bounce-custom" data-aos="fade-up">
                                <IconFaq />
                            </div>
                            <div className="w-full md:w-1/2 mt-0 flex flex-col justify-center items-center" data-aos="fade-right">
                                <AccordionLanding 
                                    heading="Apakah kegiatan ini berbayar?"
                                    description="Tidak, ini merupakan kegiatan yang diselanggarakan oleh Himpunan Mahasiswa Teknologi Informasi Universitas Udayana untuk memberikan pengetahuan dasar mengenai berbagai hal yang diperlukan sebagai mahasiswa TI."
                                    isOpen={openIndex === 0}
                                    onClick={() => handleAccordionClick(0)}
                                />
                                <AccordionLanding
                                    heading="Apakah kegiatan ini wajib dihadiri?"
                                    description="Ya, kegiatan ini wajib dihadiri oleh mahasiswa baru teknologi informasi angkatan 2024. Untuk mahasiswa lama yang belum mengikuti pada tahun lalu wajib hadir di pembukaan dan sharing session"
                                    isOpen={openIndex === 1}
                                    onClick={() => handleAccordionClick(1)}
                                />
                                <AccordionLanding
                                    heading="Apa yang akan dilakukan mahasiswa selama pelatihan BUILD IT 2024??"
                                    description="Selama Pelatihan BUILD-TI 2024, mahasiswa akan dibimbing dalam memahami mata kuliah dasar di perkuliahan seperti alprog, basis data, dan jaringan komputer"
                                    isOpen={openIndex === 2}
                                    onClick={() => handleAccordionClick(2)}
                                />
                                <AccordionLanding 
                                    heading="Apa yang mahasiswa perlu persiapkan sebelum pelatihan BUILD IT 2024??"
                                    description="Adapun beberapa hal yang perlu mahasiswa siapkan sebelum mengikuti pelatihan ini adalah memahami modul yang diberikan karena akan ada quiz dan tugas mandiri serta melakukan instalasi tools yang diperlukan yang akan digunakan dalam pelatihan."
                                    isOpen={openIndex === 3}
                                    onClick={() => handleAccordionClick(3)}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Kontak kami */}
                    <div className="px-6 md:px-24 md:mt-36 mt-20" id="Contact">
                        <div className="flex flex-col justify-center items-center mb-2">
                            <h1 className="font-sans font-bold text-primary text-[24px] md:text-[36px] tracking-widest" data-aos="fade-left">
                                CONTACT <span className="text-secondary">PERSON</span>
                            </h1>
                            <div className="divider h-[2px] w-full md:w-[600px] bg-primary mt-2"></div>
                            <p className="w-full md:w-[700px] text-center mt-3 md:text-[20px] leading-[28px] tracking-[0.2px] text-gray-500" data-aos="fade-right">
                                Jika Anda memiliki pertanyaan lebih lanjut, jangan ragu untuk menghubungi narahubung yang tertera di bawah ini.
                            </p>
                            <div className="flex md:flex-row flex-col gap-4 mt-5">
                                <CardContact
                                    name="Tri Darma"
                                    wa={
                                        <a className="hover:underline" href="https://wa.me/+6281333486847" target="_blank">WA : 081333486847</a>
                                    }
                                    line={
                                        <a className="hover:underline" href="https://line.me/ti/p/tri.dharma." target="_blank">LINE : tri.dharma.</a>
                                    }
                                />
                                <CardContact
                                    name="Candra"
                                    wa={
                                        <a className="hover:underline" href="https://wa.me/+6282235443630">WA : 082235443630</a>
                                    }
                                    line={
                                        <a className="hover:underline" href="https://line.me/ti/p/agungcandra21">LINE : agungcandra21</a>
                                    }
                                />
                                <CardContact
                                    name="Marsya"
                                    wa={
                                        <a className="hover:underline" href="https://wa.me/+62881037397005">WA : 0881037397005</a>
                                    }
                                    line={
                                        <a className="hover:underline" href="https://line.me/ti/p/marishajaegar26">LINE : marishajaegar26</a>
                                    }
                                />
                            </div>

                            <div className="mt-5 md:mt-16 flex w-full md:w-max justify-center items-center animate-bounce-custom" data-aos="fade-up">
                                <IconContactBanner />
                            </div>
                        </div>
                    </div>

                    {/* Merchandise */}
                    <div className="px-6 md:px-24 md:mt-36 mt-20 mb-20">
                        <div className="flex flex-col justify-center items-center md:mb-10 mb-5" id="Merch">
                            <h1 className="font-sans font-bold text-primary text-[24px] md:text-[36px] tracking-widest" data-aos="fade-right">
                                MERCHANDISE
                            </h1>
                            <div className="divider h-[2px] w-full md:w-[450px] bg-primary mt-2"></div>
                            <p className="w-full md:w-[700px] text-center mt-3 text-[20px] leading-[28px] tracking-[0.2px] text-gray-500" data-aos="fade-left">
                                Merchandise BUILD IT 2024 merupakan T-shirt yang diharapkan dapat mendukung terlaksananya kegiatan ini.
                            </p>
                        </div>
                        
                        <div className="b-none md:border border-primary rounded-[35px] shadow-lg p-3">
                            <div className="flex flex-col md:flex-row justify-between" data-aos="fade-up">
                                <div className="flex flex-col w-full justify-center items-center">
                                    <img src={imageSrc} alt="" className="w-auto h-auto md:h-[440px] animate-bounce-merch"/>
                                    <div className="flex flex-row justify-center gap-5">
                                        <div
                                            className="flex flex-col items-center transition-transform transform hover:scale-105 active:scale-110 cursor-pointer"
                                            onClick={() => setImageSrc('asset/images/landing-page/merch-black.png')}
                                        >
                                        <div className="border border-primary rounded-[15px] p-1">
                                            <img src="asset/images/landing-page/merch-black.png" alt="" className="w-[80px] h-[60px]"/>
                                        </div>
                                            <p className="text-primary text-[17px] leading-[50px] tracking-[0.16em] font-bold">Black</p>
                                        </div>
                                        <div
                                            className="flex flex-col items-center transition-transform transform hover:scale-105 active:scale-110 cursor-pointer"
                                            onClick={() => setImageSrc('asset/images/landing-page/merch-white.png')}
                                            >
                                            <div className="border border-primary rounded-[15px] p-1">
                                                <img src="asset/images/landing-page/merch-white.png" alt="" className="w-[80px] h-[60px]"/>
                                            </div>
                                            <p className="text-primary text-[17px] leading-[50px] tracking-[0.16em] font-bold">White</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col w-full justify-center items-center md:gap-10 gap-10">
                                    <div className="">
                                        <div className="flex flex-col justify-center items-center md:items-start">
                                            <p className="text-primary text-[24px] md:text-[33px] font-medium leading-[24px] tracking-[0.03em]">Baju Build-IT 2024</p>
                                            <p className="font-extrabold text-[24px] tracking-[0.03em] leading-[24px] mt-5">Rp 100.000</p>
                                        </div>
                                        <div className="hidden md:block divider h-[2px] w-full md:w-[417px] bg-primary mt-5"></div>
                                        <p className="text-[14px] leading-[21px] w-full md:w-[387px] mt-5 text-center md:text-start">
                                            Baju limited edition BUILD IT 2024. Dengan bahan yang adem dan desain yang kece, cocok digunakan kemana saja.
                                        </p>
                                        <a href="https://bit.ly/POMerchandiseBuildIT2024" target="_blank">
                                            <div className="bg-primary rounded-[10px] d-block max-w-[417px] h-[50px] p-5 text-white text-[20px] leading-[26px] tracking-[0.03em] flex justify-center items-center mt-3 hover:bg-secondary cursor-pointer shadow-lg">
                                                Order Now
                                            </div>
                                        </a>
                                    </div>

                                    <div className="flex flex-col border border-primary rounded-[10px] w-full md:w-[417px]">
                                        <div className="flex flex-row p-5 justify-start gap-3">
                                            <img src="asset/images/landing-page/pre-order.png" alt="" className="w-[44px] h-[45px]"/>
                                            <div className="flex flex-col">
                                                <p className="text-[16px] font-medium leading-[24px]">{batchInfo.batchName}</p>
                                                <p className="font-medium text-[12px] leading-[18px] underline">{batchInfo.batchDate}</p>
                                            </div>
                                        </div>
                                        <div className="border-t border-primary"></div>
                                        <div className="flex flex-row p-5 justify-start gap-3">
                                            <img src="asset/images/landing-page/pickup.png" alt="" className="w-[44px] h-[45px]"/>
                                            <div className="flex flex-col">
                                                <p className="text-[16px] font-medium leading-[24px]">Pick-up Offline</p>
                                                <p className="font-medium text-[12px] leading-[18px] w-[200px] md:w-[292px]">Gedung Teknologi Informasi, Universitas Udayana, 
                                                Jimbaran, Bali</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </UserGuest>
        </>
    );
}

const AccordionLanding = ({heading, description, isOpen, onClick}) => {
    return(
        <div className="w-full md:w-[636px] border border-primary rounded-[10px] m-2 p-2 shadow-lg">
            <button
                className="w-full px-4 py-2 text-left focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                onClick={onClick}
            >
            <div className="flex items-center justify-between">
                <span className="text-[15px] md:text-lg font-semibold text-gray-900">{heading}</span>
                {/* icon arrow */}
                <svg
                    className={`w-6 h-6 transition-transform transform ${
                    isOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                    />
                </svg>
            </div>
        </button>
        {isOpen && (
            <div className="px-4 py-2 text-gray-700">
                {description}
            </div>
        )}
    </div>
    );
}

const CardMatkul = ({ heading, description, button, image, url }) => {
    const [bacaSelengkapnya, setbacaSelengkapnya] = useState(false);

    const toggleDescription = () => {
        setbacaSelengkapnya(!bacaSelengkapnya);
    };

    return (
        <div className="border-primary rounded-[10px] shadow-lg transition-transform transform hover:scale-105 active:scale-110" data-aos="fade-up">
            <div className="border-2 border-primary rounded-t-[10px] w-full md:w-[348px] h-full md:h-[250px] p-10 flex justify-center items-center shadow-lg">
                <img src={image} alt="" className="w-[213px] h-[213px]" />
            </div>
            <div className="bg-primary w-full md:w-[348px] md:h-[250] h-full border-2 border-primary rounded-b-[10px] p-5 shadow-lg">
                <p className="text-[15px] leading-[24px] tracking-[0.01em] font-bold text-white md:text-start text-center">
                    {heading}
                </p>
                <p className={`mt-5 text-white text-[14px] leading-[20px] tracking-[0.2px] md:text-start text-center text-wrap ${
                    bacaSelengkapnya ? '' : 'line-clamp-4'
                }`}
                    style={{
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: bacaSelengkapnya ? '' : 4,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                    }}
                >
                    {description}
                </p>
                <button 
                    onClick={toggleDescription} 
                    className="text-white font-bold text-[14px] mt-2 leading-[0.05em] hover:underline md:text-start text-center w-full">
                    {bacaSelengkapnya ? 'Tampilkan Lebih Sedikit' : 'Baca Selengkapnya'}
                </button>
                <a href={url} className="text-primary font-bold text-[14px] font-bold leading-[24px] tracking-[0.2px]">
                    <button className="flex justify-center items-center gap-2 mt-5 bg-white rounded-[37px] w-full md:w-[147px] h-full md:h-[44px] hover:bg-primer md:p-0 p-3">
                        {button}
                        <ArrowRight />
                    </button>
                </a>
            </div>
        </div>
    );
}

const CardContact = ({name, wa, line}) => {
    return(
        <div className="bg-primer/50 p-5 flex gap-5 border border-primary/20 rounded-[10px]" data-aos="fade-up">
            <IconContactCard />
            <div className="flex flex-col">
                <p className="text-primary text-[18px] font-extrabold">{name}</p>
                <p className="text-primary text-[14px] font-medium">{wa}</p>
                <p className="text-primary text-[14px] font-medium">{line}</p>
            </div>
        </div>
    );
}

const NextArrow = ({ onClick }) => {
    return (
        <div
            className="absolute top-1/2 right-0 font-bold transform -translate-y-1/2 z-10 cursor-pointer bg-secondary text-white p-2 rounded-full"
            onClick={onClick}
        >
            &gt;
        </div>
    );
};

const PrevArrow = ({ onClick }) => {
    return (
        <div
            className="absolute top-1/2 left-0 font-bold transform -translate-y-1/2 z-10 cursor-pointer bg-secondary text-white p-2 rounded-full"
            onClick={onClick}
        >
            &lt;
        </div>
    );
};

const MerchPopup = ({ isOpen, onClose }) => {
    const images = [
        'asset/images/landing-page/merch-black.png',
        'asset/images/landing-page/merch-white.png'
    ];

    if (!isOpen) return null;

    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <div className="fixed inset-0 bg-none md:bg-gray-800 bg-opacity-20 md:bg-opacity-75 flex justify-center items-center z-50">
            <div className="bg-gray-300 md:bg-white rounded-[10px] p-8 h-max w-11/12 md:w-2/5">
                <div className="flex justify-between">
                    <h2 className="text-md md:text-xl font-bold mb-4">Merchandise BUILD IT 2024</h2>
                    <button
                        className="text-gray-500 rounded hover:text-gray-900"
                        onClick={onClose}
                    >
                        <i className="pi pi-times" style={{ fontSize: '1.5rem' }}></i>
                    </button>
                </div>
                <div className="relative">
                    <Slider {...settings}>
                        {images.map((image, index) => (
                            <div key={index}>
                                <img src={image} alt={`Merchandise ${index + 1}`} className="w-full h-auto md:h-[350px] mb-4 animate-bounce-merch" />
                            </div>
                        ))}
                    </Slider>
                </div>
                <p className="text-gray-700 mb-4 text-center">
                    T-shirt BUILD IT 2024. Dapatkan baju limited edition ini dengan bahan yang adem dan desain yang kece.
                </p>
                <div className="flex justify-between">
                    <p className="text-lg font-bold mb-4">Rp 100.000</p>
                    <a href="https://bit.ly/POMerchandiseBuildIT2024" target="_blank">
                        <div className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary cursor-pointer">
                            Order Now
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};