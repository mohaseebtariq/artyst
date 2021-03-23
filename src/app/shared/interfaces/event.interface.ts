import { Venue } from './venue.interface';
export interface ArtistEvents {
    artist_id: string;
    venue: Venue;
    datetime: string;
  }