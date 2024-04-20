import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayListResponse, Item } from '../../interfaces/play-list';
import { fadeInAnimation } from '../../animated/fadeIn';
import { PlaylistService } from '../../services/playlist.service';
import { AuthService } from '../../services/auth.service';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, NavbarComponent, CardComponent],
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
    private authService: AuthService
  ) {
    this.authService.getTokenExpirationSubject().subscribe((status) => {
      if (status) {
        this.playlistService
          .getPlaylists()
          .subscribe((data: PlayListResponse) => {
            this.playList = data.playlists.items;
            console.log(this.playList);
          });
      }
    });
  }
}
