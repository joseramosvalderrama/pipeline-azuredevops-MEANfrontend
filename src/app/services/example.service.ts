import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Example } from '../models/example';

@Injectable()
  export class ExampleService{
    public url: string;

    constructor(public _http: HttpClient){
      this.url = 'https://demoaplnode.azurewebsites.net' + '/api/';
    }

    getExample(): Observable<any>{
      let headers = new HttpHeaders().set('Content-Type','application/json')
      return this._http.get(this.url + 'persona', {headers: headers});
    }

    saveExample(example: Example): Observable<any>{
      let params = JSON.stringify(example);
      let headers = new HttpHeaders().set('Content-Type','application/json');
      return this._http.post(this.url + 'persona', params, {headers:headers});
    }
}
