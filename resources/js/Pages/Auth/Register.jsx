import { Head, useForm, Link } from "@inertiajs/react";
import React, { useState, useEffect, useRef } from "react";
import { KotakModulPrimary, KotakModulPx102, KotakModulSecondary, KotakModulPx41 } from "../../Components/Icons/modul";
import { ViewPassword, HidePassword } from "@/Components/Icons/login";
import UserGuest from "@/Components/Layouts/User/UserGuest";
import { Toast } from 'primereact/toast';
import { useMountEffect } from 'primereact/hooks';
import { Messages } from 'primereact/messages';

export default function Register() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [passwordConfirmVisible, setPasswordConfirmVisible] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        nim: '',
        name: '',
        email: '',
        line: '',
        whatsapp: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const registerClose = () => {
        const closingDate = new Date('2024-08-28');
        const currentDate = new Date();

        if (currentDate > closingDate) {
            return true;
        } else {
            return false;
        }
    }

    const toast = useRef(null);
    const submit = (e) => {
        e.preventDefault();

        if (registerClose()) {
            toast.current.show({ severity: 'error', summary: 'Peringatan', detail: 'Maaf, pendaftaran Build-IT 2024 telah ditutup', life: 3000 });
            return;
        }
        
        if (!data.nim || !data.name || !data.email || !data.line || !data.whatsapp || !data.password || !data.password_confirmation) {
            toast.current.show({ severity: 'error', summary: 'Peringatan', detail: 'Semua field wajib diisi', life: 3000 });
            return;
        }
        
        const formatEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!formatEmail.test(data.email)) {
            toast.current.show({ severity: 'error', summary: 'Format Email Salah', detail: 'Mohon masukkan email yang valid', life: 3000 });
            return;
        }

        post(route('register.store'), {
            onSuccess: () => {
                toast.current.show({ severity: 'success', summary: 'Berhasil', detail: 'Berhasil melakukan pendaftaran', life: 3000 })
                }, 
                onError: (error) => {
                toast.current.show({ severity: 'error', summary: 'Gagal melakukan pendaftaran', detail: 'Periksa kembali formulir pendaftaran', life: 3000 })
                }  
            });
        };


    const togglePasswordVisibility = () => {
        setPasswordVisible(true);
        setTimeout(() => {
            setPasswordVisible(false);
        }, 1000);
    };

    const togglePasswordConfirmVisibility = () => {
        setPasswordConfirmVisible(true);
        setTimeout(() => {
            setPasswordConfirmVisible(false);
        }, 1000);
    };


    // alert message if register date is over
    const msgs = useRef(null);
    useMountEffect(() => {
        if (registerClose()) {
            if (msgs.current) {
                msgs.current.clear();
                msgs.current.show({ id: '1', sticky: true, severity: 'error', icon: 'pi', summary: 'Maaf, pendaftaran Build-IT 2024 telah ditutup', detail: '', closable: false });
            }
        }
    }); 

    return (
        <>
            <Head title="Pendaftaran" />
            <UserGuest>
            <Toast ref={toast} />
                <div className="w-full overflow-hidden bg-[url('/asset/images/auth-img/bg-image.png')] bg-cover bg-fixed bg-center bg-no-repeat">
                    <div className="h-max w-full px-6 md:px-24">
                        <div className="flex flex-col justify-between mt-20 mb-36">
                            <div className="flex flex-col z-20">
                            <div className="flex justify-center">
                                <div className="flex flex-col space-y-4 p-10 rounded-xl h-full items-center bg-white border border-primary/50 shadow-lg z-10 w-full md:w-max">
                                    <div className="flex justify-center w-full">
                                        <img 
                                            src="asset/images/iconic.png" 
                                            alt="Logo BUILD IT 2024" 
                                            className="flex justify-center"
                                            width={158}
                                            height={166}
                                        />
                                    </div>
                                    <h1 className="w-full text-center text-lg text-black pt-3 mt-2">Pendaftaran BUILD IT</h1>
                                    <form onSubmit={submit} className="space-y-5 w-full">
                                        <div className="flex flex-col gap-2 w-full">
                                        <Messages ref={msgs} />
                                            <label htmlFor='nim' className="font-semibold text-black text-base">NIM</label>
                                            <input 
                                                type="text" 
                                                name="nim"
                                                id="nim" 
                                                maxLength={10}
                                                value={data.nim}
                                                onChange={(e) => setData('nim', e.target.value)}
                                                className={`border-2 rounded-lg focus:outline-none focus:ring-1 text-black p-2 ${errors.nim ? "border-red-500 focus:ring-red-500" : "border-primary focus:ring-primary"}`}                                               
                                                autoFocus
                                            />
                                            <small className="text-red-500">
                                                {errors.nim }
                                            </small>
                                        </div>
                                        <div className="flex flex-col gap-2 w-full">
                                            <label htmlFor="name" className="font-semibold text-black text-base">Nama</label>
                                            <input 
                                                type="text" 
                                                name="name" 
                                                id="name"
                                                maxLength={120}
                                                value={data.name}
                                                onChange={(e) => setData('name', e.target.value)} 
                                                className={`border-2 rounded-lg focus:outline-none focus:ring-1  text-black p-2 ${errors.name ? "border-red-500 focus:ring-red-500" : "border-primary focus:ring-primary"}`}
                                                autoFocus
                                            />
                                            <small className="text-red-500">
                                                {errors.name}
                                            </small>
                                        </div>
                                        <div className="flex flex-col gap-2 w-full">
                                            <label htmlFor="email" className="font-semibold text-black text-base">Email</label>
                                            <input  
                                                name="email" 
                                                id="email"
                                                maxLength={120}
                                                value={data.email}
                                                onChange={(e) => setData('email', e.target.value)} 
                                                className={`border-2 rounded-lg focus:outline-none focus:ring-1  text-black p-2 ${errors.email ? "border-red-500 focus:ring-red-500" : "border-primary focus:ring-primary"}`}
                                                autoFocus
                                            />
                                            <small className="text-red-500">
                                                {errors.email}
                                            </small>
                                        </div>
                                        <div className="flex flex-col gap-2 w-full">
                                            <label htmlFor="line" className="font-semibold text-black text-base">ID Line</label>
                                            <input 
                                                type="text" 
                                                name="line" 
                                                id="line"
                                                maxLength={120}
                                                value={data.line}
                                                onChange={(e) => setData('line', e.target.value)} 
                                                className={`border-2 rounded-lg focus:outline-none focus:ring-1  text-black p-2 ${errors.line ? "border-red-500 focus:ring-red-500" : "border-primary focus:ring-primary"}`}
                                                autoFocus
                                            />
                                            <small className="text-red-500">
                                                {errors.line}
                                            </small>
                                        </div>
                                        <div className="flex flex-col gap-2 w-full">
                                            <label htmlFor="whatsapp" className="font-semibold text-black text-base">Whatsapp</label>
                                            <input 
                                                type="text" 
                                                name="whatsapp" 
                                                id="whatsapp"
                                                maxLength={120}
                                                onChange={(e) => setData('whatsapp', e.target.value)} 
                                                className={`border-2 rounded-lg focus:outline-none focus:ring-1  text-black p-2 ${errors.whatsapp ? "border-red-500 focus:ring-red-500" : "border-primary focus:ring-primary"}`}
                                                autoFocus
                                            />
                                            <small className="text-red-500">
                                                {errors.whatsapp}
                                            </small>
                                        </div>
                
                                        <div className="flex flex-col gap-2 w-full">
                                            <label htmlFor="password" className="font-semibold text-black text-base">Password</label>
                                            <div className="flex relative items-center w-full">
                                                <input 
                                                    type={passwordVisible ? "text" : "password"} 
                                                    name="password" 
                                                    id="password" 
                                                    onChange={(e) => setData('password', e.target.value)} 
                                                    className={`w-full border-2 rounded-lg focus:outline-none focus:ring-1  text-black p-2 ${errors.password ? "border-red-500 focus:ring-red-500" : "border-primary focus:ring-primary"}`}
                                                    autoFocus
                                                />
                                                <button 
                                                    type="button" 
                                                    className="absolute w-10 h-10 right-1"
                                                    onClick={togglePasswordVisibility}
                                                >
                                                    {passwordVisible ? (
                                                        <ViewPassword />
                                                    ) : (
                                                        <HidePassword />
                                                    )}
                                                </button>
                                            </div>
                                            <small className="text-red-500">
                                                {errors.password}
                                            </small>
                                        </div>
                                        <div className="flex flex-col gap-2 w-full">
                                            <label htmlFor="password_confirmation" className="font-semibold text-black text-base">Konfirmasi Password</label>
                                            <div className="flex relative items-center w-full">
                                                <input 
                                                    type={passwordConfirmVisible ? "text" : "password"}  
                                                    name="password_confirmation" 
                                                    id="password_confirmation" 
                                                    onChange={(e) => setData('password_confirmation', e.target.value)} 
                                                    className={`w-full border-2 rounded-lg focus:outline-none focus:ring-1  text-black p-2 ${errors.password_confirmation ? "border-red-500 focus:ring-red-500" : "border-primary focus:ring-primary"}`}
                                                    
                                                />
                                                <button 
                                                    type="button" 
                                                    className="absolute w-10 h-10 right-1"
                                                    onClick={togglePasswordConfirmVisibility}
                                                >
                                                    {passwordConfirmVisible ? (
                                                        <ViewPassword />
                                                    ) : (
                                                        <HidePassword />
                                                    )}
                                                </button>
                                            </div>
                                            <small className="text-red-500">
                                                {errors.password_confirmation}
                                            </small>
                                        </div>
                                        
                                        <div className="btn-cta mt-5 flex justify-center items-center w-full">
                                            <button type="submit" className="py-3 px-6 bg-primary hover:bg-secondary font-bold text-white rounded-lg transition-all duration-300 text-center w-[470px]">
                                                Daftar
                                            </button>
                                        </div>
                                    </form>
                                    <p>Sudah punya akun?
                                        <Link href={route('login')} className="text-primary"> Masuk</Link>
                                    </p>
                                </div>
                            </div>
                
                                <div className="absolute top-[400px] left-[80px] animate-bounce-custom">
                                    <KotakModulPx102 />
                                </div>     
                                <div className="absolute top-[700px] left-[80px] md:left-[400px] animate-bounce-custom">
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
            </UserGuest>
        </>
    );
}
