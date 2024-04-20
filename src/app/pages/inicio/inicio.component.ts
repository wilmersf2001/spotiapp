import { Component } from '@angular/core';

import { AlbumsService } from '../../services/albums.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss',
})
export class InicioComponent {
  constructor(private albumsService: AlbumsService) {
    this.albumsService.getAlbums().subscribe((data) => {
      console.log(data);
    });
  }
}
