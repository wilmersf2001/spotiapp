import { Component, Input } from '@angular/core';
import { ItemAlbum } from '../../../interfaces/albums';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-album',
  standalone: true,
  imports: [],
  templateUrl: './card-album.component.html',
  styleUrl: './card-album.component.scss',
})
export class CardAlbumComponent {
  @Input() album!: ItemAlbum;
  constructor(private router: Router) {
    console.log(this.album);
  }

  playMusic(string: string) {
    this.router.navigate(['/playlist', string]);
  }
}
