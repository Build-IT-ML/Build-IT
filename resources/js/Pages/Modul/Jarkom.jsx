import { Head } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import { Button } from 'primereact/button';
import Modal from "@/Libs/ModalsDialog";
import { Menubar } from 'primereact/menubar';

import { KotakModulPrimary, KotakModulPx102, KotakModulSecondary, KotakModulPx41 } from "../../Components/Icons/modul";
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function JaringanKomputer() {
    const [modalVisible, setModalVisible] = useState(false);

    const showModal = () => {
        setModalVisible(true);
    };

    const hideModal = () => {
        setModalVisible(false);
    };

    useEffect(() => {
        AOS.init({
          duration: 1000, 
        });
      }, []);

      useEffect(() => {
        document.documentElement.classList.add('smooth-scroll');
      }, []);

    const footerContent = (
        <div className="flex justify-end gap-4">
            <Button label="No" icon="pi pi-times" onClick={hideModal} className="p-button-text" />
            <Button label="Yes" icon="pi pi-check" onClick={hideModal} autoFocus />
        </div>
    );

    return (
        <>
            <Head title="Jaringan Komputer" />
            <div className="w-full overflow-hidden">
                <img
                    src="../../../asset/images/modul/banner-modul.png"
                    alt="banner"    
                    className="absolute z-0 w-screen object-center rounded-none h-[850px] object-cover"
                />
                <div className="h-max w-full px-6 md:px-24">
                    <div className="flex flex-col md:flex-row justify-between mt-20 mb-20 md:mb-96">
                        <div className="flex flex-col z-20">
                            <p className="text-white  text-[32px] md:text-[36px] font-bold leading-[50px] tracking-[0.16em] text-wrap md:text-start text-center" data-aos="fade-up">
                                JARINGAN DAN KOMPUTER
                            </p>
                            <p className="text-white mt-10 text-[16px] md:text-start text-center md:text-[20px] md:w-[817px] w-full" data-aos="fade-up">
                                Mata kuliah Jaringan Komputer dan Komunikasi merupakan salah satu mata kuliah penting dalam bidang teknologi informasi yang membahas prinsip-prinsip dasar, arsitektur, dan teknologi yang digunakan dalam jaringan komputer serta komunikasi data. Mahasiswa akan mempelajari berbagai topik seperti model OSI (Open Systems Interconnection), protokol jaringan, pengalamatan IP, subnetting, routing, switching, dan keamanan jaringan.
                            </p>
                            <button className="mt-5 bg-primary hover:bg-secondary w-full md:w-[166px] h-[52px] rounded-[5px] flex justify-center items-center text-white text-14 font-bold" data-aos="fade-up">
                                Lihat Modul
                            </button>
                            <div className="absolute top-[800px] md:top-[600px] left-[80px] animate-bounce-custom z-0" data-aos="fade-up">
                                <KotakModulPx102 />
                            </div>     
                            <div className="absolute top-[1000px] md:top-[800px] left-[200px] md:left-[400px] animate-bounce-custom" data-aos="fade-up">
                                <KotakModulPx41 />
                            </div>     
                        </div>
                        <div className="hidden md:block absolute right-0 animate-bounce-custom" data-aos="fade-up">
                            <KotakModulPrimary />
                        </div>
                        <div className="absolute right-0 md:right-[200px] top-[650px] md:top-[280px] animate-bounce-custom" data-aos="fade-up">
                            <KotakModulSecondary />
                        </div>
                        <div className="w-full mt-20 flex justify-center mb-36">
                            <img src="../../../asset/images/modul/jarkom.JPG" alt="test" 
                            className="w-[441px] h-[248px] rounded-[10px] relative right-0 object-cover z-20"/>
                        </div>
                    </div>
                </div>
                <div className="px-6 md:px-24 mt-10 md:mt-36 mb-36">
                    <div className="flex flex-col justify-center items-center z-10">
                        <h1 className="font-sans text-center font-bold text-primary text-[24px] md:text-[36px] tracking-widest" data-aos="fade-up">
                            PENGISI MATERI
                        </h1>
                        <div className="divider h-[2px] w-full md:w-[706px] bg-primary mt-2"></div>
                        <p className="w-full md:w-[935px] text-center mt-3 text-[20px] leading-[28px] tracking-[0.2px]" data-aos="fade-up">
                            Pengisi materi untuk matakuliah Jaringan Komputer dan Komunikasi pada BUILD IT 2024 merupakan ex-asisten dosen pada praktikum Jaringan Komputer dan Komunikasi.
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row justify-around gap-20 md:gap-0 items-center mt-36">
                        <div data-aos="fade-up">
                            <div className="bg-gradient-to-t from-secondary to-white rounded-t-[10px] w-[285px] h-[310px] flex justify-center items-end shadow-lg z-20">
                                <img src="../../../asset/images/modul/teja.png" alt="" className="max-w-full h-[380px] z-10"/>
                            </div>

                            <div className="bg-white w-[285px] h-[93px] border-2 rounded-b-[10px] p-5 shadow-lg flex flex-col justify-center items-center">
                                <p className="text-[24px] font-medium leading-[24px]">
                                    Teja
                                </p>
                                <p className="mt-5 text-[22px] font-bold">
                                    TI' 22
                                </p>
                            </div>
                        </div>
                        <div data-aos="fade-up">
                            <div className="mt- bg-gradient-to-t from-secondary to-white rounded-t-[10px] w-[285px] h-[310px] flex justify-center items-end shadow-lg z-20">
                                <img src="../../../asset/images/modul/bayu_lobi.png" alt="" className="max-w-full h-[380px] z-10"/>
                            </div>
                            <div className="bg-white w-[285px] h-[93px] border-2 rounded-b-[10px] p-5 shadow-lg flex flex-col justify-center items-center">
                                <p className="text-[24px] font-medium leading-[24px]">
                                    Bayu Lobi
                                </p>
                                <p className="mt-5 text-[22px] font-bold">
                                    TI' 22
                                </p>
                            </div>
                        </div>
                        <div data-aos="fade-up">
                            <div className="mt- bg-gradient-to-t from-secondary to-white rounded-t-[10px] w-[285px] h-[310px] flex justify-center items-end shadow-lg z-20">
                                <img src="../../../asset/images/modul/temp-image.png" alt="" className="max-w-full h-[380px] z-10"/>
                            </div>
                            <div className="bg-white w-[285px] h-[93px] border-2 rounded-b-[10px] p-5 shadow-lg flex flex-col justify-center items-center">
                                <p className="text-[24px] font-medium leading-[24px]">
                                    Dudek
                                </p>
                                <p className="mt-5 text-[22px] font-bold">
                                    TI' 22
                                </p>
                            </div>
                        </div>
                        <div data-aos="fade-up">
                            <div className="mt- bg-gradient-to-t from-secondary to-white rounded-t-[10px] w-[285px] h-[310px] flex justify-center items-end shadow-lg z-20">
                                <img src="../../../asset/images/modul/andri.png" alt="" className="max-w-full h-[380px] z-10"/>
                            </div>
                            <div className="bg-white w-[285px] h-[93px] border-2 rounded-b-[10px] p-5 shadow-lg flex flex-col justify-center items-center">
                                <p className="text-[24px] font-medium leading-[24px]">
                                    Andri
                                </p>
                                <p className="mt-5 text-[22px] font-bold">
                                    TI' 22
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
