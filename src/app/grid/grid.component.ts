import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { GridOptions, GridApi, ColumnApi } from 'ag-grid-community';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  gridOptions: GridOptions;
  gridApi: GridApi;
  colApi: ColumnApi;

  columnDefs = [
    {headerName: 'Make', field: 'make'},
    {headerName: 'Model', field: 'model'},
    {headerName: 'Price', field: 'price'}
  ];

  // rowData = [
  //   {make: 'Toyata', model: 'Celica', price: 35000}
  // ];

  label: string = "First1";

  tabs = [
    {
      label: 'FIRST', 
      // rowData: [
      //   {make: 'Toyata', model: 'Celica', price: 35000}
      // ], 
      // columnDefs: [
      //   {headerName: 'Make', field: 'make'},
      //   {headerName: 'Model', field: 'model'},
      //   {headerName: 'Price', field: 'price'}
      // ],
      gridApi: null,
      colApi: null
    },
    {
      label: 'SECOND', 
      rowData: [
        {make: 'Toyata2', model: 'Celica2', price: 350002}
      ] ,
      // columnDefs: [
      //   {headerName: 'Make', field: 'make'},
      //   {headerName: 'Model', field: 'model'},
      //   {headerName: 'Price', field: 'price'}
      // ]
      gridApi: null,
      colApi: null
    }
  ];

  constructor() { }

  ngOnInit() {
    setTimeout(() =>
    {
      console.log("Started");
      // console.log(this.colApi.getColumnState());
      this.tabs[0].gridApi.setRowData([
        {make: 'Ford_old', model: 'Mondeo', price: 32000}
      ]);
      // this.gridApi.setRowData(this.rowData);
      // this.gridApi.setRowData(
      //   [
      //     {make: 'Ford', model: 'Mondeo', price: 32000}
      //   ]
      // )
      // console.log(this.gridApi);
      this.tabs[0].gridApi.updateRowData(
        { add: [
          {make: 'Ford_new', model: 'Mondeo', price: 32000}
            // this.rowData[2]
          ], addIndex: 0
        }
      )
    },
    5000);
  }

  onGridReady(params, index){
    console.log(params);
    console.log(index);
    this.tabs[index].gridApi=params.api;
    this.tabs[index].colApi=params.columnApi;
    this.tabs[index].gridApi.sizeColumnsToFit();
    // this.gridApi=params.api;
    // this.colApi=params.columnApi;
    // this.gridApi.sizeColumnsToFit();
  }

  columnMoved(params){
    // console.log(this.colApi.getColumnState());
  }
}
