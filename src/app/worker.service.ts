import { Injectable } from '@angular/core';
import { Worker } from './workers-list/Worker';
import { CrudService } from './crud.service';
import { Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WorkerService extends CrudService {

  constructor(http: Http) {
      super(http);
   }

   init(){
     this.dataURL = '/workers';
     super.init();
   }
}
