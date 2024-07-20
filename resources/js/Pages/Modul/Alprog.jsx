import { Head, Link } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import { Button } from 'primereact/button';
import DisableInspect from '@/Utils/disableInspect';
import Modal from "@/Libs/ModalsDialog";
import { Menubar } from 'primereact/menubar';

import { BackDrop } from "../../Components/Icons/Backdrop";

export default function Welcome() {
    const [modalVisible, setModalVisible] = useState(false);

    // useEffect(() => {
    //     const cleanup = DisableInspect();
    //     return () => cleanup();
    // }, []);

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
            <Head title="Algoritma dan Pemrograman" />
            <div className="flex flex-col z-10">
                <h1 className="text-4xl">ALGORITMA DAN PEMROGRAMAN</h1>
                <div className="">
                    <p className="">

                    </p>
                    <img src="" alt="" />
                </div>
                <Button className="text-white text-[14px] font-bold leading-[22px] tracking-[0.02em] bg-primary w-[163px] h-[52px] rounded-[5px] flex justify-center text-center hover:bg-secondary">Lihat Modul</Button>
            </div>
            <div className="z-0">
                <BackDrop/>
            </div>
        </>
    );
}
