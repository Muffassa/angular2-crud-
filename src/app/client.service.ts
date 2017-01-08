import { Injectable } from '@angular/core';
import { CrudService } from './crud.service'
import { Http} from '@angular/http';

@Injectable()
export class ClientService extends CrudService{

  constructor(http: Http) {
      super(http);
   }

   init(){
     this.dataURL = '/clients';
     super.init();
   }

}
