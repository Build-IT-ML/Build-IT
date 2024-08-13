import React, { useEffect, useRef } from "react";
import { Head,usePage } from "@inertiajs/react";
import AdminAuthentication from "@/Components/Layouts/AdminAuthentication";
import { useMountEffect } from 'primereact/hooks';
import { Messages } from 'primereact/messages';

export default function Dashboard() {
   const {user, akt21, akt22, akt23, akt24} = usePage().props;
   const title = 'Dashboard ' + (user.roles[0].name === 'admin' ? 'Admin' :  'Peserta');
   const msgs = useRef(null);

   const messagesTemplates = {
      success: 'Anda sudah berhasil mengumpulkan penugasan pelatihan ',
      warn: 'Anda belum mengumpulkan penugasan pelatihan ',
      successVerif: 'Anda sudah terverifikasi menjadi anggota Build IT 2024 dan tergabung pada kelompok ' + user.kelompok,
      warnVerif: 'Anda belum terverifikasi menjadi anggota Build IT 2024',
      rejectedVerif: 'Pendaftaran menjadi peserta Build IT 2024 DITOLAK, anda akan dihubungi lebih lanjut oleh pihak panitia'
   }

   const messages = {
      verif : {
         'msgSeverity' : user.status === 'Terverifikasi' ? 'success' : user.status === "Ditolak" ? 'error' : 'warn',
         'msgSummary' : 'Status Peserta',
         'msgDetail' : (user.status === 'Terverifikasi' ? messagesTemplates.successVerif : user.status === "Ditolak" ? messagesTemplates.rejectedVerif : messagesTemplates.warnVerif)
      },
      jarkom : {
         'msgSeverity' : user.tugas_jarkom ? 'success' : 'error',
         'msgSummary' : 'Pelatihan Jaringan Komputer',
         'msgDetail' : (user.tugas_jarkom ? messagesTemplates.success : messagesTemplates.warn) + 'Jaringan Komputer'
      },
      alprog : {
         'msgSeverity' : user.tugas_alprog ? 'success' : 'error',
         'msgSummary' : 'Pelatihan Algoritma dan Pemrograman',
         'msgDetail' : (user.tugas_alprog ? messagesTemplates.success : messagesTemplates.warn) + 'Algoritma dan Pemrograman'
      },
      basisdata : {
         'msgSeverity' : user.tugas_basis ? 'success' : 'error',
         'msgSummary' : 'Pelatihan Basis Data',
         'msgDetail' : (user.tugas_basis ? messagesTemplates.success : messagesTemplates.warn) + 'Konsep Basis Data'
      },
   } 

   useMountEffect(() => {
      if (msgs.current) {
         msgs.current.clear();

         if (user.status !== 'Terverifikasi') {
            msgs.current.show([
               { sticky: true, severity: messages.verif.msgSeverity, summary: messages.verif.msgSummary, detail: messages.verif.msgDetail, closable: false }
            ]);
         } else {
            msgs.current.show([
                  { sticky: true, severity: messages.verif.msgSeverity, summary: messages.verif.msgSummary, detail: messages.verif.msgDetail, closable: false },
                  { sticky: true, severity: messages.alprog.msgSeverity, summary: messages.alprog.msgSummary, detail: messages.alprog.msgDetail, closable: false },
                  { sticky: true, severity: messages.basisdata.msgSeverity, summary: messages.basisdata.msgSummary, detail: messages.basisdata.msgDetail, closable: false },
                  { sticky: true, severity: messages.jarkom.msgSeverity, summary: messages.jarkom.msgSummary, detail: messages.jarkom.msgDetail, closable: false },
            ]);
         }
      }
   });

   return(
      <AdminAuthentication user={user} headerTitle={title}>
         <Head title="Dashboard"/>
         <div>
            <h1 className="text-3xl text-gray-800 mb-8">Hallo, {user.name} 😁👋</h1>
            {/* dashboard admin */}
            {user.roles[0].name == 'admin' && (
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* card */}
                  <div className="bg-white shadow-md border border-gray-200 rounded-lg p-6">
                     <div className="flex gap-6 h-full">
                        <div class="row-span-2 bg-primer text-center h-full w-1/2 flex items-center justify-center rounded-md">
                           <i className="pi pi-users text-9xl text-primary"></i>
                        </div>
                        <div class="w-1/2">
                           <p className="text-xl text-primary font-bold">Jumlah Angkatan 2021</p>
                           <p className="text-6xl text-gray-800 font-bold">{akt21}</p>
                        </div>
                     </div>
                  </div>
                  {/* card */}
                  <div className="bg-white shadow-md border border-gray-200 rounded-lg p-6">
                     <div className="flex gap-6 h-full">
                        <div class="row-span-2 bg-primer text-center h-full w-1/2 flex items-center justify-center rounded-md">
                           <i className="pi pi-users text-9xl text-primary"></i>
                        </div>
                        <div class="w-1/2">
                           <p className="text-xl text-primary font-bold">Jumlah Angkatan 2022</p>
                           <p className="text-6xl text-gray-800 font-bold">{akt22}</p>
                        </div>
                     </div>
                  </div>
                  {/* card */}
                  <div className="bg-white shadow-md border border-gray-200 rounded-lg p-6">
                     <div className="flex gap-6 h-full">
                        <div class="row-span-2 bg-primer text-center h-full w-1/2 flex items-center justify-center rounded-md">
                           <i className="pi pi-users text-9xl text-primary"></i>
                        </div>
                        <div class="w-1/2">
                           <p className="text-xl text-primary font-bold">Jumlah Angkatan 2023</p> 
                           <p className="text-6xl text-gray-800 font-bold">{akt23}</p>
                        </div>
                     </div>
                  </div>
                  {/* card */}
                  <div className="bg-white shadow-md border border-gray-200 rounded-lg p-6">
                     <div className="flex gap-6 h-full">
                        <div class="row-span-2 bg-primer text-center h-full w-1/2 flex items-center justify-center rounded-md">
                           <i className="pi pi-users text-9xl text-primary"></i>
                        </div>
                        <div class="w-1/2">
                           <p className="text-xl text-primary font-bold">Jumlah Angkatan 2024</p>
                           <p className="text-6xl text-gray-800 font-bold">{akt24}</p>
                        </div>
                     </div>
                  </div>
               </div>
            )}

            {/* dashboard participant */}
            {user.roles[0].name == 'participant' && (
               <div className="flex flex-col">
                  <Messages ref={msgs} className="custom-messages" />
               </div>
            )}
         </div>
      </AdminAuthentication>
   )
}