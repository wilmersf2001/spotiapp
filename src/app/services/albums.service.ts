import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AlbumsResponse, ItemAlbum } from '../interfaces/albums';

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

  getAlbum(id: string) {
    return this.http.get<ItemAlbum>(`https://api.spotify.com/v1/albums/${id}`);
  }
}
