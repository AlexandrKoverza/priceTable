import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PriceService {
  constructor(private http: HttpClient) {}

  url: string =
    'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';

  // get array from api
  getPrice(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
