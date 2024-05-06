import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}

  getDataSearch(q: string, type: string) {
    return this.http.get(
      `https://api.spotify.com/v1/search?q=${q}&type=${type}`
    );
  }
}
