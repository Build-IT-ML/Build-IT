import { Head } from "@inertiajs/react";
import React, { useState } from "react";
import { Button } from 'primereact/button';
import Modal from "@/Libs/ModalsDialog";
import { Menubar } from 'primereact/menubar';

import { KotakModulPrimary, KotakModulPx102, KotakModulSecondary, KotakModulPx41 } from "../../Components/Icons/modul";
import UserGuest from "../../Components/Layouts/User/UserGuest";

export default function BasisData() {
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
            <UserGuest>

                <Head title="Basis Data" />
                <div className="w-full overflow-hidden">
                    <img
                        src="../../../asset/images/modul/banner-modul.png"
                        alt="banner"
                        className="absolute z-0 w-screen object-center rounded-none h-[850px] h-full object-cover"
                    />
                    <div className="h-max w-full px-6 md:px-24">
                        <div className="flex justify-between mt-20 mb-96">
                            <div className="flex flex-col z-20">
                                <p className="text-white text-[36px] font-bold leading-[50px] tracking-[0.16em]">
                                    BASIS DATA
                                </p>
                                <p className="text-white mt-10 text-[20px] w-[817px]">
                                    Mata kuliah Basis Data merupakan salah satu mata kuliah penting dalam bidang teknologi informasi yang membahas tentang konsep, desain, implementasi, dan manajemen basis data. Mata kuliah ini juga mencakup penggunaan SQL (Structured Query Language) untuk manipulasi data, serta pemahaman tentang manajemen basis data yang aman dan andal.
                                </p>
                                <button className="mt-5 bg-primary hover:bg-secondary w-[166px] h-[52px] rounded-[5px] flex justify-center items-center text-white text-14 font-bold">
                                    Lihat Modul
                                </button>
                                <div className="absolute top-[600px] left-[80px] animate-bounce-custom">
                                    <KotakModulPx102 />
                                </div>
                                <div className="absolute top-[800px] left-[400px] animate-bounce-custom">
                                    <KotakModulPx41 />
                                </div>
                            </div>
                            <div className="absolute right-0 animate-bounce-custom">
                                <KotakModulPrimary />
                            </div>
                            <div className="absolute right-[200px] top-[280px] animate-bounce-custom">
                                <KotakModulSecondary />
                            </div>
                            <div className="w-full mt-20 flex justify-center mb-36">
                                <img src="../../../asset/images/modul/alprog-image.png" alt="test"
                                    className="w-[441px] h-[248px] rounded-[10px] relative right-0 object-cover z-[4]" />
                            </div>
                        </div>
                    </div>
                    <div className="px-24 mt-96 mb-36">
                        <div className="flex flex-col justify-center items-center z-10">
                            <h1 className="font-sans text-center font-bold text-primary text-[36px] tracking-widest">
                                PENGISI MATERI
                            </h1>
                            <div className="divider h-[2px] w-[706px] bg-primary mt-2"></div>
                            <p className="w-[935px] text-center mt-3 text-[20px] leading-[28px] tracking-[0.2px]">
                                Pengisi materi untuk matakuliah Basis Data pada BUILD IT 2024 merupakan ex-asisten dosen pada praktikum Basis Data.
                            </p>
                        </div>
                        <div className="flex flex-row justify-around mt-36">
                            <div>
                                <div className="bg-gradient-to-t from-secondary to-white rounded-t-[10px] w-[285px] h-[310px] flex justify-center items-end shadow-lg z-20">
                                    <img src="../../../asset/images/modul/temp-image.png" alt="" className="max-w-full h-[380px] z-10" />
                                </div>

                                <div className="bg-white w-[284px] h-[93px] border-2 rounded-b-[10px] p-5 shadow-lg flex flex-col justify-center items-center">
                                    <p className="text-[24px] font-medium leading-[24px]">
                                        Made Cristiano
                                    </p>
                                    <p className="mt-5 text-[22px] font-bold">
                                        TI' 22
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className="mt- bg-gradient-to-t from-secondary to-white rounded-t-[10px] w-[285px] h-[310px] flex justify-center items-end shadow-lg z-20">
                                    <img src="../../../asset/images/modul/temp-image.png" alt="" className="max-w-full h-[380px] z-10" />
                                </div>
                                <div className="bg-white w-[284px] h-[93px] border-2 rounded-b-[10px] p-5 shadow-lg flex flex-col justify-center items-center">
                                    <p className="text-[24px] font-medium leading-[24px]">
                                        Made Cristiano
                                    </p>
                                    <p className="mt-5 text-[22px] font-bold">
                                        TI' 22
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className="mt- bg-gradient-to-t from-secondary to-white rounded-t-[10px] w-[285px] h-[310px] flex justify-center items-end shadow-lg z-20">
                                    <img src="../../../asset/images/modul/temp-image.png" alt="" className="max-w-full h-[380px] z-10" />
                                </div>
                                <div className="bg-white w-[284px] h-[93px] border-2 rounded-b-[10px] p-5 shadow-lg flex flex-col justify-center items-center">
                                    <p className="text-[24px] font-medium leading-[24px]">
                                        Made Cristiano
                                    </p>
                                    <p className="mt-5 text-[22px] font-bold">
                                        TI' 22
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className="mt- bg-gradient-to-t from-secondary to-white rounded-t-[10px] w-[285px] h-[310px] flex justify-center items-end shadow-lg z-20">
                                    <img src="../../../asset/images/modul/temp-image.png" alt="" className="max-w-full h-[380px] z-10" />
                                </div>
                                <div className="bg-white w-[284px] h-[93px] border-2 rounded-b-[10px] p-5 shadow-lg flex flex-col justify-center items-center">
                                    <p className="text-[24px] font-medium leading-[24px]">
                                        Nyoman Cristiano
                                    </p>
                                    <p className="mt-5 text-[22px] font-bold">
                                        TI' 22
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </UserGuest>
        </>
    );
}
