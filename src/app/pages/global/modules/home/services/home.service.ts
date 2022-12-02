import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  private url = environment.apiUrl;

  public login(): Observable<any> {
    return this.http.get<any>(`${this.url}/allusers`);
  }
}
