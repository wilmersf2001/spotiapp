import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ItemPlaylist, ItemTrack } from '../../interfaces/play-list';
import { CapitalizarPipe } from '../../pipes/capitalizar.pipe';
import { SrcTrackPipe } from '../../pipes/src-track.pipe';
import { MinutosPipe } from '../../pipes/minutos.pipe';
import { PlaylistService } from '../../services/playlist.service';

@Component({
  selector: 'app-playlist',
  standalone: true,
  imports: [MinutosPipe, CapitalizarPipe, SrcTrackPipe],
  templateUrl: './playlist.component.html',
  styleUrl: './playlist.component.scss',
})
export class PlaylistComponent {
  playlist!: ItemPlaylist;
  cantidad = 0;
  tracks: ItemTrack[] = [];

  constructor(
    private route: ActivatedRoute,
    private playlistService: PlaylistService
  ) {
    this.route.params.subscribe((params) => {
      this.playlistService.getPlaylist(params['id']).subscribe({
        next: (playlist) => {
          this.playlist = playlist;
          this.cantidad = playlist.tracks.total;
          this.tracks = playlist.tracks.items;
        },
        error: (error) => {
          console.warn('Error:', error);
        },
      });
    });
  }
}
