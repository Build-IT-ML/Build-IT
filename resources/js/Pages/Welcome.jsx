import { Head, Link } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import { Button } from 'primereact/button';
import DisableInspect from '@/Utils/disableInspect';
import Modal from "@/Libs/ModalsDialog";

import Navbar from "../Components/Navbar";

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
            <div className="flex flex-col items-center gap-3 justify-center pt-28 overflow-x-hidden h-screen w-full">
                <h1 className="text-slate-800 text-4xl font-bold">Coba Di Click 🚀</h1>

                <div className="card flex gap-2 justify-content-center">
                    <div className="card flex justify-content-center">
                        <Button label="Click Me" icon="pi pi-check" onClick={showModal} className="bg-blue-500 rounded-md px-3 py-2" />

                        <Modal
                            visible={modalVisible}
                            onHide={hideModal}
                            header="Halo Bro"
                            maximizable={false}
                            position="center"
                            style={{ width: '50vw' }} breakpoints={{ '960px': '75vw', '641px': '100vw' }}
                            footer={footerContent}
                        >
                            <div>
                                <h2>Salken Gw Rama</h2>
                                <p>Nama Loe Syp bro ? 😃😄</p>
                            </div>
                        </Modal>
                    </div>
                </div>
            </div>
        </>
    );
}
