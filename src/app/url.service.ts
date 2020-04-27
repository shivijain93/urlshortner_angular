import { Injectable } from '@angular/core';
import{ HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
  
})
export class UrlService {

  constructor(private http:HttpClient) { }

  
  postURL(data): Observable<any> {
    return this.http.post('https://nodejs-urlshort.herokuapp.com/create', data)
  }
  getURLs(): Observable<any> {
    return this.http.get('https://nodejs-urlshort.herokuapp.com/view')
  }
}