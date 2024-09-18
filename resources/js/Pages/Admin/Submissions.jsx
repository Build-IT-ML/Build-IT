import React, { useState, useEffect, useRef } from 'react';
import AdminAuthentication from '@/Components/Layouts/AdminAuthentication';
import { Head, usePage, useForm } from '@inertiajs/react';
import { FilterMatchMode } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';

import { Toast } from 'primereact/toast';

export default function Participants() {
   const { user, submissions } = usePage().props;
   const [dataSubmissions, setDataSubmissions] = useState(submissions.data);
   const { data, setData, put, reset} = useForm({
      id: '',
      nim: '',
      name: '',
      email: '',
      whatsapp_id: '',
      line_id: '',
      kelompok: '',
      alprog: '',
      basisdata: '',
      jarkom: '',
   });

   const rowNumberTemplate = (rowData, column) => column.rowIndex + 1;

   // const [editedRow, setEditedRow] = useState(null);
   // useEffect(() => {
   //    if (editedRow !== null) {
   //       put(route('submissions.update', { submissions: editedRow.id }), {
   //             onSuccess: () => reset()
   //       });
   //    }
   // }, [editedRow]);

   // const onRowEditComplete = (e) => {
   //    let _submissions = [...dataSubmissions];
   //    let { newData, index } = e;

   //    _submissions[index] = newData;
   //    setDataSubmissions(_submissions);

   //    setData({
   //       ...newData,
   //       id: newData.id
   //    });

   //    setEditedRow(newData);
   // };

   // const allowEdit = (rowData) => rowData;

   const [filters, setFilters] = useState({
      global: { value: null, matchMode: FilterMatchMode.CONTAINS }
   });

   const dt = useRef(null);

   const exportCSV = (selectionOnly) => {
      dt.current.exportCSV({ selectionOnly });
   };

   const exportExcel = () => {
      import('xlsx').then((xlsx) => {
         const worksheet = xlsx.utils.json_to_sheet(dataSubmissions);
         const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
         const excelBuffer = xlsx.write(workbook, {
               bookType: 'xlsx',
               type: 'array'
         });

         saveAsExcelFile(excelBuffer, 'Submissions Build IT 2024');
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
   
   const alprogBodyTemplate = (rowData) => {
      return (
         <a className="text-primary underline" href={rowData.tugas_alprog} target='_blank'>{rowData.tugas_alprog}</a>
      )
  };
   const basisBodyTemplate = (rowData) => {
      return (
         <a className="text-primary underline" href={rowData.tugas_basis} target='_blank'>{rowData.tugas_basis}</a>
      )
  };
   const jarkomBodyTemplate = (rowData) => {
      return (
         <a className="text-primary underline" href={rowData.tugas_jarkom} target='_blank'>{rowData.tugas_jarkom}</a>
      )
  };

   return (
      <AdminAuthentication user={user} headerTitle='Pengumpulan Penugasan Build IT 2024'>
         <Head title='submissions' />
         <div className="card p-6 bg-white shadow border border-gray-200 rounded-lg">
            <DataTable
               ref={dt}
               header={header}
               value={dataSubmissions}
               selectionMode="single"
               dataKey="id"
               filters={filters}
               paginator
               showGridlines
               rows={10}
               rowsPerPageOptions={[10, 25, 50, 100, 200]}
               emptyMessage="No participants found."
               editMode="row"
               // onRowEditComplete={onRowEditComplete}
               tableStyle={{ minWidth: '50rem' }}>

               <Column header="#" body={rowNumberTemplate} style={{ width: '50px' }} />
               <Column field="nim" header="Nim" sortable style={{ minWidth: '12rem' }} />
               <Column field="name" header="Nama" sortable style={{ minWidth: '14rem' }} />
               <Column field="email" header="Email" style={{ minWidth: '12rem' }} />
               <Column field="whatsapp_id" header="Whatsapp" style={{ minWidth: '12rem' }} />
               <Column field="line_id" header="Line" style={{ minWidth: '12rem' }} />
               <Column field="kelompok" header="Kelompok" sortable style={{ minWidth: '12rem' }} />
               <Column field="tugas_alprog" header="Tugas Algoritma & Pemrograman" body={alprogBodyTemplate} style={{ minWidth: '12rem' }} />
               <Column field="tugas_basis" header="Tugas Basis Data" body={basisBodyTemplate} style={{ minWidth: '12rem' }} />
               <Column field="tugas_jarkom" header="Tugas Jaringan Komputer" body={jarkomBodyTemplate} style={{ minWidth: '12rem' }} />
               {/* <Column header="Edit" rowEditor={allowEdit} headerStyle={{ width: '10%', minWidth: '8rem'}} bodyStyle={{ textAlign: 'center' }} headerClassName="text-center"></Column> */}
            </DataTable>
         </div>
      </AdminAuthentication>
   );
}
