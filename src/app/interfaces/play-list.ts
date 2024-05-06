export interface PlayListResponse {
  message: string;
  playlists: Playlists;
}

export interface Playlists {
  href: string;
  items: ItemPlaylist[];
  limit: number;
  next: string;
  offset: number;
  previous: null;
  total: number;
}

export interface ItemPlaylist {
  collaborative: boolean;
  description: string;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  owner: Owner;
  primary_color: PrimaryColor | null;
  public: boolean;
  snapshot_id: string;
  tracks: Tracks;
  type: ItemType;
  uri: string;
}

export interface Image {
  height: null;
  url: string;
  width: null;
}

export interface Owner {
  display_name: DisplayName;
  external_urls: ExternalUrls;
  href: string;
  id: ID;
  type: OwnerType;
  uri: URI;
}

export enum DisplayName {
  FiltrPeru = 'Filtr Peru',
  Spotify = 'Spotify',
}

export enum ID {
  Sonymusicperu = 'sonymusicperu',
  Spotify = 'spotify',
}

export enum OwnerType {
  User = 'user',
}

export enum URI {
  SpotifyUserSonymusicperu = 'spotify:user:sonymusicperu',
  SpotifyUserSpotify = 'spotify:user:spotify',
}

export enum PrimaryColor {
  Ffffff = '#FFFFFF',
  PrimaryColorFfffff = '#ffffff',
  The000000 = '#000000',
  The5Ff550 = '#5FF550',
}

export enum ItemType {
  Playlist = 'playlist',
}

export interface Tracks {
  href: string;
  items: ItemTrack[];
  total: number;
}
export interface ItemTrack {
  added_at: Date;
  added_by: AddedBy;
  is_local: boolean;
  primary_color: null;
  track: Track;
  video_thumbnail: VideoThumbnail;
}

export interface AddedBy {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  type: string;
  uri: string;
  name?: string;
}

export interface Track {
  preview_url: null;
  available_markets: string[];
  explicit: boolean;
  type: string;
  episode: boolean;
  track: boolean;
  album: Album;
  artists: AddedBy[];
  disc_number: number;
  track_number: number;
  duration_ms: number;
  external_ids: ExternalIDS;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  popularity: number;
  uri: string;
  is_local: boolean;
}

export interface Album {
  available_markets: string[];
  type: string;
  album_type: string;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: Date;
  release_date_precision: string;
  uri: string;
  artists: AddedBy[];
  external_urls: ExternalUrls;
  total_tracks: number;
}

export interface ExternalIDS {
  isrc: string;
}

export interface VideoThumbnail {
  url: null;
}

export interface ExternalUrls {
  spotify: string;
}
