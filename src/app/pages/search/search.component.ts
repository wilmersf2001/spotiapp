import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';

import { ItemSearchAlbum } from '../../interfaces/search-album';
import { ItemSearchArtist } from '../../interfaces/search-artist';
import { ItemSearchPlaylist } from '../../interfaces/search-playlist';
import { AlbumsService } from '../../services/albums.service';
import { SearchService } from '../../services/search.service';
import { CardSearchComponent } from '../../components/cards/card-search/card-search.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CardSearchComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  dataSearch: (ItemSearchAlbum | ItemSearchArtist | ItemSearchPlaylist)[] = [];
  type = 'album';
  searchControl = new FormControl('', [Validators.required]);
  loading = false;

  constructor(
    private searchService: SearchService,
    private albumsService: AlbumsService
  ) {
    this.searchControl.valueChanges
      .pipe(debounceTime(500))
      .subscribe((value) => {
        if (value) {
          this.getSearch(value);
        }
      });

    this.albumsService.getAlbums().subscribe({
      next: (data: any) => {
        this.dataSearch = data.albums.items;
      },
    });
  }

  modifyType(type: string) {
    this.type = type;
  }

  getSearch(q: string) {
    this.searchService.getDataSearch(q, this.type).subscribe({
      next: (data: any) => {
        this.dataSearch = data[this.type + 's'].items;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
