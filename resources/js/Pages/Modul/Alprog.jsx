import { Head } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import { Button } from 'primereact/button';
import Modal from "@/Libs/ModalsDialog";
import { Menubar } from 'primereact/menubar';

import { KotakModulPrimary, KotakModulPx102, KotakModulSecondary, KotakModulPx41 } from "../../Components/Icons/modul";
import AOS from 'aos';
import 'aos/dist/aos.css';

import UserGuest from "@/Components/Layouts/User/UserGuest";


export default function Alprog() {
    const [modalVisible, setModalVisible] = useState(false);

    const showModal = () => {
        setModalVisible(true);
    };

    const hideModal = () => {
        setModalVisible(false);
    };

    useEffect(() => {
        AOS.init({
          duration: 1000, // Durasi animasi dalam milidetik
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
            <Head title="Algoritma dan Pemrograman" />
            <UserGuest>
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
                                    ALGORITMA DAN PEMROGRAMAN
                                </p>
                                <p className="text-white mt-10 text-[16px] md:text-start text-center md:text-[20px] md:w-[817px] w-full text-balance" data-aos="fade-up">
                                    Mata kuliah Algoritma dan Pemrograman adalah fondasi penting dalam pendidikan ilmu komputer yang berfokus pada pengenalan konsep dasar algoritma dan teknik pemrograman. Mahasiswa akan mempelajari bagaimana merancang, menganalisis, dan mengimplementasikan algoritma untuk memecahkan berbagai masalah komputasi. Mata kuliah ini mencakup topik-topik seperti struktur data, pengendalian alur program, pemrosesan data, dan teknik pemecahan masalah.
                                </p>
                                <a href="https://drive.google.com/file/d/1KpEzEqiPZcyfoP2cxeLdPdsgyTy81IMO/view?usp=drive_link" target="_blank" className="">                            
                                    <button className="mt-5 bg-primary hover:bg-secondary w-full md:w-[166px] h-[52px] rounded-[5px] flex justify-center items-center text-white text-14 font-bold" data-aos="fade-up">Lihat Modul
                                    </button>
                                </a>
                                <div className="absolute top-[900px] md:top-[600px] left-[80px] animate-bounce-custom z-0" data-aos="fade-up">
                                    <KotakModulPx102 />
                                </div>     
                                <div className="absolute top-[1000px] md:top-[800px] left-[200px] md:left-[400px] animate-bounce-custom" data-aos="fade-up">
                                    <KotakModulPx41 />
                                </div>     
                            </div>
                            <div className="hidden md:block absolute right-0 animate-bounce-custom" data-aos="fade-up">
                                <KotakModulPrimary />
                            </div>
                            <div className="absolute right-0 md:right-[200px] top-[760px] md:top-[280px] animate-bounce-custom" data-aos="fade-up">
                                <KotakModulSecondary />
                            </div>
                            <div className="w-full mt-20 flex justify-center mb-36">
                                <img src="../../../asset/images/modul/alprog-image.png" alt="test" 
                                className="w-[441px] h-[248px] rounded-[10px] relative right-0 object-cover z-20"/>
                            </div>
                        </div>
                    </div>
                    <div className="px-6 md:px-24 mt-36 md:mt-96 mb-36">
                        <div className="flex flex-col justify-center items-center z-10">
                            <h1 className="font-sans text-center font-bold text-primary text-[24px] md:text-[36px] tracking-widest" data-aos="fade-up">
                                PENGISI MATERI
                            </h1>
                            <div className="divider h-[2px] w-full md:w-[706px] bg-primary mt-2"></div>
                            <p className="w-full md:w-[935px] text-center mt-3 text-[20px] leading-[28px] tracking-[0.2px]" data-aos="fade-left">
                                Pengisi materi untuk matakuliah Algoritma dan Pemrograman pada BUILD IT 2024 merupakan ex-asisten dosen pada praktikum Algoritma dan Pemrogaman.
                            </p>
                        </div>
                        <div className="flex flex-col md:flex-row justify-around gap-20 md:gap-0 items-center mt-36">
                            <CardPembicara 
                            imageSrc="../../../asset/images/modul/devta.png" 
                            name="Devta" 
                            batch="Angkatan 2022"
                            quotation=""
                            userInstagram="https://instagram.com/devtadanarsa" />
                            <CardPembicara 
                            imageSrc="../../../asset/images/modul/liangga.png" 
                            name="Liangga" 
                            batch="Angkatan 2022"
                            quotation="Lupakan harga diri, mari menggunakan ChaGPT"
                            userInstagram="https://instagram.com/lianggaa_" />
                            <CardPembicara 
                            imageSrc="../../../asset/images/modul/wahtu.png" 
                            name="Wahtu" 
                            batch="Angkatan 2022"
                            quotation=""
                            userInstagram="https://instagram.com/wahtu.astrawan" />
                            <CardPembicara 
                            imageSrc="../../../asset/images/modul/gekna.png" 
                            name="Gekna" 
                            batch="Angkatan 2022"
                            quotation="Algoritma dan pemrograman itu menantang, khususnya di semester 1. Kuasai konsep awal dengan matang, jangan terburu-buru dan jangan risau kalau menghadapi masalah. Tetap ingat kalau gagal itu adalah bagian dari proses belajar, keep up the spirit!"
                            userInstagram="https://instagram.com/yukrisnadewi" />
                        </div>
                    </div>
                </div>
            </UserGuest>
        </>
    );
}

function CardPembicara({ imageSrc, name, batch, quotation, userInstagram }) {
    return (
        <div data-aos="fade-up" className="flex justify-center items-center">
        <div className="relative w-[285px] h-[403px] cursor-pointer transform-style-preserve-3d transition-transform duration-700 hover-rotate-y-180">
            <div className="absolute w-full h-full bg-white backface-hidden border-gray-300 rounded-lg flex flex-col justify-end items-center">
                <div className="bg-gradient-to-t from-secondary to-white rounded-t-[10px] w-full h-[310px] flex justify-center items-end z-20 backface-hidden overflow-hidden">
                    <img src={imageSrc} alt={name} className="absolute w-auto h-[385px] z-10 backface-hidden" />
                </div>
                <div className="bg-white w-full h-[130px] border-2 rounded-b-[10px] p-5 shadow-lg flex flex-col justify-center items-center backface-hidden gap-3">
                <p className="text-[24px] font-medium leading-[24px] text-primary">
                    {name}
                </p>
                <p className="text-[20px] font-bold text-gray-700">
                    {batch}
                </p>
                <p className="text-[14px] font-medium text-gray-500">
                    Teknologi Informasi
                </p>
                </div>
            </div>
            <div className="absolute w-full h-full bg-white backface-hidden border-2 border-gray-300 rounded-lg shadow-lg flex flex-col justify-between items-center rotate-y-180 p-5 gap-5">
                <div className="flex justify-start items-start w-full">
            {/* icon petik */}
                <svg width="30" height="30" viewBox="0 0 455 489" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M153.503 57.8625L160.986 32.2766C160.986 10.761 149.438 0.00157356 126.348 0.00157356C111.389 0.00157356 95.7765 14.6988 79.5094 44.0875L56.6766 85.0235C18.8953 156.13 0 233.406 0 316.852C0 374.316 8.66094 417.217 25.9766 445.556C44.6109 473.895 72.0281 488.067 108.239 488.067C138.414 488.067 160.589 478.753 174.761 460.119C190.502 441.228 198.375 413.414 198.375 376.678C198.375 307.141 172.661 272.375 121.227 272.375H93.2844L88.5603 238.128C88.5603 191.686 103.648 142.748 133.824 91.3141L153.503 57.8609M416.424 32.275C416.424 10.7594 405.273 0 382.971 0C364.074 0 347.809 14.6972 334.162 44.0859L313.299 85.0219C293.884 123.066 279.321 161.639 269.61 200.739C260.168 239.575 255.444 278.278 255.444 316.852C255.444 374.316 264.496 417.217 282.599 445.556C300.446 473.895 327.6 488.067 364.075 488.067C393.989 488.067 416.56 478.753 431.775 460.119C446.998 441.228 454.602 413.414 454.602 376.678C454.602 307.141 428.888 272.375 377.46 272.375H349.511L342.822 238.128C342.822 221.6 348.071 196.539 358.563 162.952L387.695 91.3141L408.948 57.8609L416.424 32.275Z" fill="#6AD5BF"/>
                </svg>
            </div>
                <p className="text-sm text-gray-600 text-center">
                    {quotation}
                </p>
            <div className="flex justify-end items-end w-full">
                <svg width="30" height="30" viewBox="0 0 456 491" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M303.399 430.684L296.095 456.322C296.245 477.837 307.868 488.515 330.957 488.354C345.917 488.249 361.426 473.443 377.487 443.941L400.033 402.847C437.316 331.478 455.671 254.071 455.087 170.628C454.685 113.165 445.725 70.3255 428.211 42.1082C409.379 13.9001 381.864 -0.0797429 345.654 0.173459C315.479 0.384456 293.37 9.85323 279.329 28.5864C263.721 47.5866 256.042 75.4551 256.299 112.19C256.785 181.726 282.741 216.311 334.175 215.951L362.116 215.756L367.08 249.969C367.404 296.41 352.659 345.452 322.843 397.096L303.399 430.686M40.6628 458.11C40.8133 479.625 52.0394 490.306 74.3409 490.15C93.2373 490.018 109.4 475.207 122.841 445.724L143.417 404.643C162.566 366.464 176.858 327.79 186.295 288.623C195.466 249.722 199.919 210.987 199.649 172.414C199.248 114.952 189.896 72.1144 171.595 43.9026C153.551 15.689 126.298 1.70733 89.8235 1.96238C59.9102 2.17155 37.4056 11.6431 22.3206 30.3836C7.23088 49.3802 -0.178831 77.2467 0.0780423 113.982C0.564278 183.518 26.5209 218.103 77.9477 217.743L105.895 217.548L112.824 251.747C112.94 268.274 107.866 293.372 97.6096 327.032L68.9784 398.871L47.9597 432.472L40.6628 458.11Z" fill="#6AD5BF"/>
                </svg>
            </div>
            <a href={userInstagram} target="_blank" className="text-primary flex flex-row justify-center items-center gap-2">
                <i className="pi pi-instagram" style={{ fontSize: '1.5rem' }}></i>
                <p className="text-[20px]">Instagram</p>
            </a>
            </div>
            </div>
        </div>
        );
    }
