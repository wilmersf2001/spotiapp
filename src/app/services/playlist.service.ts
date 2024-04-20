import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlayListResponse } from '../interfaces/play-list';

@Injectable({
  providedIn: 'root',
})
export class PlaylistService {
  constructor(private http: HttpClient) {}

  getPlaylists() {
    return this.http.get<PlayListResponse>(
      'https://api.spotify.com/v1/browse/featured-playlists'
    );
  }
}
