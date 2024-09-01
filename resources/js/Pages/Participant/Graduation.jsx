import React, { useState, useRef } from "react";
import { Head, usePage, useForm } from "@inertiajs/react";
import AdminAuthentication from "@/Components/Layouts/AdminAuthentication";
import { Toast } from 'primereact/toast';
import ButtonViewCertificate from "@/Components/ButtonSertificate";

export default function Graduation() {
   const { user } = usePage().props;

   const { data, setData, processing, put, errors, transform } = useForm(
      {
         name: user.name,
         nim: user.nim,
         kelulusan: user.kelulusan,
      }
   );

   const toast = useRef(null);


   return (
      <AdminAuthentication user={user} headerTitle="Hasil Kelulusan Peserta">
         <Head title="Graduation Information" />
         <Toast ref={toast} />
         {(data.kelulusan === 'Belum Lulus') && (
            <div className="flex flex-col justify-center items-center space-y-10 min-h-screen">
               <h1 className="font-bold text-orange-500 text-4xl">Belum Terdapat Informasi Kelulusan</h1>
               <span><i className="pi pi-exclamation-circle text-[14rem] text-orange-500"></i></span>
            </div>
         )}

         {data.kelulusan === 'Lulus' && (
            <div className="flex flex-col justify-center items-center space-y-10 min-h-screen">
               <h1 className="font-bold text-primary text-4xl">Selamat Anda Telah Lulus BUILD IT 2024</h1>
               <span><i className="pi pi-star text-[14rem] text-primary"></i></span>
               <div className="flex flex-col justify-center items-center text-primary font-semibold">
                  <h2>NIM : {data.nim}</h2>
                  <h2>Nama : {data.name}</h2>
               </div>

               <ButtonViewCertificate
                  userName={data.name}
                  status={data.kelulusan === 'Lulus'}
               />
               {/* <a href="https://drive.google.com/drive/folders/1R9Q3GWaLoUIKSWwN8S6K_BwuNSfd39tt?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <button className="py-3 px-6 bg-primary hover:bg-secondary font-bold text-white rounded-lg transition-all duration-300 text-center disabled:bg-primary/80">
                     Cari Sertifikat
                  </button>
               </a> */}
            </div>
         )}

         {data.kelulusan === "Tidak Lulus" && (
            <div className="flex flex-col justify-center items-center space-y-10 min-h-screen">
               <h1 className="font-bold text-red-500 text-4xl">Maaf Anda Tidak Lulus BUILD IT 2024</h1>
               <span><i className="pi pi-times-circle text-[14rem] text-red-500"></i></span>
               <div className="flex flex-col justify-center items-center text-red-500 font-semibold">
                  <h2>Semangat mengikuti BUILD IT 2025</h2>
                  <h2>Sampai Jumpa Tahun Depan</h2>
               </div>
            </div>
         )}
      </AdminAuthentication>
   )
}