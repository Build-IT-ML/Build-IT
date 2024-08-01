import React, { useState } from "react";
import { Head,usePage } from "@inertiajs/react";
import AdminAuthentication from "@/Components/Layouts/AdminAuthentication";

export default function Profile() {
   const {user} = usePage().props;
   const [data] = useState(
      {
         nim: user.nim,
         name: user.name,
         email: user.email,
         line: user.line_id,
         whatsapp: user.whatsapp_id,
         angkatan: '20' + user.nim.substring(0,2)
      }
   );

   console.log(data);

   return(
      <AdminAuthentication user={user} headerTitle="Profile Peserta">
         <Head title="Participant Profile"/>
         <div className="space-y-12">
            <div>
               <h3 className="text-primary font-bold text-xl">Profile Lengkap</h3>
               <p className="text-primary/80 mt-2 mb-4">* Informasi akan ditampilkan secara publik</p>
               <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2 col-span-2">
                     <span className="font-semibold text-primary capitalize">nama</span>
                     <p className="p-2 bg-secondary/30 text-primary rounded-lg">{data.name}</p>
                  </div>
                  <div className="flex w-full space-x-4">
                     <div className="space-y-2 w-1/2">
                        <span className="font-semibold text-primary capitalize">nim</span>
                        <p className="p-2 bg-secondary/30 text-primary rounded-lg">{data.nim}</p>
                     </div>
                     <div className="space-y-2">
                        <span className="font-semibold text-primary capitalize">angkatan</span>
                        <p className="p-2 bg-secondary/30 text-primary rounded-lg text-center">{data.angkatan}</p>
                     </div>
                  </div>
               </div>
            </div>
            <div>
               <h3 className="text-primary font-bold text-xl">Kontak</h3>
               <p className="text-primary/80 mt-2 mb-4">* Informasi akan ditampilkan secara publik</p>
               <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                     <span className="font-semibold text-primary capitalize">email</span>
                     <p className="p-2 bg-secondary/30 text-primary rounded-lg">{data.email}</p>
                  </div>
                  <div className="space-y-2">
                     <span className="font-semibold text-primary capitalize">Nomor Whatsapp</span>
                     <p className="p-2 bg-secondary/30 text-primary rounded-lg">{data.whatsapp}</p>
                  </div>
                  <div className="space-y-2">
                     <span className="font-semibold text-primary capitalize">ID line</span>
                     <p className="p-2 bg-secondary/30 text-primary rounded-lg">{data.line}</p>
                  </div>
               </div>
            </div>

            <div className="w-full bg-primary h-[1px] rounded-full"></div>

            <div>
               <h3 className="text-primary font-bold text-xl">Grup Line BUILD IT 2024</h3>
               <p className="text-primary/80 mt-2 mb-4">Silahkan bergabung dengan grup dibawah ini untuk informasi lebih lanjut</p>
               <div className="flex gap-4">
                  <div className="space-y-2 flex flex-col">
                     <span className="font-semibold text-primary capitalize">grup besar</span>
                     <a href="https://youtu.be/K7gyclhWo1Y?si=2DooctyYWJalhc3c" target="_blank" className="p-2 bg-secondary/30 text-cyan-700 rounded-lg">https://youtu.be/K7gyclhWo1Y?si=2DooctyYWJalhc3c</a>
                  </div>
                  <div className="space-y-2 flex flex-col">
                     <span className="font-semibold text-primary capitalize">grup kelompok</span>
                     <a href="https://youtu.be/K7gyclhWo1Y?si=2DooctyYWJalhc3c" target="_blank" className="p-2 bg-secondary/30 text-cyan-700 rounded-lg">https://youtu.be/K7gyclhWo1Y?si=2DooctyYWJalhc3c</a>
                  </div>
               </div>
            </div>
         </div>
      </AdminAuthentication>
   )
}