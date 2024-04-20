import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from './config';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = 'https://accounts.spotify.com/api/token';

  constructor(private http: HttpClient) {}

  getToken() {
    const body = new HttpParams()
      .set('grant_type', 'client_credentials')
      .set('client_id', environment.client_id)
      .set('client_secret', environment.client_secret);

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization:
        'Basic ' +
        btoa(environment.client_id + ':' + environment.client_secret),
    });

    if (!localStorage.getItem('token')) {
      this.http
        .post(this.url, body.toString(), { headers: headers })
        .subscribe({
          next: (data: any) => {
            this.setToken(data.access_token);
          },
          error: (error) => {
            console.log(error);
          },
        });
    }
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }
}
