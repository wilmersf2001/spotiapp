import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-artist-card-compact',
  standalone: true,
  imports: [],
  templateUrl: './artist-card-compact.component.html',
  styleUrl: './artist-card-compact.component.scss',
})
export class ArtistCardCompactComponent {
  @Input() src: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
}
