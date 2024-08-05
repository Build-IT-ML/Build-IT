import React, { useState } from "react";
import { Head,usePage, useForm } from "@inertiajs/react";
import AdminAuthentication from "@/Components/Layouts/AdminAuthentication";

export default function Submission() {
   const {user} = usePage().props;
   const {data, setData, processing, put, errors} = useForm(
      {
         alprog: user.tugas_alprog,
         jarkom: user.tugas_jarkom,
         basisdata: user.tugas_basis,
      }
   );

   function submit(e){
      e.preventDefault();

      put(route('participant.addsubmissions'))
   }

   return(
      <AdminAuthentication user={user} headerTitle="Pengumpulan Tugas Peserta">
         <Head title="Participant Submission"/>
            {user.status === 'Belum Terverifikasi' || user.status === 'Ditolak' && (
               <div className="flex flex-col justify-center items-center space-y-10 min-h-screen">
                  <h1 className="font-bold text-red-500 text-xl">Halaman pengumpulan tugas tersedia jika status peserta sudah terverifikasi</h1>
                  <span><i className="pi pi-exclamation-circle text-[10rem] text-red-500"></i></span>
               </div>
            ) }

            {user.status === 'Terverifikasi' && (
               <div className="space-y-12">
                  <form onSubmit={submit} className="space-y-5">
                     <div className="flex flex-col gap-2 w-full">
                        <h3 className="text-xl text-primary font-bold">Link Pengumpulan Tugas Algoritma & Pemrograman</h3>
                        <label htmlFor='alprog' className="text-primary/80 text-base">Link Google Drive</label>
                        <div className="space-x-4">
                           <input 
                              type="text" 
                              name="alprog"
                              id="alprog" 
                              value={data.alprog}
                              onChange={(e) => setData('alprog', e.target.value)}
                              className={`bg-secondary/20 w-1/2 border-2 rounded-lg focus:outline-none focus:ring-1  text-primary p-2 ${errors.nim ? "border-red-500 focus:ring-red-500" : "border-primary focus:ring-primary"}`}
                           />
                           <button type="submit" className="py-3 px-6 bg-primary hover:bg-secondary font-bold text-white rounded-lg transition-all duration-300 text-center">
                              Submit
                           </button>
                        </div>
                        <small className="text-red-500">
                           {errors.alprog}
                        </small>
                     </div>
                     <div className="flex flex-col gap-2 w-full">
                        <h3 className="text-xl text-primary font-bold">Link Pengumpulan Tugas Basis Data</h3>
                        <label htmlFor='basisdata' className="text-primary/80 text-base">Link Google Drive</label>
                        <div className="space-x-4">
                           <input 
                              type="text" 
                              name="basisdata"
                              id="basisdata" 
                              value={data.basisdata}
                              onChange={(e) => setData('basisdata', e.target.value)}
                              className={`bg-secondary/20 w-1/2 border-2 rounded-lg focus:outline-none focus:ring-1  text-primary p-2 ${errors.nim ? "border-red-500 focus:ring-red-500" : "border-primary focus:ring-primary"}`}
                           />
                           <button type="submit" className="py-3 px-6 bg-primary hover:bg-secondary font-bold text-white rounded-lg transition-all duration-300 text-center">
                              Submit
                           </button>
                        </div>
                        <small className="text-red-500">
                           {errors.basisdata}
                        </small>
                     </div>
                     <div className="flex flex-col gap-2 w-full">
                        <h3 className="text-xl text-primary font-bold">Link Pengumpulan Tugas Jaringan dan Komputer</h3>
                        <label htmlFor='jarkom' className="text-primary/80 text-base">Link Google Drive</label>
                        <div className="space-x-4">
                           <input 
                              type="text" 
                              name="jarkom"
                              id="jarkom" 
                              value={data.jarkom}
                              onChange={(e) => setData('jarkom', e.target.value)}
                              className={`bg-secondary/20 w-1/2 border-2 rounded-lg focus:outline-none focus:ring-1  text-primary p-2 ${errors.nim ? "border-red-500 focus:ring-red-500" : "border-primary focus:ring-primary"}`}
                           />
                           <button type="submit" className="py-3 px-6 bg-primary hover:bg-secondary font-bold text-white rounded-lg transition-all duration-300 text-center">
                              Submit
                           </button>
                        </div>
                        <small className="text-red-500">
                           {errors.jarkom}
                        </small>
                     </div>
                  </form>   
               </div>
            )}
      </AdminAuthentication>
   )
}