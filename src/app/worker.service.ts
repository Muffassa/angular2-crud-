import { Injectable } from '@angular/core';
import { CrudService } from './crud.service';
import { Http} from '@angular/http';

@Injectable()
export class WorkerService extends CrudService {

  constructor(http: Http) {
      super(http);
      this.init();
   }

   init(){
     this.dataURL = '/workers';
     super.init();
   }
}
