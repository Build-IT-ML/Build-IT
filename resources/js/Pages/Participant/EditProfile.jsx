import React, { useState } from "react";
import { Head,useForm,usePage, Link } from "@inertiajs/react";
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

   function checkInput(){
      if(data.name == user.name && data.nim == user.nim && data.email == user.email && data.whatsapp == user.whatsapp_id && data.line == user.line_id){
         return true;
      } 
      return false;
   }

   return(
      <AdminAuthentication user={user} headerTitle="Edit Profile">
         <Head title="Participant Profile"/>
            <form onSubmit={handleUpdate} className="space-y-8">
               <div>
                  <Link href={route('participant.profile')} className="text-pr text-primary text-lg">
                     <i className="pi pi-arrow-left font-bold text-lg mr-4 mb-4 bg-primary/20 p-2 rounded-full"></i>
                     Kembali
                  </Link>
                  <h3 className="text-primary font-bold text-xl">Profile Lengkap</h3>
                  <p className="text-primary/80 mt-2 mb-4">* Pastikan identitas sudah terisi dengan benar</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <div className="flex flex-col w-full space-y-2">
                        <span className="font-semibold text-primary capitalize">nama</span>
                        <input 
                           type="text" 
                           name="name"
                           id="name" 
                           maxLength={120}
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
                           maxLength={10}
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
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                     <div className="space-y-2">
                        <span className="font-semibold text-primary capitalize">email</span>
                        <input 
                           type="email" 
                           name="email"
                           id="email" 
                           maxLength={120}
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
                           maxLength={120}
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
                           maxLength={120}
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
                  <button
                  disabled={checkInput()}
                  type="submit" 
                  className="py-3 px-6 bg-primary hover:bg-secondary font-bold text-white rounded-lg transition-all duration-300 text-center disabled:bg-primary/80">
                     Simpan
                  </button>
               </div>
            </form>
      </AdminAuthentication>
   )
}