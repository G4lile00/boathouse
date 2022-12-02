import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginModel } from '../models/login.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private url = environment.apiUrl;
  constructor(private http: HttpClient) {}

  public login(body: any): Observable<LoginModel> {
    return this.http.post<LoginModel>(`${this.url}/login`, body);
  }
}
