import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  private url = environment.apiUrl;
  constructor(private http: HttpClient) {}

  public listLocation(id: string): Observable<any> {
    let location = { id_location: parseInt(id) };
    return this.http.post<any>(`${this.url}/getlocation`, location);
  }
  public update(body: any): Observable<any> {
    return this.http.post<any>(`${this.url}/updatelocation`, body);
  }
  public delete(id: number): Observable<any> {
    let location = { id_location: id };

    return this.http.post<any>(`${this.url}/deletelocation`, location);
  }

  public create(body: any): Observable<any> {
    return this.http.put<any>(`${this.url}/createlocation`, body);
  }
}
