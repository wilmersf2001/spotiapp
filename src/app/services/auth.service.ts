import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from './config';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = 'https://accounts.spotify.com/api/token';
  private tokenExpirationSubject = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  getTokenExpirationSubject(): Observable<boolean> {
    return this.tokenExpirationSubject.asObservable();
  }

  setTokenExpirationSubject(expired: boolean): void {
    this.tokenExpirationSubject.next(expired);
  }

  initializeToken(): void {
    if (!this.isTokenValid()) {
      this.getToken();
    } else {
      this.setTokenExpirationSubject(true);
    }
  }

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

    this.http.post(this.url, body.toString(), { headers: headers }).subscribe({
      next: (data: any) => {
        this.setToken(data.access_token);
        this.scheduleTokenRenewal();
        this.setTokenExpirationSubject(true);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  scheduleTokenRenewal(): void {
    const expiresIn = 3600;
    const tokenRenewalTime = expiresIn * 1000 - 300000; // Renew token 5 minutes before expiration
    setTimeout(() => {
      localStorage.removeItem('token');
    }, tokenRenewalTime);
  }

  isTokenValid(): boolean {
    const token = localStorage.getItem('token');
    return token ? true : false;
  }
}
