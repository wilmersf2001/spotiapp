import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AlbumsResponse } from '../interfaces/albums';

@Injectable({
  providedIn: 'root',
})
export class AlbumsService {
  constructor(private http: HttpClient) {}

  getAlbums() {
    return this.http.get<AlbumsResponse>(
      'https://api.spotify.com/v1/browse/new-releases'
    );
  }
}
