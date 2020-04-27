import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class Service {
  urls: string = 'https://covid-193.p.rapidapi.com/statistics?country=';
  key: string = 'e6381b6c46msh7328f7eee0c8bbcp166579jsn086e8cdae269';
  host: string = 'covid-193.p.rapidapi.com';
  result: Object;

  keyLocation = 'bcef465c436e4bf591215b84e8c11aa0';
  urlLocation = 'https://api.ipgeolocation.io/ipgeo?apiKey=';

  location: Object;

  constructor(private http: HttpClient) { }

  getCorona(country: string): Observable<Object> {
    console.log(country);
    return this.http.get(this.urls + country, {
      "headers": {
        "x-rapidapi-host": this.host,
        "x-rapidapi-key": this.key
      }
    }).pipe(map(ressult => this.result = ressult));
  }

  getLocation() {
    return this.http.get(this.urlLocation + this.keyLocation).pipe(map(location => this.location = location));
  }
}



