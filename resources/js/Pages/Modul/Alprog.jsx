import { Head } from "@inertiajs/react";
import React, { useState } from "react";
import { Button } from 'primereact/button';
import Modal from "@/Libs/ModalsDialog";
import { Menubar } from 'primereact/menubar';

import { KotakModulPrimary, KotakModulPx102, KotakModulSecondary, KotakModulPx41 } from "../../Components/Icons/modul";


export default function Alprog() {
    const [modalVisible, setModalVisible] = useState(false);

    const showModal = () => {
        setModalVisible(true);
    };

    const hideModal = () => {
        setModalVisible(false);
    };

    const footerContent = (
        <div className="flex justify-end gap-4">
            <Button label="No" icon="pi pi-times" onClick={hideModal} className="p-button-text" />
            <Button label="Yes" icon="pi pi-check" onClick={hideModal} autoFocus />
        </div>
    );

    return (
        <>
            <Head title="Algoritma dan Pemrograman" />
            <div className="w-full overflow-hidden">
                <img
                    src="../../../asset/images/modul/banner-modul.png"
                    alt="banner"    
                    className="absolute z-0 w-screen object-center rounded-none h-[850px] object-cover"
                />
                <div className="h-max w-full px-6 md:px-24">
                    <div className="flex flex-col md:flex-row justify-between mt-20 mb-20 md:mb-96">
                        <div className="flex flex-col z-20">
                            <p className="text-white  text-[32px] md:text-[36px] font-bold leading-[50px] tracking-[0.16em] text-wrap md:text-start text-center">
                                ALGORITMA DAN PEMROGRAMAN
                            </p>
                            <p className="text-white mt-10 text-[16px] md:text-start text-center md:text-[20px] md:w-[817px] w-full">
                                Mata kuliah Algoritma dan Pemrograman adalah fondasi penting dalam pendidikan ilmu komputer yang berfokus pada pengenalan konsep dasar algoritma dan teknik pemrograman. Mahasiswa akan mempelajari bagaimana merancang, menganalisis, dan mengimplementasikan algoritma untuk memecahkan berbagai masalah komputasi. Mata kuliah ini mencakup topik-topik seperti struktur data, pengendalian alur program, pemrosesan data, dan teknik pemecahan masalah.
                            </p>
                            <button className="mt-5 bg-primary hover:bg-secondary w-full md:w-[166px] h-[52px] rounded-[5px] flex justify-center items-center text-white text-14 font-bold">
                                Lihat Modul
                            </button>
                            <div className="absolute top-[900px] md:top-[600px] left-[80px] animate-bounce-custom z-0">
                                <KotakModulPx102 />
                            </div>     
                            <div className="absolute top-[700px] md:top-[800px] left-[200px] md:left-[400px] animate-bounce-custom">
                                <KotakModulPx41 />
                            </div>     
                        </div>
                        <div className="hidden md:block absolute right-0 animate-bounce-custom">
                            <KotakModulPrimary />
                        </div>
                        <div className="absolute right-0 md:right-[200px] top-[760px] md:top-[280px] animate-bounce-custom">
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
                        <h1 className="font-sans text-center font-bold text-primary text-[24px] md:text-[36px] tracking-widest">
                            PENGISI MATERI
                        </h1>
                        <div className="divider h-[2px] w-full md:w-[706px] bg-primary mt-2"></div>
                        <p className="w-full md:w-[935px] text-center mt-3 text-[20px] leading-[28px] tracking-[0.2px]">
                            Pengisi materi untuk matakuliah Algoritma dan Pemrograman pada BUILD IT 2024 merupakan ex-asisten dosen pada praktikum Algoritma dan Pemrogaman.
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row justify-around gap-20 md:gap-0 items-center mt-36">
                        <div>
                            <div className="bg-gradient-to-t from-secondary to-white rounded-t-[10px] w-[285px] h-[310px] flex justify-center items-end shadow-lg z-20">
                                <img src="../../../asset/images/modul/devta.png" alt="" className="max-w-full h-[380px] z-10"/>
                            </div>

                            <div className="bg-white w-[285px] h-[93px] border-2 rounded-b-[10px] p-5 shadow-lg flex flex-col justify-center items-center">
                                <p className="text-[24px] font-medium leading-[24px]">
                                    Devta
                                </p>
                                <p className="mt-5 text-[22px] font-bold">
                                    TI' 22
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="mt- bg-gradient-to-t from-secondary to-white rounded-t-[10px] w-[285px] h-[310px] flex justify-center items-end shadow-lg z-20">
                                <img src="../../../asset/images/modul/liangga.png" alt="" className="max-w-full h-[380px] z-10"/>
                            </div>
                            <div className="bg-white w-[285px] h-[93px] border-2 rounded-b-[10px] p-5 shadow-lg flex flex-col justify-center items-center">
                                <p className="text-[24px] font-medium leading-[24px]">
                                    Liangga
                                </p>
                                <p className="mt-5 text-[22px] font-bold">
                                    TI' 22
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="mt- bg-gradient-to-t from-secondary to-white rounded-t-[10px] w-[285px] h-[310px] flex justify-center items-end shadow-lg z-20">
                                <img src="../../../asset/images/modul/gekna.png" alt="" className="max-w-full h-[380px] z-10"/>
                            </div>
                            <div className="bg-white w-[285px] h-[93px] border-2 rounded-b-[10px] p-5 shadow-lg flex flex-col justify-center items-center">
                                <p className="text-[24px] font-medium leading-[24px]">
                                    Gekna
                                </p>
                                <p className="mt-5 text-[22px] font-bold">
                                    TI' 22
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="mt- bg-gradient-to-t from-secondary to-white rounded-t-[10px] w-[285px] h-[310px] flex justify-center items-end shadow-lg z-20">
                                <img src="../../../asset/images/modul/wahtu.png" alt="" className="max-w-full h-[380px] z-10"/>
                            </div>
                            <div className="bg-white w-[285px] h-[93px] border-2 rounded-b-[10px] p-5 shadow-lg flex flex-col justify-center items-center">
                                <p className="text-[24px] font-medium leading-[24px]">
                                    Wahtu
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
