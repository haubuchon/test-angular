import { Injectable } from '@angular/core';
import { Observable, interval} from 'rxjs';
import { map} from 'rxjs/operators'
import { OperData } from './oper-data';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OperService {

  constructor(private http: HttpClient) { }

  public getOperData(): Observable<OperData> {
    var url = 'http://crti-admin:8080/RestSqlSqlServer/res/sources.operations?_output=application/json'
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic YWxsOmFsbA=='
      })
    };
    
    return this.http.get<OperData>(url, httpOptions).pipe(map(data => data));
  }
}
