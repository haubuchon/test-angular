import { Injectable } from '@angular/core';
import { Observable, interval} from 'rxjs';
import { map} from 'rxjs/operators'
import { SensorData } from './sensor-data';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class Sensor1Service {

  constructor(private http: HttpClient) { }

  public getSensorData(): Observable<SensorData> {
    var url = 'http://crti-admin:8080/RestSqlSqlServer/res/sources.sensor1?_output=application/json'
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic YWxsOmFsbA=='
      })
    };
    
    return this.http.get<SensorData>(url, httpOptions).pipe(map(data => data));
  }

}