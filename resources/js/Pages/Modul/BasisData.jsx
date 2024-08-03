import { Head } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import { Button } from 'primereact/button';
import Modal from "@/Libs/ModalsDialog";
import { Menubar } from 'primereact/menubar';

import { KotakModulPrimary, KotakModulPx102, KotakModulSecondary, KotakModulPx41 } from "../../Components/Icons/modul";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function BasisData() {
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
            <Head title="Basis Data" />
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
                                BASIS DATA
                            </p>
                            <p className="text-white mt-10 text-[16px] md:text-start text-center md:text-[20px] md:w-[817px] w-full" data-aos="fade-up">
                                Mata kuliah Basis Data merupakan salah satu mata kuliah penting dalam bidang teknologi informasi yang membahas tentang konsep, desain, implementasi, dan manajemen basis data. Mata kuliah ini juga mencakup penggunaan SQL (Structured Query Language) untuk manipulasi data, serta pemahaman tentang manajemen basis data yang aman dan andal.
                            </p>
                            <button className="mt-5 bg-primary hover:bg-secondary w-full md:w-[166px] h-[52px] rounded-[5px] flex justify-center items-center text-white text-14 font-bold" data-aos="fade-up">
                                <a href="https://drive.google.com/file/d/1KpEzEqiPZcyfoP2cxeLdPdsgyTy81IMO/view?usp=drive_link" target="_blank" className="">Lihat Modul</a>
                            </button>
                            <div className="absolute top-[800px] md:top-[600px] left-[80px] animate-bounce-custom z-0" data-aos="fade-up">
                                <KotakModulPx102 />
                            </div>     
                            <div className="absolute top-[700px] md:top-[800px] left-[200px] md:left-[400px] animate-bounce-custom" data-aos="fade-up">
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
                            <img src="../../../asset/images/modul/basis-image.JPG" alt="test" 
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
                            Pengisi materi untuk matakuliah Basis Data pada BUILD IT 2024 merupakan ex-asisten dosen pada praktikum Basis Data.
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row justify-around gap-20 md:gap-0 items-center mt-36">
                        <CardPembicara imageSrc="../../../asset/images/modul/bayu_riz.png" name="Bayu Rizki" batch="TI' 22" />
                        <CardPembicara imageSrc="../../../asset/images/modul/dwita.png" name="Dwita" batch="TI' 22" />
                        <CardPembicara imageSrc="../../../asset/images/modul/nanta.png" name="Rapriananta" batch="TI' 22" />
                        <CardPembicara imageSrc="../../../asset/images/modul/ekaputra.png" name="Eka Putra" batch="TI' 22" />
                    </div>
                </div>
            </div>
        </>
    );
}

function CardPembicara({ imageSrc, name, batch }) {
    return (
      <div data-aos="fade-up" className="flex justify-center items-center">
        <div className="relative w-[285px] h-[403px] cursor-pointer transform-style-preserve-3d transition-transform duration-700 hover-rotate-y-180">
          <div className="absolute w-full h-full bg-white backface-hidden border-2 border-gray-300 rounded-lg shadow-lg flex flex-col justify-end items-center">
            <div className="bg-gradient-to-t from-secondary to-white rounded-t-[10px] w-full h-[310px] flex justify-center items-end shadow-lg z-20 backface-hidden">
              <img src={imageSrc} alt={name} className="max-w-full h-[380px] z-10 backface-hidden" />
            </div>
            <div className="bg-white w-full h-[93px] border-2 rounded-b-[10px] p-5 shadow-lg flex flex-col justify-center items-center backface-hidden">
              <p className="text-[24px] font-medium leading-[24px]">
                {name}
              </p>
              <p className="mt-5 text-[22px] font-bold">
                {batch}
              </p>
            </div>
          </div>
          <div className="absolute w-full h-full bg-white backface-hidden border-2 border-gray-300 rounded-lg shadow-lg flex flex-col justify-center items-center rotate-y-180 p-5 gap-5">
                <h1 className="text-2xl font-bold">Tentang Saya</h1>
                <p className="text-sm text-gray-600 text-center">
                    Ini adalah deskripsi tentang {name} dari angkatan {batch}.
                </p>
                <a href="" className="text-primary">
                    <i className="pi pi-linkedin" style={{ fontSize: '1.5rem' }}></i>
                </a>
          </div>
        </div>
      </div>
    );
  }

