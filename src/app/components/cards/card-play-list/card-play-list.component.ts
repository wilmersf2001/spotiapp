import { Component, Input } from '@angular/core';
import { ItemPlaylist } from '../../../interfaces/play-list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-play-list',
  standalone: true,
  imports: [],
  templateUrl: './card-play-list.component.html',
  styleUrl: './card-play-list.component.scss',
})
export class CardPlayListComponent {
  @Input() playlist!: ItemPlaylist;
  constructor(private router: Router) {}

  playMusic(id: string) {
    this.router.navigate(['/playlist', id]);
  }
}
