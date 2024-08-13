import React, { useState, useEffect, useRef } from 'react';
import AdminAuthentication from '@/Components/Layouts/AdminAuthentication';
import { Head, usePage, useForm } from '@inertiajs/react';
import { FilterMatchMode } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Tag } from 'primereact/tag';
import { Button } from 'primereact/button';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import axios from 'axios';

import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';

export default function Participants() {
   const { user, participants } = usePage().props;
   const [dataParticipants, setDataParticipants] = useState(participants.data);
   const { data, setData, put, reset, delete: destroy} = useForm({
      id: '',
      nim: '',
      name: '',
      email: '',
      whatsapp_id: '',
      line_id: '',
      status: '',
      kelompok: ''
   });

   const [statuses] = useState(['Terverifikasi', 'Belum Terverifikasi', 'Ditolak']);
   const rowNumberTemplate = (rowData, column) => column.rowIndex + 1;

   const getSeverity = (value) => {
      switch (value) {
         case 'Terverifikasi':
               return 'success';
         case 'Belum Terverifikasi':
               return 'warning';
         case 'Ditolak':
               return 'danger';
         default:
               return null;
      }
   };

   const [editedRow, setEditedRow] = useState(null);
   useEffect(() => {
      if (editedRow !== null) {
         const { id, nim, name, email, whatsapp_id, line_id, status, kelompok } = editedRow;

         if(status === "Terverifikasi" && kelompok == null){
            return toast.current.show({ severity: 'error', summary: 'Gagal', detail: 'Data Kelompok harus diisi', life: 3000 });
         }

         put(route('participants.update', { participant: id }), {
            data: {
               id,
               nim,
               name,
               email,
               whatsapp_id,
               line_id,
               status,
               kelompok
            },
            onSuccess: () => {
               reset();

               // Reload halaman setelah update berhasil
               setTimeout(() => {
                  // window.location.reload();
               }, 200);
               toast.current.show({ severity: 'success', summary: 'Berhasil', detail: 'Berhasil mengedit data peserta', life: 3000 });
            },
            onError: () => {
               toast.current.show({ severity: 'error', summary: 'Gagal', detail: 'Gagal mengedit data peserta', life: 3000 });
            }
         });
      }
   }, [editedRow]);

   const onRowEditComplete = (e) => {
      let _participants = [...dataParticipants];
      let { newData, index } = e;

      _participants[index] = newData;
      setDataParticipants(_participants);

      setData({
         ...newData,
         id: newData.id
      });

      setEditedRow(newData);
   };

   const textEditor = (options) => {
      return <InputText type="text" value={options.value} onChange={(e) => options.editorCallback(e.target.value)} />;
   };

   const statusEditor = (options) => {
      return (
         <Dropdown
               value={options.value}
               options={statuses}
               onChange={(e) => options.editorCallback(e.value)}
               placeholder="Pilih Status"
               itemTemplate={(option) => {
                  return <Tag value={option} severity={getSeverity(option)}></Tag>;
               }}
         />
      );
   };

   const statusBodyTemplate = (rowData) => {
      return <Tag value={rowData.status} severity={getSeverity(rowData.status)}></Tag>;
   };

   const allowEdit = (rowData) => rowData;

   const [filters, setFilters] = useState({
      global: { value: null, matchMode: FilterMatchMode.CONTAINS }
   });

   const dt = useRef(null);

   const exportCSV = (selectionOnly) => {
      dt.current.exportCSV({ selectionOnly });
   };

   const exportExcel = () => {
      import('xlsx').then((xlsx) => {
         const worksheet = xlsx.utils.json_to_sheet(dataParticipants);
         const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
         const excelBuffer = xlsx.write(workbook, {
               bookType: 'xlsx',
               type: 'array'
         });

         saveAsExcelFile(excelBuffer, 'Peserta Build IT 2024');
      });
   };

   const saveAsExcelFile = (buffer, fileName) => {
      import('file-saver').then((module) => {
         if (module && module.default) {
               let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
               let EXCEL_EXTENSION = '.xlsx';
               const data = new Blob([buffer], { type: EXCEL_TYPE });

               module.default.saveAs(data, fileName + '_export_' + new Date().toLocaleDateString() + EXCEL_EXTENSION);
         }
      });
   };

   const header = (
      <div className="flex justify-between mb-4">
         <IconField iconPosition="left">
               <InputIcon className="pi pi-search" />
               <InputText
                  onInput={(e) => setFilters({
                     global: { value: e.target.value, matchMode: FilterMatchMode.CONTAINS }
                  })}
                  placeholder="Keyword Search"
               />
         </IconField>

         <div className="flex align-items-center justify-content-end gap-2">
               <Button type="button" icon="pi pi-file" rounded onClick={() => exportCSV(false)} data-pr-tooltip="CSV" />
               <Button type="button" icon="pi pi-file-excel" severity="success" rounded onClick={exportExcel} data-pr-tooltip="XLS" />
         </div>
      </div>
   );

   const toast = useRef(null);

   const accept = (id) => {
      destroy(route('participants.destroy', id), {
         onSuccess: () => {
            setDataParticipants(dataParticipants.filter(participant => participant.id !== id));
            toast.current.show({ severity: 'success', summary: 'Berhasil', detail: 'Berhasil menghapus peserta', life: 3000 });
         },
         onError: (error) => {
            toast.current.show({ severity: 'error', summary: 'Error', detail: 'Gagal menghapus peserta', life: 3000 });
         }
      });
   };

   const reject = () => { };

   const confirmDelete = (id) => {
      confirmDialog({
         message: 'Apakah anda yakin ingin menghapus data baris ini?',
         header: 'Konfirmasi Hapus',
         icon: 'pi pi-info-circle',
         defaultFocus: 'reject',
         acceptClassName: 'p-button-danger',
         acceptLabel: 'Ya',
         rejectLabel: 'Tidak',
         accept: () => accept(id),
         reject: () => reject()
      });
   };

   const deleteBodyTemplate = (rowData) => {
      return(
         <Button icon="pi pi-trash" className="p-button-rounded p-button-danger" onClick={() => confirmDelete(rowData.id)} />
      )
   }

   const resetPassword = (id, nim) => {
      confirmDialog({
         message: 'Apakah Anda yakin ingin mereset password?',
         header: 'Konfirmasi Reset Password',
         icon: 'pi pi-exclamation-triangle',
         acceptClassName: 'p-button-danger',
         defaultFocus: 'reject',
         acceptLabel: 'Ya',
         rejectLabel: 'Tidak',
         accept: () => {
            axios.put('/reset-password', {
                  id: id,
                  nim: nim
            }, {
                  headers: {
                     'Content-Type': 'application/json'
                  }
            })
            .then(response => {
                  console.log(response.data.message);
                  toast.current.show({ severity: 'success', summary: 'Berhasil', detail: response.data.message, life: 3000 });
            })
            .catch(error => {
                  console.log('Error:', error.response ? error.response.data : error.message);
                  if (error.response && error.response.status === 422) {
                     console.log('Validation error:', error.response.data.errors);
                     toast.current.show({ severity: 'error', summary: 'Gagal', detail: 'Terjadi kesalahan validasi', life: 3000 });
                  } else {
                     toast.current.show({ severity: 'error', summary: 'Gagal', detail: 'Terjadi kesalahan', life: 3000 });
                  }
            });
         },
         reject: () => {}
      });
   };

   const resetPasswordTemplate = (rowData) => (
         <Button 
            className="p-button-danger pi pi-eraser" 
            onClick={() => resetPassword(rowData.id, rowData.nim)} 
         />
   );

   return (
      <AdminAuthentication user={user} headerTitle='Peserta Build IT 2024'>
         <Head title='participants' />
         <Toast ref={toast} />
         <div className="card p-6 bg-white shadow border border-gray-200 rounded-lg">
            <DataTable
               ref={dt}
               header={header}
               value={dataParticipants}
               selectionMode="single"
               dataKey="id"
               filters={filters}
               paginator
               showGridlines
               rows={10}
               rowsPerPageOptions={[10, 25, 50, 100, 200]}
               emptyMessage="No participants found."
               editMode="row"
               onRowEditComplete={onRowEditComplete}
               tableStyle={{ minWidth: '50rem' }}>

               <Column header="#" body={rowNumberTemplate} style={{ width: '50px' }} />
               <Column field="nim" header="Nim" sortable editor={(options) => textEditor(options)} style={{ minWidth: '12rem' }} />
               <Column field="name" header="Nama" editor={(options) => textEditor(options)} sortable style={{ minWidth: '14rem' }} />
               <Column field="email" header="Email" editor={(options) => textEditor(options)} style={{ minWidth: '12rem' }} />
               <Column field="whatsapp_id" header="Whatsapp" editor={(options) => textEditor(options)} style={{ minWidth: '12rem' }} />
               <Column field="line_id" header="Line" editor={(options) => textEditor(options)} style={{ minWidth: '12rem' }} />
               <Column field="status" header="Status" body={statusBodyTemplate} editor={(options) => statusEditor(options)} sortable style={{ minWidth: '12rem' }} />
               <Column field="kelompok" header="Kelompok" editor={(options) => textEditor(options)} sortable style={{ minWidth: '12rem' }} />
               <Column header="Edit" rowEditor={allowEdit} headerStyle={{ width: '10%', minWidth: '8rem'}} bodyStyle={{ textAlign: 'center' }} headerClassName="text-center"></Column>
               <Column header="Reset Password" body={resetPasswordTemplate} style={{ width: '50%', minWidth: '10rem', textAlign: 'center'}} />
               <Column header="Hapus" body={deleteBodyTemplate} style={{ width: '10%', minWidth: '8rem'}} />
            </DataTable>
         </div>
      </AdminAuthentication>
   );
}
