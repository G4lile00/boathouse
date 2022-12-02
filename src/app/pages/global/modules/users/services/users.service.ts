import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private url = environment.apiUrl;
  constructor(private http: HttpClient) {}

  public listUsers(): Observable<any> {
    return this.http.get<any>(`${this.url}/getusers`);
  }
}
