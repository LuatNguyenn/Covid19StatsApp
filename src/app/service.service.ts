import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class Service {
  urls: string = 'https://covid-193.p.rapidapi.com/statistics?country=';
  key: string = '118f47fd3amsh0eefa9c432d5b98p1e4230jsn0eb0e622855d';
  host: string = 'covid-193.p.rapidapi.com';
  result: Object;

  keyLocation = '118f47fd3amsh0eefa9c432d5b98p1e4230jsn0eb0e622855d';
  urlLocation = "https://ip-geo-location.p.rapidapi.com/ip/check?format=json";

  location: Object;

  constructor(private http: HttpClient) { }


  getCorona(country: string): Observable<Object> {
    console.log("🚀 ~ file: service.service.ts ~ line 26 ~ Service ~ getCorona ~ country", country)
    return this.http.get(this.urls + country, {
      "headers": {
        "x-rapidapi-host": this.host,
        "x-rapidapi-key": this.key
      }
    }).pipe(map(ressult => this.result = ressult));
  }

  getLocation() {
    return this.http.get(this.urlLocation, {
      "headers": {
        "x-rapidapi-host": 'ip-geo-location.p.rapidapi.com',
        "x-rapidapi-key": this.keyLocation
      }
    }).pipe(map(location => {
      return this.location = location;
    }))
  }
}



