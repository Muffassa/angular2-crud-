import { Injectable } from '@angular/core';
import { Worker } from './workers-list/Worker';
import { Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WorkerService {

  workers: Worker[];

  constructor(private http: Http) { }

  getWorkers(){
    return this.http.get('http://localhost:4200/api/workers')
      .map(res => res.json());
  }

  saveWorker(worker) {
    let header = new Headers();
    header.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:4200/api/workers',
        JSON.stringify(worker), {headers: header});
  }

  deleteWorker(id) {
    return this.http.delete('http://localhost:4200/api/workers/'+id)
      .map(response => response.json);
  }

  updateWorker(worker: Worker) {
    let header = new  Headers();
    header.append('Content-Type', 'application/json')
    return this.http.patch('http://localhost:4200/api/workers/' + worker.id ,
        JSON.stringify(worker), {headers: header});
  }



}
