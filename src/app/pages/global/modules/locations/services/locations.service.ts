import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LocationsService {
  private url = environment.apiUrl;
  constructor(private http: HttpClient) {}

  public listAllLocations(): Observable<any> {
    return this.http.get<any>(`${this.url}/getlocations`);
  }
}
