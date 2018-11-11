import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Example } from '../models/example';

@Injectable()
  export class ExampleService{
    public url: string;

    constructor(public _http: HttpClient){
      this.url = 'api url' + '/api/';
    }

    getExample(): Observable<any>{
      let headers = new HttpHeaders().set('Content-Type','application/json')
      return this._http.get(this.url + 'example', {headers: headers});
    }

    saveExample(example: Example): Observable<any>{
      let params = JSON.stringify(example);
      let headers = new HttpHeaders().set('Content-Type','application/json');
      return this._http.post(this.url + 'example', params, {headers:headers});
    }
}
