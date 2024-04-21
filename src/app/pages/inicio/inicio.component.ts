import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayListResponse, ItemPlaylist } from '../../interfaces/play-list';
import { AlbumsResponse, ItemAlbum } from '../../interfaces/albums';
import { fadeInAnimation } from '../../animated/fadeIn';
import { PlaylistService } from '../../services/playlist.service';
import { AlbumsService } from '../../services/albums.service';
import { AuthService } from '../../services/auth.service';
import { CardPlayListComponent } from '../../components/cards/card-play-list/card-play-list.component';
import { CardAlbumComponent } from '../../components/cards/card-album/card-album.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, CardPlayListComponent, CardAlbumComponent],
  animations: [fadeInAnimation],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss',
})
export class InicioComponent {
  playList: ItemPlaylist[] = [];
  albums: ItemAlbum[] = [];
  arrayNumbers = Array(20)
    .fill(0)
    .map((x, i) => i);

  constructor(
    private playlistService: PlaylistService,
    private albumsService: AlbumsService,
    private authService: AuthService
  ) {
    this.authService.getTokenExpirationSubject().subscribe((status) => {
      if (status) {
        this.playlistService.getPlaylists().subscribe({
          next: (data: PlayListResponse) => {
            this.playList = data.playlists.items;
          },
          error: () => {
            localStorage.removeItem('token');
            this.authService.initializeToken();
          },
        });

        this.albumsService.getAlbums().subscribe({
          next: (data: AlbumsResponse) => {
            this.albums = data.albums.items;
          },
          error: () => {
            localStorage.removeItem('token');
            this.authService.initializeToken();
          },
        });
      }
    });
  }
}
