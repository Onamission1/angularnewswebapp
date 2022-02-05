import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsapiservicesService {
  constructor(private _http: HttpClient) {}

  //NewsapiURL
  newsApiUrl =
    'https://newsapi.org/v2/top-headlines?country=us&apiKey=fb0a0e9993b04109b2f43ece08905a6d';

  //TopNewsHeading()
  topHeading(): Observable<any> {
    return this._http.get(this.newsApiUrl);
  }

  //Technology Api
  techApiUrl =
    'https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=fb0a0e9993b04109b2f43ece08905a6d';

  //Technology()
  techNews(): Observable<any> {
    return this._http.get(this.techApiUrl);
  }

  //Business
  businessApiUrl =
    'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=fb0a0e9993b04109b2f43ece08905a6d';

  //Technology()
  businessNews(): Observable<any> {
    return this._http.get(this.businessApiUrl);
  }
}
