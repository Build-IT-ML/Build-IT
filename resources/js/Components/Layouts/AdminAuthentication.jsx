import React, { useRef } from 'react';
import AplicationLogo from "../AplicationLogo"
import { Link, useForm} from "@inertiajs/react"

import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Divider } from 'primereact/divider';

export default function AdminAuthentication({user, headerTitle, children}){
   const {post} = useForm();

   const accept = () => {
      post(route('logout'));
   }

   const reject = () => {};

   const confirmLogout = () => {
      confirmDialog({
         message: 'Apakah kamu yakin ingin keluar dari akun ini?',
         header: 'Konfirmasi Logout',
         icon: 'pi pi-info-circle',
         defaultFocus: 'reject',
         acceptClassName: 'p-button-danger',
         accept,
         reject
      });
   };

   return(
      <>
         <ConfirmDialog />
         <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
         <div>
            <div className="-mx-6 px-6 py-4">
                  <Link href={route('Welcome')} title="home">
                     <AplicationLogo/>
                  </Link>
            </div>

            <div className="mt-8 text-center">
                  <img src={`https://api.dicebear.com/9.x/bottts-neutral/png?seed=${user.name}`} alt="" className="w-10 h-10 m-auto rounded-full object-cover lg:w-20 lg:h-20 outline outline-offset-2 outline-4 outline-secondary" />
                  <h5 className="hidden mt-4 text-xl font-semibold text-gray-800 lg:block">{user.name}</h5>
                  <span className="hidden text-primary font-semibold lg:block pt-4 capitalize">{user.roles[0].name}</span>
            </div>

            <Divider />

            {/* menu admin */}
            {user.roles[0].name == 'admin' && (    
               <ul className="space-y-2 h-48 2xl:h-full overflow-auto tracking-wide mt-8">
                  <li>
                     <Link href={route('dashboard')} aria-label="dashboard" className="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-gray-800 hover:text-primary hover:bg-gradient-background-lighten transition-all duration-300">
                        <i className="pi pi-th-large"></i>
                        <span className="-mr-1 font-medium">Dashboard</span>
                     </Link>
                  </li>
                  <li>
                     <Link href={route('participants.index')} aria-label="peserta" className="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-gray-800 hover:text-primary hover:bg-gradient-background-lighten transition-all duration-300">
                        <i className="pi pi-users"></i>
                        <span className="-mr-1 font-medium">Peserta</span>
                     </Link>
                  </li>
                  <li>
                     <Link href={route('submissions.index')} aria-label="pengumpulan tugas" className="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-gray-800 hover:text-primary hover:bg-gradient-background-lighten transition-all duration-300">
                        <i className="pi pi-folder-open"></i>
                        <span className="-mr-1 font-medium">Pengumpulan Tugas</span>
                     </Link>
                  </li>
               </ul>
            )}

            {/* menu participant */}
            {user.roles[0].name == 'participant' && (      
               <ul className="space-y-2 h-48 2xl:h-full overflow-auto tracking-wide mt-8">
                  <li>
                     <Link href={route('dashboard')} aria-label="dashboard" className="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-gray-800 hover:text-primary hover:bg-gradient-background-lighten transition-all duration-300">
                        <i className="pi pi-th-large"></i>
                        <span className="-mr-1 font-medium">Dashboard</span>
                     </Link>
                  </li>
                  <li>
                     <Link href={route('participant.profile')} aria-label="profile" className="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-gray-800 hover:text-primary hover:bg-gradient-background-lighten transition-all duration-300">
                     <i className="pi pi-cog"></i>
                        <span className="-mr-1 font-medium">Profile</span>
                     </Link>
                  </li>
                  <li>
                     <Link href={route('participant.submissions')} aria-label="pengumpulan tugas" className="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-gray-800 hover:text-primary hover:bg-gradient-background-lighten transition-all duration-300">
                        <i className="pi pi-folder-open"></i>
                        <span className="-mr-1 font-medium">Pengumpulan Tugas</span>
                     </Link>
                  </li>
               </ul> 
            )}
         </div>

         <div className="px-6 pt-4 flex justify-between items-center border-t">
            <div className="card flex flex-wrap gap-2 justify-content-center">
               <button 
               onClick={confirmLogout}
               className='relative flex items-center space-x-4 rounded-xl text-gray-800 hover:text-primary transition-all duration-300'
               >
                  <i className='pi pi-sign-out mr-4'></i>
                  Logout
               </button>
            </div>
         </div>
      </aside>

      {/* header component */}
      <div className="ml-auto lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
         <div className="sticky z-10 top-0 h-16 border-b bg-white lg:py-2.5">
            <div className="px-6 py-2 flex items-center justify-between space-x-4 2xl:container">
                  <h5 hidden className="text-2xl text-gray-800 font-medium lg:block capitalize">{headerTitle}</h5>
                  <button className="w-12 h-16 -mr-2 border-r lg:hidden">
                     <i className='pi pi-bars'></i>
                  </button>
            </div>
         </div>
         
         {/* content component */}
         <div className="px-6 pt-6 2xl:container bg-slate-50 min-h-screen">
            {children}
         </div>
         <footer className='py-4 px-6 text-primary 2xl:container text-center bg-white border-t'>Build IT 2024</footer>
      </div>
      </>
   )
}