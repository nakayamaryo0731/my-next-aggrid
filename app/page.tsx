"use client";

import { useState, useEffect, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const Home = () =>  {
  const gridRef = useRef();
  const router = useRouter();
  const [rowData, setRowData] = useState();

   // Example load data from sever
 useEffect(() => {
  fetch('https://www.ag-grid.com/example-assets/row-data.json')
  .then(result => result.json())
  .then(rowData => setRowData(rowData))
}, []);

// // Example using Grid's API
// const buttonListener = useCallback( e => {
//   gridRef.current?.api.deselectAll();
// }, []);

  // const onSelectionChanged = useCallback(() => {
  //   // const selectedRows = gridRef.current.api.getSelectedRows();
  //   const selectedRows = gridRef.current!
  //   router.push(`/staff/${selectedRows[0].id}`);
  // }, [router]);

  const defaultColDef = {
    resizable: true,
    sortable: true,
  };

 // Each Column Definition results in one Column.
 const [columnDefs, setColumnDefs] = useState([
  {field: 'make', filter: true},
  {field: 'model', filter: true},
  {field: 'price'}
]);

console.log(gridRef);


  return (
    <div className="ag-theme-alpine" style={{ height: '600px' }}>
      <AgGridReact
        id="staff_grid"
        ref={gridRef}
        rowData={rowData}
        // defaultColDef={defaultColDef}
        columnDefs={columnDefs}
        // onSelectionChanged={onSelectionChanged}
        rowSelection={'single'}
        // style={{ height: '100%', width: '100%' }}
      ></AgGridReact>
    </div>
  );
}

export default Home;