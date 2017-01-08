import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


import { AppComponent } from './app.component';
import { WorkersListComponent } from './workers-list/workers-list.component';
import { CrudService } from './crud.service';
import { WorkerService } from './worker.service';
import { MaterialModule } from '@angular/material';
import { Ng2SelectModule } from 'ng2-material-select';
import 'hammerjs';
import { TableListComponent } from './table-list/table-list.component';


const appRoutes: Routes = [
  {path: 'workers', component: WorkersListComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    WorkersListComponent,
    TableListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    NgxDatatableModule ,
    MaterialModule.forRoot(),
    Ng2SelectModule
  ],
  providers: [
    CrudService,
    WorkerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
