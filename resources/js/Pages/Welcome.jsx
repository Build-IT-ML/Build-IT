import { Head, Link } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import { Button } from 'primereact/button';
import DisableInspect from '@/Utils/disableInspect';
import Modal from "@/Libs/ModalsDialog";
import { Menubar } from 'primereact/menubar';

import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

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
            <Head title="Landing Page" />
            <Navbar/>
            <div className="">
                <img src="asset/images/iconic.png" alt="" />
            </div>
            <Footer/>
        </>
    );
}
