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
import { ClientService } from './client.service';
import { DocumentService } from './document.service';
import { MaterialModule } from '@angular/material';
import { Ng2SelectModule } from 'ng2-material-select';
import 'hammerjs';
import { TableListComponent } from './table-list/table-list.component';
import { ClientsComponent } from './clients/clients.component';
import { DocumentComponent } from './document/document.component';


const appRoutes: Routes = [
  {path: 'workers', component: WorkersListComponent},
  {path: 'clients', component: ClientsComponent},
  {path: 'documents', component: DocumentComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    WorkersListComponent,
    TableListComponent,
    ClientsComponent,
    DocumentComponent
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
    ClientService,
    DocumentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
