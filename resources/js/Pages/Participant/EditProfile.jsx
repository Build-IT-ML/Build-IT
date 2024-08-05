import React, { useState } from "react";
import { Head,useForm,usePage } from "@inertiajs/react";
import AdminAuthentication from "@/Components/Layouts/AdminAuthentication";

export default function EditProfile() {
   const {user} = usePage().props;

   const {data, setData, put, errors} = useForm({
      name: user.name,
      nim: user.nim,
      email: user.email,
      whatsapp: user.whatsapp_id,
      line: user.line_id,
   })

   function handleUpdate(e){
      e.preventDefault();

      put(route('participant.updateprofile'))
   }
   return(
      <AdminAuthentication user={user} headerTitle="Edit Profile">
         <Head title="Participant Profile"/>
            <form onSubmit={handleUpdate} className="space-y-8">
               <div>
                  <h3 className="text-primary font-bold text-xl">Profile Lengkap</h3>
                  <p className="text-primary/80 mt-2 mb-4">* Pastikan identitas sudah terisi dengan benar</p>
                  <div className="grid grid-cols-2 gap-4">
                     <div className="flex flex-col w-full space-y-2">
                        <span className="font-semibold text-primary capitalize">nama</span>
                        <input 
                           type="text" 
                           name="name"
                           id="name" 
                           value={data.name}
                           onChange={(e) => setData('name', e.target.value)}
                           className={`bg-secondary/20 w-full border-2 rounded-lg focus:outline-none focus:ring-1  text-primary p-2 ${errors.name ? "border-red-500 focus:ring-red-500" : "border-primary focus:ring-primary"}`}
                        />
                        <small className="text-red-500">
                           {errors.name }
                        </small>
                     </div>
                     <div className="flex flex-col w-full space-y-2">
                        <span className="font-semibold text-primary capitalize">nim</span>
                        <input 
                           type="text" 
                           name="nim"
                           id="nim" 
                           value={data.nim}
                           onChange={(e) => setData('nim', e.target.value)}
                           className={`bg-secondary/20 w-full border-2 rounded-lg focus:outline-none focus:ring-1  text-primary p-2 ${errors.nim ? "border-red-500 focus:ring-red-500" : "border-primary focus:ring-primary"}`}
                        />
                        <small className="text-red-500">
                           {errors.nim }
                        </small>
                     </div>
                  </div>
               </div>
               <div>
                  <h3 className="text-primary font-bold text-xl">Kontak</h3>
                  <p className="text-primary/80 mt-2 mb-4">* Mohon mengisi dengan kontak yang masih aktif dan dapat dihubungi</p>
                  <div className="grid grid-cols-3 gap-4">
                     <div className="space-y-2">
                        <span className="font-semibold text-primary capitalize">email</span>
                        <input 
                           type="email" 
                           name="email"
                           id="email" 
                           value={data.email}
                           onChange={(e) => setData('email', e.target.value)}
                           className={`bg-secondary/20 w-full border-2 rounded-lg focus:outline-none focus:ring-1  text-primary p-2 ${errors.email ? "border-red-500 focus:ring-red-500" : "border-primary focus:ring-primary"}`}
                        />
                        <small className="text-red-500">
                           {errors.email }
                        </small>
                     </div>
                     <div className="space-y-2">
                        <span className="font-semibold text-primary capitalize">Nomor Whatsapp</span>
                        <input 
                           type="text" 
                           name="whatsapp"
                           id="whatsapp" 
                           value={data.whatsapp}
                           onChange={(e) => setData('whatsapp', e.target.value)}
                           className={`bg-secondary/20 w-full border-2 rounded-lg focus:outline-none focus:ring-1  text-primary p-2 ${errors.whatsapp ? "border-red-500 focus:ring-red-500" : "border-primary focus:ring-primary"}`}
                        />
                        <small className="text-red-500">
                           {errors.whatsapp }
                        </small>
                     </div>
                     <div className="space-y-2">
                        <span className="font-semibold text-primary capitalize">ID line</span>
                        <input 
                           type="text" 
                           name="line"
                           id="line" 
                           value={data.line}
                           onChange={(e) => setData('line', e.target.value)}
                           className={`bg-secondary/20 w-full border-2 rounded-lg focus:outline-none focus:ring-1  text-primary p-2 ${errors.line ? "border-red-500 focus:ring-red-500" : "border-primary focus:ring-primary"}`}
                        />
                        <small className="text-red-500">
                           {errors.line }
                        </small>
                     </div>
                  </div>
               </div>
               
               <div>
                  <button type="submit" className="py-3 px-6 bg-primary hover:bg-secondary font-bold text-white rounded-lg transition-all duration-300 text-center">
                     Simpan
                  </button>
               </div>
            </form>
      </AdminAuthentication>
   )
}