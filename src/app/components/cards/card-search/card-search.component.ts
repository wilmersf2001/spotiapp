import { Component, Input } from '@angular/core';
import { ItemSearchAlbum } from '../../../interfaces/search-album';
import { ItemSearchArtist } from '../../../interfaces/search-artist';
import { ItemSearchPlaylist } from '../../../interfaces/search-playlist';

@Component({
  selector: 'app-card-search',
  standalone: true,
  imports: [],
  templateUrl: './card-search.component.html',
  styleUrl: './card-search.component.scss',
})
export class CardSearchComponent {
  @Input() data!: ItemSearchAlbum | ItemSearchArtist | ItemSearchPlaylist;

  playMusic(string: string) {
    console.log('Playing music: ', string);
  }
}
