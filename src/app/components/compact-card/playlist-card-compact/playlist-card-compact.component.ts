import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-playlist-card-compact',
  standalone: true,
  imports: [],
  templateUrl: './playlist-card-compact.component.html',
  styleUrl: './playlist-card-compact.component.scss',
})
export class PlaylistCardCompactComponent {
  @Input() src: string = '';
  @Input() title: string = '';
  @Input() description: string = '';

  constructor() {}
}
