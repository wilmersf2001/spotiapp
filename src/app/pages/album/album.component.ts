import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ItemAlbum, ItemTracks } from '../../interfaces/albums';
import { CapitalizarPipe } from '../../pipes/capitalizar.pipe';
import { SrcTrackPipe } from '../../pipes/src-track.pipe';
import { MinutosPipe } from '../../pipes/minutos.pipe';
import { AlbumsService } from '../../services/albums.service';

@Component({
  selector: 'app-album',
  standalone: true,
  imports: [CapitalizarPipe, SrcTrackPipe, MinutosPipe],
  templateUrl: './album.component.html',
  styleUrl: './album.component.scss',
})
export class AlbumComponent {
  album!: ItemAlbum;
  cantidad = 0;
  tracks: ItemTracks[] = [];

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumsService
  ) {
    this.route.params.subscribe((params) => {
      this.albumService.getAlbum(params['id']).subscribe({
        next: (album) => {
          this.album = album;
          this.cantidad = album.total_tracks;
          this.tracks = album.tracks.items;
          console.log(this.tracks);
        },
        error: (error) => {
          console.warn('Error:', error);
        },
      });
    });
  }
}
