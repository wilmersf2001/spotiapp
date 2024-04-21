import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-playlist',
  standalone: true,
  imports: [],
  templateUrl: './playlist.component.html',
  styleUrl: './playlist.component.scss',
})
export class PlaylistComponent {
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      console.log(params['id']);
    });
  }
}
