import { Head } from "@inertiajs/react";
import React, { useState } from "react";
import { Button } from 'primereact/button';
import Modal from "@/Libs/ModalsDialog";
import { Menubar } from 'primereact/menubar';

import { KotakModulPrimary, KotakModulPx102, KotakModulSecondary, KotakModulPx41 } from "../Components/Icons/modul";
import { Card } from "primereact/card";


export default function Login() {
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
            <Head title="Login Page" />
            <div className="w-full overflow-hidden">
                <img
                    src="asset/images/modul/banner-modul.png"
                    alt="banner"    
                    className="absolute z-0 w-screen object-center rounded-none h-[800px] h-full object-cover"
                />
                <div className="h-max w-full px-6 md:px-24">
                    <div className="flex flex-col justify-between mt-20 mb-96">
                        <div className="flex flex-col z-20">
                        <div className="flex justify-center pt-[80px]">
                            <Card className="flex flex-col gap-3 w-[602px] h-full items-center">
                                <div className="flex justify-center w-full">
                                    <img 
                                        src="asset/images/iconic.png" 
                                        alt="Logo BUILD IT 2024" 
                                        className="flex justify-center"
                                        width={158}
                                        height={166}
                                    />
                                </div>
                                <h1 className="flex justify-center text-lg text-black">Login</h1>
                                <div className="flex flex-col gap-4 w-full">
                                    <h2 className="font-semibold text-black text-[20px]">NIM</h2>
                                    <input 
                                        type="text" 
                                        name="nim" 
                                        id="" 
                                        className="w-[470px] h-[36px] border-2 border-primary rounded-lg focus:outline-none focus:ring-1 focus:ring-primary text-black"
                                    />
                                </div>
                                <div className="flex flex-col gap-4 mt-8 w-full">
                                    <h2 className="font-semibold text-black text-[20px]">Password</h2>
                                    <input 
                                        type="password" 
                                        name="password" 
                                        id="" 
                                        className="w-[470px] h-[36px] border-2 border-primary rounded-lg focus:outline-none focus:ring-1 focus:ring-primary text-black"
                                    />
                                </div>
                                <div className="btn-cta mt-5 flex justify-center items-center w-full">
                                    <a href="#" rel="noopener noreferrer" className="py-3 px-6 bg-primary hover:bg-secondary font-bold text-white rounded-lg transition-all duration-300 text-center w-[470px]">
                                        Login
                                    </a>
                                </div>
                                <p className="text-black pt-3">*Login with your NIM</p>
                            </Card>
                        </div>

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
                        
                    </div>
                </div>
            </div>
        </>
    );
}
