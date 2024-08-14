import { Head, useForm, Link } from "@inertiajs/react";
import React, { useState, useEffect, useRef } from "react";
import { KotakModulPrimary, KotakModulPx102, KotakModulSecondary, KotakModulPx41 } from "../../Components/Icons/modul";
import { ViewPassword, HidePassword } from "@/Components/Icons/login";
import UserGuest from "@/Components/Layouts/User/UserGuest";
import { Toast } from 'primereact/toast';


export default function Daftar() {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        nim: '',
        password: ''
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const toast = useRef(null);
    const submit = (e) => {
        e.preventDefault();

        if (!data.nim || !data.password) {
            toast.current.show({ severity: 'error', summary: 'Peringatan', detail: 'Semua field wajib diisi', life: 3000 });
            return;
        }
        post(route('login'), {
            onSuccess: () => {
                toast.current.show({ severity: 'success', summary: 'Berhasil', detail: 'Berhasil melakukan Login', life: 3000 })
                }, 
                onError: (error) => {
                toast.current.show({ severity: 'error', summary: 'Gagal melakukan Login', detail: 'Periksa kembali NIM dan password anda', life: 3000 })
                }  
            });
    };


    const togglePasswordVisibility = () => {
        setPasswordVisible(true);
        setTimeout(() => {
            setPasswordVisible(false);
        }, 1000);
    };

    return (
        <>
            <Head title="Login" />
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
                                    <h1 className="w-full text-center text-lg text-black pt-3 mt-2">Login BUILD IT</h1>
                                    <form onSubmit={submit} className="space-y-5 w-full">
                                        <div className="flex flex-col gap-2 w-full">
                                            <label htmlFor='nim' className="font-semibold text-black text-base">NIM</label>
                                            <input 
                                                type="text" 
                                                name="nim"
                                                id="nim" 
                                                value={data.nim}
                                                onChange={(e) => setData('nim', e.target.value)}
                                                className={`border-2 rounded-lg focus:outline-none focus:ring-1  text-black p-2 ${errors.nim ? "border-red-500 focus:ring-red-500" : "border-primary focus:ring-primary"}`}
                                                autoFocus
                                            />
                                            <small className="text-red-500">
                                                {errors.nim }
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
                                                    className="absolute w-10 h-6 right-1"
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
                                        
                                        <div className="btn-cta mt-5 flex justify-center items-center w-full">
                                            <button type="submit" className="py-3 px-6 bg-primary hover:bg-secondary font-bold text-white rounded-lg transition-all duration-300 text-center w-[470px]">
                                                Login
                                            </button>
                                        </div>
                                    </form>

                                    <p>Belom punya akun?
                                        <Link href={route('register')} className="text-primary"> Daftar</Link>
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
