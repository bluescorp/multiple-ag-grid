import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatFileUploadModule } from 'angular-material-fileupload';
import { MatChipsModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AgGridModule } from 'ag-grid-angular';
import { GridComponent } from './grid/grid.component';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFileUploadModule,
    MatChipsModule,
    MatIconModule,
    DragDropModule,
    MatButtonModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AgGridModule.withComponents([]),
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
