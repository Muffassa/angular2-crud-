import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class CrudService {
  private baseURL: string = 'http://localhost:4200/api';
  dataURL:string;
  private URL: string;

  constructor(private http: Http) {
   }

   init() {
    this.URL = this.baseURL + this.dataURL;
   }


  getData(){
    return this.http.get(this.URL)
      .map(res => res.json());
  }

  save(data) {
    let header = new Headers();
    header.append('Content-Type', 'application/json');
    return this.http.post(this.URL,
        JSON.stringify(data), {headers: header});
  }

  delete(id) {
    return this.http.delete(this.URL + '/' + id)
      .map(response => response.json);
  }

  update(data) {
    let header = new  Headers();
    header.append('Content-Type', 'application/json')
    return this.http.patch(this.URL + '/' + data.id ,
        JSON.stringify(data), {headers: header});
  }
}
