import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { SearchComponent } from './pages/search/search.component';
import { PlaylistComponent } from './pages/playlist/playlist.component';
import { AlbumComponent } from './pages/album/album.component';
import { ArtistComponent } from './pages/artist/artist.component';
import { NewsComponent } from './pages/news/news.component';
import { PreferencesComponent } from './pages/preferences/preferences.component';
import { UserComponent } from './pages/user/user.component';

export const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'search', component: SearchComponent },
  { path: 'playlist/:id', component: PlaylistComponent },
  { path: 'album/:id', component: AlbumComponent },
  { path: 'artist/:id', component: ArtistComponent },
  { path: 'news', component: NewsComponent },
  { path: 'preferences', component: PreferencesComponent },
  { path: 'user', component: UserComponent },
  { path: '', pathMatch: 'full', redirectTo: '/inicio' },
  { path: '**', pathMatch: 'full', redirectTo: '/inicio' },
];
