import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class Service {
  urls:string = 'https://covid-193.p.rapidapi.com/statistics?country=';
  key: string = 'e6381b6c46msh7328f7eee0c8bbcp166579jsn086e8cdae269';
  host: string = 'covid-193.p.rapidapi.com';
  result: Object;


  constructor(private http: HttpClient) { }

  getCorona(country:string):Observable<Object>{
    console.log(country);
    return this.http.get(this.urls + country,{
      "headers": {
        "x-rapidapi-host": this.host,
        "x-rapidapi-key": this.key
      }
    }).pipe(tap(ressult => this.result = ressult));
  }
}



