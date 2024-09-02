import React, { useState, useRef} from "react";
import { Head,usePage, useForm } from "@inertiajs/react";
import AdminAuthentication from "@/Components/Layouts/AdminAuthentication";
import { Toast } from 'primereact/toast';

export default function Submission() {
   const {user} = usePage().props;
   
   const {data, setData, processing, put, errors, transform} = useForm(
      {
         alprog: user.tugas_alprog,
         jarkom: user.tugas_jarkom,
         basis: user.tugas_basis,
      }
   );

   const toast = useRef(null);

   function submitAlprog(e){
      e.preventDefault();

      put(route('participant.submitalprog'), {
         onSuccess: () => {
            toast.current.show({ severity: 'success', summary: 'Berhasil', detail: 'Berhasil mengirimkan penugasan Algoritma dan Pemrograman', life: 3000 })
         }, 
         onError: (error) => {
            toast.current.show({ severity: 'error', summary: 'Gagal', detail: 'Gagal mengirimkan penugasan Algoritma dan Pemrograman', life: 3000 })
         }  
      })
   }

   function submitBasis(e){
      e.preventDefault();

      put(route('participant.submitbasis'), {
         onSuccess: () => {
            toast.current.show({ severity: 'success', summary: 'Berhasil', detail: 'Berhasil mengirimkan penugasan Basis Data', life: 3000 })
         }, 
         onError: (error) => {
            toast.current.show({ severity: 'error', summary: 'Gagal', detail: 'Gagal mengirimkan penugasan Basis Data', life: 3000 })
         }  
      })
   }

   function submitJarkom(e){
      e.preventDefault();

      put(route('participant.submitjarkom'), {
         onSuccess: () => {
            toast.current.show({ severity: 'success', summary: 'Berhasil', detail: 'Berhasil mengirimkan penugasan Jaringan Komputer dan Komunikasi', life: 3000 })
         }, 
         onError: (error) => {
            toast.current.show({ severity: 'error', summary: 'Gagal', detail: 'Gagal mengirimkan penugasan Jaringan Komputer dan Komunikasi', life: 3000 })
         }  
      })
   }

   function checkInput(matkul){
      if (data[matkul] === user['tugas_' + matkul]) {
         return true;
      } else {
         return false
      }
   }

   return(
      <AdminAuthentication user={user} headerTitle="Pengumpulan Tugas Peserta">
         <Head title="Participant Submission"/>
         <Toast ref={toast} />
            {(user.status === 'Belum Terverifikasi'  || user.status === 'Ditolak') && (
               <div className="flex flex-col justify-center items-center space-y-10 min-h-screen">
                  <h1 className="font-bold text-red-500 text-xl">Halaman pengumpulan tugas tersedia jika status peserta sudah terverifikasi</h1>
                  <span><i className="pi pi-exclamation-circle text-[10rem] text-red-500"></i></span>
               </div>
            ) }

            {user.status === 'Terverifikasi' && (
               <div className="space-y-6">
                     <form onSubmit={submitAlprog} className="flex flex-col gap-2 w-full">
                        <h3 className="text-xl text-primary font-bold">Link Pengumpulan Tugas Algoritma & Pemrograman</h3>
                        <label htmlFor='alprog' className="text-primary/80 text-base">Link Reporistory Github</label>
                        <div className="space-y-4 md:space-x-4">
                           <input 
                              type="text" 
                              name="alprog"
                              id="alprog" 
                              value={data.alprog}
                              onChange={(e) => setData('alprog', e.target.value)}
                              className={`bg-secondary/20 w-full md:w-7/12 border-2 rounded-lg focus:outline-none focus:ring-1  text-primary p-2 ${errors.alprog ? "border-red-500 focus:ring-red-500" : "border-primary focus:ring-primary"}`}
                           />
                           <button type="submit"
                           disabled={checkInput('alprog')}
                           className="py-3 px-6 bg-primary hover:bg-secondary font-bold text-white rounded-lg transition-all duration-300 text-center disabled:bg-primary/80" 
                           >
                              Submit
                           </button>
                        </div>
                        <small className="text-red-500">
                           {errors.alprog}
                        </small>
                     </form>
                     <form onSubmit={submitBasis} className="flex flex-col gap-2 w-full">
                        <h3 className="text-xl text-primary font-bold">Link Pengumpulan Tugas Basis Data</h3>
                        <label htmlFor='basis' className="text-primary/80 text-base">Link Google Drive</label>
                        <div className="space-y-4 md:space-x-4">
                           <input 
                              type="text" 
                              name="basis"
                              id="basis" 
                              value={data.basis}
                              onChange={(e) => setData('basis', e.target.value)}
                              className={`bg-secondary/20 w-full md:w-7/12 border-2 rounded-lg focus:outline-none focus:ring-1  text-primary p-2 ${errors.basis ? "border-red-500 focus:ring-red-500" : "border-primary focus:ring-primary"}`}
                           />
                           <button
                           disabled={checkInput('basis')} 
                           type="submit" className="py-3 px-6 bg-primary hover:bg-secondary font-bold text-white rounded-lg transition-all duration-300 text-center disabled:bg-primary/80">
                              Submit
                           </button>
                        </div>
                        <small className="text-red-500">
                           {errors.basis}
                        </small>
                     </form>
                     <form onSubmit={submitJarkom} className="flex flex-col gap-2 w-full">
                        <h3 className="text-xl text-primary font-bold">Link Pengumpulan Tugas Jaringan Komputer dan Komunikasi</h3>
                        <label htmlFor='jarkom' className="text-primary/80 text-base">Link Google Drive</label>
                        <div className="space-y-4 md:space-x-4">
                           <input 
                              type="text" 
                              name="jarkom"
                              id="jarkom" 
                              value={data.jarkom}
                              onChange={(e) => setData('jarkom', e.target.value)}
                              className={`bg-secondary/20 w-full md:w-7/12 border-2 rounded-lg focus:outline-none focus:ring-1  text-primary p-2 ${errors.jarkom ? "border-red-500 focus:ring-red-500" : "border-primary focus:ring-primary"}`}
                           />
                           <button 
                           disabled={checkInput('jarkom')}
                           type="submit" className="py-3 px-6 bg-primary hover:bg-secondary font-bold text-white rounded-lg transition-all duration-300 text-center disabled:bg-primary/80">
                              Submit
                           </button>
                        </div>
                        <small className="text-red-500">
                           {errors.jarkom}
                        </small>
                     </form> 
               </div>
            )}
      </AdminAuthentication>
   )
}