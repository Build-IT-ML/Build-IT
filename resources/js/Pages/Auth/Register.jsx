import { Head, useForm, Link } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import { KotakModulPrimary, KotakModulPx102, KotakModulSecondary, KotakModulPx41 } from "../../Components/Icons/modul";
import { ViewPassword, HidePassword } from "@/Components/Icons/login";
import UserGuest from "@/Components/Layouts/User/UserGuest";


export default function Register() {
    const [passwordVisible, setPasswordVisible] = useState(false);

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

    const submit = (e) => {
        e.preventDefault();

        post(route('register.store'));
    };


    const togglePasswordVisibility = () => {
        setPasswordVisible(true);
        setTimeout(() => {
            setPasswordVisible(false);
        }, 1000);
    };

    return (
        <>
            <Head title="Pendaftaran" />
            <UserGuest>
                <div className="w-full overflow-hidden bg-[url('asset/images/auth-img/bg-image.png')] bg-cover bg-fixed bg-center bg-no-repeat">
                    {/* <img
                        src="asset/images/modul/banner-modul.png"
                        alt="banner"    
                        className="absolute z-0 w-screen object-center rounded-none h-full object-cover"
                    /> */}
                    {/* <img
                        src="asset/images/auth-img/layer-kotak.png"
                        alt="banner"    
                        className="absolute z-0 w-screen object-center rounded-none h-full object-cover"
                    /> */}
                    <div className="h-max w-full px-6 md:px-24">
                        <div className="flex flex-col justify-between mt-20 mb-36">
                            <div className="flex flex-col z-20">
                            <div className="flex justify-center">
                                <div className="flex flex-col space-y-4 p-10 rounded-xl h-full items-center bg-white border border-primary/50 shadow-lg z-10">
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
                                    <form onSubmit={submit} className="space-y-5">
                                        <div className="flex flex-col gap-2 w-full">
                                            <label htmlFor='nim' className="font-semibold text-black text-base">NIM</label>
                                            <input 
                                                type="text" 
                                                name="nim"
                                                id="nim" 
                                                value={data.nim}
                                                onChange={(e) => setData('nim', e.target.value)}
                                                className={`border-2 rounded-lg focus:outline-none focus:ring-1  text-black p-2 ${errors.nim ? "border-red-500 focus:ring-red-500" : "border-primary focus:ring-primary"}`}
                                                required   
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
                                                value={data.name}
                                                onChange={(e) => setData('name', e.target.value)} 
                                                className={`border-2 rounded-lg focus:outline-none focus:ring-1  text-black p-2 ${errors.name ? "border-red-500 focus:ring-red-500" : "border-primary focus:ring-primary"}`}
                                                required
                                            />
                                            <small className="text-red-500">
                                                {errors.name}
                                            </small>
                                        </div>
                                        <div className="flex flex-col gap-2 w-full">
                                            <label htmlFor="email" className="font-semibold text-black text-base">Email</label>
                                            <input 
                                                type="email" 
                                                name="email" 
                                                id="email"
                                                value={data.email}
                                                onChange={(e) => setData('email', e.target.value)} 
                                                className={`border-2 rounded-lg focus:outline-none focus:ring-1  text-black p-2 ${errors.email ? "border-red-500 focus:ring-red-500" : "border-primary focus:ring-primary"}`}
                                                required
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
                                                value={data.line}
                                                onChange={(e) => setData('line', e.target.value)} 
                                                className={`border-2 rounded-lg focus:outline-none focus:ring-1  text-black p-2 ${errors.line ? "border-red-500 focus:ring-red-500" : "border-primary focus:ring-primary"}`}
                                                required
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
                                                onChange={(e) => setData('whatsapp', e.target.value)} 
                                                className={`border-2 rounded-lg focus:outline-none focus:ring-1  text-black p-2 ${errors.whatsapp ? "border-red-500 focus:ring-red-500" : "border-primary focus:ring-primary"}`}
                                                required
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
                                                    required
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
                                            <input 
                                                type="password" 
                                                name="password_confirmation" 
                                                id="password_confirmation" 
                                                onChange={(e) => setData('password_confirmation', e.target.value)} 
                                                className={`w-full border-2 rounded-lg focus:outline-none focus:ring-1  text-black p-2 ${errors.password_confirmation ? "border-red-500 focus:ring-red-500" : "border-primary focus:ring-primary"}`}
                                                required
                                            />
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
                                <div className="absolute top-[700px] left-[400px] animate-bounce-custom">
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