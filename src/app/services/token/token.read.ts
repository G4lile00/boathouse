import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import jwtDecode from 'jwt-decode';
@Injectable({
  providedIn: 'root',
})
export class TokenRead {
  constructor(private http: HttpClient) {}
  getDecodedAccessToken(token: string): any {
    try {
      return jwtDecode(token);
    } catch (Error) {
      return null;
    }
  }
}
