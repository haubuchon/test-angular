import { Injectable } from '@angular/core';
import { Observable, interval} from 'rxjs';
import { map} from 'rxjs/operators'
import { Orders } from './baqdata';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaqService {

  constructor(private http: HttpClient) { }

  public getBaqData(): Observable<Orders> {
    var url = 'http://crti-admin.dsiconseil.com:8080/RestSqlSqlServer/res/sources.Orders?_output=application/json'
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'text/plain',
        'Authorization': 'Basic bWFuYWdlcjptYW5hZ2Vy'
      })
    };
    
    return this.http.get<Orders>(url, httpOptions).pipe(map(data => data));
  }
}
