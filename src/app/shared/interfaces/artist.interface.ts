import { ArtistEvents } from "./event.interface";

export interface Artist {
    id: string;
    name: string;
    image_url: string;
    facebook_page_url: string;
    events: Array<ArtistEvents>;
  }