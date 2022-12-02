import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url = environment.apiUrl;
  constructor(private http: HttpClient) {}

  public update(body: any): Observable<any> {
    return this.http.post<any>(`${this.url}/updateuser`, body);
  }
  public delete(): Observable<any> {
    return this.http.delete<any>(`${this.url}/deleteuser`);
    localStorage.clear();
  }

  public create(body: any): Observable<any> {
    return this.http.put<any>(`${this.url}/createuser`, body);
  }
}
