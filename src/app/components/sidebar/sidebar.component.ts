import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { ArtistCardCompactComponent } from '../compact-card/artist-card-compact/artist-card-compact.component';
import { PlaylistCardCompactComponent } from '../compact-card/playlist-card-compact/playlist-card-compact.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    ArtistCardCompactComponent,
    PlaylistCardCompactComponent,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {}
