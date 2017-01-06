import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


import { AppComponent } from './app.component';
import { WorkersListComponent } from './workers-list/workers-list.component';
import { WorkerService } from './worker.service';
import { MaterialModule } from '@angular/material';
import { Ng2SelectModule } from 'ng2-material-select';
import 'hammerjs';


const appRoutes: Routes = [
  {path: 'workers', component: WorkersListComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    WorkersListComponent
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
  providers: [WorkerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
