import { Head, Link } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import { Button } from 'primereact/button';
import DisableInspect from '@/Utils/disableInspect';
import Modal from "@/Libs/ModalsDialog";
import { Menubar } from 'primereact/menubar';
import { Accordion, AccordionTab } from 'primereact/accordion';
import 'primereact/resources/themes/saga-blue/theme.css'; 
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import { IconBuiltIT, IconKotakTop, IconKotakCenter, IconKotakBottom,IconHouseOffline, IconBookSharing, IconHumanSharing, ArrowRight, IconKotakTimeLine, IconFaq } from "../Components/Icons/LandingPage";

export default function Welcome() {
    const [modalVisible, setModalVisible] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    // useEffect(() => {
    //     const cleanup = DisableInspect();
    //     return () => cleanup();
    // }, []);

    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };

    const showModal = () => {
        setModalVisible(true);
    };

    const hideModal = () => {
        setModalVisible(false);
    };

    const footerContent = (
        <div className="flex justify-end gap-4">
            <Button label="No" icon="pi pi-times" onClick={() => setModalVisible(false)} className="p-button-text" />
            <Button label="Yes" icon="pi pi-check" onClick={() => setModalVisible(false)} autoFocus />
        </div>
    );

    return (
        <>
            <Head title="Landing Page" />
                <div className="w-full overflow-hidden">
                    <img
                        src="asset/images/banner-landing.png"
                        alt="banner"
                        className="absolute z-0 w-screen object-center rounded-none h-[620px] object-cover opacity-20"
                    />
                    <div className="h-max w-full px-6 md:px-24">
                        <div className="flex justify-between mb-5 z-20">
                            <div className="flex flex-col mt-20 mb-5 w-full z-10">
                                <p className="font-semibold text-[20px] text-primary leading-[24px] tracking-[0.01em] mb-3">Offline Course</p>
                                    <IconBuiltIT />
                                <p className="font-normal text-[20px] text-primary w-[494px] mt-5">
                                    Basic Understanding in Learning and Developing Information Technology merupakan kegiatan yang bertujuan mewadahi mahasiswa untuk menerima pemahaman lebih tentang materi dasar perkuliahan.
                                </p>

                                <div className="button mt-4 flex gap-4">
                                    <Button className="text-white text-[14px] font-bold leading-[22px] tracking-[0.02em] bg-primary w-[163px] h-[52px] rounded-[5px] flex justify-center text-center hover:bg-secondary">Guide Book</Button>
                                    <Button className="text-primary text-[14px] font-bold leading-[22px] tracking-[0.02em] border-primary border-2 w-[163px] h-[52px] rounded-[5px] flex justify-center text-center hover:bg-secondary">Register Now</Button>
                                </div>
                            </div>
                            <div className="w-full right-side mt-16">
                                <div className="static">
                                    <div
                                    className="relative left-[80px] top-[0] animate-bounce-custom"
                                    alt="gambar"
                                    >
                                        <IconKotakTop />
                                    </div>
                                    <div className="relative">
                                        {/* image1.png */}
                                        <img
                                            src="asset/images/landing-page/image-1.png"
                                            alt="gambar"
                                            className="max-w-full h-[240px] rounded-[10px] object-cover absolute top-[-30px] left-[150px] z-[2]"
                                        />
                                        {/* image2.png */}
                                        <img
                                            src="asset/images/landing-page/image-2.png"
                                            alt="gambar"
                                            className="max-w-full h-[175px] rounded-[10px] object-cover absolute bottom-[80px] left-[40px] z-[4]"
                                        />
                                        {/* image3.png */}
                                        <img
                                            src="asset/images/landing-page/image-3.png"
                                            alt="gambar"
                                            className="max-w-full h-[175px] rounded-[10px] object-cover absolute bottom-[80px] left-[395px] z-[4]"
                                        />
                                        <div
                                            alt="gambar"
                                            className="max-w-full h-[445px] relative bottom-[80px] left-[380px] animate-bounce-custom"
                                        >
                                            <IconKotakCenter /> 
                                        </div>
                                    </div>
                                    <div
                                        className="flex relative bottom-[50px] left-[200px] animate-bounce-custom"
                                        width={40}
                                        height={40}
                                    >
                                        <IconKotakBottom />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 3 card */}
                    <div className="px-24 py-10 bg-gradient-to-t from-secondary to-primary flex justify-between     h-full md:h-max z-50">
                        <div className="bg-white w-[420px] h-[288px] rounded-[10px] p-10 flex flex-col">
                            <IconHouseOffline />
                            <div className="divider h-[2px] w-[50px] bg-primary mt-3"></div>
                            <p className="mt-3 font-bold text-[16px] leading-[24px] tracking-[0.01em]">
                                3 Offline Course
                            </p>
                            <p className="text-[#737373] mt-3 font-normal text-[14px] leading-[20px] tracking-[0.02em]">
                                Membantu mahasiswa baru memahami mata kuliah dasar di perkuliahan seperti algoritma & pemrograman, basis data, dan jaringan komputer
                            </p>
                        </div>
                        <div className="bg-white w-[420px] h-[288px] rounded-[10px] p-10 flex flex-col">
                            <IconBookSharing />
                            <div className="divider h-[2px] w-[50px] bg-primary mt-3"></div>
                            <p className="mt-3 font-bold text-[16px] leading-[24px] tracking-[0.01em]">
                                Sharing Session Lomba & Penjurusan
                            </p>
                            <p className="text-[#737373] mt-3 font-normal text-[14px] leading-[20px] tracking-[0.02em]">
                                Sharing Session ini akan dipandu oleh dosen dan mahasiswa Teknologi Informasi 
                            </p>
                        </div>
                        <div className="bg-white w-[420px] h-[288px] rounded-[10px] p-10 flex flex-col">
                            <IconHumanSharing />
                            <div className="divider h-[2px] w-[50px] bg-primary mt-3"></div>
                            <p className="mt-3 font-bold text-[16px] leading-[24px] tracking-[0.01em]">Sharing Session Hacktiv8</p>
                            <p className="text-[#737373] mt-3 font-normal text-[14px] leading-[20px] tracking-[0.02em]">
                                Akan ada sharing session bersama Hacktiv8 yang merupakan pelatihan coding bootcamp terbaik di Indonesia. 
                            </p>
                        </div>
                    </div>

                    {/* about built it */}
                    <div className="px-24 mt-20 flex gap-20">
                        <img src="asset/images/landing-page/icon-build-it.png" alt="" className="mx-12 w-[390px] h-[410px] animate-bounce-custom"/>
                        <div className="mt-12 flex flex-col">
                            <p className="text-[36px] text-primary font-bold tracking-[0.16em]">
                                TENTANG BUILD IT
                            </p>
                            <div className="divider h-[2px] w-[484px] bg-primary mt-2"></div>
                            <p className="mt-10 font-normal text-[20px] w-[724px] text-justify">
                                Basic Understanding in Learning and Developing Information Technology atau yang disingkat “BUILD IT” merupakan kegiatan yang bertujuan mewadahi mahasiswa untuk menerima pemahaman lebih tentang materi dasar perkuliahan di luar kegiatan belajar mengajar serta mempersiapkan diri untuk mengikuti perlombaan di bidang Teknologi Informasi melalui Workshop Gemastik.
                            </p>
                        </div>
                    </div>
                    <div
                        className="flex relative mt-20 left-[800px] animate-pulse animate-bounce-custom"
                        width={40}
                        height={40}
                    >
                        <IconKotakBottom />
                    </div>

                    {/* mata kuliah dasar build it */}

                    <div className="px-24 mt-20 flex flex-col justify-center">
                        <div className="flex flex-col justify-center items-center">
                            <p className="text-center text-primary font-bold text-[36px] leading-[50px] tracking-[0.16em]">MATA KULIAH DASAR</p>
                            <div className="divider h-[2px] w-[706px] bg-primary mt-2"></div>
                            <p className="w-[700px] text-center mt-3 text-[20px] leading-[28px] tracking-[0.2px]">
                                Mewadahi mahasiswa baru untuk menerima pemahaman lebih
                                tentang materi dasar perkuliahan di luar kegiatan belajar mengajar
                            </p>
                        </div>

                        <div className="mt-10 flex flex-row justify-around">
                            <div className="border-primary rounded-[10px] shadow-md hover:">
                                <div className="border-2 border-primary rounded-t-[10px] w-[348px] h-[250px] p-10 flex justify-center items-center shadow-lg">
                                    <img src="asset/images/landing-page/icon-alprog.png" alt="" className="w-[213px] h-[213px]"/>
                                </div>
                                <div className="bg-primary w-[348px] h-[250] border-2 border-primary rounded-b-[10px] p-5 shadow-lg">
                                    <p className="text-[16px] leading-[24px] tracking-[0.01em] font-bold text-white">
                                        Algoritma dan Pemrograman
                                    </p>
                                    <p className="mt-5 text-white text-[14px] leading-[20px] tracking-[0.2px]">
                                        Algoritma adalah langkah-langkah logis yang jelas dan terstruktur untuk 
                                        menyelesaikan suatu masalah.
                                    </p>
                                    <button className="flex justify-center items-center gap-2 mt-5 bg-white rounded-[37px] w-[147px] h-[44px] hover:bg-primer">
                                        <a href="modul/alprog" className="text-primary font-bold text-[14px] font-bold leading-[24px] tracking-[0.2px]">
                                            Learn More
                                        </a>
                                            <ArrowRight />
                                    </button>
                                </div>
                            </div>
                            <div className="border-primary rounded-[10px] shadow-md">
                                <div className="border-2 border-primary rounded-t-[10px] w-[348px] h-[250px] p-10 flex justify-center items-center shadow-lg">
                                    <img src="asset/images/landing-page/icon-basis-data.png" alt="" className="w-[213px] h-[213px]"/>
                                </div>
                                <div className="bg-primary w-[348px] h-[250] border-2 border-primary rounded-b-[10px] p-5 shadow-lg">
                                    <p className="text-[16px] leading-[24px] tracking-[0.01em] font-bold text-white">
                                        Basis Data
                                    </p>
                                    <p className="mt-5 text-white text-[14px] leading-[20px] tracking-[0.2px]">
                                        Basis data adalah kumpulan data yang terorganisir secara sistematis 
                                        untuk memudahkan akses.
                                    </p>
                                    <button className="flex justify-center items-center gap-2 mt-5 bg-white rounded-[37px] w-[147px] h-[44px] hover:bg-primer">
                                        <a href="modul/basisData" className="text-primary font-bold text-[14px] font-bold leading-[24px] tracking-[0.2px]">
                                            Learn More
                                        </a>
                                            <ArrowRight />
                                    </button>
                                </div>
                            </div>
                            <div className="border-primary rounded-[10px] shadow-md">
                                <div className="border-2 border-primary rounded-t-[10px] w-[348px] h-[250px] p-10 flex justify-center items-center shadow-lg">
                                    <img src="asset/images/landing-page/icon-jaringan-komputer.png" alt="" className="w-[213px] h-[213px]"/>
                                </div>
                                <div className="bg-primary w-[348px] h-[250] border-2 border-primary rounded-b-[10px] p-5 shadow-lg">
                                    <p className="text-[16px] leading-[24px] tracking-[0.01em] font-bold text-white">
                                        Jaringan Komputer
                                    </p>
                                    <p className="mt-5 text-white text-[14px] leading-[20px] tracking-[0.2px]">
                                        Jaringan komputer adalah kumpulan komputer dan perangkat lainnya yang 
                                        saling terhubung untuk berbagi sumber.
                                    </p>
                                    <button className="flex justify-center items-center gap-2 mt-5 bg-white rounded-[37px] w-[147px] h-[44px] hover:bg-primer">
                                        <a href="modul/jarkom" className="text-primary font-bold text-[14px] font-bold leading-[24px] tracking-[0.2px]">
                                            Learn More
                                        </a>
                                            <ArrowRight />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Timeline Build IT */}
                    <div className="px-24 mt-40 mb-96">
                        <div className="flex flex-col justify-center items-center z-10">
                            <h1 className="font-sans text-center font-bold text-primary text-[36px] tracking-widest">
                                TIMELINE BUILD-IT 2024
                            </h1>
                            <div className="divider h-[2px] w-[692px] bg-primary mt-2"></div>
                        </div>
                            <div
                                className="flex relative left-[170px] top-[50px] animate-bounce-custom animate-pulse"
                                width={40}
                                height={40}
                            >
                                <IconKotakBottom />
                            </div>
                        <div className="flex flex-col z-10 mt-10">
                            <div className="flex flex-col gap-[120px] left-4 items-center pt-12 absolute w-1 bg-primary h-max md:left-1/2 transform md:-translate-x-1/2 z-10">
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
                            <div className="font-sans my-5 flex w-full justify-end z-10 pr-0 md:pl-20">
                                <div className="w-[310px] md:w-[466px] mr-10 p-4 bg-white border shadow-lg rounded-md ">
                                    <h3 className="text-[20px] font-bold">Open Registration Peserta</h3>
                                    <p className="text-[16px] font-medium mb-1">14 Agustus - 19 Agustus 2024
                                    </p>
                                    <p className="text-[14px]">Melalui website resmi BUILD IT https://buildit.hmtiudayana.id/</p>
                                </div>
                            </div>
                            <div className="font-sans my-5 flex w-full justify-end md:justify-start z-10 pr-0 md:pr-24">
                                <div className="w-[310px] md:w-[466px] ml-10 p-4 bg-white border shadow-lg rounded-md">
                                    <h3 className="text-[20px] font-bold">Pembukaan & Pelatihan Jarkom</h3>
                                    <p className="text-[16px] font-medium mb-1">
                                        Jumat, 6 September 2024
                                    </p>
                                    <p className="text-[14px]">Gedung TI, Fakultas Teknik, Jimbaran</p>
                                </div>
                            </div>
                            <div className="font-sans my-5 flex w-full justify-end z-10 pl-0 md:pl-20">
                                <div className="w-[310px] md:w-[466px] mr-10 p-4 bg-white border shadow-lg rounded-md">
                                    <h3 className="text-[20px] font-bold">Pelatihan Alprog & Basis Data</h3>
                                    <p className="text-[16px] font-medium mb-1">
                                    Sabtu, 7 September 2024
                                    </p>
                                    <p className="text-[14px]">Gedung TI, Fakultas Teknik, Jimbaran</p>
                                </div>
                            </div>
                            <div className="font-sans my-5 flex w-full justify-end md:justify-start z-10 pr-0 md:pr-24">
                                <div className="w-[310px] md:w-[466px] ml-10 p-4 bg-white border shadow-lg rounded-md">
                                    <h3 className="text-[20px] font-bold">Sharing Session Lomba + Penjurusan</h3>
                                    <p className="text-[16px] font-medium mb-1">
                                        Minggu, 8 September 2024
                                    </p>
                                    <p className="text-[14px]">Gedung TI, Fakultas Teknik, Jimbaran</p>
                                </div>
                            </div>
                            <div
                                alt="gambar"
                                className="max-w-[570px] h-[445px] absolute right-0 top-[3200px] animate-pulse"
                            >
                                <IconKotakTimeLine /> 
                            </div>
                            <div className="font-sans my-5 flex w-full justify-end z-10 pl-0 md:pl-20">
                                <div className="w-[310px] md:w-[466px] mr-10 p-4 bg-white border shadow-lg rounded-md">
                                    <h3 className="text-[20px] font-bold">Deadline Pengumpulan Penugasan</h3>
                                    <p className="text-[16px] font-medium mb-1">
                                        Kamis, 12 September 2024
                                    </p>
                                    <p className="text-[14px]">Melalui website resmi BUILD IT https://buildit.hmtiudayana.id/</p>
                                </div>
                            </div>
                            <div className="font-sans my-5 flex w-full justify-end md:justify-start z-10 pr-0 md:pr-24">
                                <div className="w-[310px] md:w-[466px] ml-10 p-4 bg-white border shadow-lg rounded-md">
                                    <h3 className="text-[20px] font-bold">Sharing Session Hactiv8</h3>
                                    <p className="text-[16px] font-medium mb-1">
                                        Jumat, 13 September 2024
                                    </p>
                                    <p className="text-[14px]">On Webex https://webex</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Faq */}
                    <div className="px-24">
                        <div className="flex justify-between">
                            <div className="w-1/2">
                                <div className="border-b border-gray-200">
                                <button
                                    className="w-full px-4 py-2 text-left focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                                    onClick={toggleAccordion}
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="text-lg font-medium text-gray-900">test</span>
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
                                    waw
                                    </div>
                                )}
                                </div>
                            </div>
                            <div className="w-full flex justify-center">
                                <IconFaq />
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
}
