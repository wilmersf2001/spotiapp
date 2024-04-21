import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { PlayListResponse, Item } from '../../interfaces/play-list';
import { fadeInAnimation } from '../../animated/fadeIn';
import { PlaylistService } from '../../services/playlist.service';
import { AuthService } from '../../services/auth.service';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, CardComponent],
  animations: [fadeInAnimation],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss',
})
export class InicioComponent {
  playList: Item[] = [];
  arrayNumbers = Array(20)
    .fill(0)
    .map((x, i) => i);

  constructor(
    private playlistService: PlaylistService,
    private authService: AuthService,
    private router: Router
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
      }
    });
  }

  playMusic(string: string) {
    this.router.navigate(['/playlist', string]);
  }
}
