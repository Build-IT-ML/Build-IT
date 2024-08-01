
import React, { useState, useEffect, useRef } from 'react';
import AdminAuthentication from '@/Components/Layouts/AdminAuthentication';
import { Head, usePage } from '@inertiajs/react';

import { FilterMatchMode} from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';

export default function Participants() {
   const {user, participants} = usePage().props;

   const [filters, setFilters] = useState({
      global: { value: null, matchMode: FilterMatchMode.CONTAINS },
   });

   const rowNumberTemplate = (rowData, column) => {
      return column.rowIndex + 1;
   };

   // export data to csv or excel
   const currentDate = new Date();

   const day = currentDate.getDate();
   const month = currentDate.getMonth() + 1;
   const year = currentDate.getFullYear();

   const dt = useRef(null);

   const exportCSV = (selectionOnly) => {
      dt.current.exportCSV({ selectionOnly });
   };

   const exportExcel = () => {
      import('xlsx').then((xlsx) => {
            const worksheet = xlsx.utils.json_to_sheet(participants);
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
            const data = new Blob([buffer], {
                  type: EXCEL_TYPE
            });

            module.default.saveAs(data, fileName + '_export_' + day + "-" + month + "-" + year + EXCEL_EXTENSION);
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
            placeholder="Keyword Search" />
         </IconField>

         <div className="flex align-items-center justify-content-end gap-2">
            <Button type="button" icon="pi pi-file" rounded onClick={() => exportCSV(false)} data-pr-tooltip="CSV" />
            <Button type="button" icon="pi pi-file-excel" severity="success" rounded onClick={exportExcel} data-pr-tooltip="XLS" />
         </div>
      </div>
   );

   const getSeverity = (value) => {
      switch (value) {
         case 'Terverifikasi':
            return 'success';

         case 'Belum Terverifikasi':
            return 'warning';
      }
   };

   const statusBodyTemplate = (rowData) => {
      return <Tag value={rowData.status} severity={getSeverity(rowData.status)}></Tag>;
   };


   return (
      <AdminAuthentication user={user} headerTitle='Peserta Build IT 2024'>
         <Head title='participants'/>
         <div className="card p-6 bg-white shadow border border-gray-200 rounded-lg">
            <DataTable ref={dt} header={header} value={participants} selectionMode="single" dataKey="id" filters={filters} paginator rows={10} rowsPerPageOptions={[10, 25, 50, 100, 200]} emptyMessage="No participants found.">
               <Column header="#" body={rowNumberTemplate} style={{ width: '50px' }} />
               <Column field="nim" header="Nim" sortable style={{ minWidth: '12rem' }} />
               <Column field="name" header="Nama" sortable style={{ minWidth: '14rem' }} />
               <Column field="email" header="Email" style={{ minWidth: '12rem' }} />
               <Column field="whatsapp_id" header="Whatsapp" style={{ minWidth: '12rem' }} />
               <Column field="line_id" header="Line" style={{ minWidth: '12rem' }} />
               <Column field="status"  header="Status" body={statusBodyTemplate} sortable style={{ minWidth: '12rem' }} />
               <Column field="kelompok" header="Kelompok" sortable style={{ width: '12rem'}} />
            </DataTable>
         </div>
      </AdminAuthentication>
   );
}